// Only override on specific elements
document.addEventListener("contextmenu", function (event) {
    if (event.target.matches(".editable, .custom-context")) {
        event.preventDefault();
        showCustomMenu(event);
    }
    // Otherwise, let browser handle it
});

function showCustomMenu(event) {
    // Your custom menu logic
}
