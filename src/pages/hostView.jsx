import { useParams } from "react-router-dom";
// import scentances from "../json/premadeScentances";
import { gameHostUUID } from "./createLibbit";

export default function HostView() {
  const { hostid } = useParams();

  let liveGames = JSON.parse(localStorage.getItem("allHostedGames") || "[]");
  console.log(gameHostUUID);
  console.log(hostid);

  const gameExists = liveGames.some((g) => g.hostid === hostid);

  return (
    <h1 className="mb-4 text-4lg font-extrabold leading-none tracking-tight text-gray-900 lg:text-6xl dark:text-white mr-auto ml-auto">
      {gameExists ? "THIS GAME EXISTS" : "THIS GAME DOES NOT EXIST"}
    </h1>
  );
}
