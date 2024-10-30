import { useState, useEffect } from 'react';
import { useParams,useNavigate} from 'react-router-dom';
import diaryService from "../services/diaryService";

//詳細画面を表示するコンポーネントを作成
const DiaryDetail = () => {
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
  //日記が見つかった場合と見つからなかった場合で返す処理を分ける
  if (diary) {
  return (
      <div>
        <h1>日記の詳細</h1>
        <ul>
          <li>{diary.title}</li>
          <li>{diary.date}</li>
          <li>{diary.content}</li>
          <button onClick = {()=>navigate(`/diaries/edit/${diaryId}`)}>編集</button>
        <button onClick={() => deleteDiary(diaryId)}>削除</button>
        </ul>
      </div>
    );
  } else {
    <div>Loading...</div>;
  }
}
export default DiaryDetail;
