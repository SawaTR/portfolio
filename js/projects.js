/*
 * 作品・スキル・連絡先の編集はこのファイルだけで行えます。
 * images に画像パスを追加すると、プレースホルダーから実画像へ自動で切り替わります。
 */
const portfolioData = {
  projects: [
    {
      title: "Holiday Greeting Email Visual",
      category: "promotional",
      categoryLabel: "Promotional / Email",
      overview: "年末年始のご挨拶を届ける、グリーティングメール用のシーズンビジュアル。",
      target: "顧客・取引先・関係者",
      purpose: "一年の感謝を伝え、ブランドとの継続的な関係を育む",
      concept: "深いブルーと雪景色を基調に、光や泡を重ねたツリーで、穏やかさと祝祭感を表現。",
      role: ["Design"],
      tools: ["後から入力"], year: "2025",
      images: ["images/projects/promotional/holiday-greeting-email-2025.png"],
      placeholderLabel: "GREETING EMAIL", placeholderCount: 1, url: ""
    },
    {
      title: "Exhibition Digital Solutions Poster",
      category: "promotional",
      categoryLabel: "Promotional / Exhibition Poster",
      layout: "poster",
      overview: "展示会でサービスの理念と導入価値を伝える、デジタルソリューション紹介ポスター。",
      target: "展示会来場者・企業や公共団体の導入担当者",
      purpose: "サービスの認知獲得と、特徴・導入実績の短時間での理解促進",
      concept: "多様な人が活躍できるデジタル社会というメッセージを軸に、写真、コピー、導入メリット、実績を一枚の中で段階的に伝える構成。",
      role: ["Design"],
      tools: ["Adobe Illustrator"], year: "2025",
      images: ["images/projects/promotional/exhibition-digital-solutions-poster.png"],
      placeholderLabel: "EXHIBITION POSTER", placeholderCount: 1, url: ""
    },
    {
      title: "Readify App Flyer",
      category: "promotional",
      categoryLabel: "Promotional / Flyer",
      layout: "poster",
      overview: "文字の読みやすさを一人ひとりに合わせるアプリ「Readify」の紹介フライヤー。",
      target: "読みづらさを感じる方・支援者・教育関係者・サービス導入検討者",
      purpose: "アプリの機能と利用対象を分かりやすく伝え、サービスへの関心と利用を促す",
      concept: "親しみやすい手描きモチーフと明快な情報設計により、アクセシビリティ機能を難しく感じさせずに紹介。",
      role: ["Design"],
      tools: ["Adobe Illustrator"], year: "2025",
      images: ["images/projects/promotional/readify-app-flyer.png"],
      placeholderLabel: "APP FLYER", placeholderCount: 1, url: ""
    },
    {
      title: "Okinawa Resort Wedding Social Campaign",
      category: "sns",
      categoryLabel: "SNS / Campaign Creative",
      layout: "sns-portrait",
      overview: "沖縄リゾートウェディングのオンライン相談会を紹介する、複数投稿のSNSクリエイティブ。",
      target: "沖縄でのリゾートウェディングを検討するカップル",
      purpose: "オンライン相談会の認知拡大と、相談・問い合わせへの行動喚起",
      concept: "沖縄の開放感とウェディングの幸福感を生かしながら、親しみやすい手書き文字で相談の気軽さを表現。投稿全体で統一したトーンを設計。",
      role: ["Content Planning", "Copywriting", "Design"],
      tools: ["Canva"], year: "2023",
      images: [
        "images/projects/sns/okinawa-wedding-01.jpg",
        "images/projects/sns/okinawa-wedding-02.jpg",
        "images/projects/sns/okinawa-wedding-03.jpg",
        "images/projects/sns/okinawa-wedding-04.jpg",
        "images/projects/sns/okinawa-wedding-05.jpg"
      ],
      placeholderLabel: "SNS CREATIVE", placeholderCount: 5, url: ""
    }
  ],
  skills: {
    DESIGN: ["Graphic Design", "Promotional Design", "SNS Creative", "Landing Page Design", "Print Design"],
    MARKETING: ["Content Planning", "SNS Marketing", "Web Marketing", "Brand Communication"],
    DIRECTION: ["Creative Direction", "Project Management", "Content Direction"]
  },
  tools: ["Canva", "Adobe Illustrator", "Adobe Photoshop", "Wix Studio", "Google Workspace"],
  contact: { email: "sawawa.0127.kinaco@gmail.com" }
};
