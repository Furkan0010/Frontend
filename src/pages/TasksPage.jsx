import { useEffect, useState } from 'react'
import Header from '../components/Header.jsx'
import TaskForm from '../components/TaskForm.jsx'
import TaskList from '../components/TaskList.jsx'
import { loadTasks, saveTasks } from '../utils/storage.js'

// Görev state'i burada tutulur; ekle, güncelle, sil işlemleri buradan yönetilir
export default function TasksPage() {
  const [tasks, setTasks] = useState(loadTasks)
  const [editingTask, setEditingTask] = useState(null)

  // Her değişiklikte görevleri localStorage'a yaz
  useEffect(() => {
    saveTasks(tasks)
  }, [tasks])

  function addTask(data) {
    const now = new Date().toISOString()
    const newTask = {
      id: crypto.randomUUID(),
      ...data,
      status: 'todo',
      createdAt: now,
      updatedAt: now,
    }
    setTasks((prev) => [newTask, ...prev])
  }

  function updateTask(id, changes) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? { ...task, ...changes, updatedAt: new Date().toISOString() }
          : task,
      ),
    )
  }

  function deleteTask(id) {
    if (!window.confirm('Bu görevi silmek istediğinize emin misiniz?')) return
    setTasks((prev) => prev.filter((task) => task.id !== id))
    if (editingTask?.id === id) setEditingTask(null)
  }

  function handleSubmit(data) {
    if (editingTask) {
      updateTask(editingTask.id, data)
      setEditingTask(null)
    } else {
      addTask(data)
    }
  }

  const doneCount = tasks.filter((task) => task.status === 'done').length

  return (
    <div className="min-h-screen bg-slate-100 text-slate-800">
      <Header total={tasks.length} done={doneCount} />

      <main className="mx-auto grid max-w-5xl gap-6 px-4 py-6 md:grid-cols-[320px_1fr]">
        <section className="md:sticky md:top-6 md:self-start">
          <TaskForm
            key={editingTask?.id ?? 'new'}
            initialTask={editingTask}
            onSubmit={handleSubmit}
            onCancel={() => setEditingTask(null)}
          />
        </section>

        <section>
          <TaskList
            tasks={tasks}
            editingId={editingTask?.id}
            onEdit={setEditingTask}
            onDelete={deleteTask}
            onStatusChange={(id, status) => updateTask(id, { status })}
          />
        </section>
      </main>
    </div>
  )
}
