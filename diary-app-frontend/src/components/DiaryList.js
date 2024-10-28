import React from "react";
import {useNavigate} from 'react-router-dom';

//日記を表示するコンポーネント
const DiaryList = ({diaries}) => {
  //TODO:削除で削除ができるようにする
  const navigate = useNavigate();
  return (
  <div className="diaryList">
      <h1>日記一覧</h1>
      <button onClick = {()=>navigate("/diary_form")}>新規作成</button><br /><br />
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
