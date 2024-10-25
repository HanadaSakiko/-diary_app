const db = require("../config/database")

//日記のデータを取得する
const getDiaries = (req, res) => {
  const sqlSelect = "SELECT * FROM diaries"
  // 日記データを取得するSQLクエリ作成後、処理が正常か判定
  db.query(sqlSelect, (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("日記のデータ取得に失敗しました");
    } else {
      res.send(result);
    }
  });
}

// 日記を作成する
const createDiaries = (req, res) => {
  const { title, content } = req.body;
  const sqlInsert = "INSERT INTO diaries (title, content,date) VALUE(?, ?, NOW() )";
  db.query(sqlInsert, [title, content], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("日記の新規作成に失敗しました");
    } else {
      res.status(200).send("日記の新規作成に成功しました")
    }
  });
}

module.exports = { getDiaries,createDiaries};
