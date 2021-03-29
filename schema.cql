CREATE TABLE users (
  userid     uuid,
  firstname  text,
  lastname   text,
  email      text,
  created_date timestamp,
  PRIMARY KEY(userid)
);

CREATE TABLE task_by_users (
  taskid     uuid,
  body       text,
  completed  boolean,
  userid     uuid,
  created_date timestamp,
  PRIMARY KEY((userid), completed)
);