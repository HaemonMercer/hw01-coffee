# 手沖咖啡入門（React 版）

把老師提供的 HTML + CSS 靜態網頁改寫成 React（Vite）專案。

## 元件結構（7 個）

```
src/
├── App.jsx              組合所有元件
├── main.jsx             進入點，載入 style.css
├── style.css            原本的 CSS（未修改）
├── assets/coffee.svg
└── components/
    ├── Header.jsx       頁首
    ├── Nav.jsx          導覽列
    ├── Intro.jsx        主題介紹
    ├── Steps.jsx        沖煮步驟
    ├── Tools.jsx        需要的器材
    ├── Subscribe.jsx    訂閱電子報
    └── Footer.jsx       頁尾
```

## HTML → JSX 改了哪些地方

| 原本 HTML | JSX |
|---|---|
| `class="..."` | `className="..."` |
| `<label for="email">` | `<label htmlFor="email">` |
| `onclick="subscribe()"` | `onClick={handleSubscribe}` |
| `<br>`、`<hr>`、`<img>`、`<input>` | 自我閉合：`<br />`、`<hr />`、`<img />`、`<input />` |
| `<img src="images/coffee.svg">` | `import coffeeImg from '../assets/coffee.svg'` → `src={coffeeImg}` |
| `<script>` 裡的全域函式 | 寫在 `Subscribe` 元件裡 |

## 本機執行

```bash
npm install
npm run dev
```

## 發布到 GitHub Pages

1. 在 GitHub 建一個新的 repo（例如 `hw01-react`）。
2. 在專案資料夾執行：
   ```bash
   git init
   git add .
   git commit -m "hw01: 改寫成 React"
   git branch -M main
   git remote add origin https://github.com/<你的帳號>/hw01-react.git
   git push -u origin main
   ```
3. 到 repo 的 **Settings → Pages**，把 **Source** 設成 **GitHub Actions**。
4. 到 **Actions** 分頁等 `Deploy to GitHub Pages` 跑完（約 1 分鐘），
   網址就是 `https://<你的帳號>.github.io/hw01-react/`。

之後每次 push 到 `main`，網站都會自動更新（設定在 `.github/workflows/deploy.yml`）。
