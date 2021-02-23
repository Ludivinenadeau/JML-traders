/*------------------------------------------------------------
*        Script SQLSERVER 
------------------------------------------------------------*/


/*------------------------------------------------------------
-- Table: af458_brokers
------------------------------------------------------------*/
CREATE TABLE af458_brokers(
	idBroker      INT IDENTITY (1,1) NOT NULL ,
	lastname      VARCHAR (50) NOT NULL ,
	firstname     VARCHAR (50) NOT NULL ,
	mail          VARCHAR (100) NOT NULL ,
	phoneNumber   VARCHAR (100) NOT NULL  ,
	CONSTRAINT af458_brokers_PK PRIMARY KEY (idBroker)
);


/*------------------------------------------------------------
-- Table: af458_customers
------------------------------------------------------------*/
CREATE TABLE af458_customers(
	idCustomer    INT IDENTITY (1,1) NOT NULL ,
	lastname      VARCHAR (50) NOT NULL ,
	firstname     VARCHAR (50) NOT NULL ,
	mail          VARCHAR (255) NOT NULL ,
	phoneNumber   VARCHAR (10) NOT NULL ,
	budget        INT  NOT NULL  ,
	CONSTRAINT af458_customers_PK PRIMARY KEY (idCustomer)
);


/*------------------------------------------------------------
-- Table: af458_appointments
------------------------------------------------------------*/
CREATE TABLE af458_appointments(
	idAppointment   INT IDENTITY (1,1) NOT NULL ,
	dateHour        DATETIME  NOT NULL ,
	subject         TEXT  NOT NULL  ,
	CONSTRAINT af458_appointments_PK PRIMARY KEY (idAppointment)
);



