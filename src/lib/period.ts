const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export interface Period {
  /** Year and month, as "YYYY-MM". */
  start: string;
  /** Omit while the role is ongoing. */
  end?: string;
}

function formatMonth(value: string): string {
  const match = /^(\d{4})-(\d{2})$/.exec(value);
  const name = match ? MONTHS[Number(match[2]) - 1] : undefined;
  if (!match || !name) throw new Error(`Invalid month "${value}", expected YYYY-MM`);
  return `${name} ${match[1]}`;
}

export function formatPeriod({ start, end }: Period): string {
  return `${formatMonth(start)} → ${end ? formatMonth(end) : "present"}`;
}

export function sortByMostRecent<T extends Pick<Period, "start">>(items: readonly T[]): T[] {
  return [...items].sort((a, b) => b.start.localeCompare(a.start));
}
