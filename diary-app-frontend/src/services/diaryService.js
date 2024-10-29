import Axios from 'axios';

//日記データを取得する
const getDiaries = () => {
  return Axios.get("http://localhost:3001/api/diaries")
}

//日記を作成する
  const addDiary = (title,content) => {
    return Axios.post("http://localhost:3001/api/diaries", { title, content })
  }

//特定の日記データを取得する
const getDiaryDetail = (id) => {
  return Axios.get(`http://localhost:3001/api/diaries/${id}`,{id});
}


const diaryService = {
  getDiaries,
  addDiary,
  getDiaryDetail
};

export default diaryService;
