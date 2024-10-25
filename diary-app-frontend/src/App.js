import React from "react";
import DiaryList from "./components/DiaryList";
import DiaryForm from "./components/DiaryForm";

//TODO:日記新規作成画面は一覧画面から遷移するように変更する
function App() {
  return (
      <div className="App">
      < DiaryList />
      < DiaryForm />
      </div>
  )
}


export default App;
