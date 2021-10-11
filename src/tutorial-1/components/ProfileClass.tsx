import React from "react";
import { montoToStr } from "../utils/utils";
import s from "./Profile.module.scss";
type PropsType = {
  name: string;
  registredAt: Date;
};

export class ProfileClass extends React.Component<PropsType> {
  render() {
    const day = this.props.registredAt.getDate();
    const month = montoToStr(this.props.registredAt.getMonth());
    const year = this.props.registredAt.getFullYear();

    return (
      <div>
        <h3>
          Привет, <span className={s.name}>{this.props.name}</span>
        </h3>
        <span>Дата регистрации: {`${day} ${month} ${year}`}</span>
      </div>
    );
  }
}
