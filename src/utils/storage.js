// localStorage erişimi yalnızca bu dosyada yapılır
const STORAGE_KEY = 'taskflow.tasks'

/**
 * Kayıtlı görevleri okur. Veri yoksa veya bozuksa boş dizi döner.
 * @returns {import('../interfaces/task.js').Task[]}
 */
export function loadTasks() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    const tasks = raw ? JSON.parse(raw) : []
    return Array.isArray(tasks) ? tasks : []
  } catch {
    return []
  }
}

/**
 * Görev listesini kaydeder.
 * @param {import('../interfaces/task.js').Task[]} tasks
 */
export function saveTasks(tasks) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks))
  } catch {
    // Depolama dolu veya erişilemez olabilir; uygulama çalışmaya devam eder
  }
}
