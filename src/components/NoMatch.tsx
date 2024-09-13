import { Link } from "react-router-dom";

export function NoMatch() {
  return (
    <div>
      <h2>Ingenting å se her!</h2>
      <p>
        <Link to="/">Gå tilbake</Link>
      </p>
    </div>
  );
}
