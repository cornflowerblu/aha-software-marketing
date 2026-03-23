import { headers } from 'next/headers'
import { getPayloadClient } from '@/lib/payload'

export async function getCurrentUser() {
  const payload = await getPayloadClient()
  const headersList = await headers()
  const { user } = await payload.auth({ headers: headersList })
  return user
}

export async function requireAuth() {
  const user = await getCurrentUser()
  if (!user) {
    throw new Error('Authentication required')
  }
  return user
}

export async function requirePremium() {
  const user = await requireAuth()
  if (user.subscriptionStatus !== 'active' && user.role !== 'admin') {
    throw new Error('Premium subscription required')
  }
  return user
}

export function isPremiumUser(user: {
  subscriptionStatus?: string | null
  role?: string | null
}): boolean {
  return user.subscriptionStatus === 'active' || user.role === 'admin'
}
