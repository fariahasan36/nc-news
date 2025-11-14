import { useEffect, useState } from "react";
import { fetchAllUsers } from "../api.js";

export default function User() {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchAllUsers()
      .then((data) => {
        setLoading(false);
        setError(null);
        setUsers(data.users);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);
  if (isLoading) return <p>Loading</p>;
  return (
    <>
      <h2>List of Users:</h2>
      <main className="main-section">
        {users.map((element) => {
          return (
            <article key={element.username} className="users">
              <img
                className="user-img"
                src={element.avatar_url}
                alt={element.username}
              ></img>
              <p>
                <b>Username:</b> {element.username}
              </p>
              <p>
                <b>Name:</b> {element.name}
              </p>
            </article>
          );
        })}
      </main>
    </>
  );
}
