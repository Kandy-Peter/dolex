export default function formatNumber(
  number: number | string,
  maxFractionDigits: number = 3,
  minFractionDigits: number = 0,
): string {
  const parsedNumber =
    typeof number === "string" ? Number.parseFloat(number) : number;

  if (isNaN(parsedNumber)) {
    throw new Error("Invalid input: Not a number.");
  }

  const formattedNumber = parsedNumber.toLocaleString(undefined, {
    maximumFractionDigits: maxFractionDigits,
    minimumFractionDigits: minFractionDigits,
  });

  return formattedNumber;
}
