import React from "react";
import DiaryList from "./components/DiaryList";
// import DiaryForm from "./components/DiaryForm";


function App() {
  return (
      <div className="App">
      <p>日記一覧</p>
      <button>新規作成</button><br/><br/>
      < DiaryList />
      </div>
  )
}

export default App;
