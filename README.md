# Sawako Tarukawa Design Portfolio

GitHub Pagesで無料公開できる、HTML・CSS・JavaScriptだけのポートフォリオサイトです。特別なビルド作業は不要です。

## まず知っておくこと

- 作品やスキルの内容は `js/projects.js` で管理します。
- 作品画像は `images/projects/` 以下のカテゴリー別フォルダに入れます。
- 文章を編集するときは、半角のダブルクォーテーション `"` を消さないでください。
- 編集前にフォルダを複製してバックアップしておくと安心です。

## 1. 新しい作品を追加する方法

1. `js/projects.js` をテキストエディタで開きます。
2. `projects: [` の中にある作品1件分の `{ ... }` をコピーします。
3. 最後の作品の後ろに半角カンマ `,` を置き、その下へ貼り付けます。
4. `title`、`overview`、`target` などを新しい作品の内容に変更します。
5. `category` は `print`、`promotional`、`lp`、`sns` のいずれかにします。
6. 保存して `index.html` を開き、表示を確認します。

主な項目は、作品名 `title`、カテゴリー `category`、概要 `overview`、対象者 `target`、目的 `purpose`、コンセプト `concept`、担当範囲 `role`、使用ツール `tools`、制作年 `year`、画像 `images`、外部URL `url` です。

## 2. 作品画像を追加する方法

1. 画像名は半角英数字とハイフンで付けます（例：`event-poster-01.jpg`）。
2. カテゴリーに合うフォルダへ画像を入れます。
   - 印刷物：`images/projects/print/`
   - 販促物：`images/projects/promotional/`
   - LP：`images/projects/lp/`
   - SNS：`images/projects/sns/`
3. `js/projects.js` の対象作品にある `images: []` を、次のように変更します。

```javascript
images: [
  "images/projects/print/event-card-front.jpg",
  "images/projects/print/event-card-back.jpg"
],
```

画像は上から順に表示されます。JPG、PNG、WebPを利用できます。表示速度を保つため、1枚あたり1MB以下を目安にしてください。

## 3. 作品画像を差し替える方法

同じファイル名の新しい画像で上書きするか、`images` に書かれたファイル名を新しい画像名に変更します。ブラウザに古い画像が残る場合は、再読み込みしてください。

## 4. 作品を削除する方法

`js/projects.js` で、削除したい作品の `{` から対応する `}` までを削除します。前後の作品を区切るカンマが余分になっていないか確認してください。画像ファイルは、不要ならカテゴリー別フォルダから別途削除できます。

## 5. 表示順を変更する方法

`js/projects.js` の `projects` 内では、上にある作品から順に表示されます。作品1件分の `{ ... }` を切り取り、表示したい位置へ移動してください。

## 6. プロフィールを変更する方法

- プロフィール文章：`index.html` の `PROFILE / CONTACT` セクション内を編集します。
- メールアドレス：`js/projects.js` の末尾付近にある `contact: { email: "your-email@example.com" }` を変更します。
- 公開前に必ず仮メールアドレスを実際の連絡先へ変更してください。

## 7. Skills / Toolsを変更する方法

`js/projects.js` の `skills` と `tools` を編集します。追加時は項目をダブルクォーテーションで囲み、項目同士を半角カンマで区切ります。削除時は対象項目と隣接するカンマを削除します。

## 8. GitHubへアップロードする方法

1. [GitHub](https://github.com/) で無料アカウントを作成し、ログインします。
2. 右上の `+` → `New repository` を選びます。
3. Repository name に `portfolio` と入力します。
4. 公開する場合は `Public` を選び、`Create repository` を押します。
5. 作成された画面の `uploading an existing file` を押します。
6. この `portfolio` フォルダの中身（`index.html`、`css`、`js`、`images`、`README.md`）をアップロード欄へドラッグします。`portfolio` フォルダ自体を入れ子にしないでください。
7. `Commit changes` を押します。

## 9. GitHub Pagesを有効にする方法

1. リポジトリ上部の `Settings` を開きます。
2. 左メニューの `Pages` を開きます。
3. `Build and deployment` の Source で `Deploy from a branch` を選びます。
4. Branch で `main` と `/(root)` を選び、`Save` を押します。
5. 公開処理には数分かかることがあります。

## 10. 公開URLを確認する方法

Pages設定画面に `Your site is live at ...` と表示されます。通常は `https://GitHubユーザー名.github.io/portfolio/` です。表示されない場合は数分待って再読み込みしてください。

## 11. 公開後に作品を追加・更新する方法

1. GitHubのリポジトリで変更したいファイルを開きます。
2. 鉛筆マークから内容を編集するか、`Add file` → `Upload files` で画像をアップロードします。
3. 画面下の `Commit changes` を押します。
4. 数分後、公開サイトにも変更が反映されます。

作品を追加する場合は、先に画像を該当フォルダへアップロードし、その後 `js/projects.js` に作品データと画像パスを追加すると分かりやすいです。

## ローカルで確認する方法

`index.html` をダブルクリックするとブラウザで確認できます。より確実に確認する場合は、このフォルダで簡易サーバーを起動して `http://localhost:8000` を開きます。

```bash
python3 -m http.server 8000
```

## OGP画像

SNSでURLを共有した際の画像は `images/meta/og-placeholder.png` です。公開前に、同じファイル名・横1200px × 縦630px程度の画像へ差し替えてください。
