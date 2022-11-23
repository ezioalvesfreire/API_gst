CREATE DATABASE api_gst;

USE api_gst;

CREATE TABLE mosfets(
    id_mosfet INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descriptionMosfet varchar(15),
    packageMosfet varchar(15),
    channelMosfet varchar(15),    
    drainCurrent INT(4),
    voltageDrainSource INT(4),
    resistanceDraiSource INT(6)
);

DESCRIBE mosfets; 

CREATE TABLE powerTransistors(
    id_powerTransistor INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descriptionPowerTransistor varchar(15),
    packagePowerTransistor varchar(15),
    channelPowerTransistor varchar(15),    
    voltageColletorBase INT(4),
    voltageCollectorEmitter INT(4),
    voltageEmitterBase INT(6),
    collectorCurrent INT(6)
);

DESCRIBE powerTransistors; 


