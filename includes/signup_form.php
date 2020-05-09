<?php
	require 'config.php';
	
	if ($_SERVER["REQUEST_METHOD"] == "POST") {

		//if sign up form submits
		if(isset($_POST['submit'])) {

			//store all input data into these variables
			$fname = mysqli_real_escape_string($conn,$_POST['fname']);
			$lname = mysqli_real_escape_string($conn,$_POST['lname']);
			$phone = mysqli_real_escape_string($conn,$_POST['phone']);
			$email = mysqli_real_escape_string($conn,$_POST['email']);
			$experience = mysqli_real_escape_string($conn,$_POST['radios']);
			$experienceArray = array('Beginner / No Experience', '1-2 years', '3-5 years', '5-9 years', '10+ years');
			$role = mysqli_real_escape_string($conn,$_POST['gwc_role']);
			$roleArray = array('Student', 'Volunteer', 'Guest Speaker');
			$languages = mysqli_real_escape_string($conn,$_POST['languages']);
			$referral_msg = mysqli_real_escape_string($conn,$_POST['referral_msg']);
			$impact_msg = mysqli_real_escape_string($conn, $_POST['impact_msg']);
			$profile_msg = mysqli_real_escape_string($conn,$_POST['profile_msg']);
			$github_link = mysqli_real_escape_string($conn, $_POST['github_link']);
			$linkedin_link = mysqli_real_escape_string($conn,$_POST['linkedin_link']);

		

			//Sanitize the form data
			function cleanString($x){

				$x = filter_var($x, FILTER_SANITIZE_STRING);
				$x = html_entity_decode($x, ENT_QUOTES, "utf-8");
				return $x;

			}

			function cleanEmail($y) {

				$y = filter_var($y, FILTER_SANITIZE_EMAIL);
				htmlentities($y, ENT_QUOTES, 'utf-8');
				htmlspecialchars($y);

				return $y;

			}

			function cleanNumber($z) {

				$z = filter_var($z, FILTER_SANITIZE_NUMBER_INT);
				htmlentities($z, ENT_QUOTES, 'utf-8');
				htmlspecialchars($z);

				return $z;

			}

			function cleanDropDownList($select, $selectArray) {
				if($select != "" && $select != ' -Please Select- ') {
					if (in_array($select, $selectArray)) {
						htmlspecialchars($select);
						htmlentities($select, ENT_QUOTES, 'utf-8');
						htmlspecialchars($select);

						return $select;
					} 
				}
			}

			function cleanLink($link) {
				$link = filter_var($link, FILTER_SANITIZE_URL);
				$link = strip_tags($link);
				return $link;
			}

			function cleanMessage($msg) {
				$msg = urldecode($msg);
				$msg = filter_var($msg, FILTER_SANITIZE_STRING);
				$msg = filter_var($msg, FILTER_SANITIZE_SPECIAL_CHARS);

				htmlspecialchars($msg);

				return $msg;
			}

			//call function to sanitize string and escape the input.
			$fname = cleanString($fname);
			$lname = cleanString($lname);
			$email = cleanEmail($email);
			$phone = cleanNumber($phone);
			$role = cleanDropDownList($role, $roleArray);
			$github_link = cleanLink($github_link);
			$linkedin_link = cleanLink($linkedin_link);

			//insert into database
			$sql = "INSERT INTO `user` (fName, lName, email, phone, gwc_role, github, linkedin) VALUES ('$fname', '$lname', '$email', '$phone', '$role', '$github_link', '$linkedin_link')";
			

			if ($conn->query($sql) === TRUE) {
				header('Location: redirect.php');
			} else {
				echo "Something went wrong.";
				echo "Error: " . $sql . "<br>" . $conn->error;
			}

			/*SENDING EMAIL
			//Enable error reporting if form fails to submit
			$to = "natashashanae@live.com";
			$headers = "From: ".$email;
			$subject = 'GWC Registration Form';

			$message = "Name: ".$fname $lname."\n".
					   "Email: ".$email."\n".
					   "Phone: ".$phone."\n".
					   "Github: ".$github_link."\n".
					   "LinkedIn: ".$linkedin_link."\n\n".

					   "Wrote the following: "."\n\n".

					   "Role Applied For: ".$role."\n". 
					   "Programming Languages: ".$languages."\n". 
					   "Experience: ".$experience."\n\n".

					   "How did you hear about GWC Baltimore? "."$referral_msg"."\n\n". 
					   "What impact do you hope you would have on yourself or your community? "."$impact_msg"."\n\n".
					   "Anything else you'd like to share about yourself? "."$profile_msg"."\n\n".;

			if ($conn->query($sql) === TRUE && mail($to, $subject, $message, $headers)) {
				echo "<h1>Sent Successfully! We will contact you shortly!</h1>";
			} else {
				echo "Something went wrong.";
				echo "Error: " . $sql . "<br>" . $conn->error;
			}

			*/

			mysqli_close($conn);
		}
	
	}
?>