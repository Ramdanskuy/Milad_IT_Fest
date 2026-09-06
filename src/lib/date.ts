/**
  Helper to check if a timeline date has expired based on current time (Date.now())
 */
export function isPastDate(targetDateIso: string): boolean {
  if (!targetDateIso) return false;
  const targetTime = new Date(targetDateIso).getTime();
  return Date.now() > targetTime;
}
