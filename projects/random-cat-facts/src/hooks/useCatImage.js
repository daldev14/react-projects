import { useEffect, useState } from "react";
import getRandomCatImage from "../services/getRandomCatImage";

export default function useCatImage({ fact }) {
  const [cat, setCat] = useState(null);

  useEffect(() => {
    if (!fact) return;

    const newFact = fact.split(" ", 3).join(" ");

    getRandomCatImage({ fact: newFact }).then(setCat);
  }, [fact]);

  return { cat: `https://cataas.com/${cat}` };
}
