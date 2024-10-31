const express = require("express");
const router = express.Router();
const diariesController = require("../controllers/diariesController.js");

//すべての日記を取得する
router.get("/diaries", diariesController.getDiaries);

//新しい日記の作成
router.post("/diaries", diariesController.createDiaries);

//特定の日記のデータを取得
router.get("/diaries/:id", diariesController.getDiaryDetail);

//特定の日記の更新
router.put("/diaries/update/:id", diariesController.updateDiary);

//特定の日記の削除
router.delete("/diaries/delete/:id", diariesController.deleteDiary);

module.exports = router;
