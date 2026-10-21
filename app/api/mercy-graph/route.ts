import { getChatGPTUser } from "@/app/chatgpt-auth";

const loopbackBase = "http://127.0.0.1:5174";

export async function GET(request: Request) {
  const user = await getChatGPTUser();
  if (!user) return Response.json({ error: "Sign in is required to open the private MERCY graph." }, { status: 401 });
  try {
    const incoming = new URL(request.url);
    const endpoint = incoming.searchParams.has("entity_id") ? "/entity" : "/search";
    const target = new URL(`${loopbackBase}${endpoint}`);
    incoming.searchParams.forEach((value, key) => target.searchParams.set(key, value));
    const response = await fetch(target, { cache: "no-store" });
    const payload = await response.json() as Record<string, unknown>;
    return Response.json(payload, { status: response.status, headers: { "cache-control": "no-store" } });
  } catch (error) {
    const message = error instanceof Error ? error.message : "The private MERCY graph loopback is unavailable.";
    return Response.json({ error: `The private MERCY graph loopback is unavailable. Start the read-only graph service first. (${message})`, writes: { canonical_authority: 0, inventory_authority: 0, archive_media: 0, archive_filesystem: 0, public_network: 0 } }, { status: 503 });
  }
}
