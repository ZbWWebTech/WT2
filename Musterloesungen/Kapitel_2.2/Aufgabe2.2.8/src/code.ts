window.addEventListener("load", () => {
    const liste = document.getElementById("liste");
    liste?.addEventListener("click", (event) => {
        const target = event.target as HTMLElement;
        let selectedItem : HTMLElement= target;
        while (selectedItem &&selectedItem.tagName !== "LI") {
            selectedItem = selectedItem.parentElement as HTMLElement;
        }
        if (selectedItem.tagName === "LI") {
            console.log(selectedItem);
        }
    });
});