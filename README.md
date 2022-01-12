![The San Juan Mountains are beautiful!](/src/images/App.png)

# Backend

The backend was created using [Express](https://expressjs.com/), [GraphQl](https://graphql.org/) and [Apollo Server](https://www.apollographql.com/docs/apollo-server/) using [Knex](https://knexjs.org/) for database management and [ObjectionJS](https://vincit.github.io/objection.js/) as an ORM.

- The user can see a timeline of the measurements.
- The user can create new weight measurements and pick the date for it.
- The user can edit and delete measurements.

## Env

Need to copy the `.env.example` to `.env` and update the database connection env variables.

## Migration

### `npx knex migrate:latest`

To migrate the database

### `npx knex migrate:rollback`

To rollback the database migrations

## Seeding

### `npx knex seed:run`

To seed the database

# Frontend

> :warning: **Frontend WIP**: The frontend is still incomplete, only listing the measurements from the backend actually works only the UI is built for the moment

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app) and uses [Redux](https://redux.js.org/), [Apollo Client](https://www.apollographql.com/docs/react/) and [Mui](https://mui.com/) react ui library

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode using [Concurrently](https://www.npmjs.com/package/concurrently) to run both the client and server.

Open [http://localhost:3000](http://localhost:3000) to view the client in the browser.
Open [http://localhost:4000/graphql](http://localhost:4000/graphql) to view the graphql server in the browser.
