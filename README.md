# 手沖咖啡入門（React 版）

把老師提供的 HTML + CSS 靜態網頁改寫成 React（Vite）專案。

## 元件結構（7 個）

```
src/
├── App.jsx              組合所有元件
├── App.css              原本 style.css 的內容（未修改）
├── index.css            已清空
├── main.jsx             進入點
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
