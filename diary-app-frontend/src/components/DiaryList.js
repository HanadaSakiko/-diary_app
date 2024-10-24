import { useState, useEffect } from 'react';
import diaryService from "./services/diaryService";

//TODO:サンプルデータの配列 データベースから取得するため後ほど削除
// const diaries = [
//   {
//     id: 1,
//     date: '2024-10-18',
//     title: '日記1',
//     content: '内容1'
//   },
//   {
//     id: 2,
//     date: '2024-10-19',
//     title: '日記2',
//     content: '内容2'
//   }
// ]

const DiaryList = () => {
  //日記のデータを設定
  const [diaries, setDiaries] = useState([]);

  //日記のデータが更新された際も常に取得する
  const refreshDiaries = () => {
    diaryService.getDiaries().then(response => {
      setDiaries(response.data)
    });
  };

  //refreshDiariesが実行されたら空の配列を監視
  //空の配列はuseStateの初期値として設定
  useEffect(() => {
    refreshDiaries();
  }, []);


  return (
    <div className="diaryList">
      {diaries.map((val, index) => (
        <>
          <li key={index}>{val.title}</li>
          <li key={index}>{val.date}</li>
          <button>削除</button>
        </>
      ))}
    </div>
  )
}

export default DiaryList;
