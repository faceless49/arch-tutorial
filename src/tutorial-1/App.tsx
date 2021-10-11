import { ProfileFunc } from "./components/ProfileFunc";
import { ProfileClass } from "./components/ProfileClass";

export const App = () => {
  const date = new Date(2021, 5, 25);

  return (
    <div>
      <ProfileFunc name={"Вася Пупкин"} registredAt={date} />
      <ProfileClass name={"Вася Пупкин"} registredAt={date} />
    </div>
  );
};
