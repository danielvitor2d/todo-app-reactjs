import { useMemo } from "react"
import TodoItem from "../TodoItem"

export type Todo = {
  id: string
  title: string
  description: string
  date: string
  doneAt: string | null
}

export interface TodoListProps {
  todos: Array<Todo>
  removeTodo: (id: string) => void
  clickTodo: (id: string) => void
}

export default function TodoList({ todos, removeTodo, clickTodo }: TodoListProps) {
  const total = useMemo(() => todos.length, [todos.length])
  const amountDone = useMemo(() => todos.reduce((acc, curr) => acc + (curr.doneAt === null ? 0 : 1), 0), [todos])

  return (
    <div className="w-full flex flex-col gap-5">
      <div className="w-full flex flex-col gap-5">
        {todos.map(
          todo => (
            <TodoItem key={todo.id} todo={todo} removeTodo={() => removeTodo(todo.id)} clickTodo={clickTodo} />
          )
        )}
      </div>

      <p className="font-bold text-lg">
        <span>{amountDone}</span> / <span>{total}</span>
      </p>
    </div>
  )
}
