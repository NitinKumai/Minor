// ─── File Store ──────────────────────────────────────────────────────────────
// Central source of truth for all open files.
// { filename: string → content: string }

export const fileStore = {
  "main.typ": "Hello, Try typing in the textbox to the right to render.",
};

export let activeFile = "main.typ";
export let mainFile = "main.typ";

export function setActiveFile(name) {
  activeFile = name;
}

export function setMainFile(name) {
  mainFile = name;
  renderSidebar();
}

// Add or overwrite a file
export function putFile(name, content) {
  fileStore[name] = content;
  renderSidebar();
}

// Rename a file (preserves content, updates activeFile / mainFile if needed)
export function renameFile(oldName, newName) {
  if (!newName || newName === oldName || fileStore[newName] !== undefined)
    return;
  fileStore[newName] = fileStore[oldName];
  delete fileStore[oldName];
  if (activeFile === oldName) activeFile = newName;
  if (mainFile === oldName) mainFile = newName;
  renderSidebar();
}

// Delete a file (guards against deleting the last file)
export function deleteFile(name) {
  const keys = Object.keys(fileStore);
  if (keys.length <= 1) return; // always keep at least one file
  delete fileStore[name];
  if (activeFile === name) activeFile = Object.keys(fileStore)[0];
  if (mainFile === name) mainFile = Object.keys(fileStore)[0];
  renderSidebar();
}

// ─── File Info Bar ───────────────────────────────────────────────────────────
// Updates #file-info with the current editing / main file context.

export function renderFileInfo() {
  const bar = document.getElementById("file-info");
  if (!bar) return;

  const isMain = activeFile === mainFile;

  bar.innerHTML = `
    <span class="file-info-item">
      ✏️ Editing: <strong>${activeFile}</strong>
      ${isMain ? '<span class="file-info-badge file-info-badge--main">main</span>' : ""}
    </span>
    <span class="file-info-sep">·</span>
    <span class="file-info-item">
      ★ Main: <strong>${mainFile}</strong>
    </span>
    <span class="file-info-sep">·</span>
    <span class="file-info-item file-info-count">
      ${Object.keys(fileStore).length} file${Object.keys(fileStore).length !== 1 ? "s" : ""} open
    </span>
  `;
}

// ─── Sidebar UI ──────────────────────────────────────────────────────────────
// Expects a <div id="sidebar"> and a <textarea id="text-input"> in the DOM.
// Calls window.onActiveFileChange(name) whenever the editor should switch files.

export function renderSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (!sidebar) return;

  sidebar.innerHTML = "";

  // ── Header row ──────────────────────────────────────────
  const header = document.createElement("div");
  header.className = "sidebar-header";
  header.innerHTML = `<span class="sidebar-title">Files</span>`;

  const newBtn = document.createElement("button");
  newBtn.textContent = "+ New";
  newBtn.className = "sidebar-new-btn";
  newBtn.addEventListener("click", () => {
    const name = prompt("New file name:");
    if (!name) return;
    const safeName = name.includes(".") ? name : name + ".typ";
    putFile(safeName, "");
    switchToFile(safeName);
  });
  header.appendChild(newBtn);
  sidebar.appendChild(header);

  // ── File list ────────────────────────────────────────────
  const list = document.createElement("ul");
  list.className = "sidebar-list";

  Object.keys(fileStore).forEach((name) => {
    const li = document.createElement("li");
    li.className =
      "sidebar-item" +
      (name === activeFile ? " sidebar-item--active" : "") +
      (name === mainFile ? " sidebar-item--main" : "");

    // File name (click to open)
    const nameSpan = document.createElement("span");
    nameSpan.className = "sidebar-item-name";
    nameSpan.textContent = name + (name === mainFile ? " ★" : "");
    nameSpan.title = "Click to open";
    nameSpan.addEventListener("click", () => switchToFile(name));
    li.appendChild(nameSpan);

    // Action buttons
    const actions = document.createElement("span");
    actions.className = "sidebar-item-actions";

    // Set as main
    if (name !== mainFile) {
      const starBtn = document.createElement("button");
      starBtn.textContent = "★";
      starBtn.title = "Set as open file";
      starBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        setMainFile(name);
        if (window.onMainFileChange) window.onMainFileChange(name);
      });
      actions.appendChild(starBtn);
    }

    // Rename
    const renameBtn = document.createElement("button");
    renameBtn.textContent = "✎";
    renameBtn.title = "Rename";
    renameBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      const newName = prompt("Rename to:", name);
      if (!newName) return;
      const safeName = newName.includes(".") ? newName : newName + ".typ";
      renameFile(name, safeName);
      if (window.onActiveFileChange) window.onActiveFileChange(activeFile);
    });
    actions.appendChild(renameBtn);

    // Delete
    const delBtn = document.createElement("button");
    delBtn.textContent = "✕";
    delBtn.title = "Delete";
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      if (!confirm(`Delete "${name}"?`)) return;
      deleteFile(name);
      if (window.onActiveFileChange) window.onActiveFileChange(activeFile);
    });
    actions.appendChild(delBtn);

    li.appendChild(actions);
    list.appendChild(li);
  });

  sidebar.appendChild(list);
  renderFileInfo();
}

// Switch the editor to a given file, saving the current textarea content first.
export function switchToFile(name) {
  // Save current textarea → fileStore before switching
  const textarea = document.getElementById("text-input");
  if (textarea) fileStore[activeFile] = textarea.value;

  activeFile = name;
  renderSidebar(); // renderSidebar calls renderFileInfo internally
  renderFileInfo();

  if (window.onActiveFileChange) window.onActiveFileChange(name);
}
