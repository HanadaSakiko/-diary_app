const express = require("express");
const router = express.Router();
const diariesController = require("../controllers/diariesController.js");

//すべての日記を取得する
router.get("/diaries", diariesController.getDiaries);

// 新しい日記を作成する
router.post("/diaries", diariesController.createDiaries);

// 特定の日記の詳細画面を表示
router.get("/diaries/:id", diariesController.getDiaryDetail);

//特定の日記の編集ページを表示
// router.get("/diaries/edit/:id", diariesController.editDiaries);

//特定の日記の更新
// router.put("/diaries/update/:id", diariesController.updateDiaries);

//特定の日記の削除
// router.put("/diaries/delete/:id", diariesController.deleteDiaries);

module.exports = router;
