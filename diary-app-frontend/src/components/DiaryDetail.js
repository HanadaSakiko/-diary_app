import { useState, useEffect } from 'react';
import { useParams,useNavigate} from 'react-router-dom';
import diaryService from "../services/diaryService";

//詳細画面を表示するコンポーネントを作成
const DiaryDetail = ({deleteDiary}) => {
  const navigate = useNavigate();
  //特定の日記データをセット
  const [diary, setDiary] = useState(null);
  //idを取得し、取得したidのオブジェクトを数値に変換
  const params = useParams();
  const diaryId = parseInt(params["id"]);
  
  //特定の日記データ取得
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

  //指定された日記が存在していれば、詳細画面を表示。そうでなければページにメッセージを表示
  if (diary) {
  return (
      <div className="diaryBox diaryDetail">
        <h1>日記の詳細</h1>
      <ul className="FormArea">
        <div className="contents">
          <div className="contentsHead">
            <li>{diary.title}</li>
            <li>{diary.date}</li>
          </div>
          <li >{diary.content}</li>
        </div >
        <div className="buttonArea">
          <button className="successBtn"onClick = {()=>navigate(`/diaries/edit/${diaryId}`)}>編集</button>
          <button className="deleteBtn" onClick={()=>deleteDiary(diaryId)}>削除</button>
        </div>
      </ul>
      </div>
    );
  } else {
    <div>
      <p>この日記は存在しない、または削除されたため、表示できません。</p>
    </div>
  }
}
export default DiaryDetail;
