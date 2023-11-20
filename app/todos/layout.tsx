import React, { ReactNode } from "react";

const TodoLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="w-3/6 bg-white py-8 px-6 my-auto mx-auto">
      <h2 className="text-green-700 text-4xl font-semibold text-center mb-4">
        Todos
      </h2>
      {children}
    </div>
  );
};

export default TodoLayout;
