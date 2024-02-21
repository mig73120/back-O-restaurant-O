BEGIN;

CREATE TABLE user (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "userFirstName" TEXT NOT NULL,
  "lastname" TEXT NOT NULL,
  "adress" TEXT NOT NULL,
  "city" TEXT NOT NULL,
  "zip" TEXT NOT NULL,
  "email" TEXT NOT NULL UNIQUE,
  "phone" TEXT NOT NULL UNIQUE,
  "owner" BOOLEAN NOT NULL DEFAULT false, 
  "password" TEXT NOT NULL,
  "profil_picture" TEXT UNIQUE,
  "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" DATE
);

CREATE TABLE restaurant (
  id INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "name" TEXT NOT NULL,
  "adress" TEXT NOT NULL,
  "city" TEXT NOT NULL,
  "zip" TEXT NOT NULL,
  "email" TEXT NOT NULL UNIQUE,
  "phone" TEXT NOT NULL UNIQUE,
  "owner_id" INT,
  "created_at" DATE NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "updated_at" DATE
);

CREATE TABLE user_has_restaurant (
    user_id INT,
    restaurant_id INT,
    owner BOOLEAN,
    PRIMARY KEY (user_id, restaurant_id),
    FOREIGN KEY (user_id) REFERENCES user(user_id),
    FOREIGN KEY (restaurant_id) REFERENCES restaurant(restaurant_id)
);

COMMIT;


