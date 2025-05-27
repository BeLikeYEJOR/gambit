import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Libbit() {
  const { code } = useParams();
  const [codeExists, SetCodeExists] = useState(false);

  useEffect(() => {
    let liveGames = JSON.parse(localStorage.getItem("allHostedGames") || "[]");

    const Exists = liveGames.some((g) => g.gameCode === code);

    SetCodeExists(Exists)

  }, [code]);

  return (
    <div className="container max-w-sm mx-auto h-screen p-4 bg-gray-800 flex flex-col">
      {codeExists ? "GAME EXISTS" : "GAME DOESENT EXIST"}
    </div>
  );
}
