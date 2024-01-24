"use client"
import { TrashSimple } from '@phosphor-icons/react';
import dayjs from 'dayjs';

import { useState } from 'react';
import { Todo } from "../TodoList";

interface TodoItemProps {
  todo: Todo
  removeTodo: () => void
  clickTodo: (id: string) => void
}

export default function TodoItem({ todo, removeTodo, clickTodo }: TodoItemProps) {
  const [done, setDone] = useState(false)

  function onClickTodo() {
    setDone(done => !done)
    clickTodo(todo.id)
  }

  return (
    <div
      onClick={() => onClickTodo()}
      className="w-full h-12 px-4 border border-black flex flex-row rounded-md items-center justify-between"
    >
      <div className='flex flex-row gap-4'>
        <input type="checkbox" checked={done} />

        <div>
          {todo.title}
        </div>

        <div>
          {todo.description}
        </div>

        <div>
          {dayjs(todo.date).format('DD/MM/YYYY hh:mm')}
        </div>
      </div>

      <div className='h-7 w-7 hover:cursor-pointer rounded-full hover:bg-zinc-300 flex items-center justify-center'>
        <TrashSimple color='red' onClick={() => removeTodo()} />
      </div>
    </div>
  )
}