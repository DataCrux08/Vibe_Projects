const viewport = document.getElementById('viewport');
const world = document.getElementById('world');
const player = document.getElementById('player');
const controls = document.getElementById('controls');
const toggleBtn = document.getElementById('toggleControls');

/* MAP CONSTANTS */
const MAP_WIDTH = 2000;
const MAP_HEIGHT = 2000;

/* PLAYER */
const PLAYER_SIZE = 50;
const SPEED = 5;

let playerX = 1000;
let playerY = 1000;

/* CAMERA */
let camX = 0;
let camY = 0;

/* INPUT STATE */
const keys = {};

/* ---------------- INPUT ---------------- */

// Keyboard
document.addEventListener('keydown', e => keys[e.key] = true);
document.addEventListener('keyup', e => keys[e.key] = false);

// Mobile buttons
document.querySelectorAll('#controls button').forEach(btn => {
  btn.addEventListener('pointerdown', () => move(btn.dataset.dir));
});

// Toggle mobile controls
toggleBtn.addEventListener('click', () => {
  controls.style.display =
    controls.style.display === 'none' ? 'block' : 'none';
});

/* ---------------- LOGIC ---------------- */

function move(dir) {
  if (dir === 'up') playerY -= SPEED;
  if (dir === 'down') playerY += SPEED;
  if (dir === 'left') playerX -= SPEED;
  if (dir === 'right') playerX += SPEED;

  clampPlayer();
}

function clampPlayer() {
  playerX = Math.max(0, Math.min(playerX, MAP_WIDTH - PLAYER_SIZE));
  playerY = Math.max(0, Math.min(playerY, MAP_HEIGHT - PLAYER_SIZE));
}

function updatePlayer() {
  player.style.transform = `translate(${playerX}px, ${playerY}px)`;
}

function updateCamera() {
  const vw = viewport.clientWidth;
  const vh = viewport.clientHeight;

  let targetX = playerX + PLAYER_SIZE / 2 - vw / 2;
  let targetY = playerY + PLAYER_SIZE / 2 - vh / 2;

  targetX = Math.max(0, Math.min(targetX, MAP_WIDTH - vw));
  targetY = Math.max(0, Math.min(targetY, MAP_HEIGHT - vh));

  camX += (targetX - camX) * 0.1;
  camY += (targetY - camY) * 0.1;

  world.style.transform = `translate(${-camX}px, ${-camY}px)`;
}

/* ---------------- GAME LOOP ---------------- */

function handleKeyboard() {
  if (keys.ArrowUp) move('up');
  if (keys.ArrowDown) move('down');
  if (keys.ArrowLeft) move('left');
  if (keys.ArrowRight) move('right');
}

function gameLoop() {
  handleKeyboard();
  updatePlayer();
  updateCamera();
  requestAnimationFrame(gameLoop);
}

gameLoop();