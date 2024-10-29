import React from "react";
import {useNavigate,Link} from 'react-router-dom';

//日記を表示するコンポーネント
const DiaryList = ({diaries}) => {
  //TODO:削除で削除ができるようにする
  const navigate = useNavigate();
  return (
  <div className="diaryList">
      <h1>日記一覧</h1>
      <button onClick = {()=>navigate("/diary_form")}>新規作成</button><br /><br />
      <ul >
        {diaries.map((val) => (
          <Link to={`/diaries/${val.id}`}>
            <li key ={val.id}>
              <span>{val.title}</span>
              <span>{val.date}</span>
              <button onClick="">削除</button>
            </li>
          </Link>
        ))}
      </ul>
    </  div>
  )
}

export default DiaryList;
