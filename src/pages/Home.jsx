import { Play } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [code, setCode] = useState("");

  const games = [
    {
      label: "Libbit",
      description:
        "Libbit is a game of ad-libbing and wits! Compete to see who can re-write common sayings in the funniest way!",
    },
  ];

  const handleJoins = () => {
    window.location.href = `${window.location.href}game/${code}`;
  };

  const createLibbitGame = () => {
    window.location.href = `${window.location.href}create/libbit`;
  };

  return (
    <div className="container max-w-sm mx-auto h-screen p-4 bg-gray-800 flex flex-col">
      <div className="card card-body bg-neutral m-4 flex-0">
        <fieldset className="fieldset">
          <legend className="fieldset-legend">
            Enter a code to join an existing game:
          </legend>
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
          <p className="validator-hint">Codes must be four characters long.</p>
        </fieldset>
        <button
          id="joinButton"
          className="btn btn-lg btn-primary"
          disabled={code.length !== 4}
          onClick={handleJoins}
        >
          Join {code}
        </button>
      </div>
      <div
        className="card card-body bg-neutral m-4 "
        onClick={createLibbitGame}
      >
        <h2 className="card-title">Start a New Game</h2>
        <ul className="list">{games.map(gameToJsx)}</ul>
      </div>
    </div>
  );
}

function gameToJsx({ label, description }) {
  return (
    <li className="list-row" key={label}>
      <p className="text-xs">
        <button className="btn btn-secondary float-left mr-2">
          <Play className="" />
          {label}
        </button>
        {description}
      </p>
    </li>
  );
}
