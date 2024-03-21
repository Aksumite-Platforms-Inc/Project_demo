export function formatDateTime(dateString) {
  const datetimeInputString = dateString.substring(
    0,
    ((dateString.indexOf("T") | 0) + 6) | 0
  );
  return datetimeInputString;
}
