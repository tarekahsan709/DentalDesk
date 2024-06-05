# Dental Desk Manager

Dental Desk Manager is a small solution for managing dental clinics. It offers various features to streamline clinic
operations and improve patient care.

## Prerequisites

Ensure you have the following installed:

- Node.js (version 12)
- Yarn

## Building from Source & Deployment
# Dental Desk Manager

Dental Desk Manager is a small solution for managing dental clinics. It offers various features to streamline clinic
operations and improve patient care.

## Prerequisites

Ensure you have the following installed:

- Node.js (version 12)
- Yarn

## Building from Source & Deployment

After cloning the repository, run `yarn install` to install the required dependencies. Then use the following commands
to run the project:

- `yarn run serve`: To serve from local.

## Running CouchDB with Docker

To run CouchDB in a Docker container with a specified user and password, use the following command:

```sh
docker run -d \
  -e COUCHDB_USER=admin \
  -e COUCHDB_PASSWORD=password \
  -p 5984:5984 \
  --name couchdb \
  couchdb:latest
```

### Scripts

- Use nodejs version 11 or 12
- `yarn run prod`: build for production.
- `yarn run dev`: build for development.
- `yarn run lint`: run ts-lint on the project.
- `yarn run serve`: run a localhost server that serves the files in `dist/application/`.
- `yarn run build-desktop`: will create a desktop electron application that loads the URL: `web.apexo.app`.
- `yarn run upload`: will upload the files in `dist/application/` to `web.apexo.app` and `demo.apexo.app`.
- `yarn run deploy`: will build the application in production mode and then upload it just like the aforementioned
  script.
- `yarn run jest`: will run unit tests.
- `yarn run cypress`: will run e2e tests.

License: The MIT License (MIT) - Copyright (c) Alex Corvi

After cloning the repository, run `yarn install` to install the required dependencies. Then use the following commands
to run the project:

- `yarn run serve`: To serve from local.

## Running CouchDB with Docker

To run CouchDB in a Docker container with a specified user and password, use the following command:

```sh
docker run -d \
  -e COUCHDB_USER=admin \
  -e COUCHDB_PASSWORD=password \
  -p 5984:5984 \
  --name couchdb \
  couchdb:latest
```

### Scripts

- Use nodejs version 11 or 12
- `yarn run prod`: build for production.
- `yarn run dev`: build for development.
- `yarn run lint`: run ts-lint on the project.
- `yarn run serve`: run a localhost server that serves the files in `dist/application/`.
- `yarn run build-desktop`: will create a desktop electron application that loads the URL: `web.apexo.app`.
- `yarn run upload`: will upload the files in `dist/application/` to `web.apexo.app` and `demo.apexo.app`.
- `yarn run deploy`: will build the application in production mode and then upload it just like the aforementioned
  script.
- `yarn run jest`: will run unit tests.
- `yarn run cypress`: will run e2e tests.

License: The MIT License (MIT) - Copyright (c) Alex Corvi
