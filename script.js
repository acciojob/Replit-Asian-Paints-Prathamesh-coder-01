const changeBtn = document.getElementById("change_button");
const resetBtn = document.getElementById("Reset");

changeBtn.addEventListener("click", () => {
  const id = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;

  const blocks = document.querySelectorAll("#grid-item");

  // Reset all first
  blocks.forEach(b => b.style.backgroundColor = "transparent");

  // Color selected block
  if (id >= 1 && id <= 9) {
    blocks[id - 1].style.backgroundColor = color;
  }
});

resetBtn.addEventListener("click", () => {
  const blocks = document.querySelectorAll("#grid-item");
  blocks.forEach(b => b.style.backgroundColor = "transparent");
});





	