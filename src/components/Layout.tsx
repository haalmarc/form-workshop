import { Outlet, Link } from "react-router-dom";

interface TaskLinkProps {
  taskNumber: number;
}
function TaskLink({ taskNumber }: TaskLinkProps) {
  return (
    <li key={taskNumber}>
      <Link to={`/opg${taskNumber}`}>Oppgave {taskNumber}</Link>
    </li>
  );
}

export function Layout() {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Oppgave 1</Link>
          </li>
          <TaskLink taskNumber={2} />
          <TaskLink taskNumber={3} />
          <TaskLink taskNumber={4} />
          <li>
            <Link to="/fasit4">Fasit 4</Link>
          </li>
          ---
          <TaskLink taskNumber={5} />
          <TaskLink taskNumber={6} />
          <TaskLink taskNumber={7} />
          <TaskLink taskNumber={8} />
        </ul>
      </nav>

      <hr />

      <Outlet />
    </div>
  );
}
