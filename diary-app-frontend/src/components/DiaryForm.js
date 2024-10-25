// import { useState, useEffect } from 'react';
// import diaryService from "../services/diaryService";

//データを表示するコンポーネント
const DiaryForm = () => {

  //日記の作成フォーム表示領域
  //TODO:一覧画面から遷移するように設定
  return (
    <div className="diaryForm">
      <h1>日記作成</h1>
      <form>
        <input type="text" placeholder="日記のタイトルを入力してください" size="33" /><br /><br />
        <textArea placeholder="内容を入力してください" rows="5" cols="33"></textArea><br /><br />
        <input type="submit" value="作成" />
      </form>
    </  div>
  )
}

export default DiaryForm;
