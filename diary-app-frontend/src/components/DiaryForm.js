import { useState } from 'react';

//データを表示するコンポーネント
const DiaryForm = ({addDiary}) => {

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //タイトルの値が変更されたらその値をsetTitleにセット
  const changeTitle = (e) => {
      setTitle(e.target.value);
  }
  //内容の値が変更されたらその値をsetContentにセット
  const changeContent = (e) => {
    setContent(e.target.value);
  }

  //日記の作成フォーム表示領域
  return (
    <div className="diaryForm">
      <h1>日記作成</h1>
      <div id="diaryFormArea">
        <input type="text" value={title} size="33" placeholder="日記のタイトルを入力してください" onChange={changeTitle} /><br /><br />
        <textarea rows="5" cols="33" onChange={changeContent} value={content} placeholder="日記の内容を入力してください"></textarea><br /><br />
        <button onClick={() => addDiary(title , content)}> 作成</button>
      </div>
    </  div>
  )
}

export default DiaryForm;
