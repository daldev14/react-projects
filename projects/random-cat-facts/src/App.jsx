import "./App.css";

import useCatFact from "./hooks/useCatFact";
import useCatImage from "./hooks/useCatImage";

function App() {
  const { fact, changeFact } = useCatFact();
  const { cat } = useCatImage({ fact });

  const handleClick = async () => {
    changeFact();
  };

  return (
    <main>
      <h1>Random Cat Facts</h1>
      <button onClick={handleClick}>Get Fact</button>
      {fact && <p>{fact}</p>}
      {cat && (
        <img
          src={cat}
          alt={`Image extracted using the first rhee words for ${fact}`}
        />
      )}
    </main>
  );
}

export default App;
