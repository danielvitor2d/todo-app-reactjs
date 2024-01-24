"use client"
import { useState } from "react";
import { v4 as uuidV4 } from 'uuid';

import { Todo } from "../TodoList";

interface TodoFormProps {
  addTodo: (todo: Todo) => void
}

export default function TodoForm({ addTodo }: TodoFormProps) {
  const [title, setTitle] = useState<string>('')
  const [desc, setDesc] = useState<string>('')
  const [datehour, setDatehour] = useState('')

  function onSave() {
    addTodo({
      id: uuidV4(),
      title,
      description: desc,
      date: datehour,
      doneAt: null,
    })

    setTitle('')
    setDesc('')
    setDatehour('')
  }

  return (
    <div className="p-4 border-2 rounded-md flex flex-row gap-4 items-end">

      <div className="flex flex-col gap-3">
        <span className="font-bold text-lg">Título</span>
        <input className="h-12 px-4 text-lg" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>

      <div className="flex flex-col gap-3">
        <span className="font-bold text-lg">Descrição</span>
        <input className="h-12 px-4 text-lg" value={desc} onChange={(e) => setDesc(e.target.value)} />
      </div>

      <div className="flex flex-col gap-3">
        <span className="font-bold text-lg">Data</span>
        <input
          className="h-12 px-4 text-lg"
          type="datetime-local"
          value={datehour}
          onChange={(e) => setDatehour(e.target.value)}
        />
      </div>

      <button
        onClick={onSave}
        className="h-12 px-4 bg-blue-300 rounded-md text-black font-bold"
      >
        {'Salvar'}
      </button>
    </div>
  )
}

// title, description, hora
