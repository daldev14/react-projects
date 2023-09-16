const API = "https://catfact.ninja/fact";

export default async function getRandomCatFact() {
  const response = await fetch(API);
  const data = await response.json();
  const { fact } = data;

  return fact;
}
