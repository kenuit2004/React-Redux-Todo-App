
# Interactive Task Manager

An interactive Todo application built using React.js that allows users to add, delete, and filter tasks. This project demonstrates React Hooks, reusable components, and performance optimization techniques.

## 🚀 Live Demo

[View Live Application](https://normal-todo-one.vercel.app/)

## 📌 Features

- **Add Tasks:** Add tasks using a controlled input field.
- **Delete Tasks:** Remove tasks from the Todo list.
- **Filter Tasks:** Search tasks using case-insensitive text matching.
- **Dynamic Rendering:** Update the task list when the application state changes.
- **Empty State:** Display a message when the Todo list is empty.
- **Search Feedback:** Display a message when no tasks match the filter.
- **Component Memoization:** Use `React.memo` to help prevent unnecessary re-rendering of the Todo component.
- **Optimized Filtering:** Use `useMemo` to memoize filtered task results.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- HTML5
- CSS3
- Vite
- Git and GitHub
- Vercel

## 📂 Project Structure

```text
Normal-Todo/
├── public/
├── src/
│   ├── assets/
│   ├── App.css
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── index.html
├── package.json
├── package-lock.json
└── vite.config.js
```

## ⚙️ Installation and Setup

### Prerequisites

- Node.js
- npm
- Git (optional)

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/kenuit2004/Normal-Todo.git
   ```

2. Navigate to the project directory:

   ```bash
   cd Normal-Todo
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Open the local URL displayed in your terminal.

## 🧠 React Concepts Demonstrated

- **useState:** Manage the task input, task list, and filter input.
- **useMemo:** Memoize filtered task results based on task and filter changes.
- **React.memo:** Memoize the Todo list component.
- **Controlled Components:** Synchronize input fields with React state.
- **Props:** Pass task data and delete handlers to child components.
- **Functional State Updates:** Update the task list using its previous state.
- **Array Methods:** Use `map()` to display tasks and `filter()` to delete and search tasks.
- **Conditional Rendering:** Display empty-list and no-match messages.

## 🔮 Future Improvements

- Add CSS styling and responsive design.
- Implement task editing and completion status.
- Add local storage to persist tasks after refreshing the page.
- Validate inputs and prevent whitespace-only tasks.
- Improve accessibility and keyboard interaction.

## 👨‍💻 Author

**Kenuit M**

- GitHub: [kenuit2004](https://github.com/kenuit2004)
- LinkedIn: [kenuitm](https://linkedin.com/in/kenuitm)
