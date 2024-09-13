import { postForm } from "../utils/postForm";

// Oppgave: Bytt ut hardkodede verdier i postForm med verdier fra inputfeltene

export function Oppgave1() {
  async function onSubmit(event: React.FormEvent) {
    event.preventDefault();

    await postForm("todo", "todo");
  }

  return (
    <div>
      <h1>Oppgave 1</h1>
      <form onSubmit={onSubmit} className="form">
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
