import React, { useState } from "react";
import Card from "../UI/Card";
import Button from "../UI/Button";
import classes from "./AddUser.module.css";

const AddUser = (props) => {
  const [enterdeUsername, setEnterdeUsername] = useState("");
  const [enterdeAge, setEnterdeAge] = useState("");
  const addUserHandler = (e) => {
    e.preventDefault();

    if (enterdeAge.trim().length === 0 || enterdeUsername.trim().length === 0)
      return;

    if (+enterdeAge < 1) return;

    setEnterdeAge("");
    setEnterdeUsername("");
  };

  const usernameChangeHandler = (e) => {
    setEnterdeUsername(e.target.value);
  };
  const ageChangeHandler = (e) => {
    setEnterdeAge(e.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          onChange={usernameChangeHandler}
          value={enterdeUsername}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          id="age"
          type="number"
          onChange={ageChangeHandler}
          value={enterdeAge}
        />
        <Button type="submit">Add user</Button>
      </form>
    </Card>
  );
};

export default AddUser;
