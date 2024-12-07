Improvments that needs no be done in my code.

1. Hardcoded credentials in app.js
   This risk I found thanks to the knowledge I gained from one of the tasks in portswigger, where I saw the issue about hardcoded credentials such as username and password.
   How to fix? I suggest this could be fixed by using environment variables to store data such as Deno-env.

2. CSRF Vulnerability on HTML forms.
   I found this problem in a ZAP scan, register.html and login.html do not include CSRF tokens and may be a vulnerability for CSRF attacks.
   This could be fixed by implementing CSRF tokens middleware.

3. No logging for failed login attempts.
   This I found because of the Linux essentials course that I took earlier where we experimented about this and I realized that we did not implement such a function in our code and this can be a possible vulnerability for brute force attacks.
   This could be fixed by implementing a middleware and lock the accounts after a specific number of attempts and also by notifying the user about suspicious login attempts.

4. Sensitive information in URL
   This I found through a ZAP scan, sensitive information such as username, password or email is being passed in the URL as query parameters, this is a risk for exosure.
   This could be fixed by using POST request instead of GET when transmitting sensitive data and also by avoiding to include sensitive parameter in the query string and instead send the data in the request body.

5. User controllable HTML element atrribute
   role=aministrator is directly included in an HTML attribute, this I found through a ZAP scan and we also did a lab about this in portswigger which gave me understanding about this vulnerability for a XSS attack.
   This could be fixed by sanuser inputs before embedding them in HTML, Libraries can be used to escape special characters in dynamically generated HTML
