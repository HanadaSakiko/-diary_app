const express = require("express");
const cors = require("cors");
const app = express();
const diaries = require("./routes/diaries")

app.use(express.json());
app.use(cors());

//APIルートを使用
app.use("/api", diaries)

app.listen(3001, () => {
    console.log('Server running on port 3001');
});
