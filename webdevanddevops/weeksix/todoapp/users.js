const users = [
  {
    id: 1,
    username: "John Doe",
    password: "john.doe@example.com",
    todos: [
      { id: 1, title: "Buy groceries", completed: false },
      { id: 2, title: "Pay bills", completed: true },
      { id: 3, title: "Schedule doctor's appointment", completed: false },
    ],
  },
  {
    id: 2,
    username: "Jane Smith",
    password: "jane.smith@example.com",
    todos: [
      { id: 1, title: "Finish project report", completed: true },
      { id: 2, title: "Call mom", completed: false },
      { id: 3, title: "Book flight tickets", completed: true },
    ],
  },
  {
    id: 3,
    username: "Michael Johnson",
    password: "michael.johnson@example.com",
    todos: [
      { id: 1, title: "Go for a run", completed: false },
      { id: 2, title: "Clean the house", completed: true },
      { id: 3, title: "Submit tax documents", completed: false },
    ],
  },
];

module.exports = users;
