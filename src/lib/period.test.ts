import { describe, expect, it } from "vitest";
import { formatPeriod, sortByMostRecent } from "./period";

describe("formatPeriod", () => {
  it("renders an open range as present", () => {
    expect(formatPeriod({ start: "2026-08" })).toBe("Aug 2026 → present");
  });
  it("renders a closed range", () => {
    expect(formatPeriod({ start: "2020-07", end: "2022-06" })).toBe("Jul 2020 → Jun 2022");
  });
  it("rejects a malformed month", () => {
    expect(() => formatPeriod({ start: "2020-13" })).toThrow(/2020-13/);
  });
});

describe("sortByMostRecent", () => {
  it("orders by start date, newest first, without mutating", () => {
    const items = [{ start: "2019-07" }, { start: "2026-08" }, { start: "2022-06" }];
    expect(sortByMostRecent(items).map((i) => i.start)).toEqual(["2026-08", "2022-06", "2019-07"]);
    expect(items[0].start).toBe("2019-07");
  });
});
