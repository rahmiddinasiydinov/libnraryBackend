
CREATE DATABASE Library;

CREATE TABLE books(
    book_id bigserial PRIMARY KEY,
    book_title text NOT  NULL, 
    book_author text NOT NULL, 
    book_price int NOT NULL, 
    book_desc text, 
    book_date timestamptz  DEFAULT CURRENT_TIMESTAMP   
);

INSERT INTO books(book_title, book_author, book_price, book_desc) VALUES('Qo`rqma', 'Javlon Jovliyev', 40000, 'This book is about the students of Uzbekistan who studied in Germany in 1920s');
INSERT INTO books(book_title, book_author, book_price, book_desc) VALUES('Mexrobdan Chayon', 'Abdulla Qodiriy', 80000, 'In this book you can egn information about how uzbek emirs were selfish in 18-century');
INSERT INTO books(book_title, book_author, book_price, book_desc) VALUES('Kecha va Kunduz', 'Cho`lpon', 60000, 'Really Interesting book!');
INSERT INTO books(book_title, book_author, book_price, book_desc) VALUES('Sariq devni minib', 'Xudoyberdi To`xtaboyev', 50000, 'book for children');
INSERT INTO books(book_title, book_author, book_price, book_desc) VALUES('Bahor qaytmaydi', 'O`tkir Xoshimov', 70000, 'Spring never come back...');
INSERT INTO books(book_title, book_author, book_price, book_desc) VALUES('O`tkan kunlar', 'Abdulla Qodiriy', 100000, 'Love of Otabek and Kumush');
INSERT INTO books(book_title, book_author, book_price, book_desc) VALUES('Hadis va Hayot', 'Shayx Muhammad Sodiq Muhammad Yusuf', 150000, 'the The best book for those lost themselves in the life!');
INSERT INTO books(book_title, book_author, book_price, book_desc) VALUES('Oq kema', 'Chingiz Aytmatov', 80000, 'Awesome book to read!');
