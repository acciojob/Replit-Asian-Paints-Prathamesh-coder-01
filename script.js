//your JS code here. If required.
const changeBtn = document.getElementById("change_button");
const resetBtn = document.getElementById("Reset");

changeBtn.addEventListener("click", () => {
  const id = document.getElementById("block_id").value;
  const color = document.getElementById("colour_id").value;



	const blocks = document.querySelectorAll(".grid-item");
  blocks.forEach(block => {
    block.style.backgroundColor = "transparent";
  });
	if (id >= 1 && id <= 9) {
    document.getElementById(id).style.backgroundColor = color;
  }
});

resetBtn.addEventListener("click", () => {
  const blocks = document.querySelectorAll(".grid-item");
  blocks.forEach(block => {
    block.style.backgroundColor = "transparent";
  });
});





	