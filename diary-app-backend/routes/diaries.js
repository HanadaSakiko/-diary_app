const express = require("express");
const router = express.Router();
const diariesController = require("../controllers/diariesController.js");

//すべての日記を取得する
router.get("/diaries", diariesController.getDiaries);

// 新しい日記を作成する
router.post("/diaries", diariesController.createDiaries);

// 特定の日記のデータを取得
router.get("/diaries/:id", diariesController.getDiaryDetail);

//特定の日記の更新
router.put("/diaries/update/:id", diariesController.updateDiaries);

//特定の日記の削除
// router.put("/diaries/delete/:id", diariesController.deleteDiaries);

module.exports = router;
