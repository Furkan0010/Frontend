import TaskItem from './TaskItem.jsx'

// Görevleri listeler; görev yoksa boş durum mesajı gösterir
export default function TaskList({ tasks, editingId, onEdit, onDelete, onStatusChange }) {
  if (tasks.length === 0) {
    return (
      <div className="rounded-xl border-2 border-dashed border-slate-300 bg-white p-10 text-center">
        <p className="font-medium text-slate-600">Henüz görev yok</p>
        <p className="mt-1 text-sm text-slate-400">Formu kullanarak ilk görevini ekle.</p>
      </div>
    )
  }

  return (
    <ul className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          isEditing={task.id === editingId}
          onEdit={onEdit}
          onDelete={onDelete}
          onStatusChange={onStatusChange}
        />
      ))}
    </ul>
  )
}
