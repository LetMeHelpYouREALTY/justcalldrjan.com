export type FollowUpBossPerson = {
  firstName: string
  lastName: string
  emails: Array<{ value: string }>
  phones: Array<{ value: string }>
}

export type FollowUpBossEventPayload = {
  source: string
  system: string
  type: string
  message: string
  person: FollowUpBossPerson
}

export function splitFullName(fullName: string): { firstName: string; lastName: string } {
  const trimmed = fullName.trim()
  if (!trimmed) {
    return { firstName: 'Unknown', lastName: '' }
  }
  const parts = trimmed.split(/\s+/)
  if (parts.length === 1) {
    return { firstName: parts[0], lastName: '' }
  }
  return {
    firstName: parts[0],
    lastName: parts.slice(1).join(' '),
  }
}

export function resolveInquiryType(source?: string, inquiryType?: string): string {
  if (inquiryType === 'Seller Inquiry' || inquiryType === 'General Inquiry') {
    return inquiryType
  }
  const normalized = (source ?? '').toLowerCase()
  if (
    normalized.includes('seller') ||
    normalized.includes('consultation') ||
    normalized.includes('valuation') ||
    normalized.includes('expired') ||
    normalized.includes('homepage')
  ) {
    return 'Seller Inquiry'
  }
  return 'General Inquiry'
}

export async function sendFollowUpBossEvent(
  payload: FollowUpBossEventPayload,
): Promise<{ ok: true } | { ok: false; status: number }> {
  const apiKey = process.env.FOLLOW_UP_BOSS_API_KEY
  if (!apiKey) {
    console.error('FOLLOW_UP_BOSS_API_KEY is not configured')
    return { ok: false, status: 500 }
  }

  const credentials = Buffer.from(`${apiKey}:`).toString('base64')

  const response = await fetch('https://api.followupboss.com/v1/events', {
    method: 'POST',
    headers: {
      Authorization: `Basic ${credentials}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })

  if (!response.ok) {
    const errorBody = await response.text().catch(() => '')
    console.error('Follow Up Boss event failed', {
      status: response.status,
      body: errorBody,
    })
    return { ok: false, status: response.status }
  }

  return { ok: true }
}
