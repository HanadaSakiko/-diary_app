import { useState, useEffect } from 'react';
// import diaryService from "../services/diaryService";
import Axios from 'axios';

//TODO:../services/diaryService側に後ほど記載
// GET /diaries エンドポイントからデータを取得
const getDiaries = () => {
  return Axios.get("http://localhost:3001/api/diaries");
}

console.log(getDiaries());

//データを表示するコンポーネント
const DiaryList = () => {

  const [diaries, setDiaries] = useState([]);

  //日記のデータが更新された際も常に取得する
  const refreshDiaries = () => {
    getDiaries().then(response => {
      setDiaries(response.data);
    });
  };

  //refreshDiariesが実行されたら空の配列を監視
  //空の配列はuseStateの初期値として設定
  useEffect(() => {
    refreshDiaries();
  }, []);

  //日記一覧を順番に取り出す
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
  return (
    <div className="diaryList">
      {diariesList}
    </  div>
  )
}

export default DiaryList;
