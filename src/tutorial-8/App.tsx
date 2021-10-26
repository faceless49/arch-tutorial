import { useState } from "react";

type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export const App = () => {
  const [users, setUsers] = useState<UserType[]>([]);
  const getUsers = async () => {
    try {
      const response = await fetch(
        "https://617826619c328300175f5e53.mockapi.io/users"
      );
      if (!response.ok) {
        throw new Error("Try again later");
      }
      const users = await response.json();
      setUsers(users);
    } catch (err) {
      alert(err);
    }
  };

  return (
    <div>
      <ul>
        {users.map((u) => {
          return (
            <li key={u.id}>
              {u.id}. {u.firstName}
            </li>
          );
        })}
      </ul>
      <button onClick={getUsers}>Получить список пользователей</button>
    </div>
  );
};
