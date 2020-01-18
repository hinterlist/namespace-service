## Installation

### 1. Install `yarn` packet manager

```
brew install yarn
```

### 2. Install dependent services

This service has `redis` dependency that is installed over docker. If you don't have docker, you need to install it first.

```
yarn spin
```

### 3. Install packages

```
yarn install
```

### 4. Setup environment

Copy file `.env.sample` as `.env` in root folder and change values inside the file if required.

## Run server

```
yarn start
```

If everything is fine you should see message similar to:

```
INFO  [1579385092492] (82440 on MacBook-Pro.local): 🔌 Successfully connected to Redis at localhost:6379
INFO  [1579385093492] (82440 on MacBook-Pro.local): 🚀 Server ready at http://www.localhost:3000
```

Service has single enpoint which generates a new ID for specified namespace for each request:

GET http://www.localhost:3000/newId/:namespace

- namespace - Lowercase letters between 1 and 10 symbols long

## Commands

| Command            | Description                            |
| ------------------ | -------------------------------------- |
| `yarn start`       | Start server                           |
| `yarn start:debug` | Start service in debug mode            |
| `yarn spin`        | Run docker containers                  |
| `yarn nuke`        | Remove all data and restart containers |
