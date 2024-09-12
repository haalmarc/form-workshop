import express from "express";

const app = express();
const PORT = 8000;

app.use(express.json());

const todos = [
  { id: 1, task: "Learn Express", completed: false },
  { id: 2, task: "Build a REST API", completed: false },
];

app.get("/todos", (req, res) => {
  res.json(todos);
});

app.post("/todos", (req, res) => {
  const newTodo = req.body;
  if (!newTodo.task) {
    return res.status(400).json({ error: "Task is required" });
  }

  const todoWithId = { id: todos.length + 1, ...newTodo, completed: false };

  todos.push(todoWithId);

  res.json(todos);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
