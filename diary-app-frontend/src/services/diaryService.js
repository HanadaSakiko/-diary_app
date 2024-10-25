import Axios from 'axios';

//日記データを取得する
const getDiaries = () => {
  return Axios.get("http://localhost:3001/api/diaries")
}

//日記を作成する
  const addDiary = (title,content) => {
    return Axios.post("http://localhost:3001/api/diaries", { title, content })
  }

const diaryService = {
  getDiaries,
  addDiary
};

export default diaryService;
