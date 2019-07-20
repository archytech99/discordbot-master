# Create a Discord bot under 15 minutes

![discord](https://thomlom.dev/static/e8024b37121b1ad919b41f760940a115/8ff1e/cover.png)

**Discrod** adalah salah satu aplikasi obrolan yang populer saat ini, terutama untuk para gamer dan pengembang. Banyak orang menyukainya karena gratis, efisien, lintas platform, multi-fungsi dan lain-lain.

Ada beberapa hal yang dapat dilakukan pada Discord sebagai contoh, kamu mungkin menemukan salah satu dari beberapa server dikasih ucapan selamat, meningkatkan level kamu setelah kamu mengirim banyak pesan di server, mendengarkan musik, bermain game, untuk menendang atau melarang anggota, dll.

Lantas, bagaimana cara membuat bot discord? Ternyata tidaklah susah untuk membuat/mengembangkan bot discord. Jika mengikuti sesuai arahan tidak ada kata "_**Tidak bisa ...!**_" jadi, tanpa basa-basi mari kita mulai tentang cara membuat bot discord.

---

## Getting Started

Pada proyek kali ini, kamu butuh [Node.js](https://nodejs.org/en/) dan [npm](https://www.npmjs.com/) _atau_ [yarn](https://yarnpkg.com/lang/en/) sebelum memulainya. Dan seperti biasanya, kamu perlu melakukan beberapa pengaturan saat memulai proyek. Hal-hal yang perlu diperhatikan dalam proyek ini:

1. Mempersiapkan segala sesuatu yang dibutuhkan dalam proyek ini;
2. Buat aplikasi **Discord** dan ambil token untuk menggunakan **API** mereka;
3. Tambahkan bot ke server discord. Buat jika belum/tidak ada server discord; dan
4. Uji coba bot discord.

_**Mudah dilakukan jika tertib ikuti instruksi!**_

---

## Get that token

1. Kunjungi halaman [Discord’s Developer](https://discordapp.com/developers/applications/) dan klik pada **Create an application**
   ![developer_portal](https://thomlom.dev/static/bd4794b221302021bc1fff73f547216d/8ff1e/grab-token-1.png)
2. Isi kolom **NAME** dan pilih avatar sesuai selera kamu. Lalu klik **Save Changes**. Kamu akan melihat pesan umpan balik yang mengatakan "_All your edits have been carefully recorded_"
   ![general_information](https://thomlom.dev/static/89f20eb20f581c2f43bf1d60e3dd1690/8ff1e/grab-token-2.png)
3. Pada panel sebelah kiri, pilih menu **Bot** lalu klik **Add Bot**
   ![add_bot](https://thomlom.dev/static/294cfce4667e6c50dad939ce13402025/8ff1e/grab-token-3.png)
4. Jika muncul popup, klik **Yes, do it!**. Tergantung dari nama aplikasi kamu, kamu akan mendapat pesan error "_Too many users have this username, please try another_". Maka dari itu, pilih nama lain untuk aplikasi kamu
   ![already_taken](https://thomlom.dev/static/475f6d25d3be864260afc9387d6b32f6/8ff1e/grab-token-4.png)
5. Setelah itu, kamu akan mendapatkan pesan "_A wild bot has appeared!_"
   ![success](https://thomlom.dev/static/428e4f66dfb335bd3daac7cb098e4a75/8ff1e/grab-token-5.png)
6. Klik tombol **COPY** dan taruh di file `config.json` pada parameter `bot_token`

---

## Setup local project

1. Dalam proyek ini, **base-os** menggunakan **linux** bagi yang os **windows** harap bisa menyesuaikan
2. Duplikat project berikut ke folder lokal kamu, mis. **discordbot**
   ```bash
   git clone https://github.com/archytech99/discordbot-master.git
   ```
3. Didalam paket sudah terdapat printah/event yg sudah tersedia
   * kick, perintah untuk mengeluarkan member dari server discord
   * help, perintah untuk menampilkan daftar bantuan perintah yang tersedia
   * say, perintah untuk mengulangi pesan yang sudah diketik
   * welcome, pesan sambutan untuk member yang baru join server discord secara private (**DM**)
   * mention, membalas pesan member yang menyebut nickname bot discord
4. Buat file `config.json` lalu copy kode berikut dan update `"..."` sesuai informasi yang dibutuhkan
   ```json
   {
    "bot_name" : "...",
    "bot_prefix" : "...",
    "bot_token" : "...",
    "author" : "...",
    "email" : "..."
   }
   ```
5. Buka terminal masuk ke folder dimana proyek cloning tadi. Lalu ketik perintah perintah berikut
   ```bash
   npm install
   ```
   _note: Jika ada muncul pesan warning, harap disesuaikan dengan pesan tersebut_

Sejauh ini, kita sudah selesai untuk persiapan, mendapatkan token bot. Selanjutnya buat _link invitation_ untuk bot.

---

## Add our bot to server

1. Kembali ke [Developer Portal](https://discordapp.com/developers/applications/) dan klik **OAuth2** pada panel kiri. Dibawah **SCOPES**, pilih/cek **bot**, lalu, klik **Copy**. Untuk hak akses sesuaikan dengan kebutuhan
   ![oauth2](https://thomlom.dev/static/9a9aab43859445bf8790cd27782fa0e2/8ff1e/add-bot-server-1.png)
2. Buka tab baru pada browser kamu dan buka **URL's** yang sudah kamu salin tadi. Pilih server kamu dan klik **Authorize**
   ![authorize](https://thomlom.dev/static/4befaf0356af652821ad9a336a9bcd4d/8ff1e/add-bot-server-2.png)
3. Dan Selamat, bot kamu sudah barhasil join ke server kamu.
4. Untuk membuat status online pada bot kamu perlu ketik perintah
   ```bash
   npm start
   ```
5. Jika berjalan lancar, harusnya muncul seperti gambar berikut
   ![success_running](https://thomlom.dev/static/2e46e884b7398ac6a068075099fe31a9/54ef9/test-bot-1.png)
6. Kembali ke server kamu dan coba testimoni perintah yang sudah tersedia
