const express = require("express");
const router = express.Router();
const diariesController = require("../controllers/diariesController.js");

//すべての日記を取得する
router.get("/diaries", diariesController.getDiaries);

// // 新しい日記を作成する
// router.post("/diaries", diariesController.createDiaries);

// // 特定の日記を更新
// router.put("/diaries/:id", diariesController.updateDiaries);

// // 特定の日記を削除
// router.delete("/diaries/:id", diariesController.deleteDiaries);

module.exports = router;
