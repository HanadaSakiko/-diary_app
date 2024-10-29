import { useState, useEffect } from 'react';
import { useParams} from 'react-router-dom';
import diaryService from "../services/diaryService";

//詳細画面を表示するコンポーネントを作成
const DiaryDetail = () => {
  //詳細画面、更新、削除に使用
  //特定の日記データをセット
  const [diary, setDiary] = useState(null);
  console.log(diary);

  //ルートパラメーターからidを取得し、取得したオブジェクトを数値にする
  const params = useParams();
  const id = parseInt(params["id"]);

  useEffect(() => {
      if (id) {
        diaryService.getDiaryDetail(id).then(response => {
          setDiary(response.data);
        }).catch(err => {
          console.error("Error get diary: ", err);
          alert("日記のデータ取得に失敗しました");
        });
    }
  }, [id]);

//日記が見つかった場合と見つからなかった場合で返す処理を分ける
  if (diary) {
    return (
      <div>
        <h1>日記の詳細</h1>
        <ul>
          <li>{diary.title}</li>
          <li>{diary.date}</li>
          <li>{diary.content}</li>
          <button>編集</button>
          <button>削除</button>
        </ul>
      </div>
    );
  } else {
    <div>Loading...</div>;
  }

}
export default DiaryDetail;
