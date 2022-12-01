CREATE DATABASE api_gst;

USE api_gst;

CREATE TABLE mosfets(
    id_mosfet INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descriptionMosfet varchar(15),
    packageMosfet varchar(15),
    channelMosfet varchar(15),    
    drainCurrent FLOAT(5,2),
    voltageDrainSource FLOAT(5,2),
    resistanceDraiSource FLOAT(5,2),
    greatnessResistanceDraiSource varchar(6)

);

DESCRIBE mosfets; 

CREATE TABLE powerTransistors(
    id_powerTransistor INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    descriptionPowerTransistor varchar(15),
    packagePowerTransistor varchar(15),
    channelPowerTransistor varchar(15),    
    voltageColletorBase FLOAT(5,2),
    voltageCollectorEmitter FLOAT(5,2),
    voltageEmitterBase FLOAT(5,2),
    collectorCurrent FLOAT(5,2)
);

DESCRIBE powerTransistors; 


