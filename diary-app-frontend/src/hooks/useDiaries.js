import { useState, useEffect } from 'react';
import diaryService from '../services/diaryService';

const useDiaries = () => {
  //すべての日記データをセット
  const [diaries, setDiaries] = useState([]);

  //日記のデータが更新された際も常に取得する
  const refreshDiaries = () => {
    diaryService.getDiaries().then(response => {
      setDiaries(response.data);
    });
  };

  useEffect(() => {
    refreshDiaries();
  }, []);
  return { diaries, refreshDiaries};
};

export default useDiaries;
