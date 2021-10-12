import { montoToStr } from "../utils/utils";
import style from "./Profile.module.scss";
type PropsType = {
  name?: string;
  registredAt?: Date;
};

export const ProfileFunc = (props: PropsType) => {
  let day, month, year;

  if (!props.registredAt) {
    day = "Неизвестная";
    month = "дата";
    year = "регистрации";
  } else {
    [day, month, year] = [
      props.registredAt.getDate(),
      montoToStr(props.registredAt.getMonth()),
      props.registredAt.getFullYear(),
    ];
  }

  return (
    <div>
      <h3>
        Привет, <span className={style.name}>{props.name || "Аноним"}</span>
      </h3>
      <span>Дата регистрации {`${day} ${month} ${year}`}</span>
    </div>
  );
};
