# TaskFlow Web

TaskFlow Web, tarayıcıda çalışan basit bir görev yöneticisidir (TODO App). Görev ekleyebilir, listeleyebilir, düzenleyebilir ve silebilirsiniz. Veriler tarayıcının `localStorage` alanında saklanır, sayfa yenilense de kaybolmaz.

**Canlı demo:** CANLI_LINK_BURAYA

## Ekran Görüntüsü

Ekran görüntüleri [`docs/screenshots/`](docs/screenshots/) klasöründedir.

<!-- Ekran görüntüsünü ekledikten sonra dosya adını aşağıya yazın -->
![TaskFlow Web ekran görüntüsü](docs/screenshots/EKRAN_GORUNTUSU_ADI.png)

## Kullanılan Teknolojiler

- [React](https://react.dev/) (JavaScript)
- [Vite](https://vite.dev/) (geliştirme sunucusu ve derleme)
- [Tailwind CSS](https://tailwindcss.com/) v4
- `localStorage` (veri saklama, backend yok)
- [Netlify](https://www.netlify.com/) (yayın)

## Özellikler

| İşlem | Açıklama |
|---|---|
| **Ekle** | Başlık (zorunlu), açıklama ve öncelik girilerek yeni görev eklenir. Başlık boşsa uyarı gösterilir. |
| **Listele** | Görevler kartlar halinde listelenir. Görev yoksa "Henüz görev yok" mesajı görünür. |
| **Güncelle** | "Düzenle" ile başlık, açıklama, öncelik ve durum değiştirilir. Durum rozetine tıklayarak hızlıca durum değiştirilebilir. |
| **Sil** | "Sil" butonu onay sorusundan sonra görevi kaldırır. |

Arayüz mobil uyumludur.

## Klasör Yapısı

```
.
├── index.html
├── netlify.toml
├── package.json
├── vite.config.js
├── docs/
│   └── screenshots/          # ekran görüntüleri
└── src/
    ├── main.jsx              # giriş noktası
    ├── App.jsx
    ├── index.css             # Tailwind içe aktarımı
    ├── interfaces/
    │   └── task.js           # görev veri modeli ve sabitler
    ├── components/
    │   ├── Header.jsx
    │   ├── TaskForm.jsx      # ekle / güncelle formu
    │   ├── TaskList.jsx
    │   └── TaskItem.jsx
    ├── pages/
    │   └── TasksPage.jsx     # state ve işlemler
    └── utils/
        └── storage.js        # localStorage okuma / yazma
```

## Kurulum

Node.js 20.19+ veya 22.12+ gereklidir.

```bash
npm install
npm run dev
```

Uygulama varsayılan olarak `http://localhost:5173` adresinde açılır.

Diğer komutlar:

```bash
npm run build     # üretim derlemesi (dist/ klasörü)
npm run preview   # derlenmiş sürümü önizleme
npm run lint      # kod denetimi
```

## Yayın

Proje Netlify ile yayınlanır. Ayarlar `netlify.toml` dosyasındadır (build komutu `npm run build`, yayın klasörü `dist`).
