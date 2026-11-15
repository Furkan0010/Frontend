import { useState } from 'react'
import {
  PRIORITIES,
  PRIORITY_LABELS,
  STATUSES,
  STATUS_LABELS,
} from '../interfaces/task.js'

const inputClass =
  'w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-200'

// Ekleme ve düzenleme için ortak form. initialTask verilirse düzenleme modunda açılır.
export default function TaskForm({ initialTask, onSubmit, onCancel }) {
  const isEditing = Boolean(initialTask)

  const [title, setTitle] = useState(initialTask?.title ?? '')
  const [description, setDescription] = useState(initialTask?.description ?? '')
  const [priority, setPriority] = useState(initialTask?.priority ?? 'medium')
  const [status, setStatus] = useState(initialTask?.status ?? 'todo')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const trimmedTitle = title.trim()
    if (!trimmedTitle) {
      setError('Başlık boş bırakılamaz.')
      return
    }

    const data = { title: trimmedTitle, description: description.trim(), priority }
    // Durum yalnızca düzenlemede değiştirilir; yeni görev her zaman "todo" başlar
    onSubmit(isEditing ? { ...data, status } : data)

    if (!isEditing) {
      setTitle('')
      setDescription('')
      setPriority('medium')
    }
    setError('')
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="space-y-4 rounded-xl border border-slate-200 bg-white p-5 shadow-sm"
    >
      <h2 className="text-lg font-semibold text-slate-900">
        {isEditing ? 'Görevi Düzenle' : 'Yeni Görev'}
      </h2>

      <div>
        <label htmlFor="title" className="mb-1 block text-sm font-medium">
          Başlık <span className="text-red-500">*</span>
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
            if (error) setError('')
          }}
          placeholder="Örn. Proje raporunu yaz"
          className={inputClass}
        />
        {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
      </div>

      <div>
        <label htmlFor="description" className="mb-1 block text-sm font-medium">
          Açıklama
        </label>
        <textarea
          id="description"
          rows={3}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="İsteğe bağlı"
          className={inputClass}
        />
      </div>

      <div className={isEditing ? 'grid grid-cols-2 gap-3' : ''}>
        <div>
          <label htmlFor="priority" className="mb-1 block text-sm font-medium">
            Öncelik
          </label>
          <select
            id="priority"
            value={priority}
            onChange={(e) => setPriority(e.target.value)}
            className={inputClass}
          >
            {PRIORITIES.map((p) => (
              <option key={p} value={p}>
                {PRIORITY_LABELS[p]}
              </option>
            ))}
          </select>
        </div>

        {isEditing && (
          <div>
            <label htmlFor="status" className="mb-1 block text-sm font-medium">
              Durum
            </label>
            <select
              id="status"
              value={status}
              onChange={(e) => setStatus(e.target.value)}
              className={inputClass}
            >
              {STATUSES.map((s) => (
                <option key={s} value={s}>
                  {STATUS_LABELS[s]}
                </option>
              ))}
            </select>
          </div>
        )}
      </div>

      <div className="flex gap-2">
        <button
          type="submit"
          className="flex-1 rounded-lg bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700"
        >
          {isEditing ? 'Kaydet' : 'Ekle'}
        </button>
        {isEditing && (
          <button
            type="button"
            onClick={onCancel}
            className="rounded-lg border border-slate-300 px-4 py-2 text-sm font-medium hover:bg-slate-50"
          >
            Vazgeç
          </button>
        )}
      </div>
    </form>
  )
}
