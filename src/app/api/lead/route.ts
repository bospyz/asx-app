import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json().catch(() => ({}));

    const lead = await prisma.lead.create({
      data: {
        name: typeof body.name === "string" ? body.name : null,
        email: typeof body.email === "string" ? body.email : null,
        company: typeof body.company === "string" ? body.company : null,
        message: typeof body.message === "string" ? body.message : null,
        source: typeof body.source === "string" ? body.source : "landing",
      },
    });

    return NextResponse.json({ ok: true, leadId: lead.id });
  } catch (e: any) {
    console.error("LEAD_ERROR", e);
    return NextResponse.json(
      { ok: false, error: "LEAD_CREATE_FAILED" },
      { status: 500 }
    );
  }
}
