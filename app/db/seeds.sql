USE payForward_db;

INSERT INTO user_table(first_name,last_name,email,loan_amt,user_story,user_img,created) VALUES
("Jason","Navarro","xxxx",400.00,"story","link to image","2017-10-08 16:15:01");
INSERT INTO user_table(first_name,last_name,email,loan_amt,user_story,user_img,created) VALUES
("Donald","Duck","xxxx",500.00,"story2","link to image","2017-10-09 16:15:02");
INSERT INTO user_table(first_name,last_name,email,loan_amt,user_story,user_img,created) VALUES
("Bruce","Wayne","xxxx",600.00,"story3","link to image","2017-10-10 16:15:03");

INSERT INTO donors_table(first_name,last_name,email,anonymous, created) VALUES
("Billy","Scarpelli","1xxx",true,"2017-10-09 13:15:01");
INSERT INTO donors_table(first_name,last_name,email,anonymous, created) VALUES
("Jodi","Diehl","2xxx",true,"2017-10-09 13:15:02");
INSERT INTO donors_table(first_name,last_name,email,anonymous, created) VALUES
("Mario","Pepe","3xxx",true,"2017-10-03 13:15:03");

INSERT INTO charity_table(charity_name,overview) VALUES ("Charity 1", "LOTS OF STUFF1");
INSERT INTO charity_table(charity_name,overview) VALUES ("Charity 2", "LOTS OF STUFF2");
INSERT INTO charity_table(charity_name,overview) VALUES ("Charity 3", "LOTS OF STUFF3");

INSERT INTO loans_table (userid,donorid,charityid) VALUES (2,3,1);
INSERT INTO loans_table (userid,donorid,charityid) VALUES (3,1,2);
INSERT INTO loans_table (userid,donorid,charityid) VALUES (1,2,3);