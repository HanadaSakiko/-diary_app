import React from "react";

//日記を表示するコンポーネント
const DiaryList = ({diaries}) => {
  //TODO:新規作成ボタンで日記新規作成フォームに遷移するようにする
  //TODO:削除で削除ができるようにする
  return (
    <div className="diaryList">
      <h1>日記一覧</h1>
      <button>新規作成</button><br /><br />
      <ul>
        {diaries.map((val, index) => (
            <li key ={index}>
              <span>{val.title}</span>
              <span>{val.date}</span>
              <button onClick="">削除</button>
            </li>
          ))}
        </ul>
    </  div>
  )
}

export default DiaryList;
