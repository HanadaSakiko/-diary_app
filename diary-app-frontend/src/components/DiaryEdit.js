import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import diaryService from "../services/diaryService";

const DiaryEdit = ({ refreshDiaries }) => {
  const navigate = useNavigate();
  //初期値を空オブジェクトとして設定
  const [diary, setDiary] = useState({title:"",content:""});
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

  //フォームに入力された際の日記のタイトルの値
  const changeTitle = (e) => {
    setDiary({...diary, title: e.target.value});
  }
 //フォームに入力された際の日記の内容の値
  const changeContent = (e) => {
    setDiary({ ...diary,content:e.target.value });
  }

  //日記のタイトルと内容が入力されていれば更新処理、そうでなければエラー
  const updateDiary = () => {
    if (diary.title && diary.content) {
      diaryService.updateDiary(diaryId,diary.title,diary.content).then(() => {
        alert("日記を更新して保存しました");
        refreshDiaries(); //更新後の日記のデータを取得する
        navigate("/diaries"); //更新後一覧画面に遷移
      })
        .catch(err => {
          console.error("Error update diary: ", err);
          alert("日記の更新に失敗しました");
      })
    } else {
      alert("タイトルまたは内容を入力してください")
    }
  }

  return (
      <div className="diaryBox diaryForm">
        <h1>日記編集</h1>
        <ul className="FormArea">
          <li>
            <p>タイトル</p>
            <input type="text" value={diary.title} size="33" onChange={changeTitle} />
          </li>
          <li>
            <p>内容</p>
            <textarea rows="5" cols="33" value={diary.content} onChange={changeContent}></textarea>
          </li>
          <li>
            <button className="successBtn" onClick={() => updateDiary()}>保存する</button>
          </li>
        </ul>
      </div>
  );
}

export default DiaryEdit;
