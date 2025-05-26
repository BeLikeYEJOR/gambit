import { useParams } from "react-router-dom";

export default function Libbit() {
  const { code } = useParams();
  return (
    <div className="container max-w-sm mx-auto h-screen p-4 bg-gray-800 flex flex-col">
      Libbit: {code}
    </div>
  );
}
