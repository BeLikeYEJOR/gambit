import { useState } from "react";

export let gameHostUUID = 0;

export default function CreateLibbitGame() {
  const [code, setCode] = useState("");
  const [totalwords, setTotalWords] = useState("");
  const [wordstoguess, setWordsToGuess] = useState("");
  const [allowChooseScentance, setChooseScantance] = useState(false);
  const [allScentances, setScentances] = useState([""]);
  const [CodeExists, SetCodeExists] = useState(false);

  const createGame = () => {
    gameHostUUID = crypto.randomUUID();
    console.log(gameHostUUID);

    let stored = JSON.parse(localStorage.getItem("allHostedGames") || "[]");

    console.log(stored);

    const duplicates = stored.filter((game) => game.gameCode === code);
    if (duplicates.length > 0) {
      SetCodeExists(true);
      return;
    } else {
      SetCodeExists(false);
    }

    stored.push({
      hostid: gameHostUUID,
      gameCode: code,
      gameMode: "Libbit",
    });

    localStorage.setItem("allHostedGames", JSON.stringify(stored));

    window.location.href = `http://localhost:3000/host/${gameHostUUID}`;
  };

  const getTotalWords = () => {
    if (totalwords < 1) {
      return 0;
    } else if (totalwords > 10) {
      return 0;
    }
    return totalwords - 1;
  };

  const handleChooseScantanceChange = (e) => {
    setChooseScantance(e.target.checked);
  };

  const handleAddSentence = () => {
    if (allScentances.length < totalwords) {
      setScentances([...allScentances, ""]);
    }
  };

  const handleDeleteSentence = (index) => {
    const newSentences = [...allScentances];
    newSentences.splice(index, 1);
    setScentances(newSentences);
  };

  return (
    <div className="container max-w-sm mx-auto h-screen p-4 bg-gray-800 flex flex-col">
      <div className="card card-body bg-neutral m-4 flex-0">
        <h1 className="mb-4 text-4lg font-extrabold leading-none tracking-tight text-gray-900 lg:text-6xl dark:text-white mr-auto ml-auto">
          Required
        </h1>
        <fieldset className="fieldset">
          <legend className="fieldset-legend">Game Code</legend>
          <input
            type="text"
            className="input validator"
            required
            placeholder="AB34"
            value={code.value}
            onInput={(v) => setCode(v.target.value)}
            minLength={4}
            maxLength={4}
          />
          {CodeExists && <p className={`text-red-600 `}>Code Already exists</p>}
        </fieldset>
        <legend>Words(Total)</legend>
        <input
          type="number"
          className="input validator"
          required
          value={totalwords.value}
          onInput={(v) => setTotalWords(v.target.value)}
          placeholder="Type a number between 4 to 10"
          min="4"
          max="10"
          title="Must be between be 4 to 10"
        />
        <legend>Words(to Guess)</legend>
        <input
          type="number"
          className="input validator"
          required
          value={wordstoguess.value}
          onInput={(v) => setWordsToGuess(v.target.value)}
          placeholder={`Type a number between 1 to ${getTotalWords()}`}
          min="1"
          max={totalwords - 1}
          title={`Must be between be 1 to ${getTotalWords()}`}
        />
      </div>

      <div className="card card-body bg-neutral m-4 flex-0">
        <h1 className="mb-4 text-4lg font-extrabold leading-none tracking-tight text-gray-900 lg:text-6xl dark:text-white mr-auto ml-auto">
          Optional
        </h1>
        <label className="label">
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            defaultChecked
          />
          Rotate Judges
        </label>
        <label className="label">
          <input
            type="checkbox"
            className="checkbox checkbox-primary"
            checked={allowChooseScentance}
            onChange={handleChooseScantanceChange}
          />
          Choose Sentences
        </label>
        {allScentances.map((sentence, index) => (
          <div key={index} className="flex items-center">
            <input
              type="text"
              className="input validator"
              required
              placeholder="The [adjective] bird catches [noun]"
              value={sentence}
              onChange={(e) => {
                const newSentences = [...allScentances];
                newSentences[index] = e.target.value;
                setScentances(newSentences);
              }}
              disabled={!allowChooseScentance}
            />
            <button
              className="btn btn-danger"
              onClick={() => handleDeleteSentence(index)}
              disabled={!allowChooseScentance}
            >
              Delete
            </button>
          </div>
        ))}
        <button
          className="btn btn-secondary"
          onClick={handleAddSentence}
          disabled={!allowChooseScentance}
        >
          Add Sentence
        </button>
      </div>

      <div className="card card-body bg-neutral m-4 flex-0 mt-auto">
        <button
          className="btn btn-primary btn-lg"
          onClick={createGame}
          disabled={
            totalwords < 4 ||
            totalwords > 10 ||
            code.length !== 4 ||
            wordstoguess > totalwords - 1 ||
            wordstoguess < 1 ||
            (allowChooseScentance &&
              allScentances.some((sentence) => sentence.trim() === "")) ||
            allScentances.length < 1
          }
        >
          Create Game
        </button>
      </div>
    </div>
  );
}
