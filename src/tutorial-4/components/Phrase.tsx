type PhrasePropsType = {
  phrases: Array<string>;
};

export const Phrase = (props: PhrasePropsType) => {
  return (
    <div className="list">
      {props.phrases?.map((p, i) => {
        return (
          <div className="block" key={i}>
            <h3>{p}</h3>
          </div>
        );
      })}
    </div>
  );
};
