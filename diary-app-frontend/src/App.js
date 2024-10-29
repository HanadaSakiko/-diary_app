import React from "react";
import { useState, useEffect } from 'react';
import { Routes, Route} from 'react-router-dom';
import DiaryList from "./components/DiaryList";
import DiaryForm from "./components/DiaryForm";
import DiaryDetail from "./components/DiaryDetail";
import diaryService from "./services/diaryService";

function App() {
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

  //日記の追加
  //ボタンが押されたときのイベント値が空でないかどうかを判定し、問題なければ処理を実行
  //処理の中身：日記の作成　成功したら一覧画面に遷移し、失敗したらメッセージを出す
  //TODO:一覧画面に遷移する処理を書く
const addDiary = (title, content) => {
        if (title && content) {
          diaryService.addDiary(title, content).then(() => {
            alert("日記の作成に成功しました");
            refreshDiaries();
          })
            .catch(err => {
              console.error("Error create diary: ", err);
              alert("日記の新規作成に失敗しました");
          })
        } else {
          alert("タイトルまたは内容を入力してください")
        }
}

//画面表示領域(ルーティング設定)
  return (
    <div>
      <Routes>
        <Route path="/diaries" element={<DiaryList diaries={diaries}/>}/>
        <Route path="/diary_form" element={<DiaryForm addDiary={addDiary} />} />
        <Route path="/diaries/:id" element={<DiaryDetail/>} />
      </Routes>
    </div>
  );
}

export default App;
