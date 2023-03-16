import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {
  //baseUrl = environment.baseUrl;

  constructor(
    private http: HttpClient
  ) { }

  projects:any = [
    {
      id: 1,
      title: 'Proof of Concept to Implement IBM Hyperledger Fabric over Traditional DBs for improved security standards for the protection of Customer PII Data',
      desc: '',
      imgUrl: 'assets/images/hyperledger.png',
      tech: 'CouchDB, LevelDB, IBM Hyperledger Fabric'
    },

    {
      id: 2,
      title: 'Automated Bot Notifications via Webex Integration for quicker defect resolution and automated control Processes',
      desc: '',
            imgUrl: 'assets/images/webex.png',
      tech: 'Webex Bots, Springboot, MSSQL, API/Microservices'
    },


    {
      id: 3,
      title: 'Step by Step Conceptual development (from Idea to UI design and ERD) of FitPal Application System',
      desc: '',
      imgUrl: 'assets/images/wnd.png',
      tech: 'Class Diagrams, ERD, Windows Navigation Diagram (WND), Association Diagrams'
    },


    {
      id: 4,
      title: 'Phrase Based Speech to Speech Machine Translator between 2 PCs from Hindi to Telugu and Vice-versa',
      desc: '',
      imgUrl: 'assets/images/mt.jpg',
      tech: 'AI/ML, Deep learning techniques and Algorithms, Signal Processing'
    },

    {
      id: 5,
      title: 'Data Visualization with Tableau',
      desc: '',
            imgUrl: 'assets/images/dv.png',
      tech: 'Tableau,Spreadsheet Analytics'
    },



    {
      id: 6,
      title: 'Client Server Bank Application using TCP and UDP',
      desc: '',
      imgUrl: 'assets/images/tcp.png',
      tech: 'OSI, Computer Networking Fundamentals, TCP/UDP'
    },



    {
      id: 7,
      title: 'Arduino Alarm Clock',
      desc: '',
      imgUrl: 'assets/images/ard.png',
      tech: 'VHDL, Matlab, C Programming'
    },

    {
      id: 11,
      title: 'Personal Portfolio Using Angular',
      desc: '',
      imgUrl: 'assets/images/prtpic.png',
      tech: 'Angular ,Bootstrap, NodeJS, TS, HTML, CSS'
    },


    

  ]
  about2 = `I am an analytical-minded, motivated individual with an in-depth knowledge of programming languages and development tools seeking to hone my technical skills and expertise along with designing creative software and products as per the org's needs as FullStack Developer .

  Currently pursuing my Master of Science Degree in Information Technology & Management with UT Dallas .
  
  I'm an experienced Full Stack Engineer with 3 years of demonstrated history of working in the financial IT sector of the automotive industry. I have a strong engineering background with a Bachelor's of Technology degree focused in Electronics and Communications Engineering from National Institute of Technology Warangal where I worked on capstone projects involving Deep learning, AI, DSP, VLSI, etc. .
  
  During my tenure as a Software Engineer at Ford, I have demonstrated excellence in rapid application development, error/defects reporting, automatic quote generation, as well as customer and business satisfaction. In addition, I have proven abilities in developing antifraud and AML services, database management, regression test scripts development, automation testing, bot notifications development, error handling and clean code management.`

  about = "Curiosly involved in finding more efficient ways to do complex tasks. Meticulously calculated about my work and the approaches used in tackling a problem as I always have a can-do attitude. I am actively Seeking an opportunity for a summer 2023 internship in either software development, Quality Assurance, Product Management or Data Analytics ."

  
  resumeurl = "https://drive.google.com/file/d/14y1h8kIXf6HzoOMT24cTGzGxQbafCfjB/view"

  skillsData: any = [
    {
      'id': '1',
      'skill': 'OOPS/DSA (JAVA AOP, PYTHON, SPRING, ANGULAR, TS/JS, C++)',
      'progress': '97%'
    },
    {
      'id': '2',
      'skill': 'SQL/DBMS (OracleDB, MSSQL, NoSQL)',
      'progress': '95%'
    },
    {
      'id': '3',
      'skill': 'IT OPERATIONS (Cluster Management/DevOPs/QA/CICD)',
      'progress': '90%'
    },
    {
      'id': '4',
      'skill': 'Product Lifecycle Management (Agile/Scrum, Stakeholder Management, PRDs, backlog Grooming) ',
      'progress': '85%'
    },
    {
      'id': '5',
      'skill': 'DATA/BUSINESS ANALYTICS (R/Tableau/Splunk/Dynatrace)',
      'progress': '81%'
    },
    {
      'id': '6',
      'skill': 'Business Communication',
      'progress': '100%'
    }
  ];


  educationData: any = [
    {
      'id': '1',
      'from_to_year': '2022 - 2024 (expected)',
      'education': 'Master\'s Degree',
      'stream': 'Master of Science in Information Technology and Management',
      'info': `UT DALLAS - Jindal School of Management .
Finished the first Semester with a core GPA of 4.0 .
Subjects taken in the 1st Semester -> Systems Analysis & Project Management, Data Management, Statistics and Data Analysis .
Subjects taken in the 2nd Semester -> AWS Cloud Solution Architecture, Data Vizualization, Web Analytics, Marketing Management .
 .`,
      'institution': 'University of Texas at Dallas'
    },
    {
      'id': '2',
      'from_to_year': '2015 - 2019',
      'education': 'Bachelor\'s Degree',
      'stream': 'Bachelor of Technology in Electronics and Communication Engineering ',
      'institution': 'National Institute of Technology, Warangal',
      'info': `One of the Top 10 Universities all over India .
Strong solid engineering foundation with a concentration for Hardware and Software .
Completed capstone Project "Implementing a Phrase Based Speech to Speech Machine Translator between 2 PCs from Hindi to Telugu and vice-versa`
    },
  ];
  exprienceData: any = [
    {
      id: 3,
      company: 'Ford Motor Pvt. Ltd.',
      location: 'Chennai, India',
      timeline: 'August 2019 to June 2022',
      role: 'Software Engineer',
      work: 'Diagrammed and forecasted Network Architecture and Resource Planning for several applications for Ford Credit China with an accuracy of 100% .Ensured high client satisfaction by providing business teams dashboards visualizing data regarding application health and error metrics via Splunk & Dynatrace, and designed dashboards using Tableau describing customer vehicle preferences .Developed Antifraud and AML services for Ford Credit China by consolidating essentials skills in spring framework . Improved automated quotes for Ford customers across the world EU, NA, SA, South Africa by developing several features for the Global Ford Credit Calculator (Global Ecommerce Platform) .Simplified & elucidated error handling, API Metrics, codebase health monitoring, clean code management and similar healthy ethical coding practices by liaising with business teams all over the world (local to Ford Motors Pvt. Ltd.) to implement and incorporate cost-effective features as part of a multinational AGILE (SCRUM) team in a Product Driven Organization .Efficiently leveraged Webex applications to construct Bot Notifications to report errors/defects regarding the user-facing webpages as well as maintenance and execution of periodical batch operations .Actively involved in the front-end development of web application on angular framework, middleware development of microservices/REST APIs on spring frameworks while designing database structures and stored procedures for backend processes with Oracle DB and SQL Servers .Proposed and constructed a proof of concept to integrate Hyperledger Fabric Blockchain for improved security and enhanced data management instead of traditional databases.'

    },
    {
      id: 3,
      company: 'Mustafa Sultan Telecommunications Co. LLC',
      location: 'Muscat, Sultanate of Oman',
      timeline: 'May 2018 to June 2018',
      role: 'Telcommunications Intern',
      work: `
      Played a predominant role in the installation, commissioning and testing of remote VSAT system .
      Proactively involved in the operation & maintenance of Auto Tracking Antennas for Civil Aviation Oman.`
    },


  ]



  skills(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.skillsData;
  }

  getProjects(): Observable<any> {
    // return this.http.get(this.baseUrl + 'skills');
    return this.projects;
  }
  education(): Observable<any> {
    // return this.http.get(this.baseUrl + 'education');
    return this.educationData;
  }

  exprience(): Observable<any> {
    // return this.http.get(this.baseUrl + 'exprience');
    return this.exprienceData;
  }

  // extraCircular(): Observable<any> {
  //   // return this.http.get(this.baseUrl + 'exprience');
  //   return this.extraCircularInfo;
  
}
