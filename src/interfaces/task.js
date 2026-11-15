/**
 * Görev veri modeli.
 * JavaScript'te gerçek interface olmadığı için yapı JSDoc ile tanımlanır.
 *
 * @typedef {Object} Task
 * @property {string} id            crypto.randomUUID() ile üretilir
 * @property {string} title         zorunlu, boşluklar kırpılır
 * @property {string} description   opsiyonel
 * @property {'todo'|'in-progress'|'done'} status
 * @property {'low'|'medium'|'high'} priority
 * @property {string} createdAt     ISO tarih
 * @property {string} updatedAt     ISO tarih
 */

export const STATUSES = ['todo', 'in-progress', 'done']
export const PRIORITIES = ['low', 'medium', 'high']

// Arayüzde gösterilecek Türkçe etiketler
export const STATUS_LABELS = {
  todo: 'Yapılacak',
  'in-progress': 'Devam ediyor',
  done: 'Tamamlandı',
}

export const PRIORITY_LABELS = {
  low: 'Düşük',
  medium: 'Orta',
  high: 'Yüksek',
}
