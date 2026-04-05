= 4th April Update
<th-april>
== Layer 0 --- UI (Mandatory)
<layer-0-ui-mandatory>
- Editor
- Panels
- Preview

== Layer 1 --- Document Intelligence (Mandatory)
<layer-1-document-intelligence-mandatory>
Parser Filesystem

== Layer 2 --- Conversion (Mandatory)
<layer-2-conversion-mandatory>
Pandoc Export

== Layer 3 --- Dev Tooling (Optional)
<layer-3-dev-tooling-optional>
Language servers (for example autocomplete, syntax highlighting etc.)

Hierarchy Builder \[ Needs Language Server \] 
Academic Validator \[ Needs Language Server \] \ 
Compatibility Analyzer \[ Needs Language Server\]

== Layer 4 --- Product Platform (Optional)
<layer-4-product-platform-optional>
Projects Version Control Collaboration Permissions

According to the above roadmap, we're currently trying to implement
Layer 3.

= What have we done since last update 
+ UI Rehaul to be better styled
+ Multi Format Exports work now



= Major Issues and To-Do List
<major-issues-and-to-do-list>
+ The Round trip conversion problem remains, but i have figured out how
  to fix it.

- We can fix it by comparing the syntax trees of the source and
  destination formats, and keeping the one which would be more
  "Syntactical"

- However, I dont know how to identify the Syntactical-ness of any given
  syntax tree. - There is also another problem, while pandoc can create
  the syntax trees of the input file, for typst it expands the
  functions, and so far i have not found a language server which would
  generate the typst syntax tree without expanding it. I might have to
  write it myself.

#block[
#set enum(numbering: "1.", start: 2)
+ The Editor, it is too basic right now. i will use slack.js to create a
  better one.
]

= Updates on previous issues
<updates-on-previous-issues>
#block[
#set enum(numbering: "1.", start: 2)
+ Initial loading time Slow: Fixed it by adding a loading screen, It
  ended up being due to the initial render of the typst being slow.
]

= Screenshots
<screenshots>
The cube has a neat spinning animation
#image("Loading Screen.png")

The Editor is basic at the moment
#image("MainEditor.png")

Error Bar 
#pagebreak()
#image("Errors.png")
 



