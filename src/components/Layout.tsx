import { Outlet, Link } from "react-router-dom";

export function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Oppgave 1</Link>
          </li>
          <li>
            <Link to="/opg2">Oppgave 2</Link>
          </li>
          <li>
            <Link to="/opg3">Oppgave 3</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
