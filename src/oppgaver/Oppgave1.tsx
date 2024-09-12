import { postForm } from "../utils/postForm";

export function Oppgave1() {
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    await postForm("todo", "todo");
  }

  return (
    <div>
      <h1>Oppgave 1</h1>
      <h2>Beskrivelse</h2>
      <p>
        I denne oppgaven skal du legge til state i input-elementene og poste
        brukernavn og passord med postForm-funksjonen.
      </p>
      <form onSubmit={handleSubmit} className="form">
        <div>
          <label>
            Brukernavn
            <input type="text" />
          </label>
        </div>

        <div>
          <label>
            Passord
            <input type="password" />
          </label>
        </div>

        <button>Opprett bruker</button>
      </form>
    </div>
  );
}
