PRAGMA foreign_keys = ON;

CREATE TABLE users (
  id INTEGER PRIMARY KEY,
  fname TEXT,
  lname TEXT
);

CREATE TABLE questions (
  id INTEGER PRIMARY KEY,
  title TEXT,
  body TEXT,
  author_id INTEGER NOT NULL,
  FOREIGN KEY(author_id) REFERENCES users(id)
);

CREATE TABLE question_follows (
  id INTEGER PRIMARY KEY,
  user_id INTEGER NOT NULL,
  question_id INTEGER NOT NULL,

  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE replies (
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  parent_id INTEGER,
  user_id INTEGER NOT NULL,
  body TEXT NOT NULL,

  FOREIGN KEY (parent_id) REFERENCES replies(id),
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE question_likes (
  id INTEGER PRIMARY KEY,
  question_id INTEGER NOT NULL,
  user_id INTEGER NOT NULL,

  FOREIGN KEY (question_id) REFERENCES questions(id)
  FOREIGN KEY (user_id) REFERENCES users(id)
);

INSERT INTO users(fname, lname)
VALUES (
  'joe',
  'sand'
);

INSERT INTO questions(title, body, author_id)
VALUES (
  'knock knock?',
  'who''s there?',
  (SELECT id FROM users WHERE fname = 'joe')
);

INSERT INTO replies(body, question_id, user_id)
VALUES (
  'yes!',
  (SELECT id FROM questions WHERE title = 'knock knock?'),
  (SELECT id FROM users WHERE fname = 'joe')
  -- (select author_id from questions where title = 'knock knock?')
);

INSERT INTO question_likes(question_id,user_id)
VALUES (
  (SELECT id FROM questions WHERE body = 'who''s there?'),
  (SELECT id FROM users WHERE lname = 'sand')
);