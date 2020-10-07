 CREATE TABLE greetings (
    id serial not null PRIMARY KEY,
    name VARCHAR ( 50 ) NOT NULL,
    day VARCHAR ( 50 ) NOT NULL,
    arriving_on text NOT NULL

  );


  insert into greetings (name, Language, times_greeted )
 values ('Que', 'Friday', ' 17:10');
