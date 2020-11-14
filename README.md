# Mafia Game

## [TechicalTask](./TechnicalTask.md)

## Available Scripts

In the project directory, you can run:

`yarn install` - to install all dependencies.

`yarn start` - runs the app in the development mode.

`sh dev.sh` - runs the app in the Docker(dev mode)

`yarn build` - builds the app for production to the `build` folder.

`yarn lint` - linting project using ESLint.

`yarn format` - formatting project using Prettier.

_NOTE_: Please, make sure that you fixed all errors before commit.

## Tech Stack

* ### Frontend
  * React
  * Redux(thunk)

* ### CI/CD
  * Docker
  * TravisCI

* ### [Backend](https://github.com/TicTak21/mafia-game-backend)
  * Koa
  * GraphQL
  * MongoDB

* ### Tests
  * _Soon..._

## Design on figma [here](https://www.figma.com/file/3UbRLupkyIEUk2U4RkrmY5/Untitled-(Copy)?node-id=0%3A1)

## Description of the project concept

Сайт с регистрацией.

Рейтинговая система в зависимости от выигранных игр (чтобы было понятно с кем играешь, новичок человек или опытный).

Обмен сообщениями между игроками в виде писем (с отсрочкой если оба игрока в одной игре чтобы нельзя было письмо послать и сговариваться).

Возможность приглашать в игру если человек на сайте и не в игре.

Общий чат на сайте. Два чата внутри комнаты с игрой, один общий, второй для отдельных групп, мафии и офиса комиссара к примеру.

На разное количество участников - разное количество ролей с рандомным распределением.

После запуска игры - наступает ночь, мафия решает кого убить, комиссар решает кого проверить, мирные жители ничего не решают, ролей будет штук десять разных с разными возможностями. Все в правилах есть.

Потом в зависимости от действий игроков днем пишется кто кого убил, кто кого проверил - вот это все.

Потом решают кого повесить, если голосов набирается больше половины за кого-то - то его вешают и объявляют роль. Если нет, то не вешают соответственно.

Потом опять ночь и все по кругу до тех пор пока кто-то не победит.
