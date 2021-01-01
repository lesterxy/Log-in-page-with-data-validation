# Log-in-page-with-data-validation
Log-in page with data validation  


This website has been prepared using the following technology stack

 - HTML
 - CSS
 - Javascript
 
The website opens up as a log-in page where email and password can be entered using HTML forms and styledusing CSS. 
The entered information is validated as below using javascript with regex functionality
  1. email and password is not blank
  2. email has character "@" to be considered valid 
  3. not less than 8 characters
  4. starts with a letter
  5. length is between 8~14 characters

If triggered,
Error message is shown by modifying the innerText and padding style of <div> dedicated for error message. 

If criteria has been met successfully, the user is redirected to a page indicate log in successful
