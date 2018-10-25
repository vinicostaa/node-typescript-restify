# javascript-conference-2017-nodejs-typescript

This repository contains the sample for the talk "Modern Web APIs with Node.js & TypeScript" at the International JavaScript Conference 2017 in Munich.
Slides can be found on [Speakerdeck](https://speakerdeck.com/manuelrauber/modern-web-apis-with-node-dot-js-and-typescript-1)

## Setup

Run `npm i` to install all necessary packages.

## Start

Run `npm start` to start the application. 
Please take a look at both controllers for all available routes.

* [CustomerController](src/controllers/customer.ts)
* [BillController](src/controllers/bill.ts)

## Database setup

The sample uses a database for storing the data. 
Thanks to [TypeORM](https://github.com/typeorm/typeorm) several database engines are supported. 
You can set the credentials for your own database in the [`src/index.ts`-file]()src/index.ts 
