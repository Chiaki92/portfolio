/* ==========================================================
   作品データ
   ここに全8作品の情報をまとめています。
   作品を追加・変更したい場合はこの配列を編集するだけでOK。
========================================================== */
const worksData = [
  {
    id: 1,
    number: "01",
    name: "名言カウントダウン",
    tagline: "毎日の名言とイベントカウントダウン",
    description: "イベントまでの残り時間をリアルタイムでカウントダウン表示し、毎日ランダムな名言（ガチャ形式）を届けるWebアプリケーションです。",
    features: [
      "イベントまでのカウントダウン表示（3モード切替）",
      "名言ガチャ（カプセル落下アニメーション演出付き）",
      "X（Twitter）シェア機能",
      "マイイベントの追加・編集・削除",
      "11種類のカラーテーマ切替",
    ],
    tech: ["HTML/CSS/JS", "CSS Animations", "GAS", "Google Sheets", "html2canvas", "Web Share API"],
    url: "https://ming-yan-kauntodaun.onrender.com",
    color: "#7BA88C",
    emoji: "🌿",
    image: "images/01_meigen.jpg",
    category: "course",
  },
  {
    id: 2,
    number: "02",
    name: "Cafe Stock Manager",
    tagline: "老舗喫茶店向け在庫管理システム",
    description: "老舗喫茶店の現場課題（在庫の数え間違い・記録忘れ・買い忘れ）を解決するために開発した、リアルタイム在庫管理Webアプリケーションです。ロールベースアクセス制御や監査ログなど業務レベルの設計を盛り込んでいます。",
    features: [
      "入庫/出庫/廃棄/棚卸をワンタップで記録",
      "不足品の自動アラート＆買い物リスト",
      "ロールベースアクセス制御",
      "メール連携（Gmail SMTP）",
      "全履歴の完全記録（監査証跡）",
    ],
    tech: ["Python", "Flask", "SQLite", "Flask-Login", "Bootstrap 5", "Jinja2", "Gmail SMTP"],
    url: "https://cafe-stock-6syp.onrender.com",
    color: "#8B7355",
    emoji: "☕",
    image: "images/02_cafestock.png",
    category: "course",
  },
  {
    id: 3,
    number: "03",
    name: "喫茶 吉田",
    tagline: "1974年創業の喫茶店Webサイト",
    description: "架空の老舗喫茶店のWebサイトです。HTML/CSS/JavaScriptのみで構成し、カルーセル・ハンバーガーメニュー・画像ズームなどをバニラJSで実装。セピアフィルターでレトロな世界観を演出しています。",
    features: [
      "画像カルーセル（自動＋手動操作）",
      "ハンバーガーメニュー",
      "メニュー画像のホバーズーム",
      "アコーディオンQ&A",
      "Google Maps埋め込み",
    ],
    tech: ["HTML5", "CSS3", "Vanilla JS", "Google Fonts", "Font Awesome", "Google Maps Embed"],
    url: "https://cafe-website2.onrender.com",
    color: "#A0522D",
    emoji: "🏠",
    image: "images/03_cafe.png",
    category: "course",
  },
  {
    id: 4,
    number: "04",
    name: "Re:find",
    tagline: "情報再発見サービス",
    description: "LINE Botにテキスト・URL・画像を送るだけで情報を保存し、エビングハウスの忘却曲線に基づくスケジュール（1→3→7→14→30→60日）で自動リマインドするWebサービスです。Azure OpenAIがタイトル生成とカテゴリ分類を自動で行います。",
    features: [
      "LINE Bot入力（テキスト・URL・画像）",
      "AI自動分類＆タイトル生成",
      "忘却曲線リマインド（6段階）",
      "Web UI（検索・フィルタ・一括操作）",
      "共有リンク生成",
      "マルチユーザー対応",
    ],
    tech: ["Python", "Flask", "Supabase", "Azure OpenAI", "LINE API", "GitHub Actions", "BeautifulSoup4"],
    url: "https://re-find.onrender.com",
    color: "#5B8FB9",
    emoji: "✨",
    image: "images/04_refind.jpg",
    category: "personal",
  },
  {
    id: 5,
    number: "05",
    name: "WFCイベントモニター",
    tagline: "イベント空き状況を自動監視＆LINE通知",
    description: "WFCの関西エリアのイベント空き状況を自動で監視し、変化があった際にLINEでリアルタイム通知するツールです。前回の状態と比較して空き復活・満席化などを検知し、Googleスプレッドシートに自動記録します。",
    features: [
      "空き状況の変化検知（5種類の通知）",
      "LINE通知（変化時のみ送信）",
      "Googleスプレッドシート連携",
      "Flask製Web UI",
      "マルチモード対応（CLI/Web/定時実行）",
    ],
    tech: ["Python", "Flask", "Selenium", "LINE Messaging API", "Google Sheets API", "macOS launchd"],
    url: null,
    color: "#D4A574",
    emoji: "📅",
    image: "images/05_wfc.png",
    category: "personal",
  },
  {
    id: 6,
    number: "06",
    name: "Family Calendar App",
    tagline: "家族スケジュール管理コンシェルジュ",
    description: "共働き家庭の「見えない家事」を減らすため、家族のGoogleカレンダーを一元管理し、AIによるスケジュール分析・自動分類・空き時間検索を実現するWebアプリケーションです。自然言語パーサーを自作し、日本語での空き時間検索に対応しています。",
    features: [
      "夫婦のカレンダー統合表示",
      "自然言語による空き時間検索",
      "予定の自動分類",
      "画像OCRで一括カレンダー登録",
      "ジム自動予約（Selenium）",
      "預け先情報の管理",
    ],
    tech: ["Python", "Flask", "Google Calendar API", "OAuth 2.0", "Selenium", "OpenRouter API", "Gemini 2.5 Flash", "Web Speech API"],
    url: null,
    color: "#E8836B",
    emoji: "👨‍👩‍👧",
    image: null,
    category: "personal",
  },
  {
    id: 7,
    number: "07",
    name: "楽天EC最安値検索",
    tagline: "AI単価計算＆お得提案アプリ",
    description: "日用品のEC最安値を自動検索し、AIが商品名から数量を自動抽出して単価計算・お得提案を行うWebアプリです。楽天市場から最大3,000件を取得し、ポイント還元を考慮した実質単価でランキング化します。",
    features: [
      "日用品メモの登録＆一括検索",
      "AIによる商品名解析（5件並列処理）",
      "ポイント還元考慮の実質単価ランキング",
      "SSEリアルタイム進捗表示",
      "二段階カテゴリフィルタリング",
    ],
    tech: ["Python", "FastAPI", "SQLAlchemy", "SQLite", "HTMX", "Pico.css", "SSE", "楽天API", "OpenRouter API"],
    url: null,
    color: "#BF0000",
    emoji: "🛒",
    image: null,
    category: "personal",
  },
  {
    id: 8,
    number: "08",
    name: "習い事プランナー",
    tagline: "週間スケジュール管理アプリ",
    description: "子どもの習い事を一元管理し、複数のスケジュールパターンを視覚的に比較できる家族向けWebアプリケーションです。最大3パターンの組み合わせを週間カレンダー上で並べて比較し、最適なスケジュールを検討できます。",
    features: [
      "習い事候補の一覧管理（CSV出力対応）",
      "最大3パターンの週間カレンダー比較",
      "時間帯重複の自動検出",
      "合計月謝・曜日別負荷の自動集計",
      "Googleスプレッドシート連携（オプション）",
    ],
    tech: ["Python", "Flask", "Vanilla JS", "CSS Grid", "Flexbox", "Google Sheets API", "JSON"],
    url: "https://family-schedule-planner-demo.onrender.com",
    color: "#9B72AA",
    emoji: "🎹",
    image: "images/08_naraigoto.jpg",
    category: "personal",
  },
];

/* ==========================================================
   現在のフィルター状態を保持する変数
========================================================== */
let currentFilter = "all";

/* ==========================================================
   カード一覧を描画する関数
   filterValue: "all" / "personal" / "course"
========================================================== */
function renderCards(filterValue) {
  const grid = document.getElementById("worksGrid");
  // グリッドの中身を一旦空にする
  grid.innerHTML = "";

  // フィルターに合致する作品だけを抽出
  const filtered = filterValue === "all"
    ? worksData
    : worksData.filter(w => w.category === filterValue);

  // 各作品のカードHTMLを生成して追加
  filtered.forEach((work, index) => {
    const card = document.createElement("div");
    card.className = "work-card";
    // data属性に作品IDを保存（クリック時にどの作品か特定するため）
    card.dataset.id = work.id;

    // カードのサムネイル背景色を各作品のテーマカラーから生成
    const bgGradient = `linear-gradient(135deg, ${work.color}18, ${work.color}35)`;

    // カテゴリのクラス名を決定
    const catClass = work.category === "personal" ? "personal" : "course";
    const catLabel = work.category === "personal" ? "個人開発" : "講座課題";

    // 表示する技術タグ（最大3つ＋残り数）
    const visibleTags = work.tech.slice(0, 3)
      .map(t => `<span class="card-tag">${t}</span>`)
      .join("");
    const moreTags = work.tech.length > 3
      ? `<span class="card-tag-more">+${work.tech.length - 3}</span>`
      : "";

    // URLがある作品にはリンクボタンを表示
    const urlBtn = work.url
      ? `<a class="card-url-btn" href="${work.url}" target="_blank" rel="noopener noreferrer" onclick="event.stopPropagation()">
           🔗 サイトを見る
         </a>`
      : "";

    // サムネイル部分：画像がある場合はスクリーンショットを表示、なければ絵文字
    const thumbnailContent = work.image
      ? `<img class="card-img" src="${work.image}" alt="${work.name}">`
      : `<span class="card-emoji">${work.emoji}</span>`;

    // 画像がない場合はグラデーション背景を使用
    const thumbnailStyle = work.image
      ? ""
      : `style="background: ${bgGradient}"`;

    card.innerHTML = `
      <div class="card-thumbnail" ${thumbnailStyle}>
        ${thumbnailContent}
        <span class="card-number" style="color: ${work.color};">${work.number}</span>
        <span class="card-category ${catClass}">${catLabel}</span>
      </div>
      <div class="card-body">
        <h3 class="card-title">${work.name}</h3>
        <p class="card-tagline">${work.tagline}</p>
        <div class="card-tags">${visibleTags}${moreTags}</div>
        ${urlBtn}
      </div>
    `;

    // カードクリックでモーダルを開く
    card.addEventListener("click", () => openModal(work));

    grid.appendChild(card);

    // 少し遅延を入れてカードを表示（スタッガーアニメーション）
    setTimeout(() => {
      card.classList.add("visible");
    }, 80 * index);
  });
}

/* ==========================================================
   フィルターボタン切替
========================================================== */
function filterWorks(value) {
  currentFilter = value;

  // ボタンのアクティブ状態を切替
  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  // クリックされたボタンをアクティブに
  event.target.classList.add("active");

  // カードを再描画
  renderCards(value);
}

/* ==========================================================
   モーダルを開く関数
   work: 作品データオブジェクト
========================================================== */
function openModal(work) {
  const overlay = document.getElementById("modalOverlay");
  const header = document.getElementById("modalHeader");
  const body = document.getElementById("modalBody");

  // モーダルヘッダー部分を組み立て
  header.innerHTML = `
    <button class="modal-close" onclick="closeModal(event)">✕</button>
    <div class="modal-title-row">
      <span class="modal-emoji">${work.emoji}</span>
      <div>
        <span class="modal-number" style="color: ${work.color}">${work.number}</span>
        <h2 class="modal-name">${work.name}</h2>
      </div>
    </div>
    <p class="modal-tagline">${work.tagline}</p>
  `;
  // ヘッダー下ボーダーを作品のテーマカラーに
  header.style.borderBottom = `3px solid ${work.color}22`;

  // 機能リストのHTMLを生成
  const featuresHtml = work.features
    .map(f => `<li>${f}</li>`)
    .join("");

  // 技術タグのHTMLを生成
  const tagsHtml = work.tech
    .map(t => `<span class="modal-tag" style="background: ${work.color}11; border: 1px solid ${work.color}33">${t}</span>`)
    .join("");

  // URLセクション（URLがある作品のみ表示）
  const urlHtml = work.url
    ? `<div class="modal-section">
         <div class="modal-url" style="background: ${work.color}08; border: 1px solid ${work.color}22">
           <span class="modal-url-label">🔗 サイトを見る</span>
           <a class="modal-url-link" href="${work.url}" target="_blank" rel="noopener noreferrer" style="color: ${work.color}">${work.url}</a>
         </div>
       </div>`
    : "";

  // モーダル本文を組み立て
  body.innerHTML = `
    <div class="modal-section">
      <h4 class="modal-section-title" style="color: ${work.color}">▍概要</h4>
      <p class="modal-desc">${work.description}</p>
    </div>
    <div class="modal-section">
      <h4 class="modal-section-title" style="color: ${work.color}">▍主な機能</h4>
      <ul class="modal-features" style="--bullet-color: ${work.color}">
        ${featuresHtml}
      </ul>
    </div>
    <div class="modal-section">
      <h4 class="modal-section-title" style="color: ${work.color}">▍使用技術</h4>
      <div class="modal-tags">${tagsHtml}</div>
    </div>
    ${urlHtml}
  `;

  // 機能リストのビュレットに作品のテーマカラーを適用
  body.querySelectorAll(".modal-features li").forEach(li => {
    li.style.setProperty("--bullet-color", work.color);
    li.querySelector("::before")
  });

  // オーバーレイを表示
  overlay.classList.add("active");
  // モーダル表示中はページスクロールを無効化
  document.body.style.overflow = "hidden";
}

/* ==========================================================
   モーダルを閉じる関数
========================================================== */
function closeModal(event) {
  // モーダル内部のクリックでは閉じない（stopPropagation済み）
  const overlay = document.getElementById("modalOverlay");
  overlay.classList.remove("active");
  // ページスクロールを復活
  document.body.style.overflow = "";
}

/* ==========================================================
   モバイルメニューの開閉
========================================================== */
function toggleMenu() {
  document.getElementById("nav").classList.toggle("open");
}

function closeMenu() {
  document.getElementById("nav").classList.remove("open");
}

/* ==========================================================
   スクロール時のカード表示アニメーション
   画面内に入ったカードをふわっと表示させる
========================================================== */
function setupScrollAnimation() {
  // IntersectionObserver: 要素が画面内に入ったかを監視する仕組み
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);  // 一度表示したら監視を解除
        }
      });
    },
    { threshold: 0.1 }  // 要素の10%が画面に入ったら発火
  );

  // 全カードを監視対象に追加
  document.querySelectorAll(".work-card").forEach(card => {
    observer.observe(card);
  });
}

/* ==========================================================
   Escキーでモーダルを閉じる
========================================================== */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeModal(e);
  }
});

/* ==========================================================
   初期表示
========================================================== */
renderCards("all");