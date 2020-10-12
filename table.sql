 CREATE TABLE greetings (
    id serial not null PRIMARY KEY,
    name VARCHAR ( 50 ) NOT NULL,
    counter int
  );


  insert into greetings (name, counter)
 values ('Yongama', 1);
