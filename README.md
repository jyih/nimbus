# Nimbus Sounds

[Live](https://nimbus-sounds.herokuapp.com/)
![home-page](https://github.com/jyih/nimbus/blob/97d8f91eda99d1cfd91056b17563a5ed9d1a48e7/references/ss-home-page.png)
![upload-page](https://github.com/jyih/nimbus/blob/97d8f91eda99d1cfd91056b17563a5ed9d1a48e7/references/ss-upload-page.png)

## Target Features

- User authentication: Users can sign up, login/logout, and login as a demo user
- Song: Users can upload songs with title and album data
- Playback Feature: Songs can be played with progress bar and continuous play

## Technologies Used

### Backend

- Express
- Sequelize
- PostgresSQL
- JavaScript

### Frontend

- React
- Redux
- JavaScript
- CSS3
- HTML5

### Hosting

- Heroku

## How To Launch

### Backend

1. `cd` into the repository
2. `cd` into the `backend` directory
3. `npm install` the dependencies
4. Make a `.env` file based on the `.env.example` file given
5. Create a user based on the user defined in the `.env` file by running this command: `psql -c "CREATE USER monospace_app WITH PASSWORD '<<user_password>>' CREATEDB;"`
6. Create a database by running this command: `npx dotenv sequelize db:create`
7. Migrate to apply the migrations to the database by running this command: `npx dotenv sequelize db:migrate`
8. Seed data to the database by running this command: `npx dotenv sequelize db:seed:all`

### Frontend

1. `cd` into the `frontend` directory
2. `npm install` the dependencies
