import api from '../api/axiosInstance.js';

//日記データを取得する
const getDiaries = () => {
  return api.get("/diaries")
}

//日記を作成する
const addDiary = (title,content,) => {
  return api.post("/diaries", { title, content })
}

//特定の日記データを取得する
const getDiaryDetail = (id) => {
  return api.get(`/diaries/${id}`);
}

//特定の日記を更新する
const updateDiary = (id,title,content) => {
  return api.put(`/diaries/update/${id}`,{title, content});
}

//特定の日記データを削除する
const deleteDiary = (id) => {
  return api.delete(`/diaries/delete/${id}`);
}

const diaryService = {
  getDiaries,
  addDiary,
  getDiaryDetail,
  updateDiary,
  deleteDiary
};

export default diaryService;
