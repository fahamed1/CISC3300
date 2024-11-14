CREATE DATABASE `homework_9`;

CREATE TABLE `library`
(
    `id`int(11) NOT NULL AUTO_INCREMENT,
    `name`varchar(80) NOT NULL,
    PRIMARY KEY (`id`) 
);

CREATE TABLE `book` 
(
    `id`int(11) NOT NULL AUTO_INCREMENT,
    `name`varchar(80) NOT NULL,
    PRIMARY KEY (`id`)
);

CREATE TABLE `libraryBook` 
(
 	`id`int(11) NOT NULL AUTO_INCREMENT,
    `libraryID`int(11) NOT NULL,
    `bookID`int(11) NOT NULL,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`libraryID`) REFERENCES library(`id`),
    FOREIGN KEY (`bookID`) REFERENCES book(`id`)
);

INSERT INTO library (id, name)
VALUES (1, 'Quinn Library');
INSERT INTO library (id, name)
VALUES (2, 'New York Public Library');
INSERT INTO library (id, name)
VALUES (3, 'Queens Public Library');
INSERT INTO library (id, name)
VALUES (4, 'Brooklyn Public Library');

INSERT INTO book (id, name)
VALUES (1, 'The Kite Runner');
INSERT INTO book (id, name)
VALUES (2, 'The Idiot');
INSERT INTO book (id, name)
VALUES (3, 'Macbeth');
INSERT INTO book (id, name)
VALUES (4, 'Lord of the Flies');

INSERT INTO libraryBook (libraryID, bookID)
VALUES (1, 3);
INSERT INTO libraryBook (libraryID, bookID)
VALUES (3, 4);
INSERT INTO libraryBook (libraryID, bookID)
VALUES (2, 1);
INSERT INTO libraryBook (libraryID, bookID)
VALUES (2, 2);
INSERT INTO libraryBook (libraryID, bookID)
VALUES (4, 2);
INSERT INTO libraryBook (libraryID, bookID)
VALUES (4, 1);

SELECT * FROM library WHERE id = 1;
SELECT * FROM book WHERE name LIKE '%The%';
SELECT * FROM book ORDER BY name ASC;

SELECT 
	book.*,
	book.name AS bookName, 
    library.name AS libraryName
FROM book
JOIN libraryBook ON book.id = libraryBook.bookID
JOIN library ON libraryBook.libraryID = library.id;

UPDATE book SET name = 'The Great Gatsby' WHERE id = 4;

DELETE FROM book WHERE id = 2;