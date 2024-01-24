"use client";
import { useState } from "react";
// import Image from "next/image";

// import Pikachu from '../assets/download.png'

import TodoForm from "../components/TodoForm";
import TodoList, { Todo } from "../components/TodoList";

export default function Home() {
  const [todos, setTodos] = useState<Array<Todo>>([])

  function addTodo(todo: Todo) {
    setTodos(
      todos => [...todos, todo]
    )
  }

  function removeTodo(id: string) {
    setTodos(
      todos => {
        return todos.filter(todo => todo.id !== id)
      }
    )
  }

  function clickTodo(id: string) {
    setTodos(
      todos => {
        return todos.map(todo => {
          if (todo.id !== id) return todo

          return { ...todo, doneAt: todo.doneAt === null ? (new Date()).toISOString() : null }
        })
      }
    )
  }

  return (
    <section className="h-screen w-screen p-20 bg-zinc-100 flex justify-center items-start">
      <div className="p-5 flex flex-col gap-10 items-center">
        {/* <Image src={Pikachu} alt='pikachu' /> */}

        <h1 className="text-2xl font-bold">✅ Todo List</h1>

        <TodoForm addTodo={(todo) => addTodo(todo)} />

        <TodoList todos={todos} removeTodo={removeTodo} clickTodo={clickTodo} />
      </div>
    </section>
  );
}
