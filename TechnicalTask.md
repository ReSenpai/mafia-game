
# Концепт

1. Пользователь может писать в чат и видеть сообщения других пользователей в чате.

2. В 1 чате одновременно могут общаться от 7 до 16 пользователей.
 
3.  В начале игры мафии дают 30 секунд, чтобы договорится в чате о том, как они будут подавать знаки друг другу. При этом другие участники сидят в лобби игры и ждут.

4. Затем запускается игра и все попадают в общий чат.

5. Ход (день) длится 90 секунд. В это время все игроки общаются в общем чате и договариваются о том, в кого голосовать, кто маф и тд.

6. Спустя 30 секунд открывается доступ для общего голосования (выбор мафа или воздержаться). При этом все будут видеть, кто в кого проголосовал. Обратно забрать голос нельзя.

7. После того, как таймер подошел к концу или все проголосовали, идет анимация смены дня ночь.

8. В это время начинается 2 голосовалка для всех персонажей с абилками (мафы, доктор, любовница, шериф и тд), которая длится 20-30 секунд.  При этом никто не будет видеть, кто в кого проголосовал.

9. После того, как время 2 голосовалки закончилось или все участники проголосовали, то начинается анимация смены ночи на день и бот объявляет о происшетсвиях за ночь (кого убили, на кого было покушение и тд).

10. Затем игра продолжается дальше по кругу.

11. Если количество мафов станет равно количеству других игроков, то мафы победили.

12. Если все мафы повешены, то победили мирные.


# Описание абилок персонажей.

У всех персонажей, не зависимо от класса, будет абилка "Голосовать за повешание" и "Воздержаться от голосования".

Далее идут дополнительные абилки у ролевых классов.

1. Маф: 
    - [] "Голосовать за убийство" - все живые мафы должны проголосовать в 1 человека, иначе покушение на убийство будет неудачным и бот об этом скажет в конце хода, в случае успеха жертва будет убита и бот скажет об этом в конце хода.

2. Шериф:
    - [] "Проверить" - может 1 раз за ход проверить, является ли персонаж мафов или нет. При этом никакой информации о провеке этой абилки в чат не попадает. Шериф должен сам доказывать, что он шериф.

    - [] "Убить" - может 1 раз за ход выстрелить в любого персонажа и убить его. При этом бот объявит об этом в конце хода, не делая акцент, как персонаж умер.

    За ход можно использовать только 1 абилку на выбор

3. Доктор:
    - [] "Лечить" - может повесить щит неуязвимости на 1 любого персонажа и на себя 1 раз за ход. Если на персонажа с щитом будет совершенно покушение, то он выживет и бот расскажет об этом в конце ночи.
4. Любовница:
    - [] "Прыгнуть в койку" - может остаться на ночь с любым из жителей 1 раз за ход, что вешает неуязвимость на этого персонажа. Если при этом покушение будет совершено на саму любовницу - она умирает. Если любовница прыгает в койку к мафу, то маф не может голосовать ночью за убийство.
5. Маньяк:
    - [] "Ночная игра" - может убить 1 персонажа 1 раз за ход.


 
