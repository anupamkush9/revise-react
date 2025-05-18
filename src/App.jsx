import { useState } from "react";

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [meaning, setMeaning] = useState(null);
  const [error, setError] = useState("");

  const fetchWordMeaning = async () => {
    setError("");
    setMeaning(null);
    try {
      const resp = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`);
      if (!resp.ok) {
        throw new Error("Word not found");
      }
      const jsonResp = await resp.json();
      setMeaning(jsonResp[0]);
      console.log("resp..........",jsonResp)
    } catch (err) {
      setError("No definition found. Try another word.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 text-center">
          <h2 className="text-primary mb-4">📘 Dictionary Search</h2>
          <input
            type="text"
            className="form-control form-control-lg mb-3"
            placeholder="Type a word here..."
            value={searchWord}
            onChange={(e) => setSearchWord(e.target.value)}
          />
          <button className="btn btn-primary mb-4" onClick={fetchWordMeaning}>
            Search
          </button>

          {/* Display Result */}
          {error && <div className="alert alert-danger">{error}</div>}

          {meaning && (
            <div className="text-start border p-4 rounded shadow-sm bg-light">
              <h4>{meaning.word}</h4>
              <p><strong>Definition:</strong> {meaning.meanings[0].definitions[0].definition}</p>
              <p><strong>synonyms:</strong> {meaning.meanings[0].synonyms[0]}</p>
              {meaning.meanings[0].definitions[0].example && (
                <p><strong>Example:</strong> {meaning.meanings[0].definitions[0].example}</p>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
