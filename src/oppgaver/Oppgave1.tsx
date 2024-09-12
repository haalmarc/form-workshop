import { postForm } from "../utils/postForm";

export function Oppgave1() {
  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();

    await postForm("todo", "todo");
  }

  return (
    <div>
      <h1>Opprett bruker</h1>
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
