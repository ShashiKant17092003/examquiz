const quizData = [
  {
    "question": "What is the first step in the SDLC process?",
    "options": ["Testing", "Requirement Analysis", "Deployment", "Coding"],
    "answer": "Requirement Analysis"
  },
  {
    "question": "Which phase of SDLC involves converting system specifications into working software?",
    "options": ["Testing", "Coding", "Maintenance", "Deployment"],
    "answer": "Coding"
  },
  {
    "question": "Which SDLC model is best suited for projects with well-defined requirements?",
    "options": ["Agile", "Waterfall", "Spiral", "RAD"],
    "answer": "Waterfall"
  },
  {
    "question": "Which model allows simultaneous development and testing?",
    "options": ["Waterfall", "Agile", "RAD", "Spiral"],
    "answer": "Agile"
  },
  {
    "question": "The main disadvantage of the Waterfall model is:",
    "options": ["Frequent customer involvement", "Late testing phase", "Fast development cycle", "High flexibility"],
    "answer": "Late testing phase"
  },
  {
    "question": "Which SDLC model is most appropriate when requirements are unclear?",
    "options": ["Waterfall", "Prototype", "V-Model", "Agile"],
    "answer": "Prototype"
  },
  {
    "question": "What is the primary focus of the Spiral model?",
    "options": ["Linear process", "Quick deployment", "Risk management", "Fixed budget"],
    "answer": "Risk management"
  },
  {
    "question": "The main purpose of the Deployment phase is to:",
    "options": ["Identify software bugs", "Deliver the software to users", "Gather user requirements", "Code the software"],
    "answer": "Deliver the software to users"
  },
  {
    "question": "Which SDLC model follows an iterative approach?",
    "options": ["Waterfall", "Agile", "V-Model", "Incremental"],
    "answer": "Incremental"
  },
  {
    "question": "What is the key feature of the RAD (Rapid Application Development) model?",
    "options": ["Heavy documentation", "Long development cycle", "Rapid prototyping", "Sequential development"],
    "answer": "Rapid prototyping"
  },
  {
    "question": "What is the last phase of the SDLC process?",
    "options": ["Coding", "Maintenance", "Testing", "Requirement Analysis"],
    "answer": "Maintenance"
  },
  {
    "question": "Which SDLC phase ensures that the software meets user expectations?",
    "options": ["Testing", "Requirement Analysis", "Coding", "Design"],
    "answer": "Testing"
  },
  {
    "question": "What is the main objective of SDLC?",
    "options": ["Reduce development costs", "Deliver high-quality software efficiently", "Eliminate the need for testing", "Focus only on coding"],
    "answer": "Deliver high-quality software efficiently"
  },
  {
    "question": "The feasibility study in SDLC is conducted to:",
    "options": ["Write test cases", "Determine project viability", "Design system architecture", "Develop user manuals"],
    "answer": "Determine project viability"
  },
  {
    "question": "The output of the requirement analysis phase is:",
    "options": ["Source Code", "SRS Document", "Prototype", "Test Report"],
    "answer": "SRS Document"
  },
  {
    "question": "In the Waterfall model, when does testing occur?",
    "options": ["After deployment", "After coding", "Throughout development", "Before requirement analysis"],
    "answer": "After coding"
  },
  {
    "question": "Which SDLC model is best for projects requiring frequent changes?",
    "options": ["Waterfall", "Agile", "V-Model", "Spiral"],
    "answer": "Agile"
  },
  {
    "question": "What is a major drawback of the Waterfall model?",
    "options": ["Allows iterative changes", "Testing happens at every stage", "Cannot accommodate changes easily", "Focuses only on documentation"],
    "answer": "Cannot accommodate changes easily"
  },
  {
    "question": "Which model is also known as the Verification and Validation model?",
    "options": ["Waterfall", "Agile", "V-Model", "Prototype"],
    "answer": "V-Model"
  },
  {
    "question": "Which SDLC model is best suited for high-risk projects?",
    "options": ["Spiral", "Agile", "Waterfall", "RAD"],
    "answer": "Spiral"
  },
  {
    "question": "Software is a collection of:",
    "options": ["Hardware devices", "Programs and data", "Wires and circuits", "User manuals"],
    "answer": "Programs and data"
  },
  {
    "question": "What is the difference between system software and application software?",
    "options": ["System software manages hardware, application software performs tasks", "Application software manages hardware, system software performs tasks", "Both are the same", "System software is optional"],
    "answer": "System software manages hardware, application software performs tasks"
  },
  {
    "question": "What are the different types of software maintenance?",
    "options": ["Corrective, Adaptive, Perfective, Preventive", "Installation, Debugging, Performance, Storage", "Requirement, Deployment, Testing, Coding", "Waterfall, Agile, Spiral, RAD"],
    "answer": "Corrective, Adaptive, Perfective, Preventive"
  },
  {
    "question": "The process of improving software without changing its functionality is called:",
    "options": ["Adaptive maintenance", "Perfective maintenance", "Corrective maintenance", "Preventive maintenance"],
    "answer": "Perfective maintenance"
  },
  {
    "question": "Which of the following is NOT an example of system software?",
    "options": ["Windows OS", "Linux Kernel", "Microsoft Word", "Device Drivers"],
    "answer": "Microsoft Word"
  },
  {
    "question": "Which software directly interacts with hardware?",
    "options": ["System software", "Application software", "Utility software", "Embedded software"],
    "answer": "System software"
  },
  {
    "question": "Firmware is stored in which type of memory?",
    "options": ["RAM", "ROM", "Hard Disk", "SSD"],
    "answer": "ROM"
  },
  {
    "question": "Which of the following is an example of embedded software?",
    "options": ["Web browser", "Smartwatch OS", "Photoshop", "PowerPoint"],
    "answer": "Smartwatch OS"
  },
  {
    "question": "What is the main function of firmware?",
    "options": ["Manage application software", "Control hardware functions", "Create user interfaces", "Browse the internet"],
    "answer": "Control hardware functions"
  },
  {
    "question": "Which of the following is an example of firmware?",
    "options": ["Windows 11", "BIOS", "Microsoft Excel", "Google Chrome"],
    "answer": "BIOS"
  },
  {
    "question": "What is the difference between firmware and software?",
    "options": ["Firmware is stored permanently, software is temporary", "Firmware is changeable, software is fixed", "Firmware is a type of malware", "There is no difference"],
    "answer": "Firmware is stored permanently, software is temporary"
  },
  {
    "question": "Where is embedded software typically used?",
    "options": ["Laptops", "Smartphones", "Washing machines", "Web applications"],
    "answer": "Washing machines"
  },
  {
    "question": "What is a key feature of Agile development?",
    "options": ["Sequential development", "Fixed project scope", "Iterative development", "No customer involvement"],
    "answer": "Iterative development"
  },
  {
    "question": "Which Agile framework uses sprints for development?",
    "options": ["Waterfall", "Scrum", "V-Model", "RAD"],
    "answer": "Scrum"
  },
  {
    "question": "What is the typical duration of a sprint in Scrum?",
    "options": ["1 day", "1-4 weeks", "6 months", "1 year"],
    "answer": "1-4 weeks"
  },
  {
    "question": "Which Agile practice emphasizes continuous integration and delivery?",
    "options": ["Pair programming", "Extreme Programming (XP)", "V-Model", "Waterfall"],
    "answer": "Extreme Programming (XP)"
  },
  {
    "question": "How does Agile differ from the Waterfall model?",
    "options": ["Agile is rigid, Waterfall is flexible", "Agile delivers software incrementally, Waterfall delivers it all at once", "Agile does not require user feedback, Waterfall does", "Agile has no testing phase"],
    "answer": "Agile delivers software incrementally, Waterfall delivers it all at once"
  },
  {
    "question": "Which model is best suited for small projects with well-defined requirements?",
    "options": ["Agile", "Waterfall", "Spiral", "Scrum"],
    "answer": "Waterfall"
  },
  {
    "question": "In Agile, who is responsible for defining the product backlog?",
    "options": ["Scrum Master", "Product Owner", "Development Team", "Customers"],
    "answer": "Product Owner"
  },
  {
    "question": "In Waterfall, when are software changes easiest to make?",
    "options": ["After deployment", "During the initial requirement phase", "During coding", "After user feedback"],
    "answer": "During the initial requirement phase"
  },
  {
    "question": "What is the main objective of software testing?",
    "options": ["To add new features", "To find and fix bugs", "To improve hardware performance", "To increase software size"],
    "answer": "To find and fix bugs"
  },
  {
    "question": "Which testing method is done without executing the code?",
    "options": ["Black-box testing", "White-box testing", "Static testing", "Dynamic testing"],
    "answer": "Static testing"
  },
  {
    "question": "What is the primary focus of unit testing?",
    "options": ["Testing the whole system", "Testing individual components", "Checking database integrity", "Verifying UI elements"],
    "answer": "Testing individual components"
  },
  {
    "question": "What is regression testing?",
    "options": ["Testing only new features", "Re-running previous test cases after changes", "Skipping testing to save time", "Testing only on live environments"],
    "answer": "Re-running previous test cases after changes"
  },
  {
    "question": "What is the purpose of DevOps?",
    "options": ["To separate development and operations teams", "To improve collaboration between development and operations", "To replace Agile", "To eliminate software testing"],
    "answer": "To improve collaboration between development and operations"
  },
  {
    "question": "What is Continuous Integration (CI)?",
    "options": ["Merging all code at the end of development", "Integrating changes frequently into a shared repository", "Deploying software manually", "Avoiding automated testing"],
    "answer": "Integrating changes frequently into a shared repository"
  },
  {
    "question": "What does Continuous Deployment (CD) mean?",
    "options": ["Manually releasing software updates", "Automatically deploying every successful code change", "Skipping testing before release", "Releasing updates once a year"],
    "answer": "Automatically deploying every successful code change"
  },
  {
    "question": "Which tool is commonly used for version control?",
    "options": ["Jenkins", "Git", "Docker", "Kubernetes"],
    "answer": "Git"
  },
  {
    "question": "What does Kubernetes do?",
    "options": ["Manages containerized applications", "Builds CI/CD pipelines", "Manages SQL databases", "Writes software code"],
    "answer": "Manages containerized applications"
  },
  {
    "question": "Which of the following is an Infrastructure as Code (IaC) tool?",
    "options": ["Terraform", "Jenkins", "JIRA", "Slack"],
    "answer": "Terraform"
  },
  {
    "question": "What is software?",
    "options": [
        "Physical hardware",
        "A set of instructions for a computer",
        "Data storage devices",
        "Network cables"
    ],
    "answer": "A set of instructions for a computer"
  },
  {
      "question": "What is software evolution?",
      "options": [
          "The process of writing code",
          "The continuous change of software over time",
          "The design of software architecture",
          "The testing of software"
      ],
      "answer": "The continuous change of software over time"
  },
  {
      "question": "Which factor drives software evolution?",
      "options": [
          "Changing user requirements",
          "Technological advancements",
          "Bug fixes",
          "All of the above"
      ],
      "answer": "All of the above"
  },
  {
      "question": "What is software maintenance?",
      "options": [
          "Creating new software",
          "Modifying software after delivery",
          "Designing software",
          "Testing software"
      ],
      "answer": "Modifying software after delivery"
  },
  {
      "question": "What is corrective maintenance?",
      "options": [
          "Adding new features",
          "Fixing bugs",
          "Improving performance",
          "Adapting to new environments"
      ],
      "answer": "Fixing bugs"
  },
  {
      "question": "What is adaptive maintenance?",
      "options": [
          "Fixing bugs",
          "Adding new features",
          "Adapting to new environments",
          "Improving performance"
      ],
      "answer": "Adapting to new environments"
  },
  {
      "question": "What is perfective maintenance?",
      "options": [
          "Fixing bugs",
          "Adding new features or improving performance",
          "Adapting to new environments",
          "Designing software"
      ],
      "answer": "Adding new features or improving performance"
  },
  {
      "question": "What is preventive maintenance?",
      "options": [
          "Fixing bugs",
          "Adding new features",
          "Adapting to new environments",
          "Reducing future maintenance effort"
      ],
      "answer": "Reducing future maintenance effort"
  },
  {
      "question": "What is software aging?",
      "options": [
          "The process of writing code",
          "The gradual degradation of software quality",
          "The testing of software",
          "The deployment of software"
      ],
      "answer": "The gradual degradation of software quality"
  },
  {
      "question": "What is refactoring?",
      "options": [
          "Fixing bugs",
          "Changing the internal structure of code without changing its external behavior",
          "Adding new features",
          "Deploying software"
      ],
      "answer": "Changing the internal structure of code without changing its external behavior"
  },
  {
      "question": "What is firmware?",
      "options": [
          "Application software",
          "Software embedded in hardware",
          "Operating system",
          "Network software"
      ],
      "answer": "Software embedded in hardware"
  },
  {
      "question": "Where is firmware typically stored?",
      "options": [
          "RAM",
          "Hard disk",
          "ROM or flash memory",
          "Cloud storage"
      ],
      "answer": "ROM or flash memory"
  },
  {
      "question": "What is an embedded system?",
      "options": [
          "A general-purpose computer",
          "A computer system with a dedicated function",
          "A network server",
          "A database system"
      ],
      "answer": "A computer system with a dedicated function"
  },
  {
      "question": "Which of the following is an example of an embedded system?",
      "options": [
          "Desktop computer",
          "Smartphone",
          "Microwave oven",
          "Laptop"
      ],
      "answer": "Microwave oven"
  },
  {
      "question": "What is a key characteristic of embedded systems?",
      "options": [
          "High processing power",
          "Real-time operation",
          "Large storage capacity",
          "General-purpose functionality"
      ],
      "answer": "Real-time operation"
  },
  {
      "question": "What is a microcontroller?",
      "options": [
          "A large computer",
          "A small computer on a single integrated circuit",
          "A network device",
          "A database server"
      ],
      "answer": "A small computer on a single integrated circuit"
  },
  {
      "question": "What is the role of firmware in an embedded system?",
      "options": [
          "To provide general-purpose functionality",
          "To control the hardware and perform specific tasks",
          "To store user data",
          "To manage network connections"
      ],
      "answer": "To control the hardware and perform specific tasks"
  },
  {
      "question": "What is a real-time operating system (RTOS)?",
      "options": [
          "An operating system for general-purpose computers",
          "An operating system designed for embedded systems with time constraints",
          "A network operating system",
          "A database operating system"
      ],
      "answer": "An operating system designed for embedded systems with time constraints"
  },
  {
      "question": "What is a bootloader?",
      "options": [
          "Software that manages network connections",
          "Software that loads the operating system or application software",
          "Software that controls hardware devices",
          "Software that stores user data"
      ],
      "answer": "Software that loads the operating system or application software"
  },
  {
      "question": "What is a watchdog timer?",
      "options": [
          "A timer used for network synchronization",
          "A timer that resets the system if it hangs",
          "A timer used for data encryption",
          "A timer used for user authentication"
      ],
      "answer": "A timer that resets the system if it hangs"
  },
  {
      "question": "What is a device driver?",
      "options": [
          "Software that manages network connections",
          "Software that enables communication between the operating system and hardware",
          "Software that controls application software",
          "Software that stores user data"
      ],
      "answer": "Software that enables communication between the operating system and hardware"
  },
  {
      "question": "Which programming language is commonly used for embedded systems?",
      "options": [
          "HTML",
          "Python",
          "C/C++",
          "JavaScript"
      ],
      "answer": "C/C++"
  },
  {
      "question": "What is a field-programmable gate array (FPGA)?",
      "options": [
          "A type of application software",
          "An integrated circuit that can be configured after manufacturing",
          "A network device",
          "A database server"
      ],
      "answer": "An integrated circuit that can be configured after manufacturing"
  },
  {
      "question": "What is a system on a chip (SoC)?",
      "options": [
          "A type of application software",
          "An integrated circuit that integrates all components of a computer or other electronic system",
          "A network device",
          "A database server"
      ],
      "answer": "An integrated circuit that integrates all components of a computer or other electronic system"
  },
  {
      "question": "What is the primary concern when designing embedded systems?",
      "options": [
          "Large storage capacity",
          "High processing power",
          "Resource constraints (power, memory, etc.)",
          "General-purpose functionality"
      ],
      "answer": "Resource constraints (power, memory, etc.)"
  },
  {
      "question": "What is the purpose of a real-time clock (RTC) in an embedded system?",
      "options": [
          "To manage network connections",
          "To maintain the current time",
          "To control hardware devices",
          "To store user data"
      ],
      "answer": "To maintain the current time"
  },
  {
      "question": "What is a peripheral device in an embedded system?",
      "options": [
          "The main processor",
          "An input/output device connected to the system",
          "The operating system",
          "The memory"
      ],
      "answer": "An input/output device connected to the system"
  },
  {
      "question": "Which of the following is an example of firmware?",
      "options": [
          "Microsoft Word",
          "BIOS (Basic Input/Output System)",
          "Google Chrome",
          "Adobe Photoshop"
      ],
      "answer": "BIOS (Basic Input/Output System)"
  },
  {
      "question": "What is the purpose of a cross-compiler in embedded systems development?",
      "options": [
          "To compile code on the target system",
          "To compile code on a host system for a different target system",
          "To compile code for general-purpose computers",
          "To compile code for network devices"
      ],
      "answer": "To compile code on a host system for a different target system"
  },
  {
    "question": "Which of the following is an example of system software?",
    "options": ["Microsoft Word", "Operating system", "Google Chrome", "Adobe Photoshop"],
    "answer": "Operating system"
  },
  {
    "question": "What is the primary function of an operating system?",
    "options": ["To run application software", "To manage hardware resources", "To provide user interfaces", "All of the above"],
    "answer": "All of the above"
  },
  {
    "question": "What is a kernel?",
    "options": ["The user interface of an operating system", "The core component of an operating system", "A type of application software", "A network device"],
    "answer": "The core component of an operating system"
  },
  {
    "question": "What is a device driver?",
    "options": ["Software that manages network connections", "Software that enables communication between the operating system and hardware", "Software that controls application software", "Software that stores user data"],
    "answer": "Software that enables communication between the operating system and hardware"
  },
  {
    "question": "What is a utility program?",
    "options": ["Software that manages network connections", "Software that performs specific tasks related to system maintenance", "Software that controls application software", "Software that stores user data"],
    "answer": "Software that performs specific tasks related to system maintenance"
  },
  {
    "question": "Which of the following is a utility program?",
    "options": ["Microsoft Word", "Disk defragmenter", "Google Chrome", "Adobe Photoshop"],
    "answer": "Disk defragmenter"
  },
  {
    "question": "What is a compiler?",
    "options": ["Software that manages network connections", "Software that translates high-level programming languages into machine code", "Software that controls application software", "Software that stores user data"],
    "answer": "Software that translates high-level programming languages into machine code"
  },
  {
    "question": "What is an assembler?",
    "options": ["Software that manages network connections", "Software that translates assembly language into machine code", "Software that controls application software", "Software that stores user data"],
    "answer": "Software that translates assembly language into machine code"
  },
  {
    "question": "What is a linker?",
    "options": ["Software that manages network connections", "Software that combines object files into an executable file", "Software that controls application software", "Software that stores user data"],
    "answer": "Software that combines object files into an executable file"
  },
  {
    "question": "What is application software?",
    "options": ["Software that manages and controls computer hardware", "Software designed for specific tasks by end-users", "Software used for web browsing", "Software used for creating documents"],
    "answer": "Software designed for specific tasks by end-users"
  },
  {
    "question": "Which of the following is an example of application software?",
    "options": ["Operating system", "Microsoft Word", "Device driver", "Compiler"],
    "answer": "Microsoft Word"
  },
  {
    "question": "What is a word processor?",
    "options": ["Software used for managing databases", "Software used for creating and editing documents", "Software used for web browsing", "Software used for creating presentations"],
    "answer": "Software used for creating and editing documents"
  },
  {
    "question": "What is a spreadsheet program?",
    "options": ["Software used for managing databases", "Software used for creating and editing documents", "Software used for performing calculations and data analysis", "Software used for creating presentations"],
    "answer": "Software used for performing calculations and data analysis"
  },
  {
    "question": "What is a database management system (DBMS)?",
    "options": ["Software used for managing databases", "Software used for creating and editing documents", "Software used for web browsing", "Software used for creating presentations"],
    "answer": "Software used for managing databases"
  },
  {
    "question": "What is a presentation program?",
    "options": ["Software used for managing databases", "Software used for creating and editing documents", "Software used for web browsing", "Software used for creating and delivering presentations"],
    "answer": "Software used for creating and delivering presentations"
  },
  {
    "question": "What is a web browser?",
    "options": ["Software used for managing databases", "Software used for creating and editing documents", "Software used for accessing and viewing web pages", "Software used for creating presentations"],
    "answer": "Software used for accessing and viewing web pages"
  },
  {
    "question": "What is an email client?",
    "options": ["Software used for managing databases", "Software used for creating and editing documents", "Software used for sending and receiving emails", "Software used for creating presentations"],
    "answer": "Software used for sending and receiving emails"
  },
  {
    "question": "What is a graphics editor?",
    "options": ["Software used for managing databases", "Software used for creating and editing images", "Software used for web browsing", "Software used for creating presentations"],
    "answer": "Software used for creating and editing images"
  },
  {
    "question": "What is a media player?",
    "options": ["Software used for managing databases", "Software used for creating and editing documents", "Software used for playing audio and video files", "Software used for creating presentations"],
    "answer": "Software used for playing audio and video files"
  },
  {
    "question": "What is an integrated development environment (IDE)?",
    "options": ["Software used for managing databases", "Software used for creating and editing documents", "Software used for developing software applications", "Software used for creating presentations"],
    "answer": "Software used for developing software applications"
  },
  {
    "question": "What is open-source software?",
    "options": [
        "Software that is proprietary and requires a license",
        "Software with source code available to the public",
        "Software that is free to use but not modify",
        "Software that is only available for commercial use"
    ],
    "answer": "Software with source code available to the public"
},
{
    "question": "What is proprietary software?",
    "options": [
        "Software with source code available to the public",
        "Software that is owned by a specific company and requires a license",
        "Software that is free to use and modify",
        "Software that is only available for educational use"
    ],
    "answer": "Software that is owned by a specific company and requires a license"
},
{
    "question": "What is freeware?",
    "options": [
        "Software that is proprietary and requires a license",
        "Software that is free to use but not necessarily to modify",
        "Software with source code available to the public",
        "Software that is only available for commercial use"
    ],
    "answer": "Software that is free to use but not necessarily to modify"
},
{
    "question": "What is shareware?",
    "options": [
        "Software that is proprietary and requires a license",
        "Software that is available for trial use with limited functionality or time",
        "Software with source code available to the public",
        "Software that is only available for educational use"
    ],
    "answer": "Software that is available for trial use with limited functionality or time"
},
{
    "question": "What is cloud-based software?",
    "options": [
        "Software that is installed on a local computer",
        "Software that is accessed over the internet and hosted on remote servers",
        "Software that is only available for commercial use",
        "Software that is only available for educational use"
    ],
    "answer": "Software that is accessed over the internet and hosted on remote servers"
},
{
    "question": "What is a software patch?",
    "options": [
        "A new version of the software",
        "A small piece of software designed to fix bugs or improve security",
        "A user interface element",
        "A hardware component"
    ],
    "answer": "A small piece of software designed to fix bugs or improve security"
},
{
    "question": "What is a software update?",
    "options": [
        "A new version of the software",
        "A small piece of software designed to fix bugs or improve security",
        "A user interface element",
        "A hardware component"
    ],
    "answer": "A new version of the software"
},
{
    "question": "What is software versioning?",
    "options": [
        "The process of creating new software",
        "The process of tracking and managing changes to software",
        "The process of testing software",
        "The process of deploying software"
    ],
    "answer": "The process of tracking and managing changes to software"
},
{
    "question": "What is software documentation?",
    "options": [
        "The process of writing code",
        "The process of creating written materials about software",
        "The process of testing software",
        "The process of deploying software"
    ],
    "answer": "The process of creating written materials about software"
},
{
    "question": "What is a software library?",
    "options": [
        "A collection of software applications",
        "A collection of pre-written code that can be used by other programs",
        "A collection of hardware components",
        "A collection of user manuals"
    ],
    "answer": "A collection of pre-written code that can be used by other programs"
},
{
"question": "What is open-source software?",
"options": [
  "Software that is proprietary and requires a license",
  "Software with source code available to the public",
  "Software that is free to use but not modify",
  "Software that is only available for commercial use"
],
"answer": "Software with source code available to the public"
},
{
"question": "What is proprietary software?",
"options": [
  "Software with source code available to the public",
  "Software that is owned by a specific company and requires a license",
  "Software that is free to use and modify",
  "Software that is only available for educational use"
],
"answer": "Software that is owned by a specific company and requires a license"
},
{
"question": "What is freeware?",
"options": [
  "Software that is proprietary and requires a license",
  "Software that is free to use but not necessarily to modify",
  "Software with source code available to the public",
  "Software that is only available for commercial use"
],
"answer": "Software that is free to use but not necessarily to modify"
},
{
"question": "What is shareware?",
"options": [
  "Software that is proprietary and requires a license",
  "Software that is available for trial use with limited functionality or time",
  "Software with source code available to the public",
  "Software that is only available for educational use"
],
"answer": "Software that is available for trial use with limited functionality or time"
},
{
"question": "What is cloud-based software?",
"options": [
  "Software that is installed on a local computer",
  "Software that is accessed over the internet and hosted on remote servers",
  "Software that is only available for commercial use",
  "Software that is only available for educational use"
],
"answer": "Software that is accessed over the internet and hosted on remote servers"
},
{
"question": "What is a software patch?",
"options": [
  "A new version of the software",
  "A small piece of software designed to fix bugs or improve security",
  "A user interface element",
  "A hardware component"
],
"answer": "A small piece of software designed to fix bugs or improve security"
},
{
"question": "What is a software update?",
"options": [
  "A new version of the software",
  "A small piece of software designed to fix bugs or improve security",
  "A user interface element",
  "A hardware component"
],
"answer": "A new version of the software"
},
{
"question": "What is software versioning?",
"options": [
  "The process of creating new software",
  "The process of tracking and managing changes to software",
  "The process of testing software",
  "The process of deploying software"
],
"answer": "The process of tracking and managing changes to software"
},
{
"question": "What is software documentation?",
"options": [
  "The process of writing code",
  "The process of creating written materials about software",
  "The process of testing software",
  "The process of deploying software"
],
"answer": "The process of creating written materials about software"
},
{
"question": "What is a software library?",
"options": [
  "A collection of software applications",
  "A collection of pre-written code that can be used by other programs",
  "A collection of hardware components",
  "A collection of user manuals"
],
"answer": "A collection of pre-written code that can be used by other programs"
},
{
"question": "What is a software specification?",
"options": ["A hardware component", "A detailed description of the software's functionality and behavior", "A user interface element", "A network connection problem"],
"answer": "A detailed description of the software's functionality and behavior"
},
{
"question": "What is a software prototype?",
"options": ["A hardware component", "An early version of the software used for demonstration and testing", "A user interface element", "A network connection problem"],
"answer": "An early version of the software used for demonstration and testing"
},
{
"question": "What is a software release?",
"options": ["The process of writing code", "The process of making the software available to users", "The process of testing software", "The process of designing software"],
"answer": "The process of making the software available to users"
},
{
"question": "What is software deployment?",
"options": ["The process of writing code", "The process of installing and configuring software in a production environment", "The process of testing software", "The process of designing software"],
"answer": "The process of installing and configuring software in a production environment"
},
{
"question": "What is software scalability?",
"options": ["The ability of software to handle increasing workloads", "The ability of software to fix bugs", "The ability of software to change user interfaces", "The ability of software to connect to hardware"],
"answer": "The ability of software to handle increasing workloads"
},
{
"question": "What is software security?",
"options": ["The process of writing code", "The process of protecting software from unauthorized access and attacks", "The process of testing software", "The process of designing software"],
"answer": "The process of protecting software from unauthorized access and attacks"
},
{
"question": "What is software performance?",
"options": ["The ability of software to handle increasing workloads", "The efficiency and speed of software execution", "The ability of software to change user interfaces", "The ability of software to connect to hardware"],
"answer": "The efficiency and speed of software execution"
},
{
"question": "What is software portability?",
"options": ["The ability of software to handle increasing workloads", "The ability of software to run on different platforms and environments", "The ability of software to change user interfaces", "The ability of software to connect to hardware"],
"answer": "The ability of software to run on different platforms and environments"
},
{
"question": "What is software maintainability?",
"options": ["The ability of software to handle increasing workloads", "The ease with which software can be modified and maintained", "The ability of software to change user interfaces", "The ability of software to connect to hardware"],
"answer": "The ease with which software can be modified and maintained"
},
{
"question": "What is software usability?",
"options": ["The ability of software to handle increasing workloads", "The ease with which users can learn and use the software", "The ability of software to change user interfaces", "The ability of software to connect to hardware"],
"answer": "The ease with which users can learn and use the software"
},
{
  "question": "What is an API (Application Programming Interface)?",
  "options": ["A user interface", "A set of rules and protocols for building software applications", "A hardware component", "A database management system"],
  "answer": "A set of rules and protocols for building software applications"
},
{
  "question": "What is a software framework?",
  "options": ["A collection of software applications", "A reusable software environment that provides a foundation for developing applications", "A collection of hardware components", "A database management system"],
  "answer": "A reusable software environment that provides a foundation for developing applications"
},
{
  "question": "What is software testing?",
  "options": ["The process of writing code", "The process of evaluating software to find defects", "The process of deploying software", "The process of designing software"],
  "answer": "The process of evaluating software to find defects"
},
{
  "question": "What is unit testing?",
  "options": ["Testing the entire software as a whole", "Testing individual components or modules of the software", "Testing the user interface", "Testing the database"],
  "answer": "Testing individual components or modules of the software"
},
{
  "question": "What is integration testing?",
  "options": ["Testing individual components or modules of the software", "Testing the interactions between different components of the software", "Testing the user interface", "Testing the database"],
  "answer": "Testing the interactions between different components of the software"
},
{
  "question": "What is system testing?",
  "options": ["Testing individual components or modules of the software", "Testing the interactions between different components of the software", "Testing the entire software as a whole", "Testing the database"],
  "answer": "Testing the entire software as a whole"
},
{
  "question": "What is user acceptance testing (UAT)?",
  "options": ["Testing by the developers", "Testing by the end-users to ensure the software meets their requirements", "Testing by the database administrator", "Testing by the network administrator"],
  "answer": "Testing by the end-users to ensure the software meets their requirements"
},
{
  "question": "What is a software bug?",
  "options": ["A hardware malfunction", "An error or defect in the software", "A user interface element", "A network connection problem"],
  "answer": "An error or defect in the software"
},
{
  "question": "What is debugging?",
  "options": ["The process of writing code", "The process of identifying and fixing software bugs", "The process of deploying software", "The process of designing software"],
  "answer": "The process of identifying and fixing software bugs"
},
{
  "question": "What is a software requirement?",
  "options": ["A hardware component", "A description of what the software should do", "A user interface element", "A network connection problem"],
  "answer": "A description of what the software should do"
}

];

let currentQuestion = 0;
let totalAnswered = 0;
let totalCorrect = 0;
let shuffledQuizData = [];

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("start-button").addEventListener("click", startQuiz);
    document.getElementById("next-button").addEventListener("click", nextQuestion);
    document.getElementById("prev-button").addEventListener("click", prevQuestion);
    document.getElementById("end-button").addEventListener("click", showFinalResult);
});

function startQuiz() {
    document.getElementById("start-section").style.display = "none";
    document.getElementById("quiz-section").style.display = "block";
    shuffledQuizData = shuffleArray([...quizData]); // Shuffle questions
    currentQuestion = 0;
    totalAnswered = 0;
    totalCorrect = 0;
    loadQuestion();
}

function loadQuestion() {
    if (currentQuestion >= shuffledQuizData.length) {
        showFinalResult();
        return;
    }

    const quiz = shuffledQuizData[currentQuestion];
    document.getElementById("question").innerText = quiz.question;
    const optionsContainer = document.getElementById("options");
    optionsContainer.innerHTML = "";

    quiz.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        button.onclick = () => checkAnswer(button, option);
        optionsContainer.appendChild(button);
    });

    document.getElementById("prev-button").disabled = currentQuestion === 0;
    document.getElementById("next-button").disabled = currentQuestion === shuffledQuizData.length - 1;
}

function checkAnswer(button, selected) {
    totalAnswered++;
    const correctAnswer = shuffledQuizData[currentQuestion].answer;
    let delay = 1000; // Default delay (1 second)

    if (selected === correctAnswer) {
        button.classList.add("correct");
        totalCorrect++;
    } else {
        button.classList.add("wrong");
        delay = 3000; // Wait for 3 seconds if wrong

        const optionsContainer = document.getElementById("options");
        Array.from(optionsContainer.children).forEach(btn => {
            if (btn.innerText === correctAnswer) {
                btn.classList.add("correct");
            }
        });
    }

    setTimeout(() => {
        if (currentQuestion < shuffledQuizData.length - 1) {
            currentQuestion++;
            loadQuestion();
        } else {
            showFinalResult();
        }
    }, delay);
}

function nextQuestion() {
    if (currentQuestion < shuffledQuizData.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

function showFinalResult() {
    document.getElementById("quiz-section").style.display = "none";
    document.getElementById("quiz-end").style.display = "block";
    document.getElementById("final-score").innerText = `Final Score: ${totalCorrect} / ${totalAnswered}`;
}

function restartQuiz() {
    document.getElementById("quiz-end").style.display = "none";
    document.getElementById("start-section").style.display = "block";
    startQuiz();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

