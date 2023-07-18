
    document.getElementById("container").addEventListener("click", function(event) {
        if (event.target.classList.contains("close")) {
            event.target.closest(".message").style.display = "none";
        }
    });
