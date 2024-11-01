const db = require("../config/database")

//日記のデータを取得する
const getDiaryList = (req, res) => {
  // 日記データを取得するSQLクエリ作成後、処理が正常か判定
  DiaryModel.getDiaryList((err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("日記のデータ取得に失敗しました");
    } else {
      res.send(result);
    }
  });
}

// 日記を作成する
const addDiary = (req, res) => {
  const { title, content } = req.body;
  DiaryModel.addDiary([title, content], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("日記の新規作成に失敗しました");
    } else {
      res.status(200).send("日記の新規作成に成功しました")
    }
  });
}

// 特定の日記のみのデータを取得する
const getDiary = (req, res) => {
  const id = req.params.id; //URLパラメーターからidを取得
  DiaryModel.getDiary([id],(err, result) => {
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
  DiaryModel.updateDiary([title, content, id], (err, result) => {
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
  DiaryModel.deleteDiary([id], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).send("日記の削除に失敗しました");
    } else {
      res.status(200).send("指定された日記を削除しました")
    }
  });
}

module.exports = { getDiaryList,addDiary,getDiary,updateDiary,deleteDiary};
