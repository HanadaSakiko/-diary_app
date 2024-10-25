import { useState, useEffect } from 'react';
import diaryService from "../services/diaryService";

//データを表示するコンポーネント
const DiaryList = () => {

  const [diaries, setDiaries] = useState([]);

  //日記のデータが更新された際も常に取得する
  const refreshDiaries = () => {
    diaryService.getDiaries().then(response => {
      setDiaries(response.data);
    });
  };

  //refreshDiariesが実行されたら空の配列を監視
  //空の配列はuseStateの初期値として設定
  useEffect(() => {
    refreshDiaries();
  }, []);

  //日記一覧を順番に取り出す
  //TODO:各日記の項目をクリックすると日記の詳細画面に遷移するようにする
  const diariesList = diaries.map((val, index) => {
    return(
    <>
      <li key={index}>{val.title}</li>
      <li key={index}>{val.date}</li>
      <button onClick={refreshDiaries}>削除</button>
    </>
      )
  });

  //取得した日記のデータを表示
  //TODO:新規作成ボタンで日記新規作成フォームに遷移するようにする
  return (
    <div className="diaryList">
      <h1>日記一覧</h1>
      <button>新規作成</button><br/><br/>
      {diariesList}
    </  div>
  )
}

export default DiaryList;
