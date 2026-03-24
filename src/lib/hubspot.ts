import { Client } from '@hubspot/api-client'
import { FilterOperatorEnum } from '@hubspot/api-client/lib/codegen/crm/contacts/models/Filter'

const hubspotClient = new Client({
  accessToken: process.env.HUBSPOT_API_KEY || '',
})

export async function createOrUpdateContact({
  email,
  firstName,
  lastName,
  phone,
  company,
  challenge,
  message,
  eventName,
  leadStatus = 'NEW',
}: {
  email: string
  firstName?: string
  lastName?: string
  phone?: string
  company?: string
  challenge?: string
  message?: string
  eventName?: string
  leadStatus?: 'NEW' | 'OPEN' | 'IN_PROGRESS' | 'OPEN_DEAL' | 'UNQUALIFIED' | 'ATTEMPTED_TO_CONTACT' | 'CONNECTED' | 'BAD_TIMING'
}) {
  if (!process.env.HUBSPOT_API_KEY) return null

  const properties: Record<string, string> = { email }
  if (firstName) properties.firstname = firstName
  if (lastName) properties.lastname = lastName
  if (phone) properties.phone = phone
  if (company) properties.company = company
  if (challenge) properties.primary_challenge = challenge
  if (message) properties.message = message
  properties.hs_lead_status = leadStatus

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
        // Don't overwrite lead status on update — a rep may have changed it
        const { hs_lead_status: _, ...updateProps } = properties
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
