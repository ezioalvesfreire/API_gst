CREATE DATABASE api_gst;

USE api_gst;

CREATE TABLE mosfets(
    id_mosfet INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descript varchar(15),
    pack varchar(15),
    ch varchar(15),    
    drainCurreunt INT(4),
    voltageDrainSource INT(4),
    resistanceDraiSource INT(6)
);

DESCRIBE mosfets; 

CREATE TABLE powerTransistors(
    id_powerTransistor INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descript varchar(15),
    pack varchar(15),
    ch varchar(15),    
    voltageColletorBase INT(4),
    voltageCollectorEmitter INT(4),
    voltageEmitterBase INT(6),
    collectorCurrent INT(6)
);

DESCRIBE powerTransistor; 


