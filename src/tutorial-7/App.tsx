import React from "react";
import { useForm } from "react-hook-form";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./App.module.scss";

type FormSubmitValues = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export const App = () => {
  const { handleSubmit, register, formState, reset } =
    useForm<FormSubmitValues>();

  const onSubmit = (values: FormSubmitValues) => console.log("ФОРМА!", values);

  console.log(formState.errors);

  return (
    <div className="App">
      <form>
        <div className={styles.row}>
          <TextField
            {...register("firstName", {
              required: "Это обязательное поле!",
            })}
            name="firstName"
            label="Имя"
            helperText={
              formState.errors.firstName && formState.errors.firstName.message
            }
            error={!!formState.errors.firstName}
            fullWidth
          />
          <TextField
            {...register("lastName", {
              required: "Это обязательное поле!",
            })}
            name="lastName"
            label="Фамилия"
            helperText={
              formState.errors.lastName && formState.errors.lastName.message
            }
            error={!!formState.errors.lastName}
            fullWidth
          />
        </div>
        <div className="row">
          <TextField
            {...register("email", {
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9._%+-]+\.[A-Z]{2,}$/i,
                message: "Это неверная почта!",
              },
              required: "Это обязательное поле!",
            })}
            helperText={
              formState.errors.email && formState.errors.email.message
            }
            error={!!formState.errors.email}
            name="email"
            label="E-Mail"
            defaultValue=""
            fullWidth
          />
          <TextField
            {...register("password", {
              required: "Это обязательное поле!",
            })}
            helperText={
              formState.errors.password && formState.errors.password.message
            }
            error={!!formState.errors.password}
            name="password"
            type="password"
            label="Пароль"
            fullWidth
          />
        </div>
        <div className="row">
          <TextField name="about" label="Обо мне" fullWidth />
        </div>
        <br />
        <div className="row">
          <Button
            onClick={handleSubmit(onSubmit)}
            variant="contained"
            color="primary"
          >
            Зарегистрироваться
          </Button>
          <Button variant="contained" color="secondary" onClick={() => reset()}>
            Очистить
          </Button>
        </div>
      </form>
    </div>
  );
};
