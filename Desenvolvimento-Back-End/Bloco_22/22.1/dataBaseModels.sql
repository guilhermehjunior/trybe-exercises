CREATE DATABASE IF NOT EXISTS zoo;

USE zoo;

CREATE TABLE gerentes(
	gerente_id INT PRIMARY KEY AUTO_INCREMENT,
    gerente_nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE especies(
	especie_id INT PRIMARY KEY AUTO_INCREMENT,
    especie_nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE localizacao(
	localizacao_id INT PRIMARY KEY AUTO_INCREMENT,
    localizacao_nome VARCHAR(50) NOT NULL
) ENGINE=InnoDB;

CREATE TABLE cuidadores(
	cuidador_id INT PRIMARY KEY AUTO_INCREMENT,
    cuidador_nome VARCHAR(50) NOT NULL,
    gerente_id INT NOT NULL,
    FOREIGN KEY (gerente_id) REFERENCES gerentes(gerente_id)
) ENGINE=InnoDB;

CREATE TABLE animais(
)ENGINE=InnoDB;