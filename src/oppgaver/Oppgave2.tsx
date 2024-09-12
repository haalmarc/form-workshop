import { useState } from "react";
import { postForm } from "../utils/postForm";

export function Oppgave2() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    await postForm(username, password);
  }

  return (
    <div>
      <h1>Opprett bruker</h1>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label>
            Brukernavn
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </label>
        </div>

        <div>
          <label>
            Passord
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
        </div>

        <button type="submit">Opprett bruker</button>
      </form>
    </div>
  );
}
