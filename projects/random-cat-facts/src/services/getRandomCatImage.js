const API = "https://cataas.com/cat/says";

export default async function getRandomCatImage({ fact = "random" } = {}) {
  const response = await fetch(
    `${API}/${fact}?width=400&size=10&color=red&json=true`
  );
  const { url } = await response.json();

  return url;
}
