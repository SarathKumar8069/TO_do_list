import React, { useState } from "react";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (!newTask.trim()) return;
    setTasks([...tasks, { text: newTask, completed: false }]);
    setNewTask("");
  };

  const toggleTask = (index) => {
    setTasks(tasks.map((t, i) =>
      i === index ? { ...t, completed: !t.completed } : t
    ));
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-6">
      <h1 className="text-3xl font-bold mb-6 text-gray-200">📝 Dark To-Do List</h1>

      <div className="flex gap-3 w-full max-w-md">
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg bg-gray-800 text-white border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <button
          onClick={addTask}
          className="px-5 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg text-white font-semibold transition"
        >
          Add
        </button>
      </div>

      <ul className="mt-6 w-full max-w-md space-y-3">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center px-4 py-3 rounded-lg bg-gray-900 border border-gray-700"
          >
            <span
              onClick={() => toggleTask(index)}
              className={`cursor-pointer ${task.completed ? "line-through text-gray-500" : ""}`}
            >
              {task.text}
            </span>
            <button
              onClick={() => deleteTask(index)}
              className="text-red-400 hover:text-red-500 transition"
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
