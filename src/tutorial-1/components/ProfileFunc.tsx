import { montoToStr } from "../utils/utils";
import s from "./Profile.module.scss";
type PropsType = {
  name: string;
  registredAt: Date;
};

export const ProfileFunc = (props: PropsType) => {
  const day = props.registredAt.getDate();
  const month = montoToStr(props.registredAt.getMonth());
  const year = props.registredAt.getFullYear();

  return (
    <div>
      <h3>
        Привет, <span className={s.name}>{props.name}</span>
      </h3>
      <span>Дата регистрации {`${day} ${month} ${year}`}</span>
    </div>
  );
};
