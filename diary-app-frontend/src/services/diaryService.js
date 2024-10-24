import Axios from 'axios';

const getDiaries = () => {
  return Axios.get("http://localhost:3001/api/get/diaries")
}

const diaryService = {
  getDiaries
};

export default diaryService;
