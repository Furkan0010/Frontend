// Uygulama başlığı ve görev sayaçları
export default function Header({ total, done }) {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-3 px-4 py-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">TaskFlow Web</h1>
          <p className="text-sm text-slate-500">Basit görev yöneticisi</p>
        </div>
        <div className="flex gap-2 text-sm">
          <span className="rounded-lg bg-slate-100 px-3 py-1.5">
            Toplam: <strong>{total}</strong>
          </span>
          <span className="rounded-lg bg-emerald-50 px-3 py-1.5 text-emerald-700">
            Biten: <strong>{done}</strong>
          </span>
        </div>
      </div>
    </header>
  )
}
