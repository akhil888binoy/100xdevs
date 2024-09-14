const users = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    todos: [
      { id: 1, title: "Buy groceries", completed: false },
      { id: 2, title: "Pay bills", completed: true },
      { id: 3, title: "Schedule doctor's appointment", completed: false },
    ],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    todos: [
      { id: 1, title: "Finish project report", completed: true },
      { id: 2, title: "Call mom", completed: false },
      { id: 3, title: "Book flight tickets", completed: true },
    ],
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael.johnson@example.com",
    todos: [
      { id: 1, title: "Go for a run", completed: false },
      { id: 2, title: "Clean the house", completed: true },
      { id: 3, title: "Submit tax documents", completed: false },
    ],
  },
];

module.exports = users;
