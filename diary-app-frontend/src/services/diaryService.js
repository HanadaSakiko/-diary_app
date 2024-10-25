import Axios from 'axios';

//日記データを取得する
const getDiaries = () => {
  return Axios.get("http://localhost:3001/api/diaries")
}

const diaryService = {
  getDiaries
};

export default diaryService;
