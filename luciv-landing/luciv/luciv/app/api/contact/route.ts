import { NextResponse } from "next/server";

/**
 * Google Apps Script web app that receives contact form submissions.
 * This route exists because Apps Script web apps don't reliably send
 * CORS headers, so a browser can't POST to it directly and read the
 * response. Routing through this server-side function avoids that
 * entirely — the browser talks to our own domain, and this function
 * (running on Vercel, not in the browser) talks to Google.
 */
const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzRZSTwtnSAP4Rg7svMOAqC4p6KZNUAnrgDKPdmMsyUeV1iARdFNEAbvRUxGwUGqVbr/exec";

type ContactPayload = {
  name?: string;
  business?: string;
  email?: string;
  phone?: string;
  message?: string;
};

export async function POST(request: Request) {
  let payload: ContactPayload;

  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid request body." },
      { status: 400 }
    );
  }

  const { name, business, email, phone, message } = payload;

  if (!name || !email) {
    return NextResponse.json(
      { ok: false, error: "Name and email are required." },
      { status: 400 }
    );
  }

  try {
    const response = await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        business: business ?? "",
        email,
        phone: phone ?? "",
        message: message ?? "",
      }),
      redirect: "follow",
    });

    if (!response.ok) {
      return NextResponse.json(
        { ok: false, error: "The form service returned an error." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json(
      { ok: false, error: "Could not reach the form service." },
      { status: 502 }
    );
  }
}
