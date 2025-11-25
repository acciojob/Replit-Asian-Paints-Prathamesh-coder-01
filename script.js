const changeButton = document.getElementById("change_button");
        const resetButton = document.getElementById("Reset");

        changeButton.addEventListener("click", function () {
            const blockId = document.getElementById("block_id").value;
            const color = document.getElementById("colour_id").value;

            // reset all blocks to transparent
            const blocks = document.querySelectorAll(".grid-item");
            blocks.forEach(block => block.style.backgroundColor = "transparent");

            // change specific block's color
            if (blockId >= 1 && blockId <= 9) {
                document.getElementById(blockId).style.backgroundColor = color;
            }
        });

        resetButton.addEventListener("click", function () {
            const blocks = document.querySelectorAll(".grid-item");
            blocks.forEach(block => block.style.backgroundColor = "transparent");
        });