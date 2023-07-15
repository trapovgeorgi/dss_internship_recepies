export function dateToInput(date: Date) {
  return date.toISOString().split("T")[0];
}
