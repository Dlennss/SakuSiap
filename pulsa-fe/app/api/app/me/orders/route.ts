import { NextResponse } from "next/server";
import { forwardAuth, requireApiBase } from "@/lib/adminApi";
import { getBackendAuthorization } from "@/lib/server-auth";

export async function GET(req: Request) {
  const base = requireApiBase();
  const auth = forwardAuth(new Headers(req.headers)) || (await getBackendAuthorization(req));
  const url = new URL(req.url);
  const qs = url.searchParams.toString();

  const r = await fetch(`${base}/v1/app/me/orders${qs ? `?${qs}` : ""}`, {
    method: "GET",
    headers: {
      ...(auth ? { Authorization: auth } : {}),
    },
    cache: "no-store",
  });

  const text = await r.text();
  return new NextResponse(text, { status: r.status, headers: { "Content-Type": "application/json" } });
}
