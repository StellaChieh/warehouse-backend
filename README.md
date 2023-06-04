# Warehouse-Backend

## Assumptions
- Users have the ability to define warehouse zones as needed, allowing them to submit shelf forms multiple times for different zones within the warehouse.
- Users can define shelves in any order within a zone.
- Shelf naming rules: 
* 1. Shelf names must not exceed 20 characters in length. 
* 2. Only English letters and numbers are permitted in shelf names. 
* 3. Each shelf name must be unique within the entire warehouse. 
- The POST API is exclusively called by the frontend, which means that parameter validation is already performed by the frontend. Therefore, the API does not carry out parameter validation. However, the backend does verify whether a shelf name already exists in the database whenever users attempt to define a new shelf.

## Code structure
src/
  -configs/
  -controllers/
  -dao/
  -model/
  -routes/
  -service/
  -utils/
  -app.ts
test/ : unit tests and integration tests

## Technologies
- TypeScript
- ExpressJS
- MongoDB (Docker)
- [Mongoose](https://mongoosejs.com/): Connect MongoDB
- jest
- supertest
- eslint: Lint
- prettier: Lint


## Get Started

1. Install dependencies
```bash
npm install
```

2. Install [Docker](https://docs.docker.com/desktop/) (if you do not have one)


3. Set up database

```bash
docker-compose up -d
```

4. Copy env file

```bash
cp .env.example .env
```

5. Run dev mode
```bash
npm run dev
```

6. Run tests
```bash
npm run test
```

## Commands
Shut down DB
```bash
docker-compose down
```

Clear DB
```bash
docker-compose down -v
```

## Check DB status
(after running mongo db in docker)
```bash
docker exec -it [container name] mongosh -u root -p divergent-warehouse
use development
show collections
db.shelves.find({})
'''
