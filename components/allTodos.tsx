"use client";
import CreateTodo from "@/app/todos/createTodo";
import Link from "next/link";
import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const AllTodos = ({ todos }: { todos: any }) => {
  const [isShowForm, setIsShowForm] = useState(false);
  return (
    <div>
      <FaPlus
        onClick={() => setIsShowForm(!isShowForm)}
        className="cursor-pointer"
      />
      {isShowForm && <CreateTodo />}
      <div className="mt-4 flex flex-col gap-y-4">
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
};

export default AllTodos;
