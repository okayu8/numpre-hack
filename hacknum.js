/* hackNum Script */
// TODO:submitボタンクリック時に処理が動くようにする
let blockArray = new Array(81);
const verticalLine = [
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [10, 11, 12, 13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24, 25, 26, 27],
  [28, 29, 30, 31, 32, 33, 34, 35, 36],
  [37, 38],
  [],
  [],
  [],
  [],
];
const horizonLine = [[], [], [], [], [], [], [], [], []];
const blockArea = [[], [], [], [], [], [], [], [], []];
var finishFlg = false;

// TODO: 入力された値を取得
// 入力された値をblockArrayに代入
for (let inNum = 1; inNum <= 81; inNum++) {}

// 計算の開始
while (finishFlg === false) {
  // blockArray内の配列で要素を一つしか持たない配列を判定

  // ブロックにNumber以外が含まれるかの判定
  for (let value in blockArray) {
    if (blockArray[value] !== Number) {
      // 入力可能な数字である場合、blockArrayに配列として追加
      for (let num = 1; num <= 9; num++) {
        // 横ラインのチェック
        for (let checkHorizon = 1; checkHorizon <= 9; checkHorizon++) {}

        // 縦ラインのチェック
        for (let checkVertical = 1; checkVertical <= 9; checkVertical++) {}

        // ブロックエリアのチェック
        for (let checkBlockArea = 1; checkBlockArea <= 9; checkBlockArea++) {}
      }
      break;
    }
    // 全てのブロックがNumberになったら終了
    finishFlg = true;
  }
}
