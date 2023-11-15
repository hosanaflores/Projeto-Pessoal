CREATE DATABASE Restaurante;

USE Restaurante;

CREATE TABLE Restaurante (
idRestaurante INT PRIMARY KEY AUTO_INCREMENT,
cnpj CHAR(14),
telefone VARCHAR(15),
nomeFantasia VARCHAR(40),
razaoSocial VARCHAR(45),
email VARCHAR(30),
senha VARCHAR (10),
tipo VARCHAR(30)
);



SELECT * FROM Restaurante;

