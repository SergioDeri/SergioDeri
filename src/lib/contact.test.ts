import { describe, expect, it, vi } from "vitest";
import { sendContact } from "./contact";

const form = () => new FormData();
const respond = (status: number, body: unknown) =>
  vi.fn().mockResolvedValue(new Response(JSON.stringify(body), { status }));

describe("sendContact", () => {
  it("reports sent when the service accepts the message", async () => {
    const fetcher = respond(200, { success: true });
    expect(await sendContact(form(), { endpoint: "https://x.test", accessKey: "k", fetcher })).toBe("sent");
    expect(fetcher).toHaveBeenCalledOnce();
  });
  it("reports failed when the service rejects the message", async () => {
    expect(await sendContact(form(), { endpoint: "https://x.test", accessKey: "k", fetcher: respond(400, { success: false }) })).toBe("failed");
  });
  it("reports failed when a 200 response says success false", async () => {
    expect(await sendContact(form(), { endpoint: "https://x.test", accessKey: "k", fetcher: respond(200, { success: false }) })).toBe("failed");
  });
  it("reports failed when the response is not JSON", async () => {
    const fetcher = vi.fn().mockResolvedValue(new Response("<html>", { status: 200 }));
    expect(await sendContact(form(), { endpoint: "https://x.test", accessKey: "k", fetcher })).toBe("failed");
  });
  it("reports failed when the network is down", async () => {
    const fetcher = vi.fn().mockRejectedValue(new TypeError("offline"));
    expect(await sendContact(form(), { endpoint: "https://x.test", accessKey: "k", fetcher })).toBe("failed");
  });
  it("reports unconfigured without calling the network when there is no key", async () => {
    const fetcher = respond(200, { success: true });
    expect(await sendContact(form(), { endpoint: "https://x.test", accessKey: "", fetcher })).toBe("unconfigured");
    expect(fetcher).not.toHaveBeenCalled();
  });
});
