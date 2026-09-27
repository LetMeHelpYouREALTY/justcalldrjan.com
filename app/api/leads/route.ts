import { NextRequest, NextResponse } from 'next/server'
import {
  resolveInquiryType,
  sendFollowUpBossEvent,
  splitFullName,
} from '@/lib/follow-up-boss'

type LeadBody = {
  name?: string
  email?: string
  phone?: string
  address?: string
  message?: string
  source?: string
  inquiryType?: string
  companyWebsite?: string
}

function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as LeadBody

    if (body.companyWebsite?.trim()) {
      return NextResponse.json({ success: true }, { status: 200 })
    }

    const name = body.name?.trim() ?? ''
    const email = body.email?.trim() ?? ''
    const phone = body.phone?.trim() ?? ''

    if (!name || !email || !phone) {
      return NextResponse.json(
        { error: 'Name, email, and phone are required' },
        { status: 400 },
      )
    }

    if (!isValidEmail(email)) {
      return NextResponse.json(
        { error: 'A valid email is required' },
        { status: 400 },
      )
    }

    const { firstName, lastName } = splitFullName(name)
    const address = body.address?.trim()
    const messageText = body.message?.trim()
    const source = body.source?.trim() || 'Website'
    const inquiryType = resolveInquiryType(source, body.inquiryType)

    const messageParts = [
      `Source: ${source}`,
      address ? `Property: ${address}` : null,
      messageText ? messageText : null,
    ].filter(Boolean)

    const fubResult = await sendFollowUpBossEvent({
      source: 'justcalldrjan.com',
      system: 'DrJanDuffyWebsite',
      type: inquiryType,
      message: messageParts.join('\n'),
      person: {
        firstName,
        lastName,
        emails: [{ value: email }],
        phones: [{ value: phone }],
      },
    })

    if (!fubResult.ok) {
      return NextResponse.json(
        { error: 'Unable to submit your request. Please call (702) 222-1964.' },
        { status: 502 },
      )
    }

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you! Dr. Jan will contact you soon.',
      },
      { status: 200 },
    )
  } catch (error) {
    console.error('Lead capture error:', error)
    return NextResponse.json(
      { error: 'Failed to process request. Please try again.' },
      { status: 500 },
    )
  }
}
