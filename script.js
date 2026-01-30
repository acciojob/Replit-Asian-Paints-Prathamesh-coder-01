const changeBtn = document.getElementById("change_button");
    const resetBtn = document.getElementById("Reset");

    const blockInput = document.getElementById("block_id");
    const colorInput = document.getElementById("colour_id");

    const blocks = document.querySelectorAll("#grid-item");

    // Reset all blocks
    function resetGrid() {
      blocks.forEach(block => {
        block.style.backgroundColor = "transparent";
      });
    }

    // Change color
    changeBtn.addEventListener("click", () => {
      const id = blockInput.value;
      const color = colorInput.value;

      resetGrid(); // first reset all

      blocks.forEach(block => {
        if (block.dataset.id === id) {
          block.style.backgroundColor = color;
        }
      });
    });

    // Reset button
    resetBtn.addEventListener("click", resetGrid);