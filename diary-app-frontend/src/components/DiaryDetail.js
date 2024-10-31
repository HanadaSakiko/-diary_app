import { useState, useEffect } from 'react';
import { useParams,useNavigate} from 'react-router-dom';
import diaryService from "../services/diaryService";

//詳細画面を表示するコンポーネントを作成
const DiaryDetail = ({ refreshDiaries }) => {
  //特定の日記データをセット
  const [diary, setDiary] = useState(null);
  //ルートパラメーターからidを取得し、取得したオブジェクトを数値にする
  const params = useParams();
  const diaryId = parseInt(params["id"]);
  
  useEffect(() => {
    if (diaryId) {
      diaryService.getDiaryDetail(diaryId).then(response => {
        setDiary(response.data);
      }).catch(err => {
        console.error("Error get diary: ", err);
        alert("日記のデータ取得に失敗しました");
      });
    }
  }, [diaryId]);

    //日記の削除処理
    const deleteDiary = (id, diaries) => {
      const result =  window.confirm("削除します。本当に宜しいですか？");
      if (result) {
        diaryService.deleteDiary(id).then(() => {
          alert("指定された日記を削除しました");
          refreshDiaries();
          navigate("/diaries"); // 削除完了後に一覧画面に遷移
        })
          .catch(err => {
            console.error("Error delete diary: ", err);
            alert("指定された日記の削除に失敗しました");
        })
      }
    }

  const navigate = useNavigate();

  //指定された日記が存在していれば、詳細画面を表示し、そうでなければページにメッセージを表示
  if (diary) {
  return (
      <div className="diaryBox diaryDetail">
        <h1>日記の詳細</h1>
      <ul className="contentsBox">
        <div className="contents">
          <div className="contentsHead">
            <li>{diary.title}</li>
            <li>{diary.date}</li>
          </div>
          <li >{diary.content}</li>
        </div >
        <div className="buttonArea">
          <button className="successBtn"onClick = {()=>navigate(`/diaries/edit/${diaryId}`)}>編集</button>
          <button className="deleteBtn" onClick={() => deleteDiary(diaryId)}>削除</button>
        </div>
      </ul>
      </div>
    );
  } else {
    <div>
      <p>この日記は存在しない、または削除されたため、表示できません。</p>
    </div>;
  }
}
export default DiaryDetail;
