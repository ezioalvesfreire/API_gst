CREATE DATABASE api_gst;

CREATE TABLE transistors(
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    description varchar(15) NOT NULL,
    package varchar(15) NOT NULL
);

DESCRIBE transistors;