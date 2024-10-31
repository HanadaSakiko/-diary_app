import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate} from 'react-router-dom';
import diaryService from "../services/diaryService";

const DiaryEdit = ({refreshDiaries}) => {
  //初期値を空オブジェクトとして設定
  const [diary, setDiary] = useState({title:"",content:""});
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
  
    //タイトルの値が変更されたらその値をsetTitleにセット
  const changeTitle = (e) => {
    setDiary({...diary, title: e.target.value});
  }
  //内容の値が変更されたらその値をsetContentにセット
  const changeContent = (e) => {
    setDiary({ ...diary,content:e.target.value });
  }

  const navigate = useNavigate();

  //更新の処理とエラーハンドリング
  const updateDiary = () => {
    if (diary.title && diary.content) {
      diaryService.updateDiary(id,diary.title,diary.content).then(() => {
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
    <div className="diaryBox">
      <h1>日記編集</h1>
      <div id="diaryFormArea">
        <input type="text" value={diary.title} size="33" onChange={changeTitle} /><br /><br />
        <textarea rows="5" cols="33" value={diary.content} onChange={changeContent}></textarea><br /><br />
        <button className="deleteBtn" onClick={() => updateDiary()}>保存する</button>
      </div>
    </  div>
  );
}

export default DiaryEdit;
