Table of Contents

#figure(
  align(center)[#table(
    columns: (3.96%, 84.44%, 11.6%),
    align: (left,left,center,),
    table.header(table.cell(align: left, colspan: 2)[#strong[Topic];], table.cell(align: center)[#strong[Page
      No];],),
    table.hline(),
    table.cell(align: left, colspan: 2)[Table of
    Content], table.cell(align: center)[],
    table.cell(align: left, colspan: 2)[Revision
    History], table.cell(align: center)[],
    table.cell(align: left)[1], table.cell(align: left)[Introduction], table.cell(align: center)[],
    table.cell(align: left)[], table.cell(align: left)[1.1 Purpose of
    the Project], table.cell(align: center)[],
    table.cell(align: left)[], table.cell(align: left)[1.2 Target
    Beneficiary], table.cell(align: center)[],
    table.cell(align: left)[], table.cell(align: left)[1.3 Project
    Scope], table.cell(align: center)[],
    table.cell(align: left)[], table.cell(align: left)[1.4
    References], table.cell(align: center)[],
    table.cell(align: left)[2], table.cell(align: left)[Project
    Description], table.cell(align: center)[],
    table.cell(align: left)[], table.cell(align: left)[2.1 Reference
    Algorithm], table.cell(align: center)[],
    table.cell(align: left)[], table.cell(align: left)[2.2 Data/ Data
    structure], table.cell(align: center)[],
    table.cell(align: left)[], table.cell(align: left)[2.3 SWOT
    Analysis], table.cell(align: center)[],
    table.cell(align: left)[], table.cell(align: left)[2.4 Project
    Features], table.cell(align: center)[],
    table.cell(align: left)[], table.cell(align: left)[2.5 User Classes
    and Characteristics], table.cell(align: center)[],
    table.cell(align: left)[], table.cell(align: left)[2.6 Design and
    Implementation Constraints], table.cell(align: center)[],
    table.cell(align: left)[], table.cell(align: left)[2.7 Design
    diagrams], table.cell(align: center)[],
    table.cell(align: left)[], table.cell(align: left)[2.8 Assumption
    and Dependencies], table.cell(align: center)[],
    table.cell(align: left)[3], table.cell(align: left)[System
    Requirements], table.cell(align: center)[],
    table.cell(align: left)[], table.cell(align: left)[3.1 User
    Interface], table.cell(align: center)[],
    table.cell(align: left)[], table.cell(align: left)[3.2 Software
    Interface], table.cell(align: center)[],
    table.cell(align: left)[], table.cell(align: left)[3.3 Database
    Interface], table.cell(align: center)[],
    table.cell(align: left)[], table.cell(align: left)[3.4
    Protocols], table.cell(align: center)[],
    table.cell(align: left)[4], table.cell(align: left)[Non-functional
    Requirements], table.cell(align: center)[],
    table.cell(align: left)[], table.cell(align: left)[4.1 Performance
    requirements], table.cell(align: center)[],
    table.cell(align: left)[], table.cell(align: left)[4.2 Security
    requirements], table.cell(align: center)[],
    table.cell(align: left)[], table.cell(align: left)[4.3 Software
    Quality Attributes], table.cell(align: center)[],
    table.cell(align: left)[5], table.cell(align: left)[Other
    Requirements], table.cell(align: center)[],
    table.cell(align: left, colspan: 2)[Appendix A:
    Glossary], table.cell(align: center)[],
    table.cell(align: left, colspan: 2)[Appendix B: Analysis
    Model], table.cell(align: center)[],
    table.cell(align: left, colspan: 2)[Appendix C: Issues
    List], table.cell(align: center)[],
  )]
  , kind: table
  )

#strong[Revision History]

#figure(
  align(center)[#table(
    columns: (11.77%, 36.82%, 26.21%, 25.2%),
    align: (left,left,left,left,),
    table.header(table.cell(align: left)[#strong[Date];], table.cell(align: left)[#strong[Change];], table.cell(align: left)[#strong[Reason
      for Changes];], table.cell(align: left)[#strong[Mentor
      Signature];],),
    table.hline(),
    table.cell(align: left)[], table.cell(align: left)[], table.cell(align: left)[], table.cell(align: left)[],
    table.cell(align: left)[], table.cell(align: left)[], table.cell(align: left)[], table.cell(align: left)[],
    table.cell(align: left)[], table.cell(align: left)[], table.cell(align: left)[], table.cell(align: left)[],
    table.cell(align: left)[], table.cell(align: left)[], table.cell(align: left)[], table.cell(align: left)[],
  )]
  , kind: table
  )

General Instructions:

+ Font should be Time new Roman 12

+ Main heading should be All Capital with Times New Roman 14

+ Sub-Heading should be Times new roman 12 , Underline

+ Line gap should be 1.15

+ Justified alignment should be used for all text

+ Content inside a table should be Times New Roman 10

+ Caption for both Table and Figure should be Times New Roman 11

+ Add Source for all Images used.

#figure(
  align(center)[#table(
    columns: (3.75%, 29.36%, 66.89%),
    align: (left,left,left,),
    table.header(table.cell(align: left)[1], table.cell(align: left, colspan: 2)[INTRODUCTION],),
    table.hline(),
    table.cell(align: left)[], table.cell(align: left)[1.1 Purpose of
    the Project], table.cell(align: left)[Develop a Language-Agnostic
    Platform: To create a unified document creation system where the
    editing process is independent of any single markup or typesetting
    language.

    Combine Strengths, Reduce Weaknesses: To combine the best features
    of all existing methods (e.g., LaTeX\'s precision, Markdown\'s
    simplicity, Typst's Quick Compilation), and eliminating the
    individual drawbacks of each.

    Enable Synchronization: To implement a robust synchronization engine
    that maintains consistency across different filetype representations
    of the same document, ensuring changes in one format are accurately
    reflected in all others.

    ],
    table.cell(align: left)[], table.cell(align: left)[1.2 Target
    Beneficiary], table.cell(align: left)[Identify the prime
    beneficiaries of the project.],
    table.cell(align: left)[], table.cell(align: left)[1.3 Project
    Scope], table.cell(align: left)[Provide a short description of area
    of application of the software, include relevant benefits,
    objectives, and goals. State clearly the requirement and
    deliverables of the project.],
    table.cell(align: left)[], table.cell(align: left)[1.4
    References], table.cell(align: left)[List all documents or Web
    addresses to which this SRS refers.],
    table.cell(align: left)[2], table.cell(align: left, colspan: 2)[PROJECT
    DESCRIPTION],
    table.cell(align: left)[], table.cell(align: left)[2.1 Reference
    Algorithm], table.cell(align: left)[State the reference algorithm
    for the project and identify the required data structure
    (#strong[Mandatory for Minor1];) Or/Add design algorithm justifying
    the methodology of the project],
    table.cell(align: left)[], table.cell(align: left)[2.2
    Characteristic of Data], table.cell(align: left)[Present with the
    characteristic of the dataset used for the project. Provide the
    primary and secondary source of the data, along with sampling
    techniques. Explain the statistical method used for data processing
    (#strong[if any];).],
    table.cell(align: left)[], table.cell(align: left)[2.3 SWOT
    Analysis], table.cell(align: left)[Present with a justification to
    support your project.],
    table.cell(align: left)[], table.cell(align: left)[2.4 Project
    Features], table.cell(align: left)[Summarize the major features the
    product contains or the significant functions that it performs or
    lets the user perform. (Level 2 USE Case diagram)],
    table.cell(align: left)[], table.cell(align: left)[2.5 User Classes
    and Characteristics], table.cell(align: left)[Identify the various
    user classes that you anticipate will use this product.],
    table.cell(align: left)[], table.cell(align: left)[2.6 Design and
    Implementation Constraints], table.cell(align: left)[Present
    hardware boundary conditions (timing requirements, memory
    requirements); interfaces to other applications; specific
    technologies, and tools to be used; parallel operations; language
    requirements; communications protocols; security considerations;
    design conventions or programming standards.],
    table.cell(align: left)[], table.cell(align: left)[2.7 Design
    diagrams], table.cell(align: left)[Present all the required Diagram
    (USE --Case, Class Diagram, Activity, Sequence, Data Flow diagram
    and State Diagram. (Major project should include Collaboration and
    Deployment Diagram too)],
    table.cell(align: left)[], table.cell(align: left)[2.8 Assumption
    and Dependencies], table.cell(align: left)[List any assumed factors
    (as opposed to known facts) that could affect the requirements
    stated in the SRS. Also identify any dependencies the project has on
    external factors.],
    table.cell(align: left)[3], table.cell(align: left, colspan: 2)[SYSTEM
    REQUIREMENTS],
    table.cell(align: left)[], table.cell(align: left)[3.1 User
    Interface], table.cell(align: left)[Define the software components
    for which a user interface is needed.],
    table.cell(align: left)[], table.cell(align: left)[3.2 Software
    Interface], table.cell(align: left)[Describe the connections between
    modules. Describe the services needed and the nature of
    communications. Describe detailed application programming interface
    protocols.],
    table.cell(align: left)[], table.cell(align: left)[3.3 Database
    Interface], table.cell(align: left)[Explain the Database management
    system used],
    table.cell(align: left)[], table.cell(align: left)[3.4
    Protocols], table.cell(align: left)[Describe the requirements
    associated with any protocol deployed in the project. Specify any
    communication security or encryption issues, data transfer rates,
    and synchronization mechanisms],
    table.cell(align: left)[4], table.cell(align: left, colspan: 2)[NON-FUNCTIONAL
    REQUIREMENTS],
    table.cell(align: left)[], table.cell(align: left)[4.1 Performance
    requirements], table.cell(align: left)[If there are performance
    requirements for the product under various circumstances, state
    them. Specify the timing relationships for real time systems. State
    performance requirements for individual functional requirements or
    features],
    table.cell(align: left)[], table.cell(align: left)[4.2 Security
    requirements], table.cell(align: left)[Specify any requirements
    regarding security or privacy issues surrounding use of the product
    or protection of the data used or created by the product. Define
    authentication, verification and validation of the system. Refer to
    any external policies or regulations containing security issues that
    affect the product.],
    table.cell(align: left)[], table.cell(align: left)[4.3 Software
    Quality Attributes], table.cell(align: left)[Explain: adaptability,
    availability, correctness, flexibility, interoperability,
    maintainability, portability, reliability, reusability, robustness,
    testability, and usability.],
    table.cell(align: left)[5], table.cell(align: left)[Other
    Requirements], table.cell(align: left)[Define any other requirements
    not covered elsewhere in the SRS.],
    table.cell(align: left, colspan: 2)[Appendix A:
    Glossary], table.cell(align: left)[Define all the terms necessary to
    properly interpret the SRS, including acronyms and abbreviations.],
    table.cell(align: left, colspan: 2)[Appendix B: Analysis
    Model], table.cell(align: left)[Pertinent analysis models used for
    this project],
    table.cell(align: left, colspan: 2)[Appendix C: Issues
    List], table.cell(align: left)[This is a dynamic list of the open
    requirements issues.],
  )]
  , kind: table
  )
