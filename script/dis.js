document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function() {
        alert(this.innerText + " clicked!");
        this.disabled = true;
        this.classList.add("bg-gray-400", "cursor-not-allowed");
        this.classList.remove("bg-blue-700");
    });
});