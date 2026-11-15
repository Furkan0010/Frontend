import {
  PRIORITY_LABELS,
  STATUSES,
  STATUS_LABELS,
} from '../interfaces/task.js'

// Rozet renkleri
const statusStyles = {
  todo: 'bg-slate-100 text-slate-700',
  'in-progress': 'bg-amber-100 text-amber-800',
  done: 'bg-emerald-100 text-emerald-800',
}

const priorityStyles = {
  low: 'bg-sky-100 text-sky-800',
  medium: 'bg-violet-100 text-violet-800',
  high: 'bg-red-100 text-red-800',
}

// Tek bir görev kartı
export default function TaskItem({ task, isEditing, onEdit, onDelete, onStatusChange }) {
  const isDone = task.status === 'done'

  // Durumu sıradaki duruma geçirir: Yapılacak → Devam ediyor → Tamamlandı → Yapılacak
  function cycleStatus() {
    const next = STATUSES[(STATUSES.indexOf(task.status) + 1) % STATUSES.length]
    onStatusChange(task.id, next)
  }

  return (
    <li
      className={`rounded-xl border bg-white p-4 shadow-sm ${
        isEditing ? 'border-indigo-400 ring-2 ring-indigo-100' : 'border-slate-200'
      }`}
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div className="min-w-0 flex-1">
          <h3
            className={`break-words font-semibold ${
              isDone ? 'text-slate-400 line-through' : 'text-slate-900'
            }`}
          >
            {task.title}
          </h3>
          {task.description && (
            <p className="mt-1 whitespace-pre-line break-words text-sm text-slate-600">
              {task.description}
            </p>
          )}

          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <button
              type="button"
              onClick={cycleStatus}
              title="Durumu değiştirmek için tıkla"
              className={`rounded-full px-2.5 py-1 font-medium hover:opacity-80 ${statusStyles[task.status]}`}
            >
              {STATUS_LABELS[task.status]}
            </button>
            <span className={`rounded-full px-2.5 py-1 font-medium ${priorityStyles[task.priority]}`}>
              {PRIORITY_LABELS[task.priority]} öncelik
            </span>
            <span className="text-slate-400">
              {new Date(task.updatedAt).toLocaleString('tr-TR', {
                dateStyle: 'short',
                timeStyle: 'short',
              })}
            </span>
          </div>
        </div>

        <div className="flex shrink-0 gap-2">
          <button
            type="button"
            onClick={() => onEdit(task)}
            className="rounded-lg border border-slate-300 px-3 py-1.5 text-sm font-medium hover:bg-slate-50"
          >
            Düzenle
          </button>
          <button
            type="button"
            onClick={() => onDelete(task.id)}
            className="rounded-lg border border-red-200 px-3 py-1.5 text-sm font-medium text-red-600 hover:bg-red-50"
          >
            Sil
          </button>
        </div>
      </div>
    </li>
  )
}
