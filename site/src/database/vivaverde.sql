CREATE DATABASE Restaurante;
USE Restaurante;

CREATE TABLE Restaurante (
idRestaurante INT PRIMARY KEY AUTO_INCREMENT,
cnpj CHAR(14) UNIQUE,
telefone VARCHAR(15),
nomeFantasia VARCHAR(40),
razaoSocial VARCHAR(75) UNIQUE,
email VARCHAR(30) UNIQUE,
senha VARCHAR (10),
tipo VARCHAR(30)
);

CREATE TABLE Cardapio (
idCardapio INT PRIMARY KEY AUTO_INCREMENT,
fkRestaurante INT, 
CONSTRAINT consfkRes FOREIGN KEY (fkRestaurante) REFERENCES Restaurante (idRestaurante),
nome VARCHAR(20)
);

CREATE TABLE Pratos (
idPrato INT PRIMARY KEY AUTO_INCREMENT,
fkCardapio INT, 
CONSTRAINT consfkCar FOREIGN KEY (fkCardapio) REFERENCES Cardapio (idCardapio),
nomePrato VARCHAR(45),
tipo VARCHAR(30),
preco DECIMAL(5,2)
);

CREATE TABLE Endereco (
idEndereco INT PRIMARY KEY AUTO_INCREMENT,
fkRestaurante INT, 
CONSTRAINT consfkResEnd FOREIGN KEY (fkRestaurante) REFERENCES Restaurante (idRestaurante),
cep CHAR(8),
rua VARCHAR(45),
bairro VARCHAR(45),
cidade VARCHAR(45),
estado CHAR(2)
);

	SELECT * FROM Restaurante;
	SELECT * FROM Cardapio;
	SELECT * FROM Pratos;
	SELECT * FROM Endereco;

    SELECT Cardapio.nome FROM Restaurante 
			JOIN Cardapio
            ON fkRestaurante = idRestaurante;
            
            SELECT Cardapio.nome FROM Restaurante 
			JOIN Cardapio
            ON fkRestaurante = idRestaurante
            WHERE idCardapio = 3;
    
    SELECT Cardapio.fkRestaurante, Cardapio.nome, Pratos.nomePrato, Pratos.tipo, Pratos.preco FROM Pratos
    JOIN Cardapio 
    ON fkCardapio = idCardapio;
    
    
    SELECT Pratos.nomePrato, Pratos.tipo, Pratos.preco FROM Pratos
    JOIN Cardapio 
    ON fkCardapio = idCardapio;
    
    SELECT * FROM Endereco JOIN Restaurante ON fkRestaurante = idRestaurante;
    
    SELECT Restaurante.nomeFantasia, Endereco.idEndereco, Endereco.cep, Endereco.rua, Endereco.bairro, Endereco.cidade, Endereco.estado FROM Restaurante LEFT JOIN Endereco
        ON idRestaurante = fkRestaurante;
        
        
	SELECT Restaurante.tipo FROM Restaurante;
	SELECT * FROM Restaurante;
    SELeCT * FROM Endereco;
    SELECT * FROM Pratos;
    
    
    SELECT COUNT(idRestaurante) FROM Restaurante;
    SELECT COUNT(idPrato) FROM Pratos;
    SELECT SUM(preco) FROM Pratos;
    SELECT AVG(preco) FROM Pratos;
    SELECT MIN(preco) FROM Pratos;
    SELECT MAX(preco) FROM Pratos;
    SELECT DISTINCT(preco) FROM Pratos;
    SELECT  COUNT(tipo) FROM Pratos;
    SELECT DISTINCT (tipo) FROM Restaurante;
    SELECT COUNT(tipo) FROM Restaurante;
    
    
    /*SELECT PARA GRÁFICO DE PREÇO*/
   SELECT MIN(preco) AS precoMinimo, MAX(preco) AS precoMaximo, ROUND(AVG(preco),2) AS precoMedio FROM Pratos;
    
    /*SELECT DO TIPO DE PRATOS (GRÁFICOS)*/
    SELECT COUNT(tipo) AS QuantidadeTipos, tipo AS nomeTipo FROM Pratos
		GROUP BY tipo;
    
    -- MÉTRICAS PARA DASHBOARD
    /*QUANTOS RESTAURANTES VEGETARIANOS EXISTEM CADASTRADOS*/
    SELECT COUNT(tipo) FROM Restaurante 
		WHERE tipo = 'vegetariano';
        
	SELECT COUNT(tipo) FROM Restaurante
		WHERE tipo = "vegano";
        
	SELECT COUNT(tipo) FROM Restaurante
		WHERE tipo = "misto";
        
        
        /*QUANTOS PRATOS SÃO LACTOVEGETARIANO, OVOVEGETAGRIANO, ETC*/
        SELECT COUNT(tipo) FROM Pratos
			WHERE tipo = "ovolactovegetariano";
            
             SELECT COUNT(tipo) FROM Pratos
			WHERE tipo = "ovovegetarianos";
            
           SELECT COUNT(tipo) FROM Pratos
			WHERE tipo = "lactovegetarianos";
            
            SELECT COUNT(tipo) FROM Pratos
			WHERE tipo = "vegetarianocrudivoros";
            
            SELECT COUNT(tipo) FROM Pratos
			WHERE tipo = "vegetarianofrugivoros";
            
            SELECT COUNT(tipo) FROM Pratos
			WHERE tipo = "vegetarianorestrito";
            
            SELECT COUNT(tipo) FROM Pratos
			WHERE tipo = "vegano";
            
            

            SELECT * FROM Restaurante;
            
        
	/*COM GROUP BY MOSTRA TODOS*/
	SELECT tipo, COUNT(tipo) FROM Restaurante
		GROUP BY tipo;
    
  /*Quantidade de tipos de pratos*/
    SELECT tipo, COUNT(tipo) FROM Pratos
		GROUP BY tipo;
        
        
        create user 'vivaverde'@'localhost' identified by 'vivaverde';

		grant all privileges on restaurante.* to 'vivaverde'@'localhost';

		flush privileges;
    
