/** Full years elapsed between a start date (YYYY-MM-DD) and now. */
export function yearsSince(startDate: string): number {
  const start = new Date(startDate);
  const now = new Date();

  let years = now.getFullYear() - start.getFullYear();
  const hasHadAnniversaryThisYear =
    now.getMonth() > start.getMonth() ||
    (now.getMonth() === start.getMonth() && now.getDate() >= start.getDate());
  if (!hasHadAnniversaryThisYear) years--;

  return years;
}
