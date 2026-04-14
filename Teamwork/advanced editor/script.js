const editor = document.getElementById("editor");
const lineNumbers = document.getElementById("line-numbers");
let wordMode = false;

// Renders line numbers
function updateLineNumbers() {
    const lines = editor.innerText.split("\n").length;
    lineNumbers.innerText = Array.from({ length: lines }, (_, i) => i + 1).join(
        "\n",
    );
}

editor.addEventListener("input", updateLineNumbers);
editor.addEventListener("scroll", () => {
    lineNumbers.scrollTop = editor.scrollTop;
});

updateLineNumbers(); // Initial render

// Toolbar formatting
function format(command, value = null) {
    document.execCommand(command, false, value);
    editor.focus();
}

// Switch between modes
function toggleMode() {
    const container = document.querySelector(".editor-container");
    wordMode = !wordMode;
    container.classList.toggle("word-mode", wordMode);
}
