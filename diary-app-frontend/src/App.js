import React from "react";
import { useState, useEffect } from 'react';
import { Routes, Route,useNavigate} from 'react-router-dom';
import DiaryList from "./components/DiaryList";
import DiaryForm from "./components/DiaryForm";
import DiaryDetail from "./components/DiaryDetail";
import DiaryEdit from "./components/DiaryEdit";
import diaryService from "./services/diaryService";

function App() {
  const [diaries, setDiaries] = useState([]);

  //日記のデータが更新された際も常に取得する
  const refreshDiaries = () => {
    diaryService.getDiaries().then(response => {
      setDiaries(response.data);
    });
  };

  useEffect(() => {
    refreshDiaries();
  }, []);

  const navigate = useNavigate();

  //日記の新規作成
  //タイトル、内容が空でないかを判定し、問題ない場合は日記を作成し、そうでない場合はエラーとする
const addDiary = (title, content) => {
        if (title && content) {
          diaryService.addDiary(title, content).then(() => {
            alert("日記の作成に成功しました");
            refreshDiaries(); //新たに作成されたデータを含む日記を反映
            navigate("/diaries"); // 削除完了後に一覧画面に遷移
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
        <Route path="/diaries" element={<DiaryList diaries={diaries} refreshDiaries={refreshDiaries}/>}/>
        <Route path="/diary_form" element={<DiaryForm addDiary={addDiary} />} />
        <Route path="/diaries/:id" element={<DiaryDetail refreshDiaries={refreshDiaries} />} />
        <Route path="/diaries/edit/:id" element={<DiaryEdit refreshDiaries={refreshDiaries} />} />
      </Routes>
    </div>
  );
}

export default App;
