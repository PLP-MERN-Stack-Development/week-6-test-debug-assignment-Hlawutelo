MERN Application Testing & Debugging Assignment
This project focuses on applying comprehensive testing strategies to a MERN stack application, covering unit, integration, and end-to-end testing, along with essential debugging techniques.

Assignment Objectives
Configure testing environments for both client and server sides

Write unit tests for React components and backend functions

Implement integration tests for API endpoints

Develop end-to-end tests for key user workflows

Utilize debugging methods to troubleshoot common MERN issues

Project Structure
bash
Copy
Edit
mern-testing/
├── client/                 # React frontend
│   ├── src/                # React source code
│   │   ├── components/     # React components
│   │   ├── tests/          # Client tests
│   │   │   ├── unit/       # Unit tests
│   │   │   └── integration/ # Integration tests
│   │   └── App.jsx         # Main app component
│   └── cypress/            # End-to-end tests
├── server/                 # Express backend
│   ├── src/                # Server source code
│   │   ├── controllers/    # Route controllers
│   │   ├── models/         # Mongoose schemas/models
│   │   ├── routes/         # API routes
│   │   └── middleware/     # Custom middleware
│   └── tests/              # Server tests
│       ├── unit/           # Unit tests
│       └── integration/    # Integration tests
├── jest.config.js          # Jest configuration file
└── package.json            # Dependencies & scripts
Setup Instructions
Accept the GitHub Classroom invitation

Clone your assigned repository

Follow setup steps in Week6-Assignment.md

Review starter code and sample tests

Complete the testing and debugging tasks as described

Included Files
Week6-Assignment.md — Full instructions and task details

Starter MERN app code with basic tests:

React components + tests

Express routes + tests

Jest & testing-library configurations

Sample test cases for reference

Prerequisites
Node.js (v18+)

MongoDB (local or Atlas)

npm or yarn package manager

Familiarity with testing principles

Testing Tools & Frameworks
Jest — JavaScript testing framework

React Testing Library — Utilities for React component testing

Supertest — API HTTP assertions

Cypress (or Playwright) — End-to-end testing

MongoDB Memory Server — In-memory database for tests

Submission Guidelines
Push your final code to the GitHub Classroom repo to submit. Ensure you:

Complete unit, integration, and end-to-end tests

Achieve at least 70% code coverage on unit tests

Document your testing approach in this README

Include screenshots of coverage reports

Showcase debugging techniques within your code

Helpful Resources
Jest Documentation

React Testing Library

Supertest GitHub

Cypress Documentation

MongoDB Testing Best Practices