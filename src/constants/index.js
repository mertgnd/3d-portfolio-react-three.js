import { meta, shopify, starbucks, tesla, logo } from "../assets/images";
import {
    car,
    contact,
    csharp,
    python,
    django,
    wordpress,
    visualstudio,
    microsoftsql,
    dapperorm,
    dotnetmvc,
    docker,
    visualstudiocode,
    devops,
    azure,
    postman,
    mysql,
    gitlab,
    swagger,
    pycharm,
    seo,
    css,
    dotnet,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    sosyalgi,
    gosb,
    midenas,
    mobileapp,
    rentacar,
    fashion,
    student,
    cportfolio,
    restate,
    code
} from "../assets/icons";

export const skills = [
    {
        imageUrl: dotnet,
        name: ".Net",
        type: "Backend",
    },
    {
        imageUrl: csharp,
        name: "C#",
        type: "Backend",
    },
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: django,
        name: "Python Django",
        type: "Backend",
    },
    {
        imageUrl: wordpress,
        name: "Wordpress",
        type: "Web Design",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: dotnetmvc,
        name: ".Net MVC",
        type: "Backend"
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: dapperorm,
        name : "Dapper ORM",
        type: "Database",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Version Control",
    },
    {
        imageUrl: visualstudiocode,
        name: "Visual Studio Code",
        type: "IDE",
    },
    {
        imageUrl: devops,
        name: "DevOps",
        type: "DevOps",
    },
    {
        imageUrl: azure,
        name: "Microsoft Azure",
        type: "Team Management",
    },
    {
        imageUrl: postman,
        name: "Postman",
        type: "Application Programming Interface",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
    {
        imageUrl: gitlab,
        name: "Gitlab",
        type: "Git Repos Management",
    },
    {
        imageUrl: swagger,
        name: "Swagger",
        type: "Application Programming Interface",
    },
    {
        imageUrl: pycharm,
        name: "PyCharm",
        type: "IDE",
    },
    {
        imageUrl: seo,
        name: "SEO",
        type: "seo",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: visualstudio,
        name: "Visual Studio",
        type: "IDE",
    },
    {
        imageUrl: microsoftsql,
        name: "Microsoft SQL",
        type: "Database",
    },
];

export const experiences = [
    {
        title: "Pyhton Django Web Developer",
        company_name: "Sosyalgi Agency",
        icon: sosyalgi,
        iconBg: "#fffdd0",
        date: "Sep 2020 - Nov 2022",
        points: [
            "Working for clients projects with following tools and technologies: ",
            "Python, Python Django Framework, HTML&CSS&JS, MSSQL Server, MySQL Server, Wordpress, SEO, Microsoft Azure, Visual Studio Code, MSSQL Configuration Manager.",
            "We have made plenty of web sites by wordpress and full-stack e-commerce web projects with python django. We have made web designs by using HTML & CSS & JS.",
            "sosyalgi.com.tr",
        ],
    },
    {
        title: "Web Developer & Designer",
        company_name: "Gosb Teknopark",
        icon: gosb,
        iconBg: "#FF7F00",
        date: "Nov 2022 - Feb 2023",
        points: [
            "Working for clients projects with following tools and technologies:",
            "HTML&CSS&JS, Wordpress, SEO.",
            "First of all, we created the company's own website (gosbteknopark.com). We designed and published our customers' websites according to their requests.",
            "gosbteknopark.com",
        ],
    },
    {
        title: ".NET Software Developer",
        company_name: "Midenas D.o.o",
        icon: midenas,
        iconBg: "#1A1D1E",
        date: "Mar 2023 - Nov 2023",
        points: [
            "Working on different project with following tools and technologies:",
            ".Net, .Net Core 6.0, .Net Framework 7, ASP.NET Core Web API, Entity Framework, NUnit SwaggerUI, Postman, Redux Dev Tools, Microsoft SQL Server, MS SQL Management Studio, MS SQL Configuration Manager, Visual Studio, Visual Studio Code.",
            "The projects I worked on were guided by an agile methodology (SCRUM) using Azure DevOps/Git to plan, track, and manage the development cycle.",

        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/mertgnd',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/mertgundogdu61/',
    }
];

export const projects = [
    {
        iconUrl: mobileapp,
        theme: 'btn-back-red',
        name: 'Movie recommendation app',
        description: [
            "A mobile application that includes movie recommendations, movie ratings and filtering.",
            " My task in the project was to create the interface to be displayed for users and to perform logic operations. At the end of the project, we achieved our goal and prepared a small-scale application that users can easily use."
        ],
        link: '#',
    },
    {
        iconUrl: rentacar,
        theme: 'btn-back-green',
        name: 'Rent a Car Desktop Application ',
        description: [
            "A Rent a Car System for Desktop Users. This project included management of users, cars, booking, and brunches. ",
            " My task in the project was to establish logic on users and the car rental system and to prepare the designs of the pages where these operations would be performed."
        ],
        link: 'https://github.com/mertgnd/Rent-a-Car-Desktop-App-With-CSharp',
    },
    {
        iconUrl: fashion,
        theme: 'btn-back-blue',
        name: 'ThePalmz E-Commerce Web Project',
        description: [
            "Our goal in this web project was CRUD operations for products, login-register and authorizations, 3 different user type and admin page for managemenet users, product, and page contents. In addition we added payment method by using iyzico payment modules. Our purpose was to create a web project that has all functions working and is manageable for the seller. ",
        ],
        link: 'https://github.com/mertgnd/ECommerce-Fashion-WebSite-with-Python-Django',
    },
    {
        iconUrl: student,
        theme: 'btn-back-pink',
        name: 'Student Management Web Application',
        description: [
            "We have developed a web project that includes making appointments with professors, contacting the department secretary, tracking grades, describing university news, accessing course notes and contents, uploading CVs, downloading and viewing uploaded CVs, creating a transcript request from the department, and internship and job-internship postings by professors. Our goal was the make every process faster for university department. In addition, for the user information on the site, we have listed how to transfer information to the user with chart.js and make some predictions for users with machine learning. ",
        ],
        link: 'https://github.com/mertgnd/Graduation-Project',
    },
    {
        iconUrl: restate,
        theme: 'btn-back-black',
        name: 'Real-Estate Asp.net Core 8.0 + MVC Project',
        description: 'Implemented the backend using ASP.NET Core 8.0, utilizing Web API to expose endpoints for data retrieval and manipulation. Developed the user interface using Bootstrap, CSS, HTML, and Razor Pages within the ASP.NET MVC framework to create a responsive and visually appealing frontend. Integrated SignalR to provide real-time updates, enabling users to receive instant notifications on property changes, messages, or other relevant events. Worked on database integration, utilizing Dapper to manage data models and interact with the database.',
        link: 'https://github.com/mertgnd/RealEstate_Dapper_Api',
    },
    {
        iconUrl: cportfolio,
        theme: 'btn-back-yellow',
        name: 'Company Portfolio MVC Web Project',
        description: 'My task in this project was to create an admin panel and enter and edit dynamic content for the sections, create admin user transactions, prepare the reporting section, prepare the page designs and create the architecture. The aim was to ensure the implementation of the SOLID structure, create partials accordingly and pay attention to clean code.',
        link: 'https://github.com/mertgnd/Company_Portfolio_MVC_Project',
    },
    {
        iconUrl: code,
        theme: 'btn-back-orange',
        name: 'LMS Platform - Midenas',
        description: 'I worked on solution implementation of the API logic and systemic layering. I was tasked to creating endpoints and underlying logic for handling entities, implementing login authentication and roll-based authorization. Together with the team, I was tasked to demonstrate the development progress of the project on regular make-believe client meetings.',
        link: 'https://github.com/mertgnd/LMS_Project',
    },
];