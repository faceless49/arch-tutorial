import { EmptyBlock } from "./components/EmptyBlock";
import { useState } from "react";
import { Phrase } from "./components/Phrase";
import { generateRandomWord } from "./utils/utils";
import { adjectivesArr, nounsArr } from "./data/data";

export const App = () => {
  const [phrases, setPhrases] = useState<Array<string>>([]);

  const generatePhrase = () => {
    setPhrases((prevState) => [
      ...prevState,
      generateRandomWord(adjectivesArr, nounsArr),
    ]);
  };

  const clearPhrases = () => {
    setPhrases([]);
  };

  return (
    <div className="wrapper">
      {phrases.length ? <Phrase phrases={phrases} /> : <EmptyBlock />}
      <button className="btn btn_generate" onClick={generatePhrase}>
        Сгенерировать
      </button>
      <button className="btn btn_clear" onClick={clearPhrases}>
        Очистить
      </button>
    </div>
  );
};
