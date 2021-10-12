import React from "react";
import { montoToStr } from "../utils/utils";
import style from "./Profile.module.scss";
type PropsType = {
  name?: string;
  registredAt?: Date;
};

export class ProfileClass extends React.Component<PropsType> {
  render() {
    let day, month, year;

    if (!this.props.registredAt) {
      day = "Неизвестная";
      month = "дата";
      year = "регистрации";
    } else {
      [day, month, year] = [
        this.props.registredAt.getDate(),
        montoToStr(this.props.registredAt.getMonth()),
        this.props.registredAt.getFullYear(),
      ];
    }

    return (
      <div>
        <h3>
          Привет,{" "}
          <span className={style.name}>{this.props.name || "Аноним"}</span>
        </h3>
        <span>Дата регистрации: {`${day} ${month} ${year}`}</span>
      </div>
    );
  }
}
