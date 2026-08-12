import { NextResponse } from "next/server";

/**
 * Forwards website quote submissions to the n8n "Website Quote Requests" webhook.
 * The webhook URL is server-side only (not exposed in the browser). It can be
 * overridden with the N8N_QUOTE_WEBHOOK_URL env var without a code change.
 */
const N8N_QUOTE_WEBHOOK =
  process.env.N8N_QUOTE_WEBHOOK_URL ||
  "https://apexpest.app.n8n.cloud/webhook/078f7abf-05cf-48c4-94c4-b356b29e23e4";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const res = await fetch(N8N_QUOTE_WEBHOOK, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });
    if (!res.ok) {
      return NextResponse.json({ ok: false }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
