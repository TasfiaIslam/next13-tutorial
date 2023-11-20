import React from "react";
import Link from "next/link";
import CreateTodo from "./createTodo";
import { FaPlus } from "react-icons/fa";
import AllTodos from "@/components/allTodos";

async function getTodos() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return data;
}
export default async function TodosPage() {
  const todos = await getTodos();

  return (
    <div className="">
      <AllTodos todos={todos} />
    </div>
  );
}
