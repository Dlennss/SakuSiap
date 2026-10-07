import { NextResponse } from "next/server";
import { requireApiBase } from "@/lib/adminApi";

export async function GET() {
  const base = requireApiBase();
  const target = `${base}/v1/app/kategori`;

  const r = await fetch(target, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    cache: "no-store",
  });

  const text = await r.text();
  return new NextResponse(text, {
    status: r.status,
    headers: { "Content-Type": "application/json" },
  });
}
