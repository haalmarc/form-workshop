import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Oppgave1 } from "./oppgaver/Oppgave1";
import { Oppgave2 } from "./oppgaver/Oppgave2";
import { Oppgave3 } from "./oppgaver/Oppgave3";
import { Layout } from "./components/Layout";
import { NoMatch } from "./components/NoMatch";

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
