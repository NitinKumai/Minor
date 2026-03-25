import { fileStore, mainFile, activeFile, renderSidebar } from "./files.js";
import { previewSvg } from "./main.js";

const buttonOptions = ["Typst", "Markdown", "LaTeX", "HTML"];

// Exposed globally so main.js debouncedHandler can read it
window.formatMap = {
  Typst: "typst",
  Markdown: "markdown",
  LaTeX: "latex",
  HTML: "html",
};

let currentState = "Typst";

function updateButtonStyles() {
  document.querySelectorAll(".state-btn").forEach((button) => {
    if (button.textContent === currentState) {
      button.classList.add("bg-blue");
      button.classList.remove("bg-red");
    } else {
      button.classList.remove("bg-blue");
      button.classList.add("bg-red");
    }
  });
}

const buttonContainer = document.getElementById("button-container");
buttonOptions.forEach((option) => {
  const button = document.createElement("button");
  button.textContent = option;
  button.className = "mr2 pa2 state-btn";
  button.addEventListener("click", () => setState(option));
  buttonContainer.appendChild(button);
});

updateButtonStyles();

async function setState(newState) {
  const textarea = document.getElementById("text-input");
  const oldState = currentState;
  currentState = newState;

  // Update the state indicator read by main.js / buttons.js
  document.getElementById("state-display").textContent = currentState;

  const fromFormat = window.formatMap[oldState];
  const toFormat = window.formatMap[newState];

  updateButtonStyles();

  // Save current textarea into fileStore before converting
  fileStore[activeFile] = textarea.value;

  // Convert every file individually from old format → new format.
  // We also keep a typst-converted copy of the main file for the preview.
  const fileNames = Object.keys(fileStore);
  const convertedMap = {}; // name → converted string

  for (const name of fileNames) {
    try {
      const result = await window.pandocModule.convert(
        {
          from: fromFormat,
          to: toFormat,
          "output-file": "output.txt",
          "resource-path": ["."],
        },
        fileStore[name],
        {},
      );

      if (result.files?.["output.txt"]) {
        convertedMap[name] = await result.files["output.txt"].text();
      } else {
        // Conversion produced no output — keep original content
        convertedMap[name] = fileStore[name];
      }
    } catch (err) {
      console.error(`Conversion failed for "${name}":`, err);
      convertedMap[name] = fileStore[name]; // fallback: keep original
    }
  }

  // Write all converted content back into fileStore
  for (const [name, content] of Object.entries(convertedMap)) {
    fileStore[name] = content;
  }

  // Update the visible textarea to show the active file's converted content
  textarea.value = fileStore[activeFile] ?? "";

  // Update the preview using the main file.
  // If the new format is Typst, preview directly.
  // Otherwise convert mainFile → typst for the preview.
  if (newState === "Typst") {
    previewSvg(fileStore[mainFile] ?? "");
  } else {
    try {
      const previewResult = await window.pandocModule.convert(
        {
          from: toFormat,
          to: "typst",
          "output-file": "output.txt",
          "resource-path": ["."],
        },
        fileStore[mainFile] ?? "",
        {},
      );

      if (previewResult.files?.["output.txt"]) {
        previewSvg(await previewResult.files["output.txt"].text());
      }
    } catch (err) {
      console.error("Preview conversion failed:", err);
    }
  }

  renderSidebar();
}
