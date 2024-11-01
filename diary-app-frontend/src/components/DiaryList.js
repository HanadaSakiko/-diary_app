import React from "react";
import { useNavigate, Link } from 'react-router-dom';

// 一覧画面を表示するコンポーネント
const DiaryList = ({ diaries, deleteDiary }) => {
  const navigate = useNavigate();
  return (
  <div className="diaryBox diaryList">
      <h1>日記一覧</h1>
      <button className="successBtn" onClick = {()=>navigate("/diary_form")}>新規作成</button><br /><br />
      <ul>
        {diaries.map((val) => (
            <li key={val.id}>
             <Link to={`/diaries/${val.id}`}>
              <p className="diary">
                <span>{val.title}</span>
                <span>{val.date}</span>
              </p>
            </Link>
            <button className="deleteBtn" onClick={()=>deleteDiary(val.id)}>削除</button>
            </li>
        ))}
      </ul>
    </  div>
  )
}

export default DiaryList;
