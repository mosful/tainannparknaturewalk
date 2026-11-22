import { createFileRoute } from "@tanstack/react-router";

const title = "週末自然散步｜台南公園（虛構教學活動）";
const desc = "2026/12/12 上午 9:00–12:00，在台南公園一起慢走、觀察樹木與鳥類。本活動為虛構教學示範。";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: desc },
      { property: "og:title", content: title },
      { property: "og:description", content: desc },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const schedule = [
  ["09:00", "集合報到、暖身伸展"],
  ["09:30", "樹木觀察：認識老榕樹與園內植物"],
  ["10:30", "水池周邊賞鳥、自然聲音聆聽"],
  ["11:30", "分享時間與自由交流"],
  ["12:00", "活動結束"],
];

function Index() {
  return (
    <div className="min-h-screen font-sans">
      <div className="bg-accent px-4 py-2 text-center text-sm font-medium text-accent-foreground">
        ⚠ 這是虛構教學活動，僅供網頁製作示範，並非真實舉辦。
      </div>

      <header className="bg-hero px-6 pb-20 pt-16 text-center">
        <p className="text-sm tracking-[0.3em] text-primary">WEEKEND NATURE WALK</p>
        <h1 className="mt-4 font-display text-5xl font-bold md:text-6xl">週末自然散步</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground">
          放慢腳步，在城市裡的綠意中呼吸、觀察、聆聽。
        </p>
        <div className="mt-8 inline-flex flex-wrap justify-center gap-3">
          <span className="rounded-full bg-card px-5 py-2 shadow-sm">📅 2026/12/12（六）</span>
          <span className="rounded-full bg-card px-5 py-2 shadow-sm">🕘 09:00–12:00</span>
          <span className="rounded-full bg-card px-5 py-2 shadow-sm">📍 台南公園</span>
        </div>
      </header>

      <main className="mx-auto max-w-4xl space-y-16 px-6 py-16">
        <section>
          <h2 className="font-display text-3xl font-bold">活動介紹</h2>
          <p className="mt-4 leading-8 text-muted-foreground">
            台南公園是台南市區歷史悠久的大型公園，園內有百年老樹、水池與豐富的鳥類。
            這次散步由（虛構的）自然導覽員帶領，以輕鬆的步調走訪公園，
            認識常見植物、聆聽鳥鳴，適合親子、朋友或一個人來放鬆身心。
          </p>
          <ul className="mt-6 grid gap-4 sm:grid-cols-3">
            {[["🌳", "樹木觀察"], ["🐦", "賞鳥聆聽"], ["🚶", "輕鬆慢走約 3 公里"]].map(([i, t]) => (
              <li key={t} className="rounded-2xl border bg-card p-5 text-center">
                <div className="text-3xl">{i}</div>
                <div className="mt-2 font-medium">{t}</div>
              </li>
            ))}
          </ul>
        </section>

        <section className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-display text-3xl font-bold">時間地點</h2>
            <dl className="mt-4 space-y-3">
              <div><dt className="text-sm text-muted-foreground">日期</dt><dd className="font-medium">2026 年 12 月 12 日（星期六）</dd></div>
              <div><dt className="text-sm text-muted-foreground">時間</dt><dd className="font-medium">上午 9:00 – 12:00</dd></div>
              <div><dt className="text-sm text-muted-foreground">地點</dt><dd className="font-medium">台南公園（台南市北區公園南路 89 號）</dd></div>
              <div><dt className="text-sm text-muted-foreground">建議攜帶</dt><dd className="font-medium">水壺、帽子、好走的鞋</dd></div>
            </dl>
          </div>
          <div className="rounded-2xl bg-secondary p-6">
            <h3 className="font-display text-xl font-bold text-secondary-foreground">當天流程</h3>
            <ol className="mt-4 space-y-3">
              {schedule.map(([t, d]) => (
                <li key={t} className="flex gap-4">
                  <span className="font-semibold text-primary">{t}</span>
                  <span>{d}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section>
          <h2 className="font-display text-3xl font-bold">集合地圖</h2>
          <p className="mt-2 text-muted-foreground">集合點：台南公園正門（公園南路側）入口處。</p>
          <div className="mt-4 overflow-hidden rounded-2xl border">
            <iframe
              title="台南公園集合地圖"
              className="h-96 w-full"
              loading="lazy"
              src="https://www.openstreetmap.org/export/embed.html?bbox=120.2070%2C22.9950%2C120.2190%2C23.0040&layer=mapnik&marker=22.9985%2C120.2125"
            />
          </div>
          <a
            className="mt-3 inline-block text-primary underline"
            href="https://www.google.com/maps/search/?api=1&query=台南公園"
            target="_blank"
            rel="noreferrer"
          >
            在 Google 地圖開啟 →
          </a>
        </section>
      </main>

      <footer className="border-t px-6 py-8 text-center text-sm text-muted-foreground">
        本頁為虛構教學活動示範，活動內容、導覽員與流程皆為假設。
      </footer>
    </div>
  );
}
