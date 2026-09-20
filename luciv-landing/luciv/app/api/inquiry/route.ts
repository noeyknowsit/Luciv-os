import { NextResponse } from "next/server";

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzRZSTwtnSAP4Rg7svMOAqC4p6KZNUAnrgDKPdmMsyUeV1iARdFNEAbvRUxGwUGqVbr/exec";

export async function POST(request: Request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  const payload = {
    name: typeof body.name === "string" ? body.name.trim() : "",
    business: typeof body.business === "string" ? body.business.trim() : "",
    email: typeof body.email === "string" ? body.email.trim() : "",
    phone: typeof body.phone === "string" ? body.phone.trim() : "",
    message: typeof body.message === "string" ? body.message.trim() : "",
  };
  if (!payload.name || !payload.email) {
    return NextResponse.json({ ok: false, error: "Name and email are required." }, { status: 400 });
  }

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      redirect: "follow",
    });
    const result = await response.json();
    // Apps Script reports application failures in JSON, including on HTTP 200.
    if (!response.ok || result.success !== true) {
      return NextResponse.json({ ok: false, error: "The form service returned an error." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false, error: "Could not complete the form submission." }, { status: 502 });
  }
}
