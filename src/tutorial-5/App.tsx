import { ChangeEvent, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import List from "./components/List";
import styles from "./App.module.scss";
export type ProfilePropsType = {
  fullName: string;
  email?: string;
  text: string;
};

export const App = () => {
  let [comments, setComments] = useState<ProfilePropsType[]>([]);
  let [fullName, setFullName] = useState<string>("");
  let [email, setEmail] = useState<string>("");
  let [text, setText] = useState<string>("");

  const getName = (e: ChangeEvent<HTMLInputElement>) => {
    setFullName(e.currentTarget.value);
  };
  const getMail = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const getText = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setText(e.currentTarget.value);
  };

  const onClick = () => {
    if (fullName && email && text) {
      setComments([...comments, { fullName, email, text }]);
    }
  };
  useEffect(() => {
    console.log(comments);
    if (localStorage.comments) {
      setComments([...JSON.parse(localStorage.data)]);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("comments", JSON.stringify(comments));
  }, [comments]);

  return (
    <div className={styles.App}>
      {comments.map((el, i) => {
        return (
          <List
            key={i}
            fullName={el.fullName}
            email={el.email}
            text={el.text}
          />
        );
      })}
      <h3>Обратная связь</h3>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": {
            m: 1,
            width: "30ch",
            display: "flex",
            flexDirection: "column",
          },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField
            id="outlined-multiline-flexible"
            label="Name"
            multiline
            maxRows={4}
            onChange={getName}
          />
          <TextField
            id="outlined-textarea"
            label="Email"
            placeholder="Email"
            multiline
            onChange={getMail}
          />
          <TextField
            id="outlined-multiline-static"
            multiline
            rows={4}
            placeholder="Type text"
            onChange={getText}
          />
          <Button variant="contained" onClick={onClick}>
            Submit
          </Button>
        </div>
      </Box>
    </div>
  );
};
