export const URL = "https://portfolio-project-api-sooty.vercel.app/v1/api";
export const URL_V2 = "https://portfolio-project-api-sooty.vercel.app/v2/api";

// const URL = "https://portfolio-project-api.onrender.com/v1/api/project";

async function getProject() {
  const result = {
    "count": 24,
    "status": 200,
    "success": true,
    "message": "Project fetching successfully!",
    "project": [
      {
        "_id": "67d929453ab7bf2ff6d65898",
        "title": "Task Manager - Full Stack Application",
        "details": "This is a full-stack Task Manager web application that allows users to manage their tasks efficiently. The application includes user authentication, profile management, and task management functionalities.",
        "longDetails": "\u003Cp\u003EThis is a full-stack Task Manager web application that allows users to manage their tasks efficiently. The application includes&nbsp;user authentication, profile management, and task management&nbsp;functionalities. The frontend is built with&nbsp;React, while the backend is powered by&nbsp;Node.js with Express.js. The app provides a seamless user experience with state management using Redux Toolkit and API integration for task CRUD operations.\u003C/p\u003E\u003Ch2\u003EFrontend URL\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E\u003Ca href=\"https://task-management-frontend-liard.vercel.app/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--fgColor-accent, var(--color-accent-fg)); background-color: transparent;\"\u003Ehttps://task-management-frontend-liard.vercel.app\u003C/a\u003E\u003C/li\u003E\u003C/ul\u003E\u003Ch2\u003EBackend URL\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E\u003Ca href=\"https://task-management-server-liard-ten.vercel.app/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--fgColor-accent, var(--color-accent-fg)); background-color: transparent;\"\u003Ehttps://task-management-server-liard-ten.vercel.app\u003C/a\u003E\u003C/li\u003E\u003C/ul\u003E\u003Ch2\u003EFeatures\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch3\u003EUser Authentication\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003ERegister new users\u003C/li\u003E\u003Cli\u003ELogin with JWT-based authentication\u003C/li\u003E\u003Cli\u003EForgot and reset password functionality\u003C/li\u003E\u003Cli\u003ESecure API endpoints for user profile management\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003EUser Profile Management\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003EView and update profile details\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003ETask Management\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003ECreate, read, update, and delete tasks\u003C/li\u003E\u003Cli\u003EDisplay a list of user-specific tasks\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003ESecurity Features\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003EPassword hashing using&nbsp;bcrypt\u003C/li\u003E\u003Cli\u003EJWT-based authentication and authorization\u003C/li\u003E\u003Cli\u003EInput validation to prevent malicious requests\u003C/li\u003E\u003Cli\u003EError handling for common HTTP status codes\u003C/li\u003E\u003Cli\u003EMiddleware-based authentication guard\u003C/li\u003E\u003Cli\u003ECORS support for cross-origin requests\u003C/li\u003E\u003Cli\u003ELogging with&nbsp;morgan\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003EState Management\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003EUses&nbsp;Redux Toolkit&nbsp;for managing global state\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003EUI &amp; Styling\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003EBuilt with&nbsp;Tailwind CSS&nbsp;for responsive design\u003C/li\u003E\u003C/ul\u003E\u003Ch2\u003ETech Stack\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch3\u003EFrontend\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003EReact&nbsp;(Create React App / Vite)\u003C/li\u003E\u003Cli\u003ERedux Toolkit&nbsp;for state management\u003C/li\u003E\u003Cli\u003EReact Router&nbsp;for navigation\u003C/li\u003E\u003Cli\u003EAxios&nbsp;for API requests\u003C/li\u003E\u003Cli\u003ETailwind CSS&nbsp;for styling\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003EBackend\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003ENode.js\u003C/li\u003E\u003Cli\u003EExpress.js\u003C/li\u003E\u003Cli\u003EMongoDB\u003C/li\u003E\u003Cli\u003EJWT for authentication\u003C/li\u003E\u003Cli\u003Ebcrypt for password hashing\u003C/li\u003E\u003C/ul\u003E\u003Ch2\u003EInstallation\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch3\u003EPrerequisites\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003ENode.js installed\u003C/li\u003E\u003Cli\u003EMongoDB running\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003ESteps to Run Locally\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch4\u003EFrontend\u003C/h4\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cpre class=\"ql-syntax\" spellcheck=\"false\"\u003EClone the repository:git clone https://github.com:muhammadranju/task-management.git\ncd task-manager/frontend\n\u003C/pre\u003E\u003Col\u003E\u003Cli\u003E\u003Cbr\u003E\u003C/li\u003E\u003C/ol\u003E\u003Cpre class=\"ql-syntax\" spellcheck=\"false\"\u003EInstall dependencies:npm install\n\u003C/pre\u003E\u003Cp\u003E\t\t2.\u003C/p\u003E\u003Cpre class=\"ql-syntax\" spellcheck=\"false\"\u003ECreate a&nbsp;.env&nbsp;file and configure environment variables:FRONTEND_URL=http://localhost:5173\n\u003C/pre\u003E\u003Cp\u003E\t\t3.\u003C/p\u003E\u003Cpre class=\"ql-syntax\" spellcheck=\"false\"\u003EStart the development server:npm start\n\u003C/pre\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch4\u003EBackend\u003C/h4\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cpre class=\"ql-syntax\" spellcheck=\"false\"\u003EClone the repository:cd task-management/server\n\u003C/pre\u003E\u003Cp\u003E\t\t1.\u003C/p\u003E\u003Cpre class=\"ql-syntax\" spellcheck=\"false\"\u003EInstall dependencies:npm install\n\u003C/pre\u003E\u003Cp\u003E\t\t2.\u003C/p\u003E\u003Cpre class=\"ql-syntax\" spellcheck=\"false\"\u003ECreate a&nbsp;.env&nbsp;file and configure environment variables:PORT=5000\nJWT_SECRET=your_secret_key\nMONGO_URL=\"mongodb://127.0.0.1:27017/task-manager\"\nNODE_ENV=\"development\"\nFRONTEND_URL=\"http://localhost:5173\"\nEMAIL_USER=\"USER_EMAIL\"\nEMAIL_PASS=\"YOUR_EMAIL_PASSWORD\"\n\u003C/pre\u003E\u003Cp\u003E\t\t3.\u003C/p\u003E\u003Cpre class=\"ql-syntax\" spellcheck=\"false\"\u003EStart the server:npm start\n\u003C/pre\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch2\u003EProject Structure\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cpre class=\"ql-syntax\" spellcheck=\"false\"\u003E/task-manager\n│── frontend/\n│   │── src/\n│   │   │── components/     # Reusable UI components\n│   │   │── pages/          # Application pages (Login, Register, Dashboard)\n│   │   │── store/         # Redux store and slices\n│   │   │── utils/         # Helper functions\n│   │   │── App.js         # Main app component\n│   │   │── index.js       # Entry point\n│── backend/\n│   │── routes/            # API route handlers\n│   │── controllers/       # Business logic for API endpoints\n│   │── models/            # MongoDB data models\n│   │── middleware/        # Authentication and validation middleware\n│   │── config/            # Environment and database configurations\n│   │── server.js          # Entry point\n\u003C/pre\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch2\u003EDeployment\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003EFrontend:&nbsp;Deploy on&nbsp;Vercel, Netlify, or Firebase Hosting\u003C/li\u003E\u003Cli\u003EBackend:&nbsp;Deploy on&nbsp;Vercel\u003C/li\u003E\u003Cli\u003EDatabase:&nbsp;Use&nbsp;MongoDB Atlas\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E",
        "category": "react-redux-node-mongodb-express.js-jwt",
        "author": "Ruis Sander",
        "liveLink": "https://task-management-frontend-liard.vercel.app/",
        "sourceCode": "https://github.com/muhammadranju/task-management/tree/main/frontend",
        "backendSourceCode": "https://github.com/muhammadranju/task-management/tree/main/server",
        "image": "https://res.cloudinary.com/nodelove/image/upload/v1742285105/portfolio/vtmwyzgaogqq79avrgs5.png",
        "avatar": "https://avatars.githubusercontent.com/u/200890800?s=96&v=4",
        "status": "published",
        "tags": [
          "node.js",
          " express.js",
          " mongodb",
          " jwt",
          " bcrypt",
          " react",
          " redux toolkit",
          " react router",
          " axios",
          " tailwindcss"
        ],
        "createdAt": "2025-03-18T08:05:25.196Z",
        "updatedAt": "2025-03-18T08:05:25.196Z",
        "slug": "Task-Manager-Full-Stack-Application",
        "__v": 0
      },
      {
        "_id": "67d55b8f53aac71e37b47297",
        "title": "Modern Software testing reimagined Next.js Landing Page using Tailwind CSS",
        "details": "This is a landing page built with Next.js. It is a simple and clean design that showcases the features of Next.js.",
        "longDetails": "\u003Cp\u003EThis is a landing page built with Next.js. It is a simple and clean design that showcases the features of Next.js.\u003C/p\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch2\u003EFeatures\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003EResponsive design\u003C/li\u003E\u003Cli\u003ENavigation menu\u003C/li\u003E\u003Cli\u003EContact form\u003C/li\u003E\u003Cli\u003EFeatures page\u003C/li\u003E\u003Cli\u003EPricing page\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch2\u003ETechnologies Used\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003ENext.js\u003C/li\u003E\u003Cli\u003ETailwind CSS\u003C/li\u003E\u003Cli\u003EReact\u003C/li\u003E\u003C/ul\u003E\u003Ch2\u003ESetup\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Col\u003E\u003Cli\u003EClone the repository\u003C/li\u003E\u003Cli\u003EInstall dependencies\u003C/li\u003E\u003Cli\u003ERun the development server\u003C/li\u003E\u003C/ol\u003E\u003Cpre class=\"ql-syntax\" spellcheck=\"false\"\u003Epnpm install\npnpm run dev\n\u003C/pre\u003E",
        "category": "next.js-react-taildwind-shadcn",
        "author": "Ruis Sander",
        "liveLink": "https://nextjs-landing-page-t7oi.vercel.app/",
        "sourceCode": "https://github.com/muhammadranju/nextjs-landing-page",
        "backendSourceCode": "",
        "image": "https://res.cloudinary.com/nodelove/image/upload/v1742035708/portfolio/fsckkqi8bvku4w5ov4ta.png",
        "avatar": "https://avatars.githubusercontent.com/u/200890800?s=96&v=4",
        "status": "published",
        "tags": [
          "next.js",
          " react.js",
          " taildwindcss",
          " shadsc"
        ],
        "createdAt": "2025-03-15T10:50:55.321Z",
        "updatedAt": "2025-03-18T00:13:48.036Z",
        "slug": "Modern-Software-testing-reimagined-Next.js-Landing-Page-using-Tailwind-CSS",
        "__v": 0
      },
      {
        "_id": "678e1c1474ffb5c51a791c66",
        "title": "Product Hunt - Tech product Showcase",
        "details": "This project is a front-end application for a Product Hunt clone. It allows users to discover, share, and interact with new products. The application is built with modern web technologies to ensure a smooth and responsive user experience.",
        "category": "react-node-mongodb-firebase",
        "author": "Ruis Sander",
        "liveLink": "https://product-huntapp.web.app",
        "sourceCode": "https://github.com/muhammadranju/mini-product-hunt",
        "image": "https://res.cloudinary.com/nodelove/image/upload/v1737366577/portfolio/jpsonskg8bxzz2teo34a.png",
        "avatar": "https://avatars.githubusercontent.com/u/200890800?s=96&v=4",
        "tags": [
          "tech",
          " ai",
          " web-app-showcase",
          " products"
        ],
        "createdAt": "2025-01-20T09:49:08.824Z",
        "updatedAt": "2025-03-18T00:07:30.970Z",
        "__v": 1,
        "backendSourceCode": "https://github.com/muhammadranju/mini-product-hunt-api",
        "status": "published",
        "longDetails": "\u003Cp\u003EThis project is a frontend application for a Product Hunt clone. It allows users to discover, share, and interact with new products. The application is built with modern web technologies to ensure a smooth and responsive user experience.\u003C/p\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch3\u003EAdmin Information:\u003C/h3\u003E\u003Cul\u003E\u003Cli\u003EName: Admin\u003C/li\u003E\u003Cli\u003EEmail:&nbsp;\u003Ca href=\"mailto:admin@gmail.com\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--fgColor-accent, var(--color-accent-fg)); background-color: transparent;\"\u003Eadmin@gmail.com\u003C/a\u003E\u003C/li\u003E\u003Cli\u003EPassword: Admin123\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch2\u003EFeatures\u003C/h2\u003E\u003Cul\u003E\u003Cli\u003EUser authentication and authorization\u003C/li\u003E\u003Cli\u003EProduct listing and details view\u003C/li\u003E\u003Cli\u003EUpvoting and commenting on products\u003C/li\u003E\u003Cli\u003ESearch functionality\u003C/li\u003E\u003Cli\u003EResponsive design for mobile and desktop\u003C/li\u003E\u003Cli\u003EAdmin can see all user and make them as Admin Moderator\u003C/li\u003E\u003Cli\u003EAdmin can create coupons\u003C/li\u003E\u003Cli\u003EAdmin can delete coupons\u003C/li\u003E\u003Cli\u003EAdmin can update coupons\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch2\u003ETechnologies:\u003C/h2\u003E\u003Cul\u003E\u003Cli\u003EReact\u003C/li\u003E\u003Cli\u003EReact Router\u003C/li\u003E\u003Cli\u003EAxios\u003C/li\u003E\u003Cli\u003ETailwind CSS\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch2\u003EPurpose:\u003C/h2\u003E\u003Cul\u003E\u003Cli\u003EThis project is a frontend application for a Product Hunt. It allows users to discover, share, and interact with new products. The application is built with modern web technologies to ensure a smooth and responsive user experience.\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch2\u003EPackages Used\u003C/h2\u003E\u003Cul\u003E\u003Cli\u003EReact: A JavaScript library for building user interfaces\u003C/li\u003E\u003Cli\u003EReact Router: Declarative routing for React applications\u003C/li\u003E\u003Cli\u003EAxios: Promise-based HTTP client for the browser and Node.js\u003C/li\u003E\u003Cli\u003ETailwind CSS: Visual primitives for the component age\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch2\u003EScreenshots:\u003C/h2\u003E\u003Cp\u003E\u003Ca href=\"https://github.com/muhammadranju/mini-product-hunt/blob/main/public/1.jpeg\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: transparent; color: var(--fgColor-accent, var(--color-accent-fg));\"\u003E\u003Cimg src=\"https://github.com/muhammadranju/mini-product-hunt/raw/main/public/1.jpeg\" alt=\"Screenshot 1\"\u003E\u003C/a\u003E\u003C/p\u003E"
      },
      {
        "_id": "67741451291b373495c5dd84",
        "title": "The Historical Artifacts Tracker Frontend",
        "details": "This is the frontend for the Artifacts Tracker application. It is built using React and Tailwind CSS. The application allows users to create, view, and manage their artifacts. It also includes features for user authentication and authorization.\n",
        "category": "react-node-mongodb-firebase",
        "author": "Ruis Sander",
        "liveLink": "https://react-artifacts-tracker.web.app",
        "sourceCode": "https://github.com/muhammadranju/artifacts-tracker-frontend",
        "image": "https://res.cloudinary.com/nodelove/image/upload/v1735660418/portfolio/spbnjt3g5bo600t2j2f2.png",
        "avatar": "https://avatars.githubusercontent.com/u/200890800?s=96&v=4",
        "tags": [
          "historical",
          " artifacts",
          " tracker",
          " frontend",
          " react"
        ],
        "createdAt": "2024-12-31T15:57:05.141Z",
        "updatedAt": "2025-03-18T00:07:42.543Z",
        "__v": 1,
        "backendSourceCode": "https://github.com/muhammadranju/artifacts-tracker-backend",
        "status": "published",
        "longDetails": "\u003Cp\u003EThis is the frontend for the Artifacts Tracker application. It is built using React and Tailwind CSS. The application allows users to create, view, and manage their artifacts. It also includes features for user authentication and authorization.\u003C/p\u003E\u003Ch2\u003EFeatures:\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003EUser authentication and authorization\u003C/li\u003E\u003Cli\u003ECRUD operations for artifacts\u003C/li\u003E\u003Cli\u003EPagination and search functionality\u003C/li\u003E\u003Cli\u003EUser-specific artifact lists\u003C/li\u003E\u003Cli\u003ELike/unlike functionality for artifacts\u003C/li\u003E\u003Cli\u003EArtifact discovery and discovery by date\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch2\u003ETechnologies:\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003EReact\u003C/li\u003E\u003Cli\u003ETailwind CSS\u003C/li\u003E\u003Cli\u003EFirebase\u003C/li\u003E\u003Cli\u003ECookies\u003C/li\u003E\u003Cli\u003ESwal\u003C/li\u003E\u003C/ul\u003E\u003Ch2\u003EPurpose:\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp\u003EThe purpose of this project is to provide a user-friendly interface for managing artifacts. It allows users to create, view, and manage their artifacts, as well as like and unlike them. The application also includes features for user authentication and authorization.\u003C/p\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch2\u003EScreenshots:\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp\u003E\u003Ca href=\"https://github.com/muhammadranju/artifacts-tracker-frontend/blob/main/public/home.jpeg\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"background-color: transparent; color: var(--fgColor-accent, var(--color-accent-fg));\"\u003E\u003Cimg src=\"https://github.com/muhammadranju/artifacts-tracker-frontend/raw/main/public/home.jpeg\" alt=\"Screenshot 1\"\u003E\u003C/a\u003E\u003C/p\u003E"
      },
      {
        "_id": "67573a43eac5041512b157b9",
        "title": "React Node URL Shortner",
        "details": "A URL shortener application built using React, Node.js, and Firebase. The application allows users to create and manage URLs, track clicks, and share URLs with others. It also includes features for bookmarking, favorites, and analytics.\r\n",
        "category": "react-node-mongodb-firebase",
        "author": "Ruis Sander",
        "liveLink": "https://react-node-url-shortener.netlify.app/",
        "sourceCode": "https://github.com/muhammadranju/react-url-shortner",
        "image": "https://res.cloudinary.com/nodelove/image/upload/v1741599014/portfolio/s8u1funfpgr7vhqhtvoo.png",
        "avatar": "https://avatars.githubusercontent.com/u/200890800?s=96&v=4",
        "tags": [
          "react",
          " node",
          "url",
          " shortner"
        ],
        "createdAt": "2024-12-09T18:43:15.991Z",
        "updatedAt": "2025-03-18T00:06:48.858Z",
        "__v": 1,
        "backendSourceCode": "https://github.com/muhammadranju/react-url-shortner/tree/main/backend",
        "status": "published",
        "longDetails": "\u003Cp\u003EA URL Shortener Application Built Using React, Node.js, and Firebase.\u003C/p\u003E\u003Cp\u003EThis project is a modern web tool designed to simplify link management for both individuals and businesses. The application allows users to create and manage shortened URLs, track the number of clicks on each link, and share these URLs easily with others through social media, email, or other platforms.\u003C/p\u003E\u003Cp\u003EIt also includes advanced features for bookmarking frequently used links, marking favorites for quick access, and providing detailed analytics to monitor link performance, such as click trends and geographic data. Built with React for a dynamic front-end, Node.js for a robust back-end, and Firebase for real-time database and authentication support, this application offers a seamless and scalable solution for URL management.\u003C/p\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch2\u003EKey Features:\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Col\u003E\u003Cli\u003EUser authentication and registration\u003C/li\u003E\u003Cli\u003EURL shortening functionality\u003C/li\u003E\u003Cli\u003EURL click tracking\u003C/li\u003E\u003Cli\u003EURL analytics\u003C/li\u003E\u003Cli\u003EURL sharing\u003C/li\u003E\u003Cli\u003EURL bookmarking\u003C/li\u003E\u003Cli\u003EURL favorites\u003C/li\u003E\u003C/ol\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch2\u003ETechnologies Used:\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003EReact\u003C/li\u003E\u003Cli\u003ENode.js\u003C/li\u003E\u003Cli\u003EFirebase\u003C/li\u003E\u003Cli\u003EExpress\u003C/li\u003E\u003Cli\u003EMongoDB\u003C/li\u003E\u003Cli\u003EVite\u003C/li\u003E\u003Cli\u003EDaisyUI\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch2\u003EDeployment:\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp\u003ETo deploy the application, you need to have Node.js and MongoDB installed on your machine. Then, follow these steps:\u003C/p\u003E"
      },
      {
        "_id": "6755e3c314dd13ba3aaed64a",
        "title": "Navigator Portal Sunflower Frontend",
        "details": "The application is built using React and the Sunflower API. It fetches data from the API and displays it in a user-friendly way. The application has a header, footer, and a banner section. The banner section displays a carousel of images and a call-to-action button. The footer section displays links to social media platforms and contact information. The header section displays the logo and a hamburger menu.\n",
        "category": "react-firebase-backend-express",
        "author": "Ruis Sander",
        "liveLink": "https://visa-navigator-portal.web.app",
        "sourceCode": "https://github.com/muhammadranju/Batch10-Assignment-9",
        "image": "https://res.cloudinary.com/nodelove/image/upload/v1733681993/portfolio/mbzhz27fxvmmorgejvhq.png",
        "avatar": "https://avatars.githubusercontent.com/u/200890800?s=96&v=4",
        "tags": [
          "navigator",
          " visa protal",
          " backend",
          " frontend"
        ],
        "createdAt": "2024-12-08T18:21:55.255Z",
        "updatedAt": "2025-03-18T00:07:58.172Z",
        "__v": 1,
        "status": "published",
        "backendSourceCode": "https://github.com/muhammadranju/visa-navigator-portal-backend",
        "longDetails": "\u003Cp\u003EThe application is built using React and the Sunflower API. It fetches data from the API and displays it in a user-friendly way. The application has a header, footer, and a banner section. The banner section displays a carousel of images and a call-to-action button. The footer section displays links to social media platforms and contact information. The header section displays the logo and a hamburger menu.\u003C/p\u003E\u003Ch2\u003ELive Demo\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003EFrontend:&nbsp;\u003Ca href=\"https://visa-navigator-portal.web.app/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--fgColor-accent, var(--color-accent-fg)); background-color: transparent;\"\u003Ehttps://visa-navigator-portal.web.app\u003C/a\u003E\u003C/li\u003E\u003Cli\u003EBackend:&nbsp;\u003Ca href=\"https://sunflower-bankend-api.vercel.app/visas\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--fgColor-accent, var(--color-accent-fg)); background-color: transparent;\"\u003Ehttps://sunflower-bankend-api.vercel.app/visas\u003C/a\u003E\u003C/li\u003E\u003C/ul\u003E\u003Ch2\u003EFeatures\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003EFetches data from the Sunflower API\u003C/li\u003E\u003Cli\u003EDisplays data in a user-friendly way\u003C/li\u003E\u003Cli\u003EIncludes a header, footer, and a banner section\u003C/li\u003E\u003Cli\u003EDisplays images in a carousel\u003C/li\u003E\u003Cli\u003EDisplays links to social media platforms and contact information\u003C/li\u003E\u003Cli\u003EDisplays a call-to-action button\u003C/li\u003E\u003C/ul\u003E\u003Ch2\u003EPackages Used\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003EReact\u003C/li\u003E\u003Cli\u003EReact Router DOM\u003C/li\u003E\u003Cli\u003EReact Helmet\u003C/li\u003E\u003Cli\u003EReact Loader Spinner\u003C/li\u003E\u003Cli\u003EReact Simple Typewriter\u003C/li\u003E\u003Cli\u003EReact Toastify\u003C/li\u003E\u003Cli\u003EReact Icons\u003C/li\u003E\u003Cli\u003EReact Tooltip\u003C/li\u003E\u003Cli\u003ESweet Alert\u003C/li\u003E\u003Cli\u003EReact hook form\u003C/li\u003E\u003C/ul\u003E\u003Ch2\u003EScreenshots\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp\u003E\u003Ca href=\"https://github.com/muhammadranju/visa-navigator-portal-frontend/blob/main/public/images/screen-1-dark.jpeg\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--fgColor-accent, var(--color-accent-fg)); background-color: transparent;\"\u003E\u003Cimg src=\"https://github.com/muhammadranju/visa-navigator-portal-frontend/raw/main/public/images/screen-1-dark.jpeg\" alt=\"Screenshot 1\"\u003E\u003C/a\u003E\u003C/p\u003E\u003Cp\u003EName: Ruis Sander\u003C/p\u003E\u003Cp\u003EGithub:&nbsp;\u003Ca href=\"https://github.com/muhammadranju\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--fgColor-accent, var(--color-accent-fg)); background-color: transparent;\"\u003Ehttps://github.com/muhammadranju\u003C/a\u003E\u003C/p\u003E"
      },
      {
        "_id": "6745ef7f0f5a19b498fbe47b",
        "title": "GadgetHeaven E-Commerce a gadget-buying website",
        "details": "GadgetHeaven is a gadget-buying website that allows users to browse and purchase gadgets. The website has a clean and modern design, with a focus on user experience. It also has a secure payment gateway to ensure that users' payment information is protected.\r\n\r\n",
        "category": "react-and-react-router",
        "author": "Ruis Sander",
        "liveLink": "https://batch10-assignment-8.netlify.app/",
        "sourceCode": "https://github.com/muhammadranju/Batch10-Assignment-8",
        "image": "https://res.cloudinary.com/nodelove/image/upload/v1732636411/portfolio/leujuxmy1btgrqavenbq.png",
        "avatar": "https://avatars.githubusercontent.com/u/200890800?s=96&v=4",
        "tags": [
          "gadgetheaven",
          " e-commerce",
          " react",
          " react-router"
        ],
        "createdAt": "2024-11-26T15:55:43.164Z",
        "updatedAt": "2025-03-04T05:47:58.443Z",
        "__v": 2,
        "status": "published"
      },
      {
        "_id": "6745ea733fc395950f729d6a",
        "title": "Lingo Bingo language learning Web Application",
        "details": "This is a web application that allows users to learn vocabulary in Japanese. The application provides a user-friendly interface for users to access and learn Japanese vocabulary. The application uses a combination of animations, images, and interactive elements to engage users and make the learning experience more enjoyable. The application is designed to be user-friendly and accessible, with clear instructions and intuitive navigation.\r\n\r\n\r\n",
        "category": "react-and-firebase-auth",
        "author": "Ruis Sander",
        "liveLink": "https://lingo-bingo-learning.web.app/",
        "sourceCode": "https://github.com/muhammadranju/Batch10-Assignment-9",
        "image": "https://res.cloudinary.com/nodelove/image/upload/v1732561996/portfolio/mblqekrd7pbooxlnf6rv.png",
        "tags": [
          "lingo",
          " language learning",
          " react",
          " firebase"
        ],
        "createdAt": "2024-11-26T15:34:11.506Z",
        "updatedAt": "2025-03-18T00:08:31.178Z",
        "__v": 1,
        "avatar": "https://avatars.githubusercontent.com/u/200890800?s=96&v=4",
        "longDetails": "\u003Cp\u003EThis is a web application that allows users to learn vocabulary in Japanese. The application provides a user-friendly interface for users to access and learn Japanese vocabulary. The application uses a combination of animations, images, and interactive elements to engage users and make the learning experience more enjoyable. The application is designed to be user-friendly and accessible, with clear instructions and intuitive navigation.\u003C/p\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch2\u003EFeatures\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003EUser registration and login\u003C/li\u003E\u003Cli\u003EUser profile page\u003C/li\u003E\u003Cli\u003EUser can learn vocabulary in Japanese\u003C/li\u003E\u003Cli\u003EUser can Listen to audio tutorials\u003C/li\u003E\u003Cli\u003ETutorials with video lessons\u003C/li\u003E\u003Cli\u003EStart learning Japanese vocabulary\u003C/li\u003E\u003Cli\u003EProfile page with user information\u003C/li\u003E\u003Cli\u003ELogout functionality\u003C/li\u003E\u003Cli\u003EResponsive design for optimal viewing on various devices\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch2\u003ETechnologies\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003EReact\u003C/li\u003E\u003Cli\u003ETailwind CSS\u003C/li\u003E\u003Cli\u003EFirebase\u003C/li\u003E\u003Cli\u003EReact Router\u003C/li\u003E\u003Cli\u003EReact Helmet\u003C/li\u003E\u003Cli\u003EReact Hot Toast\u003C/li\u003E\u003Cli\u003EReact Loader Spinner\u003C/li\u003E\u003Cli\u003EAnimate.css\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch2\u003EPackages\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003Ereact-loader-spinner\u003C/li\u003E\u003Cli\u003Ereact-hot-toast\u003C/li\u003E\u003Cli\u003Ereact-icons\u003C/li\u003E\u003Cli\u003Ereact-router-dom\u003C/li\u003E\u003Cli\u003Efirebase\u003C/li\u003E\u003Cli\u003Eanimate.css\u003C/li\u003E\u003Cli\u003Ereact-helmet\u003C/li\u003E\u003Cli\u003Edaisyui\u003C/li\u003E\u003C/ul\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch2\u003EScreenshots\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp\u003E\u003Ca href=\"https://github.com/muhammadranju/lingo-bingo-language-learning/blob/main/public/screenshot/home.jpeg\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--fgColor-accent, var(--color-accent-fg)); background-color: transparent;\"\u003E\u003Cimg src=\"https://github.com/muhammadranju/lingo-bingo-language-learning/raw/main/public/screenshot/home.jpeg\" alt=\"Screenshot 1\"\u003E\u003C/a\u003E\u003C/p\u003E",
        "status": "published"
      },
      {
        "status": "published",
        "_id": "66f70205eafa9c8b7d4bfd03",
        "title": "Pikslide - Unlimited Templates, Themes and More",
        "details": "This Project is showcase my old work doing in 2022 of this project. In this project i was made in Nodejs, MongoDB, Express Js and many more technology.\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n",
        "category": "template-selling-website",
        "author": "Ruis Sander",
        "liveLink": "https://pikslide.ruissander-portfolio.vercel.app",
        "sourceCode": "https://github.com/muhammadranju/pikslide-website-2022",
        "image": "https://res.cloudinary.com/nodelove/image/upload/v1727463756/portfolio/aqxbaprcy0nyv3rtrz6w.png",
        "avatar": "https://avatars.githubusercontent.com/u/200890800?s=96&v=4",
        "createdAt": "2024-09-27T19:05:41.032Z",
        "updatedAt": "2024-11-26T15:51:18.178Z",
        "__v": 5,
        "tags": [
          "pikslide",
          " template",
          " website"
        ]
      },
      {
        "status": "published",
        "_id": "66c3543951668a3255c32ac7",
        "title": "Saas Landing Page Design",
        "details": "This project is a SaaS landing page design in tailwindcss and daisyui. this project figma file was downloaded from uifry.com\r\n\r\n",
        "category": "saas-landing-page",
        "author": "Ruis Sander",
        "liveLink": "https://saas-landing-page-tailwindcss.vercel.app/",
        "sourceCode": "https://github.com/muhammadranju/practice-task-milestone-3/tree/main/web_day_2/saas-landing-page",
        "image": "https://res.cloudinary.com/nodelove/image/upload/v1724077104/portfolio/x1szvc1imcu1m2k7vjqs.png",
        "avatar": "https://avatars.githubusercontent.com/u/200890800?s=96&v=4",
        "createdAt": "2024-08-19T14:18:33.777Z",
        "updatedAt": "2025-02-27T17:28:54.371Z",
        "__v": 2,
        "tags": [
          "saas",
          " landing",
          " page"
        ]
      },
      {
        "status": "published",
        "_id": "66be1f8340439d06ac0e20fb",
        "title": "This is my third assignment-3 in the Programming Hero course",
        "details": "This is my third assignment in the Programming Hero course this assignment is so hard my life is so tough because I have no idea how to design a landing page. this assignment is beneficial in understanding many more things tailwindcss, daisyui\r\n\r\n\r\n\r\n",
        "category": "derma-house-landing-page",
        "author": "Ruis Sander",
        "liveLink": "https://muhammadranju.github.io/Batch10-Assignment-3",
        "sourceCode": "https://github.com/muhammadranju/Batch10-Assignment-3",
        "image": "https://res.cloudinary.com/nodelove/image/upload/v1729338406/portfolio/yb13ef5stgjzrcmmezgj.png",
        "avatar": "https://avatars.githubusercontent.com/u/200890800?s=96&v=4",
        "createdAt": "2024-08-15T15:32:19.483Z",
        "updatedAt": "2025-02-27T17:29:29.065Z",
        "__v": 2,
        "tags": [
          "derma",
          " house",
          " landing-page"
        ]
      },
      {
        "status": "published",
        "_id": "66be1e7440439d06ac0e20f8",
        "title": "App Landing Page Design with Tailwindcss",
        "details": "App Landing Page Design with Tailwindcss, this design made fully in Tailwindcss and The most popular\r\ncomponent library for Tailwind CSS. this project figma file downloaded from uifry.com\r\n\r\n\r\n\r\n\r\n",
        "category": "app-landing-page-tailwindcss",
        "author": "Ruis Sander",
        "liveLink": "https://app-landing-page-tailwindcss.netlify.app/",
        "sourceCode": "https://github.com/muhammadranju/app-landing-page",
        "image": "https://res.cloudinary.com/nodelove/image/upload/v1723731498/portfolio/drarego0u7nvwovthqdz.png",
        "avatar": "https://avatars.githubusercontent.com/u/200890800?s=96&v=4",
        "createdAt": "2024-08-15T15:27:48.661Z",
        "updatedAt": "2025-02-27T17:30:37.163Z",
        "__v": 1,
        "tags": [
          "app",
          " landing",
          " page",
          " tailwindcss"
        ]
      },
      {
        "status": "published",
        "_id": "66abe94d66597e5cd08723e9",
        "title": "Biker Zone Landing Page in tailwindcss and daisyui components library",
        "details": "This project making on tailwindcss and daisyui components library.\r\nwatering a code in  tailwindcss is awesome experiences tailwind is very good utility framework I love to write code and design in tailwindcss framework.\r\n\r\n\r\n",
        "category": "biker-zone-landing-page",
        "author": "Ruis Sander",
        "liveLink": "https://muhammadranju.github.io/practice-task-milestone-3/old-demo/biker-zone-resources",
        "sourceCode": "https://github.com/muhammadranju/practice-task-milestone-3/tree/main/old-demo/biker-zone-resources",
        "image": "https://res.cloudinary.com/nodelove/image/upload/v1724133360/portfolio/mhtdgr8wkcqajsv1uqgd.png",
        "avatar": "https://avatars.githubusercontent.com/u/200890800?s=96&v=4",
        "createdAt": "2024-08-01T20:00:13.445Z",
        "updatedAt": "2025-02-27T17:31:26.008Z",
        "__v": 1,
        "tags": [
          "biker",
          " zone",
          " landing",
          " page"
        ]
      },
      {
        "status": "published",
        "_id": "66a8d4124bde15ca2f661da3",
        "title": "QR Code Bar Code Scanner ",
        "details": "This QR Code Scanner is real web app it's totally working web app this app can use any one for free not need to account\r\n\r\n\r\n",
        "category": "qr-code-scanner-css",
        "author": "Ruis Sander",
        "liveLink": "https://qr-code-scann.netlify.app/",
        "sourceCode": "https://github.com/muhammadranju/qr-scanner",
        "image": "https://res.cloudinary.com/nodelove/image/upload/v1722340334/portfolio/j7jyujhmmy9unczxesqs.png",
        "avatar": "https://avatars.githubusercontent.com/u/200890800?s=96&v=4",
        "createdAt": "2024-07-30T11:52:50.006Z",
        "updatedAt": "2025-02-27T17:31:56.585Z",
        "__v": 1,
        "tags": [
          "qr",
          " code",
          " scanner",
          " css"
        ]
      },
      {
        "status": "published",
        "_id": "66a5e41b7cde241f210efed2",
        "title": "Personal portfolio projects submissions from with API Request",
        "details": "In this project I will make to my personal portfolio project submission to show my portfolio website easily access via API. This project making in node.js express.js mongodb with logging system for security reason\r\n\r\n\r\n\r\n\r\n\r\n",
        "category": "portfolio-project-api",
        "author": "Ruis Sander",
        "liveLink": "https://portfolio-api.ruissander-portfolio.vercel.app",
        "sourceCode": "https://github.com/muhammadranju/portfolio-project-api",
        "image": "https://res.cloudinary.com/nodelove/image/upload/v1724133567/portfolio/xa7e6rycyl72f6hkbt5g.png",
        "avatar": "https://avatars.githubusercontent.com/u/200890800?s=96&v=4",
        "createdAt": "2024-07-28T06:24:27.484Z",
        "updatedAt": "2025-02-27T17:33:29.592Z",
        "__v": 3,
        "tags": [
          "portfolio",
          " project",
          " api",
          " showcase project"
        ]
      },
      {
        "_id": "66a4f9afeb4063550aefa224",
        "title": "This e-commerce API is real-live backend api for e-commerce website real live experience",
        "details": "The repository you've linked to is titled 'e-commerce-api' and is authored by Ruis Sander. It appears to be a project related to e-commerce, possibly an API (Application Programming Interface) for facilitating e-commerce operations. However, without diving into the code, it's challenging to provide specifics on its functionality, features, or quality.\r\n",
        "category": "e-commerce-api",
        "author": "Ruis Sander",
        "liveLink": "https://e-com-api.ruissander-portfolio.vercel.app/api/v1/products",
        "sourceCode": "https://github.com/muhammadranju/e-commerce-api",
        "image": "https://res.cloudinary.com/nodelove/image/upload/f_auto,q_auto/v1/portfolio/vvaxvdooda4j6rffkipw",
        "avatar": "https://avatars.githubusercontent.com/u/200890800?s=96&v=4",
        "createdAt": "2024-07-27T13:44:15.384Z",
        "updatedAt": "2025-03-22T11:47:01.593Z",
        "__v": 3,
        "tags": [
          "node.js,  express.js,  mongodb,  mongoose,  auth,  jwt,  nodemaler"
        ],
        "longDetails": "\u003Ch1\u003EAPI Design all kinds of info blow here\u003C/h1\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp\u003EThis Notion File is all About this project\u003C/p\u003E\u003Ch3\u003ENotion file link:&nbsp;\u003Ca href=\"https://muhammadranju.notion.site/e-commerce-api-dca824a1c151425ca3410308b908a3b4?pvs=4\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--fgColor-accent, var(--color-accent-fg)); background-color: transparent;\"\u003Ehttps://muhammadranju.notion.site/e-commerce-api-dca824a1c151425ca3410308b908a3b4?pvs=4\u003C/a\u003E\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch3\u003EDiagrams file link:&nbsp;\u003Ca href=\"https://app.eraser.io/workspace/Q4vcEg2ZDGZ7Yp9llKrK\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--fgColor-accent, var(--color-accent-fg)); background-color: transparent;\"\u003Ehttps://app.eraser.io/workspace/Q4vcEg2ZDGZ7Yp9llKrK\u003C/a\u003E\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch3\u003EPostman file link:&nbsp;\u003Ca href=\"https://www.postman.com/muhammad-ranju/workspace/e-commerce-api/collection/20967644-1055139c-703a-491c-9289-4d2eea04eb1b?action=share&amp;creator=20967644&amp;active-environment=20967644-c215baeb-9397-489b-8de1-943b5424c351\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--fgColor-accent, var(--color-accent-fg)); background-color: transparent;\"\u003Ehttps://www.postman.com/muhammad-ranju/workspace/e-commerce-api/collection/20967644-1055139c-703a-491c-9289-4d2eea04eb1b?action=share&amp;creator=20967644&amp;active-environment=20967644-c215baeb-9397-489b-8de1-943b5424c351\u003C/a\u003E\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch2\u003EFeatures\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003EUser can register/login.\u003C/li\u003E\u003Cli\u003ESeller can register/login also verify his email.\u003C/li\u003E\u003Cli\u003EUser can see products and they can order the product.\u003C/li\u003E\u003Cli\u003EUser can see her Order status and progress.\u003C/li\u003E\u003Cli\u003EUser can do cancel his/hir order.\u003C/li\u003E\u003Cli\u003EUser can do reset her passowrd and changer the passowrd.\u003C/li\u003E\u003Cli\u003EUser can search product with title or category or tags.\u003C/li\u003E\u003Cli\u003EUser can do reviews when hir order is delivered.\u003C/li\u003E\u003Cli\u003EAdmin can do add user on dashboard\u003C/li\u003E\u003Cli\u003EAdmin can manage user orrders\u003C/li\u003E\u003C/ul\u003E\u003Ch1\u003EAll routes in this project\u003C/h1\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch2\u003EPublic routes\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch3\u003Eauth routes\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E/api/v1/auth/login - post // login\u003C/li\u003E\u003Cli\u003E/api/v1/auth/register - post // register\u003C/li\u003E\u003Cli\u003E/api/v1/auth/forgot-password - post // forgot password\u003C/li\u003E\u003Cli\u003E/api/v1/auth/reset-password - post // reset password\u003C/li\u003E\u003Cli\u003E/api/v1/auth/verify-email - post // verify email\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003Eproduct routes\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E/api/v1/products/id - get // get product\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003Ebrands routes\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E/api/v1/brands - get // get brands\u003C/li\u003E\u003Cli\u003E/api/v1/brands/id - get // get brand by id\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003Ecategories routes\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E/api/v1/categories - get // get categories\u003C/li\u003E\u003Cli\u003E/api/v1/categories/id - get // get category by id\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003Eseller routes\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E/api/v1/seller/stores/id - get // get store\u003C/li\u003E\u003C/ul\u003E\u003Ch2\u003Eprivate routes\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch3\u003Eusers routes\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E/api/v1/users/profile - get // get profile\u003C/li\u003E\u003Cli\u003E/api/v1/users/profile - patch // update profile\u003C/li\u003E\u003Cli\u003E/api/v1/user/change-password - patch // change password\u003C/li\u003E\u003Cli\u003E/api/v1//users/profile/addresses - get // get addresses\u003C/li\u003E\u003Cli\u003E/api/v1/users/profile/addresses - post // add address\u003C/li\u003E\u003Cli\u003E/api/v1/users/profile/addresses/id - patch // update address by id\u003C/li\u003E\u003Cli\u003E/api/v1/users/profile/addresses/id - delete // delete address by id\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003Ebrands routes\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E/api/v1/brands - post // add brand\u003C/li\u003E\u003Cli\u003E/api/v1/brands/id - patch // update brand by id\u003C/li\u003E\u003Cli\u003E/api/v1/brands/id - delete // delete brand by id\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003Ecategories routes\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E/api/v1/categories - post // add category\u003C/li\u003E\u003Cli\u003E/api/v1/categories/id - patch // update category by id\u003C/li\u003E\u003Cli\u003E/api/v1/categories/id - delete // delete category by id\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003Eproducts routes\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E/api/v1/products - post // add product\u003C/li\u003E\u003Cli\u003E/api/v1/products/id - patch // update product by id\u003C/li\u003E\u003Cli\u003E/api/v1/products/id - delete // delete product by id\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003Ecart routes\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E/api/v1/carts - get // get carts\u003C/li\u003E\u003Cli\u003E/api/v1/carts - post // add to cart\u003C/li\u003E\u003Cli\u003E/api/v1/carts/id - patch // update cart by id\u003C/li\u003E\u003Cli\u003E/api/v1/carts/id - delete // delete cart by id\u003C/li\u003E\u003Cli\u003E/api/v1/carts/empty - delete // delete all carts\u003C/li\u003E\u003C/ul\u003E\u003Ch2\u003Eorders routes\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E/api/v1/orders - get // get orders\u003C/li\u003E\u003Cli\u003E/api/v1/orders/id - get // get orders by id\u003C/li\u003E\u003Cli\u003E/api/v1/orders/tracking/id - get // get order tracking by id\u003C/li\u003E\u003Cli\u003E/api/v1/orders/ - post // add order\u003C/li\u003E\u003Cli\u003E/api/v1/orders/id - patch // update order by id\u003C/li\u003E\u003Cli\u003E/api/v1/orders/id - delete // delete order by id\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003Epayment routes\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E/api/v1/payments/history - get // get payment history\u003C/li\u003E\u003Cli\u003E/api/v1/payments/id - get // get payment by id\u003C/li\u003E\u003Cli\u003E/api/v1/payments/success - post // success payment\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003Edelivery routes !TODO\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E/api/v1/deliveries/id - get // get delivery by id\u003C/li\u003E\u003Cli\u003E/api/v1/deliveries/id - patch // update delivery by id\u003C/li\u003E\u003Cli\u003E/api/v1/deliveries/id - delete // delete delivery by id\u003C/li\u003E\u003Cli\u003E/api/v1/deliveries/tracking/id - get // get delivery tracking by id\u003C/li\u003E\u003Cli\u003E/api/v1/deliveries/history - get // get delivery history\u003C/li\u003E\u003Cli\u003E/api/v1/deliveries/success - post // success delivery\u003C/li\u003E\u003Cli\u003E/api/v1/deliveries/cancel - post // cancel delivery\u003C/li\u003E\u003Cli\u003E/api/v1/deliveries/cancel/id - delete // cancel delivery by id\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003Ereview routes\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E/api/v1/reviews - post // get review by id\u003C/li\u003E\u003Cli\u003E/api/v1/users/reviews - patch // get review by id\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003Ewishlist routes\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E/api/v1/wishlists - get // get wishlists\u003C/li\u003E\u003Cli\u003E/api/v1/wishlists/id - delete // delete wishlist by id\u003C/li\u003E\u003Cli\u003E/api/v1/wishlists - post // add product to wishlist\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003Eseller routes\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E/api/v1/seller/auth/login - post // login\u003C/li\u003E\u003Cli\u003E/api/v1/seller/auth/register - post // register\u003C/li\u003E\u003Cli\u003E/api/v1/seller/auth/forgot-password - post // forgot password\u003C/li\u003E\u003Cli\u003E/api/v1/seller/auth/reset-password - patch // reset password\u003C/li\u003E\u003Cli\u003E/api/v1/seller/auth/verify-email - post // verify email\u003C/li\u003E\u003Cli\u003E/api/v1/seller/auth/change-password - patch // change password\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003Eseller profile routes\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E/api/v1/seller/profile - get // get seller profile\u003C/li\u003E\u003Cli\u003E/api/v1/seller/profile/id - get // get seller profile by id\u003C/li\u003E\u003Cli\u003E/api/v1/seller/profile - patch // update seller profile\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003Eseller store routes\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E/api/v1/seller/stores/id - get // get store by id\u003C/li\u003E\u003Cli\u003E/api/v1/seller/stores - get // get stores !TODO\u003C/li\u003E\u003Cli\u003E/api/v1/seller/stores/id - patch // update store by id\u003C/li\u003E\u003Cli\u003E/api/v1/seller/stores/id - delete // delete store by id\u003C/li\u003E\u003Cli\u003E/api/v1/seller/stores - post // add store\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003Eseller product routes\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E/api/v1/seller/products - get // get all products\u003C/li\u003E\u003Cli\u003E/api/v1/seller/products/id - get // get product by id\u003C/li\u003E\u003Cli\u003E/api/v1/seller/products/id - patch // update product by id\u003C/li\u003E\u003Cli\u003E/api/v1/seller/products/id - delete // delete product by id\u003C/li\u003E\u003Cli\u003E/api/v1/seller/products - post // add product\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003Eadmin auth routes\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E/api/v1/admins/auth/login - post // login\u003C/li\u003E\u003Cli\u003E/api/v1/admins/auth/register - post // register\u003C/li\u003E\u003Cli\u003E/api/v1/admins/auth/forgot-password - post // forgot password\u003C/li\u003E\u003Cli\u003E/api/v1/admins/auth/reset-password - patch // reset password\u003C/li\u003E\u003Cli\u003E/api/v1/admins/auth/change-password - patch // change password\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003Eadmin profile routes // !TODO\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E/api/v1/admins/profile - get // get admin profile\u003C/li\u003E\u003Cli\u003E/api/v1/admins/profile/id - get // get admin profile by id\u003C/li\u003E\u003Cli\u003E/api/v1/admins/profile - patch // update admin profile\u003C/li\u003E\u003Cli\u003E/api/v1/admins/profile/id - delete // delete admin profile by id\u003C/li\u003E\u003Cli\u003E/api/v1/admins/profile - post // add admin profile\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003Eseller product routes by admin\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E/api/v1/admins/sellers/:seller_id/products - get // get all products\u003C/li\u003E\u003Cli\u003E/api/v1/admins/sellers/:seller_id/products/:product_id - get // get product by id\u003C/li\u003E\u003Cli\u003E/api/v1/admins/sellers/:seller_id/products - post // add product\u003C/li\u003E\u003Cli\u003E/api/v1/admins/sellers/:seller_id/products/:product_id - patch // update product by id\u003C/li\u003E\u003Cli\u003E/api/v1/admins/sellers/:seller_id/products/:product_id - delete // delete product by id\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003Eseller order routes by admin\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E/api/v1/admins/admins/orders?type= - get // get all orders\u003C/li\u003E\u003Cli\u003E/api/v1/admins/admins/orders/:order_id - get // get order by id\u003C/li\u003E\u003Cli\u003E/api/v1/admins/admins/orders/:order_id - patch // update order by id\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003Eseller account details routes by admin\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E/api/v1//admins/seller/profile - get // get account all details\u003C/li\u003E\u003Cli\u003E/api/v1/admins/seller/profile/id - get // get account by id\u003C/li\u003E\u003Cli\u003E/api/v1/admins/seller/profile - patch // update account by id\u003C/li\u003E\u003Cli\u003E/api/v1/admins/seller/profile/id - delete // delete account by id !TODO\u003C/li\u003E\u003Cli\u003E/api/v1/admins/seller/profile - post // add account\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003Eseller store routes by admin\\\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E/api/v1/admins/sellers/seller_id/ - get // get store by id\u003C/li\u003E\u003Cli\u003E/api/v1/admins/sellers/seller_id/ - patch // update store by id\u003C/li\u003E\u003Cli\u003E/api/v1/admins/sellers/seller_id/ - delete // delete store by id !TODO\u003C/li\u003E\u003Cli\u003E/api/v1/admins/sellers/seller_id/ - post // add store !TODO\u003C/li\u003E\u003C/ul\u003E\u003Ch3\u003Euser routes by admin\u003C/h3\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E/api/v1/admins/users/user_id - get // get user profile\u003C/li\u003E\u003Cli\u003E/api/v1/admins/users/user_id - patch // update user profile\u003C/li\u003E\u003Cli\u003E/api/v1/admins/users/user_id - delete // delete user profile !TODO\u003C/li\u003E\u003Cli\u003E/api/v1/admins/users/user_id - post // add user profile !TODO\u003C/li\u003E\u003C/ul\u003E\u003Ch2\u003EDeployment\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp\u003ETo develop this project run\u003C/p\u003E\u003Cpre class=\"ql-syntax\" spellcheck=\"false\"\u003E  npm start\n  http://localhost:3000/api/v1\n\u003C/pre\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp\u003ETo deploy this project run\u003C/p\u003E\u003Cpre class=\"ql-syntax\" spellcheck=\"false\"\u003E  npm run dev\n  http://localhost:3000/api/v1\n\u003C/pre\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch2\u003ERun Locally\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp\u003EClone the project\u003C/p\u003E\u003Cpre class=\"ql-syntax\" spellcheck=\"false\"\u003E  git clone https://github.com/muhammadranju/e-commerce-api\n\u003C/pre\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp\u003EGo to the project directory\u003C/p\u003E\u003Cpre class=\"ql-syntax\" spellcheck=\"false\"\u003E  cd e-commerce-api\n\u003C/pre\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp\u003EInstall dependencies\u003C/p\u003E\u003Cpre class=\"ql-syntax\" spellcheck=\"false\"\u003E  npm install\n\u003C/pre\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp\u003EStart the server\u003C/p\u003E\u003Cpre class=\"ql-syntax\" spellcheck=\"false\"\u003E  npm run dev\n\u003C/pre\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Ch2\u003EEnvironment Variables\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp\u003ETo run this project, you will need to add the following environment variables to your .env file\u003C/p\u003E\u003Cp\u003E\u003Ccode style=\"background-color: var(--bgColor-neutral-muted, var(--color-neutral-muted));\"\u003EBASE_URL\u003C/code\u003E&nbsp;\"\u003Ca href=\"http://localhost:3030/\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--fgColor-accent, var(--color-accent-fg)); background-color: transparent;\"\u003Ehttp://localhost:3030\u003C/a\u003E\"\u003C/p\u003E\u003Cp\u003E\u003Ccode style=\"background-color: var(--bgColor-neutral-muted, var(--color-neutral-muted));\"\u003EPORT\u003C/code\u003E&nbsp;3030\u003C/p\u003E\u003Cp\u003E\u003Ccode style=\"background-color: var(--bgColor-neutral-muted, var(--color-neutral-muted));\"\u003EMONGODB_URI\u003C/code\u003E&nbsp;\"mongodb+srv://:@cluster0.jzvet.mongodb.net/?retryWrites=true&amp;w=majority\"\u003C/p\u003E\u003Cp\u003E\u003Ccode style=\"background-color: var(--bgColor-neutral-muted, var(--color-neutral-muted));\"\u003EACCESS_TOKEN_SECRET\u003C/code\u003E&nbsp;\"***************\"\u003C/p\u003E\u003Cp\u003E\u003Ccode style=\"background-color: var(--bgColor-neutral-muted, var(--color-neutral-muted));\"\u003EACCESS_TOKEN_EXPIRY\u003C/code\u003E&nbsp;\"***************\"\u003C/p\u003E\u003Cp\u003E\u003Ccode style=\"background-color: var(--bgColor-neutral-muted, var(--color-neutral-muted));\"\u003EREFRESH_TOKEN_SECRET\u003C/code\u003E&nbsp;\"***************\"\u003C/p\u003E\u003Cp\u003E\u003Ccode style=\"background-color: var(--bgColor-neutral-muted, var(--color-neutral-muted));\"\u003EREFRESH_TOKEN_EXPIRY\u003C/code\u003E&nbsp;\"***************\"\u003C/p\u003E\u003Cp\u003E\u003Ccode style=\"background-color: var(--bgColor-neutral-muted, var(--color-neutral-muted));\"\u003EEMAIL\u003C/code\u003E&nbsp;\"YOUR_EMAIL\"\u003C/p\u003E\u003Cp\u003E\u003Ccode style=\"background-color: var(--bgColor-neutral-muted, var(--color-neutral-muted));\"\u003EEMAIL_PASSKEY\u003C/code\u003E&nbsp;\"YOUR_EMAIL_PASSKEY\"\u003C/p\u003E\u003Cp\u003E\u003Ccode style=\"background-color: var(--bgColor-neutral-muted, var(--color-neutral-muted));\"\u003EEMAIL_SERVICE\u003C/code\u003E&nbsp;\"YOUR_EMAIL_SERVICE\"\u003C/p\u003E\u003Cp\u003E\u003Ccode style=\"background-color: var(--bgColor-neutral-muted, var(--color-neutral-muted));\"\u003EEMAIL_PORT\u003C/code\u003E&nbsp;\"YOUR_EMAIL_PORT\"\u003C/p\u003E\u003Cp\u003E\u003Ccode style=\"background-color: var(--bgColor-neutral-muted, var(--color-neutral-muted));\"\u003EEMAIL_USERNAME\u003C/code\u003E&nbsp;\"YOUR_EMAIL_USERNAME\"\u003C/p\u003E\u003Cp\u003E\u003Ccode style=\"background-color: var(--bgColor-neutral-muted, var(--color-neutral-muted));\"\u003EEMAIL_PASSWORD\u003C/code\u003E&nbsp;\"YOUR_EMAIL_PASSWORD\"\u003C/p\u003E\u003Cp\u003E\u003Ccode style=\"background-color: var(--bgColor-neutral-muted, var(--color-neutral-muted));\"\u003ECLOUDINARY_CLOUD_NAME\u003C/code\u003E&nbsp;\"YOUR_CLOUDINARY_CLOUD_NAME\"\u003C/p\u003E\u003Cp\u003E\u003Ccode style=\"background-color: var(--bgColor-neutral-muted, var(--color-neutral-muted));\"\u003ECLOUDINARY_API_KEY\u003C/code\u003E&nbsp;\"YOUR_CLOUDINARY_API_KEY\"\u003C/p\u003E\u003Cp\u003E\u003Ccode style=\"background-color: var(--bgColor-neutral-muted, var(--color-neutral-muted));\"\u003ECLOUDINARY_API_SECRET\u003C/code\u003E&nbsp;\"YOUR_CLOUDINARY_API_SECRET\"\u003C/p\u003E\u003Ch2\u003ETech Stack\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp\u003EClient:&nbsp;React.js, Next.js, TailwindCSS\u003C/p\u003E\u003Cp\u003EServer:&nbsp;Node, Express, bcryptjs, cloudinary, compression, cookie-parse, express-rate-limit, jsonwebtoken, mailgen, mongoose, mongoose-aggregate-paginate-v2, nodemailer, socket.io, sslcommerz, stripe\u003C/p\u003E\u003Cp\u003E\u003Ca href=\"https://camo.githubusercontent.com/a31757ade2dceba533090fd771e9476f831735ff858babaef1dbbddfcb9c3c4c/68747470733a2f2f6e6f64656a732e6f72672f7374617469632f696d616765732f6c6f676f2e737667\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--fgColor-accent, var(--color-accent-fg)); background-color: transparent;\"\u003E\u003Cimg src=\"https://camo.githubusercontent.com/a31757ade2dceba533090fd771e9476f831735ff858babaef1dbbddfcb9c3c4c/68747470733a2f2f6e6f64656a732e6f72672f7374617469632f696d616765732f6c6f676f2e737667\" alt=\"Logo\"\u003E\u003C/a\u003E\u003C/p\u003E\u003Cp\u003E\u003Ca href=\"https://camo.githubusercontent.com/34db35a0548f4aeb17ec774db38357883a1f2f6793fe690c878697d3e2a7e712/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f657870726573736a732f657870726573736a732d617232312e737667\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--fgColor-accent, var(--color-accent-fg)); background-color: transparent;\"\u003E\u003Cimg src=\"https://camo.githubusercontent.com/34db35a0548f4aeb17ec774db38357883a1f2f6793fe690c878697d3e2a7e712/68747470733a2f2f7777772e766563746f726c6f676f2e7a6f6e652f6c6f676f732f657870726573736a732f657870726573736a732d617232312e737667\" alt=\"Logo\"\u003E\u003C/a\u003E\u003C/p\u003E\u003Ch2\u003EAuthors\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cul\u003E\u003Cli\u003E\u003Ca href=\"https://www.github.com/muhammadranju\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--fgColor-accent, var(--color-accent-fg)); background-color: transparent;\"\u003E@muhammadranju\u003C/a\u003E\u003C/li\u003E\u003C/ul\u003E\u003Ch2\u003EFeedback\u003C/h2\u003E\u003Cp\u003E\u003Cbr\u003E\u003C/p\u003E\u003Cp\u003EIf you have any feedback, please reach out to us at&nbsp;RSanju23\u003Ca href=\"mailto:muhamadranju@gmail.com\" rel=\"noopener noreferrer\" target=\"_blank\" style=\"color: var(--fgColor-accent, var(--color-accent-fg)); background-color: transparent;\"\u003E@gmail.com\u003C/a\u003E\u003C/p\u003E",
        "status": "published"
      },
      {
        "status": "published",
        "_id": "66a4f95aeb4063550aefa21a",
        "title": "Blog API real-live experience",
        "details": "Blog API real-live experience. You can use API for your blog website.\r\n",
        "category": "blog-api-2023",
        "author": "Ruis Sander",
        "liveLink": "https://blog-api-2023.onrender.com/api/v1/articles",
        "sourceCode": "https://github.com/muhammadranju/blog-api-2023",
        "image": "https://res.cloudinary.com/nodelove/image/upload/f_auto,q_auto/v1/portfolio/dtisolpag6fknzzdiqmv",
        "avatar": "https://avatars.githubusercontent.com/u/200890800?s=96&v=4",
        "createdAt": "2024-07-27T13:42:50.301Z",
        "updatedAt": "2025-02-27T17:35:12.962Z",
        "__v": 1,
        "tags": [
          "blog",
          " api",
          " 2023",
          " real blog api"
        ]
      },
      {
        "status": "published",
        "_id": "66a4f91deb4063550aefa214",
        "title": "Portfolio landing page design made in ony HTML and CSS",
        "details": "This Portfolio landing page is not reresponsive for mobile devices and any other devices, like laptop or tablet. reresponsiveness add will very soon.\r\n",
        "category": "portfolio-landing-page",
        "author": "Ruis Sander",
        "liveLink": "https://muhammadranju.github.io/Batch10-Assignment-1",
        "sourceCode": "https://github.com/muhammadranju/Batch10-Assignment-1",
        "image": "https://res.cloudinary.com/nodelove/image/upload/v1722023612/portfolio/f2bjcq5erkwdtyopkkpp.png",
        "avatar": "https://avatars.githubusercontent.com/u/200890800?s=96&v=4",
        "createdAt": "2024-07-27T13:41:49.306Z",
        "updatedAt": "2025-02-27T17:36:02.216Z",
        "__v": 1,
        "tags": [
          "portfolio landing",
          " page"
        ]
      },
      {
        "status": "published",
        "_id": "66a4f805eb4063550aefa208",
        "title": "Real live e-commerce add-to-cart feature",
        "details": "This design is bootstrap components design copy from bootstrap website\r\n",
        "category": "e-commerce-add-to-cart",
        "author": "Ruis Sander",
        "liveLink": "https://add-to-cart-2023.onrender.com/api/v1/products",
        "sourceCode": "https://github.com/muhammadranju/add-to-cart",
        "image": "https://res.cloudinary.com/nodelove/image/upload/f_auto,q_auto/v1/portfolio/sshlc1cgothvu1efxjq0",
        "avatar": "https://avatars.githubusercontent.com/u/200890800?s=96&v=4",
        "createdAt": "2024-07-27T13:37:09.689Z",
        "updatedAt": "2025-02-27T17:37:20.297Z",
        "__v": 1,
        "tags": [
          "e-commerce",
          " add-to-cart",
          " real e-commerce"
        ]
      },
      {
        "status": "published",
        "_id": "66a4f755eb4063550aefa202",
        "title": "Lifetime URL live LINK-SHORTENER",
        "details": "This project is lifetime expiry URL shortener, you can use it for free. this project is anyone can use not need to login or signup. it; totally free website\r\n\r\n\r\n\r\n",
        "category": "url-link-shortener",
        "author": "Ruis Sander",
        "liveLink": "https://url.ruissander-portfolio.vercel.app",
        "sourceCode": "https://github.com/muhammadranju/url-shortner",
        "image": "https://res.cloudinary.com/nodelove/image/upload/f_auto,q_auto/v1/portfolio/qfecagwborh8l70xpmwi",
        "avatar": "https://avatars.githubusercontent.com/u/200890800?s=96&v=4",
        "createdAt": "2024-07-27T13:34:13.514Z",
        "updatedAt": "2025-02-27T17:34:15.466Z",
        "__v": 2,
        "tags": [
          "url link",
          " shortener",
          " real url",
          " limit"
        ]
      },
      {
        "status": "published",
        "_id": "66a4f6e2eb4063550aefa1fa",
        "title": "Gym Landing Page Project",
        "details": "This project my programming hero Assignment number two, in this is project i;m using HTML and CSS. this project is totally responsive for mobile, tablet and laptop \r\n\r\n\r\n",
        "category": "gym-landing-page",
        "author": "Ruis Sander",
        "liveLink": "https://muhammadranju.github.io/Batch10-Assignment-2/",
        "sourceCode": "https://github.com/muhammadranju/Batch10-Assignment-2",
        "image": "https://res.cloudinary.com/nodelove/image/upload/v1722023611/portfolio/ji8meq2stpyexdlkjkgq.png",
        "avatar": "https://avatars.githubusercontent.com/u/200890800?s=96&v=4",
        "createdAt": "2024-07-27T13:32:18.807Z",
        "updatedAt": "2025-02-27T17:36:30.576Z",
        "__v": 1,
        "tags": [
          "gym",
          " landing page",
          " html and css"
        ]
      },
      {
        "status": "published",
        "_id": "66a4f69deb4063550aefa1f4",
        "title": "This project is a Pet Adoption Platform",
        "details": "This project is a Pet Adoption Platform Anyone can adopt a pet. you can buy a pet and see all pets names, images, and more. you can sort pets by price. you can see the category by clicking the pet's icon.\r\n\r\n\r\n\r\n\r\n\r\n",
        "category": "pet-adoption-platform-landing-page",
        "author": "Ruis Sander",
        "liveLink": "https://batch10-assignment-6.netlify.app/",
        "sourceCode": "https://github.com/muhammadranju/Batch10-Assignment-6",
        "image": "https://res.cloudinary.com/nodelove/image/upload/v1729338410/portfolio/en9d6rxen0z8d2vezmpi.png",
        "avatar": "https://avatars.githubusercontent.com/u/200890800?s=96&v=4",
        "createdAt": "2024-07-27T13:31:09.683Z",
        "updatedAt": "2025-02-27T17:35:48.092Z",
        "__v": 2,
        "tags": [
          "pet adoption",
          " platform",
          " landing page"
        ]
      },
      {
        "status": "published",
        "_id": "66a4f656eb4063550aefa1ee",
        "title": "Backend Dashboard for e-commerce project website",
        "details": "This project is demo for practice this Template is download from themeForest it's a paid Template I' Download nulled version\r\n\r\n\r\n",
        "category": "e-commerce-dashboard",
        "author": "Ruis Sander",
        "liveLink": "",
        "sourceCode": "https://github.com/muhammadranju/dashboard-raj-tshirt",
        "image": "https://res.cloudinary.com/nodelove/image/upload/f_auto,q_auto/v1/portfolio/hh9rqwotpl7f75dyyfgu",
        "avatar": "https://avatars.githubusercontent.com/u/200890800?s=96&v=4",
        "createdAt": "2024-07-27T13:29:58.949Z",
        "updatedAt": "2025-02-27T17:36:55.364Z",
        "__v": 1,
        "tags": [
          "e-commerce",
          " dashboard",
          " template "
        ]
      }
    ]
  }
  // const result = await data.json();
  return result;
}

export default getProject;
