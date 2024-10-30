import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import diaryService from "../services/diaryService";


// 日記を表示するコンポーネント
const DiaryList = ({ diaries }) => {
  
    //削除ボタンを押下したときの処理
    const deleteDiary = (id) => {
      const result = window.confirm("削除します。本当に宜しいですか？");
      if (result) {
        diaryService.deleteDiary(id).then(() => {
          alert("指定された日記を削除しました");
          //TODO:一覧画面に遷移する処理をここに
        })
          .catch(err => {
            console.error("Error delete diary: ", err);
            alert("指定された日記の削除に失敗しました");
        })
      }
    }

  const navigate = useNavigate();
  return (
  <div className="diaryList">
      <h1>日記一覧</h1>
      <button onClick = {()=>navigate("/diary_form")}>新規作成</button><br /><br />
      <ul >
        {diaries.map((val) => (
            <li key ={val.id}>
              <Link to={`/diaries/${val.id}`}>
                <span>{val.title}</span>
              </Link>
              <span>{val.date}</span>
              <button onClick={() => deleteDiary(val.id)}>削除</button>
            </li>
        ))}
      </ul>
    </  div>
  )
}

export default DiaryList;
