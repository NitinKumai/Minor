 # Roadmap of Features
- Document Parsing 
- Document Conversion and Independent Rendering
- Filesystem Management 

- Offline Support and Sync <- We are here
- Version Control and Management

- Multi-format export  

- Better editor with support for docx 
 
- Implementation of Language Servers
- Document Hiearchy
 
- User Roles and Permission
- Project Management
- Real-Time Collaboration

- Templates
 
- Academic Structure Validation
- Format Compaitibility Analyzer


# Problems
- No documentation for Pandoc's WASM
- Performance Issues on Initial Loading, surprisingly not on high volume text.
- Conversion Conflicts, How to manage less feature-complete formats during merging
    - For Example, convert 
    ```typ
    // In Typst
    #lorem(50) 

    // In Markdown
    Lorem ipsum dolor sit amet ... (upto 50 words)

    // Back in Typst 
    Lorem ipsum dolor sit amet ... (upto 50 words)
    ```
    It deletes the function so we need a buffer maybe to keep track of changes like that.
- Export button doesn't work for browser security reasons

