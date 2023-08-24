import { useState, useEffect } from "react";
import { enqueueSnackbar } from "notistack";
import { USERS_URL } from "./URLs";

export const useFetchUsers = (input) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    for (const user of input) {
      fetch(`${USERS_URL}/${user}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.error) {
            enqueueSnackbar(data.error, { variant: "error" });
          } else {
            setUsers((prev) => [...prev, data]);
          }
        });
    }
  }, []);

  return {
    users,
  };
};
