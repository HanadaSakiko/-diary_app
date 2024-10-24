// import React, { useState } from "react";
import React from "react";

const DiaryList = ({ diaries }) => {
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
