// select all blocks
const blocks = document.querySelectorAll('.grid-item');

const changeBtn = document.getElementById('change_button');
const resetBtn = document.getElementById('reset');

const blockInput = document.getElementById('block_id');
const colourInput = document.getElementById('colour_id');


// reset all blocks
function resetGrid() {
  blocks.forEach(block => {
    block.style.backgroundColor = '';
  });
}


// change color
changeBtn.addEventListener('click', () => {
  const id = Number(blockInput.value);
  const color = colourInput.value.trim();

  if (id < 1 || id > 9) {
    alert('Enter block id between 1-9');
    return;
  }

  if (!color) {
    alert('Enter a color');
    return;
  }

  // first reset everything
  resetGrid();

  // select specific block using data-id
  const block = document.querySelector(`.grid-item[data-id="${id}"]`);

  if (block) {
    block.style.backgroundColor = color;
  }
});


// reset button
resetBtn.addEventListener('click', () => {
  resetGrid();
  blockInput.value = '';
  colourInput.value = '';
});
