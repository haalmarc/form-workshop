import { useState } from "react";
import { postForm } from "../utils/postForm";

/*
  Oppgave: Legg til validering av input-feltene.
  - Ingen av feltene kan være tomme
  - Passordet må være minst 6 tegn
  - Som bruker ønsker jeg å se en feilmelding
*/

export function Oppgave2() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    await postForm(username, password);
  }

  return (
    <div>
      <h1>Oppgave 2</h1>
      <form onSubmit={onSubmit} className="form">
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
