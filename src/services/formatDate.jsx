export function formatDate(isoString) {
  const date = new Date(isoString);

  return date.toLocaleString('en-GB', {
    year: 'numeric',
    month: 'long',
    day: '2-digit',
  }).replace(',', '');
}
