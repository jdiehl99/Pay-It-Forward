DROP DATABASE IF EXISTS payForward_db;
CREATE DATABASE payForward_db;

USE payForward_db;

CREATE TABLE `charity_table` ( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`charity_name` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
	`overview` LongText CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
	`createdAt` Timestamp NULL DEFAULT CURRENT_TIMESTAMP,
	`hours_needed` Int( 11 ) NULL,
	`charity_img` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
	PRIMARY KEY ( `id` ) );

CREATE TABLE `donors_table` ( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`first_name` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
	`last_name` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
	`email` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
	`anonymous` TinyInt( 1 ) NULL DEFAULT '0',
	`createdAt` Timestamp NULL DEFAULT CURRENT_TIMESTAMP,
	`people_helped` Int( 11 ) NULL,
	`total_money` Float( 10, 2 ) NULL,
	`ratings` Int( 11 ) NULL,
	PRIMARY KEY ( `id` ) );

CREATE TABLE `loans_table` ( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`userid` Int( 11 ) NULL,
	`donorid` Int( 11 ) NULL,
	`charityid` Int( 11 ) NULL,
	`completed` Date NULL,
	`createdAt` Timestamp NULL DEFAULT CURRENT_TIMESTAMP,
	PRIMARY KEY ( `id` ) );


CREATE TABLE `user_table` ( 
	`id` Int( 11 ) AUTO_INCREMENT NOT NULL,
	`first_name` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
	`last_name` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
	`email` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
	`loan_amt` Float( 5, 2 ) NOT NULL,
	`user_story` LongText CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
	`user_img` VarChar( 255 ) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
	`created` DateTime NOT NULL,
	`createdAt` Timestamp NULL DEFAULT CURRENT_TIMESTAMP,
	`hours_worked` Int( 11 ) NULL,
	`hours_needed` Int( 11 ) NULL,
	`ratings` Int( 5 ) NULL,
	PRIMARY KEY ( `id` ) );

