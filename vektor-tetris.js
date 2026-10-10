'use strict';
(() => {
  const canvas = document.getElementById('board'), ctx = canvas.getContext('2d');
  const preview = document.getElementById('next').getContext('2d');
  const status = document.getElementById('status'), pause = document.getElementById('pause');
  const gameOver = document.getElementById('gameOver');
  const shapes = [ [[1,1,1,1]], [[1,1],[1,1]], [[0,1,0],[1,1,1]], [[0,1,1],[1,1,0]], [[1,1,0],[0,1,1]], [[1,0,0],[1,1,1]], [[0,0,1],[1,1,1]] ];
  const colors = ['#39c7ed','#ffd426','#ad83ff','#67d791','#ff7180','#639bff','#ffad55'];
  let board, piece, next, bag = [], score = 0, lines = 0, running = false, paused = false, last = 0, elapsed = 0;
  function pick() {
    if (!bag.length) {
      bag = [0,1,2,3,4,5,6];
      for (let i = bag.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [bag[i], bag[j]] = [bag[j], bag[i]]; }
    }
    const id = bag.pop();
    return {id, cells: shapes[id].map(row => [...row]), x: 0, y: 0};
  }
  function fits(cells, x, y) {
    return cells.every((row, dy) => row.every((v, dx) => !v || (x+dx >= 0 && x+dx < 10 && y+dy >= 0 && y+dy < 20 && !board[y+dy][x+dx])));
  }
  function spawn() {
    piece = next; next = pick(); piece.x = Math.floor((10-piece.cells[0].length)/2); piece.y = 0;
    if (!fits(piece.cells, piece.x, piece.y)) {
      running = false; pause.disabled = true; status.textContent = 'Spillet er slut! Du fik ' + score + ' point.';
      document.getElementById('finalScore').textContent = score + ' point · ' + lines + ' ryddede linjer';
      gameOver.showModal();
    }
  }
  function stats() {
    document.getElementById('score').textContent = score;
    document.getElementById('lines').textContent = lines;
    document.getElementById('level').textContent = 1 + Math.floor(lines/10);
  }
  function lock() {
    piece.cells.forEach((row, dy) => row.forEach((v, dx) => { if(v) board[piece.y+dy][piece.x+dx] = piece.id+1; }));
    const remaining = board.filter(row => row.some(v => !v));
    const count = 20 - remaining.length;
    score += [0,100,300,500,800][count] * (1 + Math.floor(lines/10)); lines += count;
    while(remaining.length < 20) remaining.unshift(Array(10).fill(0));
    board = remaining; elapsed = 0; spawn(); stats();
  }
  function step(manual = false) {
    if (fits(piece.cells, piece.x, piece.y+1)) { piece.y++; if(manual) score++; } else lock();
  }
  function action(name) {
    if (!running || paused) return;
    if (name === 'left' || name === 'right') { const x = piece.x + (name === 'left' ? -1 : 1); if(fits(piece.cells,x,piece.y)) piece.x=x; }
    if (name === 'rotate') {
      const cells = piece.cells[0].map((_,x) => piece.cells.map(row => row[x]).reverse());
      for (const offset of [0,-1,1,-2,2]) if(fits(cells,piece.x+offset,piece.y)) {piece.cells=cells;piece.x+=offset;break;}
    }
    if (name === 'down') step(true);
    if (name === 'drop') { while(fits(piece.cells,piece.x,piece.y+1)) {piece.y++;score+=2;} lock(); }
    stats(); draw();
  }
  function block(context,x,y,color,size=30) {
    context.fillStyle=color;context.fillRect(x+1,y+1,size-2,size-2);
    context.fillStyle='rgba(255,255,255,.22)';context.fillRect(x+3,y+3,size-6,3);
  }
  function draw() {
    ctx.clearRect(0,0,300,600);
    board.forEach((row,y) => row.forEach((v,x) => {
      ctx.strokeStyle='#152633';ctx.strokeRect(x*30,y*30,30,30);
      if(v) block(ctx,x*30,y*30,colors[v-1]);
    }));
    if(piece && running) piece.cells.forEach((row,y) => row.forEach((v,x) => {if(v) block(ctx,(piece.x+x)*30,(piece.y+y)*30,colors[piece.id]);}));
    preview.clearRect(0,0,120,120);
    if(next) next.cells.forEach((row,y) => row.forEach((v,x) => {if(v) block(preview, (120-next.cells[0].length*24)/2+x*24,(120-next.cells.length*24)/2+y*24,colors[next.id],24);}));
    if(paused || !running) {
      ctx.fillStyle='rgba(7,16,25,.78)';ctx.fillRect(0,0,300,600);ctx.fillStyle='#ffd426';ctx.font='bold 24px system-ui';ctx.textAlign='center';ctx.fillText(paused ? 'Pause' : piece ? 'Spillet er slut' : 'Klar?',150,300);
    }
  }
  function setPaused(value) {
    if(!running) return;
    paused=value;elapsed=0;pause.textContent=paused?'Fortsæt':'Pause';status.textContent=paused?'Tag dig god tid.':'God fornøjelse!';draw();
  }
  document.getElementById('start').addEventListener('click', () => {
    gameOver.close();
    board=Array.from({length:20},()=>Array(10).fill(0));bag=[];score=0;lines=0;elapsed=0;paused=false;running=true;next=pick();spawn();stats();
    pause.disabled=false;pause.textContent='Pause';status.textContent='God fornøjelse!';document.getElementById('start').textContent='Start forfra';canvas.focus();draw();
  });
  document.getElementById('playAgain').addEventListener('click',()=>document.getElementById('start').click());
  pause.addEventListener('click',()=>setPaused(!paused));
  document.querySelectorAll('[data-action]').forEach(button=>button.addEventListener('click',()=>action(button.dataset.action)));
  document.addEventListener('keydown',e=>{
    if(e.ctrlKey || e.metaKey || e.altKey) return;
    // Keep native keyboard activation of buttons and links.
    if((e.code==='Space' || e.code==='Enter') && e.target.closest('button,a')) return;
    const map={ArrowLeft:'left',ArrowRight:'right',ArrowUp:'rotate',ArrowDown:'down',Space:'drop'};
    if(map[e.code]) {e.preventDefault();if(!e.repeat || !['rotate','drop'].includes(map[e.code])) action(map[e.code]);}
    if(e.code==='KeyP' && !e.repeat) {e.preventDefault();setPaused(!paused);}
  });
  window.addEventListener('blur',()=>setPaused(true));
  document.addEventListener('visibilitychange',()=>{if(document.hidden)setPaused(true);});
  board=Array.from({length:20},()=>Array(10).fill(0));draw();
  function frame(time) {
    const delta = Math.min(time-last,100);last=time;
    if(running && !paused) {elapsed+=delta;if(elapsed>=Math.max(80,600*Math.pow(0.65,Math.floor(lines/10)))) {elapsed=0;step();stats();draw();}}
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
