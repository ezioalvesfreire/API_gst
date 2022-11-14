CREATE DATABASE api_gst;

USE api_gst;

CREATE TABLE mosfets(
    id_mosfet INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    description varchar(15),
    package varchar(15),
    ch varchar(6),    
    drainCurreunt INT(4),
    voltageDrainSource INT(4),
    resistanceDraiSource INT(6)
);

DESCRIBE mosfets; 
