"use client";

import { useState } from "react";

const CreateTodo = () => {
  const [title, setTitle] = useState("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();

    const res = await fetch("https://jsonplaceholder.typicode.com/todos", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
      }),
    });
  };

  return (
    <div className="mb-4">
      <form onSubmit={handleSubmit} className="flex flex-col">
        <label>
          Task:
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="px-4 py-1 ml-2 border border-slate-300 rounded-[10px] focus:outline-none"
          />
        </label>
        <button
          type="submit"
          className="py-2 ml-10 mt-4 border border-green-300 hover:bg-green-300 w-[148px] rounded-[10px] text-black transition-all ease-out duration-200"
        >
          Add Todo
        </button>
      </form>
    </div>
  );
};

export default CreateTodo;
