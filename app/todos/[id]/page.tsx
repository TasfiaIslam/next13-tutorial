import React from "react";

async function getSingleTodo(id: number) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
  const data = await res.json();
  return data;
}
export default async function TodoPage({ params }: any) {
  const todo = await getSingleTodo(params.id);

  return (
    <div className="h-[450px] ">
      <p>Todos</p>
      <p>{todo.title}</p>
    </div>
  );
}
