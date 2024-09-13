import { Outlet, Link } from "react-router-dom";

export function Layout() {
  const numberOfTasks = 9;
  const tasksFrom2 = Array.from({ length: numberOfTasks }, (_, i) => i + 2);

  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Oppgave 1</Link>
          </li>
          {tasksFrom2.map((taskNumber) => (
            <li key={taskNumber}>
              <Link to={`/opg${taskNumber}`}>Oppgave {taskNumber}</Link>
            </li>
          ))}
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
