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
      <h1>Oppgave 2</h1>
      <h2>Beskrivelse</h2>
      <p>
        I denne oppgaven skal du legge til validering av input-elementene, så
        det ikke sendes avgårde ugyldige data.
      </p>
      <ul>
        <li>Ingen av feltene kan være tomme</li>
        <li>Passordet må være minst 6 tegn</li>
        <li>
          Som bruker ønsker jeg å se en feilmelding om hva som har gått feil
        </li>
      </ul>
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
