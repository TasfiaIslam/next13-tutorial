import Link from "next/link";
import React from "react";
import CreateTodo from "./createTodo";

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data;
}
export default async function TodosPage() {
  const todos = await getTodos();

  return (
    <div className="">
      <CreateTodo />

      <div className="flex flex-col gap-y-4">
        {todos?.slice(190).map((todo: any) => (
          <Link href={`/todos/${todo.id}`}>
            <div className="bg-green-100 shadow-sm rounded-[10px] p-4">
              <p className="font-semibold"> Task: {todo.title}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
