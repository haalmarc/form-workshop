import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Oppgave1 } from "./oppgaver/Oppgave1";
import { Oppgave2 } from "./oppgaver/Oppgave2";
import { Oppgave3 } from "./oppgaver/Oppgave3";

export function App() {
  return (
    <div>
      <h1>Hello world</h1>
      <p>Her er noe tekst...</p>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Oppgave1 />} />
          <Route path="opg2" element={<Oppgave2 />} />
          <Route path="opg3" element={<Oppgave3 />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/opg1">Oppgave 1</Link>
          </li>
          <li>
            <Link to="/opg2">Oppgave 2</Link>
          </li>
          <li>
            <Link to="/opg3">Oppgave 3</Link>
          </li>
          <li>
            <Link to="/nothing-here">Nothing Here</Link>
          </li>
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
