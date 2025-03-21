import { SearchResult } from "@/types/SearchResult";

type Props = {
  results: SearchResult;
}
export const SearchReveal = ({results}: Props) => {
  return (
    <div>
      <p className="text-3xl">{results.person.name}</p>
      <p className="text-2xl my-3">Parabéns, você tirou:</p>
      <p className="text-4xl text-white bg-blue-800 my-5 px-5 py-16 rounded-lg border-2 border-dashed border-blue-300">
        {results.personMatched.name}
      </p>
    </div>  
  );
}