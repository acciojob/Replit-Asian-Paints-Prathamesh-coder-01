document.getElementById("change_button").addEventListener("click", function () {
            const bid = document.getElementById("block_id").value;
            const col = document.getElementById("colour_id").value;

            const boxes = document.querySelectorAll("#grid-item");

            // reset all first
            boxes.forEach(box => box.style.backgroundColor = "transparent");

            // apply color
            if (bid >= 1 && bid <= 9) {
                boxes[bid - 1].style.backgroundColor = col;
            }
        });

        document.getElementById("Reset").addEventListener("click", function () {
            const boxes = document.querySelectorAll("#grid-item");
            boxes.forEach(box => box.style.backgroundColor = "transparent");
        });