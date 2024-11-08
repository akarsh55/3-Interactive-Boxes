function toggleBox(box) {
    box.classList.toggle("expanded");
}

function changeStyle(select, type) {
    const box = select.closest(".box");
    if (type === "color") {
        box.style.backgroundColor = select.value;
    } else if (type === "size") {
        if (select.value === "small") {
            box.style.width = "150px";
            box.style.height = "100px";
        } else if (select.value === "medium") {
            box.style.width = "200px";
            box.style.height = "150px";
        } else if (select.value === "large") {
            box.style.width = "250px";
            box.style.height = "200px";
        }
    }
}