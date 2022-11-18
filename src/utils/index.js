export const getFoodPosition = (fieldSize, excludes) => {
  // while(true) → 無限ループ。conflict でない場合は、 return でループを抜ける。そうでない場合は、もとに戻って処理を繰り返す。
  while (true) {
    const x = Math.floor(Math.random() * (fieldSize - 1 - 1)) + 1;
    const y = Math.floor(Math.random() * (fieldSize - 1 - 1)) + 1;
    const conflict = excludes.some((item) => item.x === x && item.y === y);

    if (!conflict) {
      return { x, y };
    }
  }
};

export const initFields = (fieldSize, snake) => {
  const fields = [];
  for (let i = 0; i < fieldSize; i++) {
    const cols = new Array(fieldSize).fill("");
    fields.push(cols);
  }
  fields[snake.y][snake.x] = "snake";

  const food = getFoodPosition(fieldSize, [snake]);
  fields[food.y][food.x] = "food";

  return fields; // 作成した配列を返却
};

export const isCollision = (fieldSize, position) => {
  if (position.y < 0 || position.x < 0) {
    return true;
  }
  if (position.y > fieldSize - 1 || position.x > fieldSize - 1) {
    return true;
  }

  return false;
};

export const isEatingMySelf = (fields, position) => {
  return fields[position.y][position.x] === "snake";
};
