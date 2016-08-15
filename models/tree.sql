-- MySQL Script generated by MySQL Workbench
-- 08/15/16 02:20:48
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema tree
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema tree
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `tree` DEFAULT CHARACTER SET utf8 ;
USE `tree` ;

-- -----------------------------------------------------
-- Table `tree`.`state`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tree`.`state` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(71) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tree`.`city`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tree`.`city` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(71) NOT NULL,
  `state_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_city_state_idx` (`state_id` ASC),
  CONSTRAINT `fk_city_state`
    FOREIGN KEY (`state_id`)
    REFERENCES `tree`.`state` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tree`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tree`.`user` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(23) NULL,
  `last_name` VARCHAR(23) NULL,
  `biography` VARCHAR(127) NULL,
  `email` VARCHAR(47) NOT NULL,
  `email_token` VARCHAR(47) NULL,
  `birthday` DATE NULL,
  `create_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `state_id` INT UNSIGNED NOT NULL,
  `city_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_user_state1_idx` (`state_id` ASC),
  INDEX `fk_user_city1_idx` (`city_id` ASC),
  CONSTRAINT `fk_user_state1`
    FOREIGN KEY (`state_id`)
    REFERENCES `tree`.`state` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_city1`
    FOREIGN KEY (`city_id`)
    REFERENCES `tree`.`city` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tree`.`account`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tree`.`account` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `username` VARCHAR(23) NOT NULL,
  `access_token` VARCHAR(47) NULL,
  `password` VARCHAR(47) NOT NULL,
  `password_token` VARCHAR(47) NULL,
  `role` ENUM('admin', 'user') NOT NULL DEFAULT 'user',
  `name_photo` VARCHAR(71) NOT NULL,
  `path_photo` VARCHAR(101) NOT NULL,
  `create_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `user_id` INT UNSIGNED NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_account_user1_idx` (`user_id` ASC),
  CONSTRAINT `fk_account_user1`
    FOREIGN KEY (`user_id`)
    REFERENCES `tree`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tree`.`amount`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tree`.`amount` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(47) NOT NULL,
  `number` INT NOT NULL,
  `create_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tree`.`ticket`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tree`.`ticket` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `description` VARCHAR(127) NULL,
  `amount` FLOAT(14,2) NOT NULL,
  `status_id` ENUM('1', '2') NOT NULL DEFAULT '2',
  `ip` VARCHAR(15) NOT NULL,
  `create_at` TIMESTAMP NULL,
  `ticketcol` VARCHAR(45) NULL DEFAULT 'CURRENT_TIMESTAMP',
  `account_id` INT UNSIGNED NOT NULL,
  `amount_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_ticket_account1_idx` (`account_id` ASC),
  INDEX `fk_ticket_amount1_idx` (`amount_id` ASC),
  CONSTRAINT `fk_ticket_account1`
    FOREIGN KEY (`account_id`)
    REFERENCES `tree`.`account` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_ticket_amount1`
    FOREIGN KEY (`amount_id`)
    REFERENCES `tree`.`amount` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tree`.`responsecode`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tree`.`responsecode` (
  `id` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
  `motivo` VARCHAR(23) NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tree`.`response`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tree`.`response` (
  `id` INT UNSIGNED NOT NULL,
  `success` ENUM('true', 'false') NULL,
  `message` VARCHAR(211) NULL,
  `code` VARCHAR(3) NULL,
  `reference` VARCHAR(7) NULL,
  `voucher` BLOB NULL,
  `ordernumber` INT NULL,
  `sequence` VARCHAR(13) NULL,
  `approval` VARCHAR(7) NULL,
  `lote` VARCHAR(3) NULL,
  `deferred` ENUM('true', 'false') NULL,
  `datetime` TIMESTAMP NULL,
  `amount` FLOAT(14,2) NULL,
  `responsecode_id` TINYINT UNSIGNED NOT NULL,
  `ticket_id` INT UNSIGNED NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `fk_response_responsecode1_idx` (`responsecode_id` ASC),
  INDEX `fk_response_ticket1_idx` (`ticket_id` ASC),
  CONSTRAINT `fk_response_responsecode1`
    FOREIGN KEY (`responsecode_id`)
    REFERENCES `tree`.`responsecode` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_response_ticket1`
    FOREIGN KEY (`ticket_id`)
    REFERENCES `tree`.`ticket` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tree`.`bill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tree`.`bill` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `account_id` INT UNSIGNED NOT NULL,
  `ticket_id` INT UNSIGNED NOT NULL,
  `amount_id` INT UNSIGNED NOT NULL,
  `create_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `fk_bill_account1_idx` (`account_id` ASC),
  INDEX `fk_bill_ticket1_idx` (`ticket_id` ASC),
  INDEX `fk_bill_amount1_idx` (`amount_id` ASC),
  CONSTRAINT `fk_bill_account1`
    FOREIGN KEY (`account_id`)
    REFERENCES `tree`.`account` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_bill_ticket1`
    FOREIGN KEY (`ticket_id`)
    REFERENCES `tree`.`ticket` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_bill_amount1`
    FOREIGN KEY (`amount_id`)
    REFERENCES `tree`.`amount` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tree`.`bill_has_bill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tree`.`bill_has_bill` (
  `ancestor` INT UNSIGNED NOT NULL,
  `descendant` INT UNSIGNED NOT NULL,
  `length` INT NOT NULL,
  PRIMARY KEY (`ancestor`, `descendant`),
  INDEX `fk_bill_has_bill_bill2_idx` (`descendant` ASC),
  INDEX `fk_bill_has_bill_bill1_idx` (`ancestor` ASC),
  CONSTRAINT `fk_bill_has_bill_bill1`
    FOREIGN KEY (`ancestor`)
    REFERENCES `tree`.`bill` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_bill_has_bill_bill2`
    FOREIGN KEY (`descendant`)
    REFERENCES `tree`.`bill` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tree`.`documents`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tree`.`documents` (
  `id` INT NOT NULL,
  `name` VARCHAR(71) NOT NULL,
  `path` VARCHAR(101) NOT NULL,
  `create_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tree`.`Advertisements`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tree`.`Advertisements` (
  `id` INT NOT NULL,
  `name` VARCHAR(71) NOT NULL,
  `content` VARCHAR(257) NOT NULL,
  `create_at` VARCHAR(45) NULL DEFAULT 'CURRENT_TIMESTAMP',
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tree`.`static`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tree`.`static` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(127) NOT NULL,
  `content` TEXT NOT NULL,
  `create_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `tree`.`article`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `tree`.`article` (
  `id` INT NOT NULL,
  `name` VARCHAR(127) NOT NULL,
  `content` TEXT NOT NULL,
  `name_photo` VARCHAR(71) NULL,
  `path_photo` VARCHAR(101) NULL,
  `create_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  `update_at` TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
