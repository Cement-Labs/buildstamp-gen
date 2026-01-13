export function getBuildDateAbbr(date: Date): string {
  const year = date.getFullYear().toString().slice(-2); // last two digits of year
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // months are zero-indexed, so add 1
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}${month}${day}`; // YYMMDD format
}

export function getPatchAbbr(patch: number): string {
  if (patch < 0) return "a"; // handle negative patch numbers
  if (patch > 25) patch = patch % 26; // wrap around for patch numbers > 25
  const charCode = "a".charCodeAt(0) + (patch % 26);
  return String.fromCharCode(charCode); // alphabetic 0-25 to a-z
}
