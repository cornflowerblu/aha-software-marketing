import { Client } from '@hubspot/api-client'
import { FilterOperatorEnum } from '@hubspot/api-client/lib/codegen/crm/contacts/models/Filter'

const hubspotClient = new Client({
  accessToken: process.env.HUBSPOT_API_KEY || '',
})

export async function createOrUpdateContact({
  email,
  firstName,
  lastName,
  source,
  eventName,
}: {
  email: string
  firstName?: string
  lastName?: string
  source?: string
  eventName?: string
}) {
  if (!process.env.HUBSPOT_API_KEY) return null

  const properties: Record<string, string> = { email }
  if (firstName) properties.firstname = firstName
  if (lastName) properties.lastname = lastName
  if (source) properties.hs_lead_status = source

  try {
    const response =
      await hubspotClient.crm.contacts.basicApi.create({
        properties,
        associations: [],
      })
    return response
  } catch (error: unknown) {
    if (
      error &&
      typeof error === 'object' &&
      'code' in error &&
      (error as { code: number }).code === 409
    ) {
      // Contact exists — update instead
      const existing =
        await hubspotClient.crm.contacts.searchApi.doSearch({
          filterGroups: [
            {
              filters: [
                { propertyName: 'email', operator: FilterOperatorEnum.Eq, value: email },
              ],
            },
          ],
          sorts: [],
          properties: ['email'],
          limit: 1,
          after: '0',
        })
      if (existing.results.length > 0) {
        const contactId = existing.results[0].id
        const updateProps = { ...properties }
        if (eventName) {
          updateProps.notes_last_updated = `Registered for: ${eventName}`
        }
        return hubspotClient.crm.contacts.basicApi.update(contactId, {
          properties: updateProps,
        })
      }
    }
    throw error
  }
}
