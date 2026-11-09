export type ContactResult = "sent" | "failed" | "unconfigured";

interface ContactOptions {
  endpoint: string;
  accessKey: string;
  fetcher?: typeof fetch;
}

export async function sendContact(
  data: FormData,
  { endpoint, accessKey, fetcher = fetch }: ContactOptions,
): Promise<ContactResult> {
  if (!accessKey) return "unconfigured";

  data.set("access_key", accessKey);
  try {
    const response = await fetcher(endpoint, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: data,
    });
    const body = (await response.json()) as { success?: boolean };
    return response.ok && body.success === true ? "sent" : "failed";
  } catch {
    return "failed";
  }
}
