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
      tools: ["後から入力"], year: "後から入力",
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
      tools: ["後から入力"], year: "後から入力",
      images: ["images/projects/promotional/readify-app-flyer.png"],
      placeholderLabel: "APP FLYER", placeholderCount: 1, url: ""
    },
    {
      title: "Brand Identity Cards",
      category: "print",
      categoryLabel: "Print",
      overview: "ブランドの第一印象を端的に伝える、名刺・コミュニケーションカードのデザイン。",
      target: "取引先・プロジェクトパートナー",
      purpose: "信頼感の醸成とブランド認知の統一",
      concept: "情報の優先順位と余白を丁寧に設計し、手に取った瞬間にブランドの姿勢が伝わる印刷物へ。",
      role: ["Planning", "Direction", "Design"],
      tools: ["Adobe Illustrator"], year: "2026",
      images: [], placeholderLabel: "PRINT PROJECT", placeholderCount: 3, url: ""
    },
    {
      title: "In-store Promotion Series",
      category: "promotional",
      categoryLabel: "Promotional",
      overview: "店頭での認知と購買行動を促す、POP・ポスターのビジュアル展開。",
      target: "店舗来訪者・購入検討層",
      purpose: "商品の理解促進と店頭での購買喚起",
      concept: "短い接触時間でも価値が伝わるよう、コピーと視線誘導を一体で設計。",
      role: ["Planning", "Copywriting", "Direction", "Design"],
      tools: ["Canva", "Adobe Photoshop"], year: "2026",
      images: [], placeholderLabel: "PROMOTIONAL PROJECT", placeholderCount: 2, url: ""
    },
    {
      title: "Campaign Landing Page",
      category: "lp", categoryLabel: "Landing Page",
      overview: "サービスの価値を段階的に理解し、行動へつなげるキャンペーンLP。",
      target: "サービスに関心を持つ新規見込み顧客",
      purpose: "内容理解の促進と問い合わせ・参加登録の獲得",
      concept: "ファーストビューからCTAまで、読み手の疑問に順番に応える情報構成。",
      role: ["Planning", "Wireframing", "Copywriting", "Design"],
      tools: ["Wix Studio", "Adobe Photoshop"], year: "2026",
      images: [], placeholderLabel: "LANDING PAGE", placeholderCount: 3, url: ""
    },
    {
      title: "Social Campaign Visuals",
      category: "sns", categoryLabel: "SNS",
      overview: "ブランドのトーンを保ちながら、複数フォーマットへ展開したSNSクリエイティブ。",
      target: "スタートアップ・企業・イベント参加検討者",
      purpose: "イベント認知の拡大と参加登録の促進",
      concept: "フィード上での視認性と、連続して見たときのブランド一貫性を両立。",
      role: ["Planning", "Copywriting", "Design"],
      tools: ["Canva"], year: "2026",
      images: [], placeholderLabel: "SNS CREATIVE", placeholderCount: 6, url: ""
    }
  ],
  skills: {
    DESIGN: ["Graphic Design", "Promotional Design", "SNS Creative", "Landing Page Design", "Print Design"],
    MARKETING: ["Content Planning", "SNS Marketing", "Web Marketing", "Brand Communication"],
    DIRECTION: ["Creative Direction", "Project Management", "Content Direction"]
  },
  tools: ["Canva", "Adobe Illustrator", "Adobe Photoshop", "Wix Studio", "Google Workspace"],
  contact: { email: "your-email@example.com" }
};
