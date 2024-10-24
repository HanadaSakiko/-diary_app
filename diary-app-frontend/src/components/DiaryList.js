import React from "react";

//TODO:サンプルデータの配列 データベースから取得するため後ほど削除
const diaries = [
  {
    id: 1,
    date: '2024-10-18',
    title: '日記1',
    content: '内容1'
  },
  {
    id: 2,
    date: '2024-10-19',
    title: '日記2',
    content: '内容2'
  }
]


const DiaryList = () => {
  return (
    <div className="diaryList">
      {diaries.map((val, index) => (
        <>
          <li key={index}>{val.title}</li>
          <li key={index}>{val.date}</li>
          <button>削除</button>
        </>
      ))}
    </div>
  )
}

export default DiaryList;
