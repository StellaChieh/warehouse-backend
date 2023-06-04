# Warehouse-Backend

## Technologies

- ExpressJS
- MongoDB (Docker)
- [Mongoose](https://mongoosejs.com/): Connect MongoDB
- eslint: Lint
- prettier: Lint
- [apidoc](https://apidocjs.com/)


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

## Commands
Shut down DB
```bash
docker-compose down
```

Clear DB
```bash
docker-compose down -v
```

## Check DB condition
(after running mongo db in docker)
```bash
docker exec -it [container name] mongosh -u root -p divergent-warehouse
use development
show collections
db.shelves.find({})
'''
