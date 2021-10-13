import { ChangeEvent, FormEvent } from "react";
import styles from "./Form.module.scss";
export const Form = () => {
  let email = "",
    password = "";

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.name === "email") {
      email = e.currentTarget.value;
    } else if (e.currentTarget.name === "password") {
      password = e.currentTarget.value;
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.trim() && password.trim()) {
      console.log(`email: ${email} password: ${password}`);
      e.currentTarget.reset();
      email = "";
      password = "";
    } else {
      alert("Необходимо заполнить поля");
    }
  };

  return (
    <div className={styles.wrap}>
      <form
        className={styles.form}
        action="https://www.google.com/"
        method="POST"
        onSubmit={handleSubmit}
      >
        <input
          className={styles.info}
          type="text"
          placeholder="E-mail"
          name="email"
          onChange={onChangeHandler}
        />
        <input
          className={styles.info}
          type="password"
          placeholder="Password"
          name="password"
          onChange={onChangeHandler}
        />
        <button type="submit">Войти</button>
      </form>
    </div>
  );
};
