import { NextRequest, NextResponse } from 'next/server'
import fs from 'fs'
import path from 'path'

// In-memory store (resets on cold start) — swap with DB in production
const leads: object[] = []

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()

    // Validate required fields
    const { name, email, company } = body
    if (!name || !email || !company) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 })
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ error: 'Invalid email address' }, { status: 400 })
    }

    const lead = {
      id: `lead_${Date.now()}`,
      ...body,
      receivedAt: new Date().toISOString(),
    }

    // Store in memory
    leads.push(lead)

    // Optionally persist to a JSON file (works on Vercel with /tmp)
    try {
      const filePath = path.join('/tmp', 'leads.json')
      const existing = fs.existsSync(filePath)
        ? JSON.parse(fs.readFileSync(filePath, 'utf-8'))
        : []
      existing.push(lead)
      fs.writeFileSync(filePath, JSON.stringify(existing, null, 2))
    } catch {
      // Fail silently — file persistence is optional
    }

    console.log('[Lead captured]', { name, email, company })

    return NextResponse.json({ success: true, id: lead.id }, { status: 201 })
  } catch (err) {
    console.error('[Lead API error]', err)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

// GET — retrieve all leads (protect with auth in production)
export async function GET() {
  return NextResponse.json({ total: leads.length, leads })
}
