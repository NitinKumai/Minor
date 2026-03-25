function openDB() {
  return new Promise((resolve, reject) => {

    const request = indexedDB.open("DocToolDB", 1);

    request.onupgradeneeded = function (event) {

      const db = event.target.result;

      if (!db.objectStoreNames.contains("projects")) {
        db.createObjectStore("projects", { keyPath: "projectId" });
      }

      if (!db.objectStoreNames.contains("versions")) {
        db.createObjectStore("versions", { keyPath: "id" });
      }

    };

    request.onsuccess = function () {
      resolve(request.result);
    };

    request.onerror = function () {
      reject(request.error);
    };

  });
}


async function saveProject(project) {

  const db = await openDB();

  const tx = db.transaction("projects", "readwrite");
  const store = tx.objectStore("projects");

  store.put(project);

  tx.oncomplete = () => console.log("Project saved");
}


async function loadProject(projectId) {

  const db = await openDB();

  const tx = db.transaction("projects", "readonly");
  const store = tx.objectStore("projects");

  const request = store.get(projectId);

  request.onsuccess = () => {
    console.log("Loaded project:", request.result);
  };

}


function testSave() {

  const project = {
    projectId: "p1",
    name: "Demo Project",

    files: {
      "intro.md": {
        content: "# Intro",
        lastModified: Date.now()
      },

      "main.tex": {
        content: "\\section{Start}",
        lastModified: Date.now()
      }
    }

  };

  saveProject(project);
}


function testLoad() {
  loadProject("p1");
}