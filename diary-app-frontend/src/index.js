import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';

// Appコンポーネントをルート要素にレンダリング
ReactDOM.render(
  <>
    <>
      <li>タイトル１</li>
      <li>2024/10/18</li>
      <button>削除</button>
    </>
    <>
      <li>タイトル2</li>
      <li>2024/10/19</li>
      <button>削除</button>
    </>
  </>
  , // Appコンポーネントを描画
  document.getElementById('root') // HTMLファイル内のid="root"の要素に描画
);
