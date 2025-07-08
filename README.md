# CRUD App with PostgreSQL & GitHub Actions

A simple Node.js CRUD API using Express and PostgreSQL, with automated testing via GitHub Actions and a PostgreSQL service container.

## Features

- RESTful API (Create, Read, Update, Delete)
- PostgreSQL database integration
- GitHub Actions workflow with service containers
- Tests using Jest and Supertest

## Scripts

```bash
npm install     # Install dependencies
npm start       # Start the server
npm test        # Run tests

## CI/CD
GitHub Actions runs tests on every push using a PostgreSQL service container.