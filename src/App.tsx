import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { Oppgave1 } from "./oppgaver/Oppgave1";
import { Oppgave2 } from "./oppgaver/Oppgave2";
import { Oppgave3 } from "./oppgaver/Oppgave3";
import { Layout } from "./components/Layout";
import { Oppgave4 } from "./oppgaver/Oppgave4";
import { Fasit4 } from "./oppgaver/Fasit4";
import { Oppgave5 } from "./oppgaver/Oppgave5";
import { Oppgave6 } from "./oppgaver/Oppgave6";
import { Oppgave7 } from "./oppgaver/Oppgave7";
import { Oppgave9 } from "./oppgaver/Oppgave9";
import { Fasit9 } from "./oppgaver/Fasit9";
import { Oppgave8 } from "./oppgaver/Oppgave8";

export function App() {
  return (
    <div>
      <h1>Form Workshop</h1>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Oppgave1 />} />
          <Route path="opg2" element={<Oppgave2 />} />
          <Route path="opg3" element={<Oppgave3 />} />
          <Route path="opg4" element={<Oppgave4 />} />
          <Route path="fasit4" element={<Fasit4 />} />

          <Route path="opg5" element={<Oppgave5 />} />
          <Route path="opg6" element={<Oppgave6 />} />
          <Route path="opg7" element={<Oppgave7 />} />
          <Route path="opg8" element={<Oppgave8 />} />
          <Route path="opg9" element={<Oppgave9 />} />
          <Route path="fasit9" element={<Fasit9 />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </div>
  );
}
