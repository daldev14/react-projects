import { useEffect, useState } from "react";
import getRandomCatFact from "../services/getRandomCatFact";

export default function useCatFact() {
  const [fact, setFact] = useState(null);

  const changeFact = () => {
    getRandomCatFact().then(setFact);
  };

  useEffect(changeFact, []);

  return { fact, changeFact };
}
