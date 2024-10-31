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
    <div className="diaryBox diaryForm">
      <h1>日記作成</h1>
      <ul className="FormArea contentsBox">
        <li>
          <p>タイトル</p>
          <input type="text" value={title} placeholder="日記のタイトルを入力してください" onChange={changeTitle} />
        </li>
        <li>
          <p>内容</p>
          <textarea onChange={changeContent} value={content} placeholder="日記の内容を入力してください"></textarea>
        </li>
        <li><button className="successBtn" onClick={() => addDiary(title , content)}> 作成</button></li>
      </ul>
    </  div>
  )
}

export default DiaryForm;
