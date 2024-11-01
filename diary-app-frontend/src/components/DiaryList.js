import React from "react";
import { useNavigate, Link } from 'react-router-dom';
import diaryService from "../services/diaryService";

// 一覧画面を表示するコンポーネント
const DiaryList = ({ diaries, deleteDiary }) => {
  const navigate = useNavigate();

    // //日記の削除処理
    // const deleteDiary = (id) => {
    //   const result = window.confirm("削除します。本当に宜しいですか？");
    //   if (result) {
    //     diaryService.deleteDiary(id).then(() => {
    //       alert("指定された日記を削除しました");
    //       refreshDiaries(); //削除後に最新のデータを取得
    //       navigate("/diaries"); // 削除完了後に一覧画面に遷移
    //     })
    //       .catch(err => {
    //         console.error("Error delete diary: ", err);
    //         alert("指定された日記の削除に失敗しました");
    //     })
    //   }
    // }

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
            {/* <button className="deleteBtn" onClick={() => deleteDiary(val.id)}>削除</button> */}
            <button className="deleteBtn" onClick={deleteDiary}>削除</button>
            </li>
        ))}
      </ul>
    </  div>
  )
}

export default DiaryList;
