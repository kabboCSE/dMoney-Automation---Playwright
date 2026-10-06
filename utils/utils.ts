export function genearateRandomNumber(min: number, max: number): number {
  const randomNumber = Math.random() * (max - min) + min;
  return Math.floor(randomNumber);
}
