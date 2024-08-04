# Inventory List app

## Problem Statement

School Management Application is an application where you manage the details of students and teachers. You are given 2 apis which returns details of students and teachers respectively. Implement a cache mechanisim to improve the performance of the angular application.

## Know your APIs

     - GET    - http://localhost:3000/students      - get all students
     - GET     - http://localhost:3000/teachers      - get all teachers

## TECH STACK

- Angular16
- Jasmine
- json-server

## PREREQUISITES

1. Install dependencies npm install
2. Run the frontend `npm run start` which shall run on port:4200
3. Use `json-server --watch db.json` for APIs availabilty using json-server

## Problem

- Create a cache service
- Create an API servicea and implement cache mechanism for your apis
- Call the APIs and show the returned details in students component.

## Instructions

1. Your are expected to write code in the given boilerplate so that you can complete this assignment
2. All the detailed instructions are given inside the project
3. Understand the comments in the project and write code
4. After writing the code unit test your code by running `npm run test` or `ng test` and test lint errors using `ng lint` or `npm run lint`
