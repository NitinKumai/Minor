/* basic formatting */

function format(command, value=null){
 document.execCommand(command,false,value);
}


/* outline */

function updateOutline(){

const editor = document.querySelector(".editor");

const outline = document.getElementById("outline");

if(!outline) return;

const headings = editor.querySelectorAll("h1, h2, h3");

outline.innerHTML = "";

headings.forEach(h=>{

const item = document.createElement("div");

item.textContent = h.textContent;

item.onclick = ()=> h.scrollIntoView();

outline.appendChild(item);

});

}


/* dark mode */

function toggleDark(){
 document.body.classList.toggle("dark");
}


/* split view */

function toggleSplit(){
 document.body.classList.toggle("split");
}


/* AI panel */

function showAI(){

const panel = document.getElementById("ai-panel");

if(!panel) return;

panel.style.display =
panel.style.display==="block" ? "none" : "block";

}


/* insert AI text */

function insertAI(){

const text =
document.getElementById("ai-input").value;

document.querySelector(".editor")
.innerHTML += "<p>"+text+"</p>";

}


/* word count */

function updateWordCount(){

const text =
document.querySelector(".editor").innerText;

const words =
text.trim().split(/\s+/).filter(Boolean).length;

document.querySelector(".word-count")
.textContent = "Words: "+words;

}


/* drag & drop */

const editor = document.querySelector(".editor");

editor.addEventListener("dragover", e=>{
 e.preventDefault();
});

editor.addEventListener("drop", e=>{

e.preventDefault();

const text = e.dataTransfer.getData("text");

document.execCommand("insertText", false, text);

});


/* grammar check (demo) */

function checkGrammar(){
 alert("Grammar check complete");
}


/* language direction */

function changeLanguage(lang){

document.documentElement.lang = lang;

if(lang==="ar"){
 editor.style.direction="rtl";
}
else{
 editor.style.direction="ltr";
}

}


/* translate */

async function translateText(){

const lang =
document.getElementById("translate-lang").value;

const text =
window.getSelection().toString()
|| editor.innerText;

if(!lang){
 alert("Select language");
 return;
}

const url =
"https://api.mymemory.translated.net/get?q="
+ encodeURIComponent(text)
+ "&langpair=en|"+lang;

const res = await fetch(url);

const data = await res.json();

const translated =
data.responseData.translatedText;

if(window.getSelection().toString()){
 document.execCommand("insertText", false, translated);
}
else{
 editor.innerText = translated;
}

}


/* preview + latex */

function updatePreview(){

const content = editor.innerHTML;

const preview =
document.getElementById("preview-content");

if(!preview) return;

preview.innerHTML = content;


/* render latex */

if(typeof renderMathInElement !== "undefined"){

renderMathInElement(preview, {

delimiters:[
{left:"$$", right:"$$", display:true},
{left:"$", right:"$", display:false}
]

});

}

}


/* scroll sync */

const previewCard =
document.querySelector(".preview-card");

editor.addEventListener("scroll", ()=>{

if(!previewCard) return;

const ratio =
editor.scrollTop /
(editor.scrollHeight - editor.clientHeight);

previewCard.scrollTop =
ratio *
(previewCard.scrollHeight - previewCard.clientHeight);

});


/* auto update */

editor.addEventListener("input", ()=>{

updateWordCount();
updateOutline();
updatePreview();

});


updateWordCount();
updateOutline();
updatePreview();