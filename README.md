# Film-searcher

Приложение для поиска фильмов. 

## Описание

Данное приложение представляет собой 2 страничное приложение (2 страница содаётся динамические). На первой странице выводятся результаты поиска фильма либо сообщение об ошибке 
в случае если фильм не найден, если поле для поиска пустое, если закончился лимит запросов к API. В качестве API используется IMDDb-API (Лимит запросов бесплатной версии 100 запросов в день). Для получения каждого из рузультатов поиска требуется выполнить 2 запроса. При переходе на страницу фильма выполняется 3 запроса (Получение изображения для фона, получение ссылки на трейлер, получение информации о фильме). В связи с этим количество рузультатов поиска ограничено 2.

Переход на страницу фильма осущствляется нажатием на желтую кнопку (IMDb) в элементе результата поиска.  

На странице с информацией о конкретном фильме доступен список рекомендованных к просмотру фильмом, переход на страницы данных фильмов также доступен при клике на желтую кнопку IMDb

## Стэк технологий

Для реализации приложения используются следующие технолонгии: React, Redux, React-redux? React-Router, Firebase(Для хостинга), Axois? IMDb-API, redux-thunk


## Запуск приложение

### В обычном режиме
ПРиложение доступно по ссылке https://filmsearcher-901ec.web.app/

### В режиме разработки

Для запуска в режиме разрабокти используется скрипт npm run start

## Сборка приложения

Для сборки приложения используется npm run build

## Дополнительная информация

Приложение не имеет мобильной адаптации.  

В ходе разработки мной были допущены некоторые стилистические отклонения от изначального макета, (по требованиям ТЗ данные отклонения допустимы). В основном это связано с отступаии и размерами шрифтов.
