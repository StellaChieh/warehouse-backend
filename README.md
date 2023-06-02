# F22-SB5-FoodHunter-Backend

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