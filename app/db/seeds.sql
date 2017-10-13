USE payForward_db;

INSERT INTO `charity_table`(`id`,`charity_name`,`overview`,`createdAt`,`hours_needed`,`charity_img`) VALUES ( '1', 'Pet Rescue by Judy', 'Cleaning dog cages, bathing dogs, greeting potential familiars, filing paperwork, must be able to lift 40lbs and stand for several hours at a time.', '2017-10-11 10:23:00', '10', 'https://s3.amazonaws.com/imagesroot.rescuegroups.org/logos/s1023logo20141008144249.jpg' );
INSERT INTO `charity_table`(`id`,`charity_name`,`overview`,`createdAt`,`hours_needed`,`charity_img`) VALUES ( '2', 'Second Harvest Food Bank', 'Sorting food that has been donated by local vendors into categories to be distributed to needy families in the Central Florida area.  Must be able to lift up to 10lbs and stand for several hours at a time.', '2017-10-09 13:15:00', '25', 'http://www.feedhopenow.org/images/content/pagebuilder/logo_shfbcf_full.gif' );
INSERT INTO `charity_table`(`id`,`charity_name`,`overview`,`createdAt`,`hours_needed`,`charity_img`) VALUES ( '3', 'Boys and Girls Club', ' Help with homework, coach sporting games, teach art projects.', '2017-10-10 14:23:58', '15', 'https://www.bgca.org/-/media/bgca_logo.svg?la=en&hash=A79D08FCB91CBEB8768118FB8256780183470089' );
INSERT INTO `charity_table`(`id`,`charity_name`,`overview`,`createdAt`,`hours_needed`,`charity_img`) VALUES ( '4', 'Salvation Army Orlando', 'Sit at Angel Tree desk, assists with the selection of angels, records donor information, angels taken and returned, four hour shifts from 10am to 10pm, receive angel gifts and transfer them to secure area.', '2017-10-08 11:12:00', '40', 'http://salvationarmyorlando.org/wp-content/themes/thqtemplate/images/orlando-logo.png' );
INSERT INTO `charity_table`(`id`,`charity_name`,`overview`,`createdAt`,`hours_needed`,`charity_img`) VALUES ( '5', 'Pet Alliance of Greater Orlando', 'Dogs in the shelter need friends to talk with and to take them to the Exercise Yard for a good game of "toss-the- ball-over- and-over-again." In addition, some dogs need help with their manners, and volunteers may help teach them basic commands. Aside from exercising, Bark Buddies perform a vital customer service role as they assist potential adopters. The work can be very hot, dirty, and physical, but it is very rewarding when you see a dog go to their forever home!', '2017-10-11 15:14:42', '15', 'https://media2.fdncms.com/orlando/imager/u/slideshow/2419505/pago.jpg' );
INSERT INTO `charity_table`(`id`,`charity_name`,`overview`,`createdAt`,`hours_needed`,`charity_img`) VALUES ( '6', 'Down Syndrome Association of Central Florida', 'DSACF WANTS YOU... to help us out in the office! Talk with new parents, prepare for programs, and get connected to your Central Florida Down Syndrome family! Sign up for whole or half days M-F 9-5.', '2017-10-07 09:24:12', '20', 'https://static1.squarespace.com/static/57c705d2bebafb286be9d66d/t/57c70739ff7c504a07c822fe/1507655778842/?format=1500w' );


INSERT INTO `donors_table`(`id`,`first_name`,`last_name`,`email`,`anonymous`,`createdAt`,`people_helped`,`total_money`,`ratings`) VALUES ( '2', 'Jodi', 'Diehl', 'none@gmail.com', '1', '2017-10-10 14:23:58', '22', '7500.00', '5' );


INSERT INTO `loans_table`(`id`,`userid`,`donorid`,`charityid`,`completed`,`createdAt`) VALUES ( '1', '2', '3', '1', NULL, '2017-10-10 14:23:58' );
INSERT INTO `loans_table`(`id`,`userid`,`donorid`,`charityid`,`completed`,`createdAt`) VALUES ( '2', '3', '1', '2', NULL, '2017-10-10 14:23:58' );
INSERT INTO `loans_table`(`id`,`userid`,`donorid`,`charityid`,`completed`,`createdAt`) VALUES ( '3', '1', '2', '3', NULL, '2017-10-10 14:23:58' );


INSERT INTO `user_table`(`id`,`first_name`,`last_name`,`email`,`loan_amt`,`user_story`,`user_img`,`createdAt`,`hours_worked`,`hours_needed`,`ratings`) VALUES ( '1', 'Bob', 'Gregor', 'Bob@google.com', '900.00', 'Boston!  I\'m heading to Boston and I could really use some boots and probably a jacket. Some mittens would be nice.  And a sweater for my cat.', 'https://aqueous-fjord-24224.herokuapp.com/assets/img/bob.jpg', '2017-10-11 17:08:34', '15', '5', '5' );
INSERT INTO `user_table`(`id`,`first_name`,`last_name`,`email`,`loan_amt`,`user_story`,`user_img`,`createdAt`,`hours_worked`,`hours_needed`,`ratings`) VALUES ( '2', 'Martha and Jerry', 'Banik', 'banik@google.com', '250.00', 'We are asking for support in order to buy a new television.  Ours recently quit working and it was very old.  Jerry really enjoys watching Wheel of Fortune every night.  We love animals and would like to work with dogs or cats for our service hours.  Thank you for reading this.', 'https://aqueous-fjord-24224.herokuapp.com/assets/img/MarthaJerry.jpg', '2017-10-11 17:05:06', '4', '11', '5' );
INSERT INTO `user_table`(`id`,`first_name`,`last_name`,`email`,`loan_amt`,`user_story`,`user_img`,`createdAt`,`hours_worked`,`hours_needed`,`ratings`) VALUES ( '3', 'Mark', 'Lee', 'chen@google.com', '150.00', 'Hi, I’m Mark and I have an amazing opportunity to study abroad for a year.  I am just short of reaching my goal and am asking for your help.  Please consider supporting me.  In exchange, I would volunteer my time at a place where I can help children.', 'https://aqueous-fjord-24224.herokuapp.com/assets/img/MarkLee.jpg', '2017-10-11 16:37:10', '5', '10', '5' );
INSERT INTO `user_table`(`id`,`first_name`,`last_name`,`email`,`loan_amt`,`user_story`,`user_img`,`createdAt`,`hours_worked`,`hours_needed`,`ratings`) VALUES ( '4', 'George', 'Jenkins', 'jenks@google.com', '750.00', 'I thank you for taking the time to read my profile.  I am asking for some money to update the kitchen for my wife.  It will be a surprise for her.  She has been asking for a long time to get a new stove and dishwasher and I just have not been able to save enough.  She is a great cook and I know how happy she will be if I can make this happen.  I appreciate your help and thank you in advance.', 'https://aqueous-fjord-24224.herokuapp.com/assets/img/GeorgeJenkins.jpg', '2017-10-11 16:59:33', '25', '10', '5' );
INSERT INTO `user_table`(`id`,`first_name`,`last_name`,`email`,`loan_amt`,`user_story`,`user_img`,`createdAt`,`hours_worked`,`hours_needed`,`ratings`) VALUES ( '5', 'Susan', 'Reynolds', 'sreynolds@google.com', '500.00', 'My request is for some money so I can buy a scooter to get around campus.  I am a second year college student and some of my classes are too far to walk from my dorm and I have one that is late at night so getting a ride can be challenging. ', 'https://aqueous-fjord-24224.herokuapp.com/assets/img/SusanReynolds.jpg', '2017-10-11 16:33:05', '10', '15', '4' );
INSERT INTO `user_table`(`id`,`first_name`,`last_name`,`email`,`loan_amt`,`user_story`,`user_img`,`createdAt`,`hours_worked`,`hours_needed`,`ratings`) VALUES ( '6', 'Ruth', 'Schneider', 'ruth@google.com', '275.00', 'My name is Ruth.  I just moved into an assisted living facility and need to get a few things to make the place feel like my own.  I would like to get a rug and some curtains and some new decorations for the bathroom.  Thank you.', 'https://aqueous-fjord-24224.herokuapp.com/assets/img/RuthSchneider.jpg', '2017-10-11 17:01:56', '3', '7', '4' );
