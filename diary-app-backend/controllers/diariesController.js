const db = require("../config/database")

//日記のデータを取得する
const getDiaries = (req, res) => {
  const sqlSelect = "SELECT * FROM diaries ORDER BY id"
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

module.exports = { getDiaries };
