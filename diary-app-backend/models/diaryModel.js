const db = require("../config/database")

const DiaryModel = {
    //日記のデータを取得する
    // `callback` 関数には、エラー (`err`) と取得した結果（全日記のリスト） (`result`) が渡される
    getDiaryList: (callback) => {
      //すべての日記データを取得するクエリ
      const sqlSelectDiaries = "SELECT id,title,content,DATE_FORMAT(date, '%Y-%m-%d') AS date FROM diaries"
      //クエリを実行し、取得結果をコールバック関数に返す
      db.query(sqlSelectDiaries, callback);
    },
  
    // 日記を作成する
    addDiary:(req, callback) => {
      const { title, content } = req.body;
      //新たな日記データを挿入するクエリ
      const sqlInsertDiary = "INSERT INTO diaries (title, content,date) VALUE(?, ?, NOW() )";
      //クエリを実行し、取得結果をコールバック関数に返す
      db.query(sqlInsertDiary, [title, content],callback)
    },
    
    // 特定の日記のみのデータを取得する
    getDiary:(req, callback) => {
      const id = req.params.id; //URLパラメーターからidを取得
      //フロント側からリクエストで送られたidに一致する日記を取得
      const sqlSelectDiary = "SELECT id,title,content,DATE_FORMAT(date, '%Y-%m-%d') AS date FROM diaries WHERE id = ?"
      db.query(sqlSelectDiary,[id],callback)
    },

    // 日記の更新
    updateDiary:(req, callback) => {
      const id = req.params.id; //URLパラメーターからidを取得
      const { title, content } = req.body;
      const sqlUpdateDiary = "UPDATE diaries SET title = ?, content =? WHERE id = ?";
      db.query(sqlUpdateDiary,[title, content, id], callback);
    },

    // 日記の削除
    deleteDiary:(req, callback) => {
      const id = req.params.id; //URLパラメーターからidを取得
      const sqlDeleteDiary = "DELETE from diaries WHERE id = ?";
      db.query(sqlDeleteDiary,[id],callback);
    },
}
