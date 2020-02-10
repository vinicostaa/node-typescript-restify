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
