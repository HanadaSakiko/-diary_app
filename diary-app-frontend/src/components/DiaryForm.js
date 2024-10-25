import { useState, useEffect } from 'react';
import Axios from 'axios';
// import diaryService from "../services/diaryService";

//データを表示するコンポーネント
const DiaryForm = () => {

  const [title, setTitle] = useState();
  const [content, setContent] = useState();

  //タイトルの値が変更されたらその値をsetTitleにセット
  const changeTitle = (e) => {
    if (title) {
      setTitle(e.target.value);
    }
  }
  //内容の値が変更されたらその値をsetContentにセット
  const changeContent = (e) => {
    setContent(e.target.value);
  }

  //日記を作成するメソッド
  //TODO:後ほどdiaryServiceに移行させる
const createDiary = (title,content) => {
  return Axios.post("http://localhost:3001/api/diaries")
}

  //日記の作成　成功したら一覧画面に遷移し、失敗したらメッセージを出す
  const AddDiary = ({ title, content }) => {
    createDiary(title, content).then(() => {
      alert("日記の作成に成功しました");
      //TODO:一覧画面に遷移する処理を書く
    })
      .catch(err => {
        console.error("Error create diary: ", err);
        alert("日記の新規作成に失敗しました");
    })
  }

  //ボタンが押されたときのイベント値が空でないかどうかを判定し、問題なければ処理を実行
  const BtnAddDiary = ({ title, content }) => {
    if (title && content) {
      <AddDiary title content/>
    } else {
      alert("タイトルまたは内容を入力してください")
    }
  }

  //日記の作成フォーム表示領域
  //TODO:一覧画面から遷移するように設定
  return (
    <div className="diaryForm">
      <h1>日記作成</h1>
      <form id="diaryFormArea">
        <input type="text" placeholder="日記のタイトルを入力してください" value={title} size="33" onChange={changeTitle} /><br /><br />
        <textArea placeholder="内容を入力してください" rows="5" cols="33" onChange={changeContent}>{content}</textArea><br /><br />
        {/* <input type="submit" value="作成" /> */}
        <button onClick={ <BtnAddDiary title={title} content={content}/> }>作成</button>
      </form>
    </  div>
  )
}

export default DiaryForm;


// if (title && content) {
//   createDiaries(title, content)
// } else if (!title && !content) {
//   alert("タイトル");
// }
// else if (!title) {
//   //エラーを挿入
//   return <p></p>
// } else if (!content) {
// }
