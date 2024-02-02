# Frontend for OpenSoft Task

## About:
This is the frontend built for the purpose of building a web application that shortens urls for users. It is built using Next.js to provide a isomorphic rendering approach that combines the advantages of both client and server side rendering. 

## Technologies used:
- **Next.js**: Framework to use react via a isomorphic rendering approach, and simplify routing.
- **SASS**: A superset of CSS to efficiently write stylesheets.
- **TypeScript**: A strongly typed extension of Javascript.

## Directory Structure:

```
src  
├── app  
│   ├── home  
│   ├── login  
│   ├── profile  
│   │   └── [username]  
│   ├── redirect  
│   │   └── [slug]  
│   ├── signup  
│   └── teams  
│       └── [teamid]  
├── components   
├── public  
└── styles
```
All source code is in the `src` directory. Routes are in `src/app`, arranged in heirarchy of routing. All reusable react components are in `src/components`. Styles (SASS files) are stored in `src/styles`. Public files are stored in `src/public`.

## Installation:

### For development:
- Clone this directory
- Run `npm install -i` to install all dependencies
- Run `npm run dev` to start the development server
- Go to *http://localhost:3000* to see the website


