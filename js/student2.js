// $(document).ready(function(){
// 	showAll();
// });

function formValidate(){
	var studentName = document.forms.registrationDetails.studentName.value;
	var courses = document.forms.registrationDetails.courses.value;
    var contact = document.forms.registrationDetails.contact.value;
    var email = document.forms.registrationDetails.email.value;
	var message = document.forms.registrationDetails.message.value;

	if (studentName =="") {
        alert("Please key in your name.")
        studentName.focus();
		e.preventdefault()
        return false;
    } else if (courses == "") {
        alert("Please make a course selection.")
        courses.focus();
        return false;
    } else if (contact == undefined) {
        alert("Please key in your phone number.")
        contact.focus();
        return false;
    } else if (email == "") {
        alert("Please key in your email address")
        email.focus();
        return false;
    } else {
		var detail = JSON.stringify([courses, contact, email, message]);
		localStorage.setItem(studentName, detail);
    	return true;
	}
}


// function isValidpetName(petName, minLen, maxLen) {
//     var petNameLength = petName.value.length;
//     if (petNameLength == 0 || petNameLength > maxLen || petNameLength < minLen) { // || - Or operator
//         alert("User Name should not be empty / length must be between " + minLen + " to " + maxLen);
//         petName.focus();
//         return false;
//     } else if (!isAlpha(petName)) {        //! - Not operator
//         alert("Enter alphabets only");
//         petName.focus();
//         return false;
//     }
//     return true;
// }

// function isValidEmail(email) {
//     var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//     if (email.value.match(mailformat)) {
//         return true;
//     }
//     else {
//         alert("Enter valid email address!");
//         email.focus();
//         return false;
//     }
// }
// function isValidContact(contact, len) {
//     var contactLength = contact.value.length;
//     if (contactLength == 0 || contactLength != len) {
//         alert("Contact should not be empty / length must be " + len);
//         contact.focus();
//         return false;
//     } else if (!isNumber(contact)) {
//         alert("Enter Numbers only");
//         contact.focus();
//         return false;
//     }
//     return true;
// }
// function isAlpha(input) {
//     var characters = /^[A-Za-z]+$/; // Regular Expression [ ] - Options , A-Z - A,B, C ... Z, ^ - Any 
//     if (input.value.match(characters)) {
//         return true;
//     }
//     return false;
// }
// function isNumber(input) {
//     var characters = /^[0-9{8}]+$/;
//     if (input.value.match(characters)) {
//         return true;
//     }
//     return false;
// }
// function isAlphaNumeric(input) {
//     var characters = /^[0-9A-Za-z]+$/;
//     if (input.value.match(characters)) {
//         return true;
//     }
//     return false;
// }

function addRegistrant() {
	var studentName = document.forms.registrationDetails.student_name.value;
	var courses = document.forms.registrationDetails.courses.value;
    var contact = document.forms.registrationDetails.contact.value;
    var email = document.forms.registrationDetails.email.value;
	var message = document.forms.registrationDetails.message.value;
	const detail = JSON.stringify([courses, contact, email, message]);
	localStorage.setItem(studentName, detail);
	showAll();
}
function editRegistrant() {
	var studentName  = document.forms.registrationDetails.student_name.value;
    let data = JSON.parse(localStorage.getItem(studentName));
	document.forms.registrationDetails.courses.value = data[0]
    document.forms.registrationDetails.contact.value = data[1]
    document.forms.registrationDetails.email.value = data[2]
    document.forms.registrationDetails.message.value = data[3];
}
function deleteRegistrant() {
	var studentName = document.forms.registrationDetails.student_name.value;
	localStorage.removeItem(studentName);
	showAll();
	document.forms.registrationDetails.student_name.value = null;
	document.forms.registrationDetails.courses.value = null;
	document.forms.registrationDetails.email.value = null;
	document.forms.registrationDetails.contact.value = null;
	document.forms.registrationDetails.message.value = null;
}
function clearAll() {
	localStorage.clear();
	showAll();
	document.forms.registrationDetails.student_name.value = null;
	document.forms.registrationDetails.courses.value = null;
	document.forms.registrationDetails.email.value = null;
	document.forms.registrationDetails.contact.value = null;
	document.forms.registrationDetails.message.value = null;
}

function showAll() {

		var key = "";
		var list = "<tr><th>Student Name</th><th>Courses</th><th>Contact</th><th>Email</th><th>Enquiry</th></tr>\n";
		var i = 0;

		if (localStorage.length == 0) {
			list += "<tr><td><i>empty</i></td><td><i>empty</i></td><td><i>empty</i></td><td><i>empty</i></td><td><i>empty</i></td></tr>\n";
		  } else {
			for (i = 0; i < localStorage.length; i++) {

			  key = localStorage.key(i);
			  let data = JSON.parse(localStorage.getItem(key));

			  list += "<tr><td>" + key + "</td>\n<td>" +
				data[0] + "</td>\n<td>" + data[1] + "</td>\n<td>" + data[2] + "</td>\n<td>" + data[3] + "</td></tr>\n";

			}
		}
		document.getElementById('list').innerHTML = list;
}
