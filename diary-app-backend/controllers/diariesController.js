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

// 特定の日記のみのデータを取得する
const getDiaryDetail = (req, res) => {
  const id = req.params.id; //URLパラメーターからidを取得
  //フロント側からリクエストで送られたidに一致する日記を取得
  const sqlSelectDetail = "SELECT * FROM diaries WHERE id = ?"
  db.query(sqlSelectDetail,[id],(err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("日記のデータ取得に失敗しました");
    } else {
      res.send(result[0]);
    }
  })
}

// 日記の更新
const updateDiary = (req, res) => {
  const id = req.params.id; //URLパラメーターからidを取得
  const { title, content } = req.body;
  const sqlUpdate = "UPDATE diaries SET title = ?, content =? WHERE id = ?";
  db.query(sqlUpdate,[title, content, id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("日記の更新に失敗しました");
    } else {
      res.status(200).send("日記の更新に成功しました")
    }
  });
}

// 日記の削除
const deleteDiary = (req, res) => {
  const id = req.params.id; //URLパラメーターからidを取得
  const sqlDelete = "DELETE from diaries WHERE id = ?";
  db.query(sqlDelete,[id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("日記の削除に失敗しました");
    } else {
      res.status(200).send("指定された日記を削除しました")
    }
  });
}

module.exports = { getDiaries,createDiaries,getDiaryDetail,updateDiary,deleteDiary};
