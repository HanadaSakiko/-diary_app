import Axios from 'axios';

const getDiary = () => {
  return Axios.get("http://localhost:3001/api/get/diaries")
}

const diaryService = {
  getDiary
};

export default diaryService;
