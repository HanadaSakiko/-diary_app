//詳細画面を表示するコンポーネントを作成
const DiaryDetail = () => {
  return (
    <div>
      <h1>日記の詳細</h1>
      <ul>
        <li>タイトル</li>
        <li>日付</li>
        <li>内容</li>
        <button>編集</button>
        <button>削除</button>
      </ul>
    </div>
  );
}

export default DiaryDetail;
