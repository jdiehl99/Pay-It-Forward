USE payForward_db;

INSERT INTO user_table(first_name,last_name,email,loan_amt,user_story,user_img,created) VALUES
("Jason","Navarro","xxxx",400.00,"story","link to image","2017-10-08 16:15:00");

INSERT INTO donor_table(first_name,last_name,email,anonymous, created) VALUES
("Billy","Scarpelli","xxxx",true,"2017-10-09 13:15:00");
INSERT INTO donor_table(first_name,last_name,email,anonymous, created) VALUES
("Jodi","Diehl","xxxx",true,"2017-10-09 13:15:00");

INSERT INTO charity_table(charity_name,overview) VALUES ("Dog Shelter", "LOTS OF STUFF");
INSERT INTO charity_table(charity_name,overview) VALUES ("Charity 2", "LOTS OF STUFF");
INSERT INTO charity_table(charity_name,overview) VALUES ("Charity 3", "LOTS OF STUFF");

INSERT INTO loans_table (userid,donorid,charityid) VALUES (1,2,3);