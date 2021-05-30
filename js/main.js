var curyear = new Date().getFullYear();
	var curmonth = new Date().getMonth() + 1;    //as new Date().getMonth() start from 0.
	var curmonthdate = new Date().getDate();

	curmonth < 10 ? curmonth = "0" + curmonth : curmonth;
	curmonthdate < 10 ? curmonthdate = "0" + curmonthdate : curmonthdate;

	var today = curyear + "-" + curmonth + "-" + curmonthdate;       //to set default value of input type of date.
	//document.getElementById("birthdate_id").value = today;   //here we will get error as "Uncaught TypeError: Cannot set property 'value' of null" ...as at this position during execution of code html tag with ID "birthdate_id" is not exist yet..SOLUTION is:- write this script at end after HTML code OR write above code in one function and call thus function on onload of body.


	function submitfun() {

		/* 	console.log(birthdate);
			console.log(new Date(birthdate));
			console.log(new Date());
			
			var today = new Date();
			var diffDays = (today - new Date(birthdate)) / (1000 * 60 * 60 * 24); 
			console.log('Days - '+diffDays )
			
			var today = new Date();	
			var diffDays1 = (today - new Date(birthdate)) / (1000 * 60 * 60 * 24 * 365); 
			var diffDays2 = Math.floor((today - new Date(birthdate)) / (1000 * 60 * 60 * 24 * 365)); 
			var diffDays3 = ((diffDays1 - diffDays2) );
			console.log('Years - '+diffDays1 )	
			console.log('Years - '+diffDays2 )	
			console.log('Years - '+diffDays3 )	 */

		////////////////////////////////////////////////

		var user_birthdate = document.getElementById("birthdate_id").value;

		var birthyear = new Date(user_birthdate).getFullYear();
		var birthmonth = new Date(user_birthdate).getMonth() + 1;
		var birthmonthdate = new Date(user_birthdate).getDate()

		if (isNaN(birthyear) || isNaN(birthmonth) || isNaN(birthmonthdate)) {
			document.getElementById("age-result").innerHTML = "Invalid Birthdate.";
            document.getElementsByClassName("calculator-card__result-box")[0].setAttribute("style", "background: #F6901A;");
		}
		else {
			if (new Date() >= new Date(user_birthdate)) {
				if (curmonth > birthmonth) {
					if (curmonthdate >= birthmonthdate) {
						var yeardiff = (curyear - birthyear);
						var monthdiff = (curmonth - birthmonth);
						var daydiff = (curmonthdate - birthmonthdate);
					}
					if (curmonthdate < birthmonthdate) {
						var yeardiff = (curyear - birthyear);
						var monthdiff = ((curmonth - birthmonth) - 1);
						var daydiff = ((curmonthdate - birthmonthdate) + 31);
					}
				}

				if (curmonth < birthmonth) {
					if (curmonthdate >= birthmonthdate) {
						var yeardiff = ((curyear - birthyear) - 1);
						var monthdiff = ((curmonth - birthmonth) + 12);
						var daydiff = (curmonthdate - birthmonthdate);
					}
					if (curmonthdate < birthmonthdate) {
						var yeardiff = ((curyear - birthyear) - 1);
						var monthdiff = ((curmonth - birthmonth) + 11);
						var daydiff = ((curmonthdate - birthmonthdate) + 31);
					}
				}

				if (curmonth == birthmonth) {
					if (curmonthdate >= birthmonthdate) {
						var yeardiff = ((curyear - birthyear));
						var monthdiff = ((curmonth - birthmonth));
						var daydiff = (curmonthdate - birthmonthdate);
					}
					if (curmonthdate < birthmonthdate) {
						var yeardiff = ((curyear - birthyear) - 1);
						var monthdiff = ((curmonth - birthmonth) + 11);
						var daydiff = ((curmonthdate - birthmonthdate) + 31);
					}
				}
				////////////////////////////////////////////////

				var text_yeardiff = ' You are ' + yeardiff + ' years ';
				if (yeardiff == 1) { text_yeardiff = ' You are ' + yeardiff + ' year '; }
				if (yeardiff == 0 || yeardiff == null) { text_yeardiff = ' You are '; }   //If year is zero then I don't want to print "year" word.
				

				var text_monthdiff = monthdiff + ' months ';
				if (monthdiff == 1) { text_monthdiff = monthdiff + ' month '; }
				if (monthdiff == 0 || monthdiff == null) { text_monthdiff = ''; }    //If month is zero then I don't want to print "month" word.

				var text_daydiff = daydiff + ' days old.'; //for zero also we generally use days on day.
				if (daydiff == 1) { text_daydiff = daydiff + ' day old.'; }
				if (daydiff == null) { text_daydiff = '0 days old'; }

				document.getElementById("age-result").innerHTML = text_yeardiff + text_monthdiff + text_daydiff;
				document.getElementsByClassName("calculator-card__result-box")[0].setAttribute("style", "background: #82bb30;");

			} else {
				document.getElementById("age-result").innerHTML = "The date of birth should be earlier than today's date.";
				document.getElementsByClassName("calculator-card__result-box")[0].setAttribute("style", "background: #F6901A;");
			}
		}
	}