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
	animal_id INT PRIMARY KEY AUTO_INCREMENT,
    animal_nome VARCHAR(30) NOT NULL,
    animal_sexo CHAR(1) NOT NULL,
    animal_idade TINYINT NOT NULL,
    especie_id INT NOT NULL,
    localizacao_id INT NOT NULL,
    FOREIGN KEY (especie_id) REFERENCES especies(especie_id),
    FOREIGN KEY (localizacao_id) REFERENCES localizacao(localizacao_id)
)ENGINE=InnoDB;