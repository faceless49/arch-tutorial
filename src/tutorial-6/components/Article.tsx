type ArticlePropsType = {
  id: string;
};
export const Article = (props: ArticlePropsType) => {
  if (!props.id) {
    return <h1>ID статьи отсутствует</h1>;
  }
  return (
    <div>
      <div>
        {}
        <h1>Статья №{props.id}</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae
          distinctio fuga animi aliquam sit id veritatis, doloribus ducimus
          quas, dignissimos non minima quia amet possimus? Impedit nemo ducimus
          fuga rem!
        </p>
        <a href="/">
          <button>Назад</button>
        </a>
      </div>
    </div>
  );
};
