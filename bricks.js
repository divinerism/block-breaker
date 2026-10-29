// ============================================================
// bricks.js: where the bricks are, and how they are drawn
// ============================================================

const BRICK_COLUMNS = 8;
const BRICK_ROWS = 4;
const BRICK_WIDTH = 60;
const BRICK_HEIGHT = 20;
const BRICK_GAP = 6;     // empty space between bricks
const BRICKS_TOP = 50;   // how far down the first row starts
const BRICK_ROW_SHADES = ["#fff176", "#ffee58", "#fdd835", "#fbc02d"];

// Builds the list of bricks. Each brick is an object with an
// x, y, width, and height.
function makeBrick(x, y, type = "normal") {
  const isSpeedBoost = type === "speedboost";
  const row = Math.floor((y - BRICKS_TOP) / (BRICK_HEIGHT + BRICK_GAP));

  return {
    x,
    y,
    width: BRICK_WIDTH,
    height: BRICK_HEIGHT,
    type,
    collision: isSpeedBoost ? "speedboost" : null,
    Yellowism: {
      ...Yellowism,
      shade: isSpeedBoost ? "#9c27b0" : BRICK_ROW_SHADES[row]
    }
  };
}

function makeBricks() {
  const list = [];

  // Center the whole block of bricks on the screen.
  const totalWidth = BRICK_COLUMNS * BRICK_WIDTH + (BRICK_COLUMNS - 1) * BRICK_GAP;
  const left = (WIDTH - totalWidth) / 2;

  for (let row = 0; row < BRICK_ROWS; row++) {
    for (let col = 0; col < BRICK_COLUMNS; col++) {
      const type = row === 1 ? "speedboost" : "normal";
      list.push(makeBrick(
        left + col * (BRICK_WIDTH + BRICK_GAP),
        BRICKS_TOP + row * (BRICK_HEIGHT + BRICK_GAP),
        type
      ));
    }
  }

  return list;
}

// Draws every brick in the list.
function drawBricks() {
  for (const brick of bricks) {
    ctx.fillStyle = brick.Yellowism.shade;
    ctx.fillRect(brick.x, brick.y, brick.width, brick.height);
  }
}
