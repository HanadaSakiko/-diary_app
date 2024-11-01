import { useState, useEffect } from 'react';
import { useParams,useNavigate} from 'react-router-dom';
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

    //特定の日記データをセット
    const [diary, setDiary] = useState({title:"",content:""});

    //特定の日記データ取得
    useEffect((id) => {
      if (id) {
        diaryService.getDiaryDetail(id).then(response => {
          setDiary(response.data);
        }).catch(err => {
          console.error("Error get diary: ", err);
          alert("日記のデータ取得に失敗しました");
        });
      }
    }, [diary]);



    return { diaries, refreshDiaries, diary};
};

export default useDiaries;
