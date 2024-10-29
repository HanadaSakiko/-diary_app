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
  return Axios.get(`http://localhost:3001/api/diaries/${id}`);
}

//特定の日記を更新する
const updateDiary = (id,title,content) => {
  return Axios.put(`http://localhost:3001/api/diaries/update/${id}`,{title, content});
}


const diaryService = {
  getDiaries,
  addDiary,
  getDiaryDetail,
  updateDiary
};

export default diaryService;
