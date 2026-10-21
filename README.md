
# Task Management Application

A simple task management application built with React.js and Redux. This project demonstrates centralized state management, reusable React components, and handling user interactions with Redux actions and reducers.

## 🚀 Live Demo

[View Live Application](https://react-redux-todo-app-lovat.vercel.app/)

## 📌 Features

- **Add Tasks:** Add new Todo items using a controlled input field.
- **Delete Tasks:** Remove Todo items from the list.
- **Centralized State Management:** Manage the Todo list using Redux.
- **Dynamic Rendering:** Update the displayed list when the Redux state changes.
- **Reusable Components:** Separate task input and task list functionality into React components.
- **Action-Based Updates:** Use Redux actions and reducers to add and remove tasks.
- **React Redux Integration:** Use `useDispatch` and `useSelector` to interact with the Redux store.

## 🛠️ Technologies Used

- React.js
- JavaScript (ES6+)
- Redux
- React Redux
- HTML5
- CSS3
- Vite
- Git and GitHub
- Vercel

## 📂 Project Structure

```text
React-Redux-Todo-App/
├── public/
├── src/
│   ├── assets/
│   ├── Todo App/
│   │   ├── App.jsx
│   │   ├── addtodo.jsx
│   │   ├── listtodo.jsx
│   │   ├── combineReducers.jsx
│   │   ├── createStore.jsx
│   │   └── reducers.jsx
│   ├── App.jsx
│   ├── App.css
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
   git clone https://github.com/kenuit2004/React-Redux-Todo-App.git
   ```

2. Navigate to the project directory:

   ```bash
   cd React-Redux-Todo-App
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

## 🧠 Concepts Demonstrated

- **React Components:** Build the application using reusable functional components.
- **useState:** Manage the task input field.
- **useDispatch:** Dispatch Redux actions from React components.
- **useSelector:** Access Todo data from the Redux store.
- **Actions and Reducers:** Handle adding and deleting Todo items.
- **combineReducers:** Combine reducers to organize application state.
- **Redux Store:** Maintain centralized application state.
- **Array Methods:** Use the spread operator and `filter()` to update the task list immutably.
- **Controlled Components:** Keep the input field synchronized with React state.

## 🔮 Future Improvements

- Add CSS styling and responsive design.
- Prevent empty or whitespace-only tasks.
- Implement task editing and completion status.
- Add local storage to persist tasks after refreshing the page.
- Add confirmation feedback when tasks are added or deleted.

## 👨‍💻 Author

**Kenuit M**

- GitHub: [kenuit2004](https://github.com/kenuit2004)
- LinkedIn: [kenuitm](https://linkedin.com/in/kenuitm)
