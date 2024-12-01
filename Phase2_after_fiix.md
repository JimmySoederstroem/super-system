# ZAP by Checkmarx Scanning Report

ZAP is supported by the [Crash Override Open Source Fellowship](https://crashoverride.com/?zap=rep).


## Summary of Alerts

| Risk Level | Number of Alerts |
| --- | --- |
| High | 0 |
| Medium | 3 |
| Low | 1 |
| Informational | 3 |




## Alerts

| Name | Risk Level | Number of Instances |
| --- | --- | --- |
| CSP: Wildcard Directive | Medium | 5 |
| CSP: script-src unsafe-inline | Medium | 5 |
| CSP: style-src unsafe-inline | Medium | 5 |
| CSP: Notices | Low | 5 |
| Authentication Request Identified | Informational | 1 |
| Information Disclosure - Sensitive Information in URL | Informational | 5 |
| User Controllable HTML Element Attribute (Potential XSS) | Informational | 1 |




## Alert Detail



### [ CSP: Wildcard Directive ](https://www.zaproxy.org/docs/alerts/10055/)



##### Medium (High)

### Description

Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks. Including (but not limited to) Cross Site Scripting (XSS), and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.

* URL: http://localhost:8000
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `directives [object Object]`
  * Other Info: `The following directives either allow wildcard sources (or ancestors), are not defined, or are overly broadly defined:
script-src, style-src, img-src, connect-src, frame-src, frame-ancestors, font-src, media-src, object-src, manifest-src, worker-src, form-action

The directive(s): frame-ancestors, form-action are among the directives that do not fallback to default-src, missing/excluding them is the same as allowing anything.`
* URL: http://localhost:8000/login
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `directives [object Object]`
  * Other Info: `The following directives either allow wildcard sources (or ancestors), are not defined, or are overly broadly defined:
script-src, style-src, img-src, connect-src, frame-src, frame-ancestors, font-src, media-src, object-src, manifest-src, worker-src, form-action

The directive(s): frame-ancestors, form-action are among the directives that do not fallback to default-src, missing/excluding them is the same as allowing anything.`
* URL: http://localhost:8000/login%3Fpassword=ZAP&username=ZAP
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `directives [object Object]`
  * Other Info: `The following directives either allow wildcard sources (or ancestors), are not defined, or are overly broadly defined:
script-src, style-src, img-src, connect-src, frame-src, frame-ancestors, font-src, media-src, object-src, manifest-src, worker-src, form-action

The directive(s): frame-ancestors, form-action are among the directives that do not fallback to default-src, missing/excluding them is the same as allowing anything.`
* URL: http://localhost:8000/register
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `directives [object Object]`
  * Other Info: `The following directives either allow wildcard sources (or ancestors), are not defined, or are overly broadly defined:
script-src, style-src, img-src, connect-src, frame-src, frame-ancestors, font-src, media-src, object-src, manifest-src, worker-src, form-action

The directive(s): frame-ancestors, form-action are among the directives that do not fallback to default-src, missing/excluding them is the same as allowing anything.`
* URL: http://localhost:8000/register%3Fage=1&consent=on&email=zaproxy%2540example.com&password=ZAP&role=administrator&username=ZAP
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `directives [object Object]`
  * Other Info: `The following directives either allow wildcard sources (or ancestors), are not defined, or are overly broadly defined:
script-src, style-src, img-src, connect-src, frame-src, frame-ancestors, font-src, media-src, object-src, manifest-src, worker-src, form-action

The directive(s): frame-ancestors, form-action are among the directives that do not fallback to default-src, missing/excluding them is the same as allowing anything.`

Instances: 5

### Solution

Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.

### Reference


* [ https://www.w3.org/TR/CSP/ ](https://www.w3.org/TR/CSP/)
* [ https://caniuse.com/#search=content+security+policy ](https://caniuse.com/#search=content+security+policy)
* [ https://content-security-policy.com/ ](https://content-security-policy.com/)
* [ https://github.com/HtmlUnit/htmlunit-csp ](https://github.com/HtmlUnit/htmlunit-csp)
* [ https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources ](https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 15

#### Source ID: 3

### [ CSP: script-src unsafe-inline ](https://www.zaproxy.org/docs/alerts/10055/)



##### Medium (High)

### Description

Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks. Including (but not limited to) Cross Site Scripting (XSS), and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.

* URL: http://localhost:8000
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `directives [object Object]`
  * Other Info: `script-src includes unsafe-inline.`
* URL: http://localhost:8000/login
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `directives [object Object]`
  * Other Info: `script-src includes unsafe-inline.`
* URL: http://localhost:8000/login%3Fpassword=ZAP&username=ZAP
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `directives [object Object]`
  * Other Info: `script-src includes unsafe-inline.`
* URL: http://localhost:8000/register
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `directives [object Object]`
  * Other Info: `script-src includes unsafe-inline.`
* URL: http://localhost:8000/register%3Fage=1&consent=on&email=zaproxy%2540example.com&password=ZAP&role=administrator&username=ZAP
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `directives [object Object]`
  * Other Info: `script-src includes unsafe-inline.`

Instances: 5

### Solution

Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.

### Reference


* [ https://www.w3.org/TR/CSP/ ](https://www.w3.org/TR/CSP/)
* [ https://caniuse.com/#search=content+security+policy ](https://caniuse.com/#search=content+security+policy)
* [ https://content-security-policy.com/ ](https://content-security-policy.com/)
* [ https://github.com/HtmlUnit/htmlunit-csp ](https://github.com/HtmlUnit/htmlunit-csp)
* [ https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources ](https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 15

#### Source ID: 3

### [ CSP: style-src unsafe-inline ](https://www.zaproxy.org/docs/alerts/10055/)



##### Medium (High)

### Description

Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks. Including (but not limited to) Cross Site Scripting (XSS), and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.

* URL: http://localhost:8000
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `directives [object Object]`
  * Other Info: `style-src includes unsafe-inline.`
* URL: http://localhost:8000/login
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `directives [object Object]`
  * Other Info: `style-src includes unsafe-inline.`
* URL: http://localhost:8000/login%3Fpassword=ZAP&username=ZAP
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `directives [object Object]`
  * Other Info: `style-src includes unsafe-inline.`
* URL: http://localhost:8000/register
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `directives [object Object]`
  * Other Info: `style-src includes unsafe-inline.`
* URL: http://localhost:8000/register%3Fage=1&consent=on&email=zaproxy%2540example.com&password=ZAP&role=administrator&username=ZAP
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `directives [object Object]`
  * Other Info: `style-src includes unsafe-inline.`

Instances: 5

### Solution

Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.

### Reference


* [ https://www.w3.org/TR/CSP/ ](https://www.w3.org/TR/CSP/)
* [ https://caniuse.com/#search=content+security+policy ](https://caniuse.com/#search=content+security+policy)
* [ https://content-security-policy.com/ ](https://content-security-policy.com/)
* [ https://github.com/HtmlUnit/htmlunit-csp ](https://github.com/HtmlUnit/htmlunit-csp)
* [ https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources ](https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 15

#### Source ID: 3

### [ CSP: Notices ](https://www.zaproxy.org/docs/alerts/10055/)



##### Low (High)

### Description

Content Security Policy (CSP) is an added layer of security that helps to detect and mitigate certain types of attacks. Including (but not limited to) Cross Site Scripting (XSS), and data injection attacks. These attacks are used for everything from data theft to site defacement or distribution of malware. CSP provides a set of standard HTTP headers that allow website owners to declare approved sources of content that browsers should be allowed to load on that page — covered types are JavaScript, CSS, HTML frames, fonts, images and embeddable objects such as Java applets, ActiveX, audio and video files.

* URL: http://localhost:8000
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `directives [object Object]`
  * Other Info: `Warnings:
Unrecognized directive directives
`
* URL: http://localhost:8000/login
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `directives [object Object]`
  * Other Info: `Warnings:
Unrecognized directive directives
`
* URL: http://localhost:8000/login%3Fpassword=ZAP&username=ZAP
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `directives [object Object]`
  * Other Info: `Warnings:
Unrecognized directive directives
`
* URL: http://localhost:8000/register
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `directives [object Object]`
  * Other Info: `Warnings:
Unrecognized directive directives
`
* URL: http://localhost:8000/register%3Fage=1&consent=on&email=zaproxy%2540example.com&password=ZAP&role=administrator&username=ZAP
  * Method: `GET`
  * Parameter: `content-security-policy`
  * Attack: ``
  * Evidence: `directives [object Object]`
  * Other Info: `Warnings:
Unrecognized directive directives
`

Instances: 5

### Solution

Ensure that your web server, application server, load balancer, etc. is properly configured to set the Content-Security-Policy header.

### Reference


* [ https://www.w3.org/TR/CSP/ ](https://www.w3.org/TR/CSP/)
* [ https://caniuse.com/#search=content+security+policy ](https://caniuse.com/#search=content+security+policy)
* [ https://content-security-policy.com/ ](https://content-security-policy.com/)
* [ https://github.com/HtmlUnit/htmlunit-csp ](https://github.com/HtmlUnit/htmlunit-csp)
* [ https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources ](https://developers.google.com/web/fundamentals/security/csp#policy_applies_to_a_wide_variety_of_resources)


#### CWE Id: [ 693 ](https://cwe.mitre.org/data/definitions/693.html)


#### WASC Id: 15

#### Source ID: 3

### [ Authentication Request Identified ](https://www.zaproxy.org/docs/alerts/10111/)



##### Informational (High)

### Description

The given request has been identified as an authentication request. The 'Other Info' field contains a set of key=value lines which identify any relevant fields. If the request is in a context which has an Authentication Method set to "Auto-Detect" then this rule will change the authentication to match the request identified.

* URL: http://localhost:8000/login%3Fpassword=ZAP&username=ZAP
  * Method: `GET`
  * Parameter: `username`
  * Attack: ``
  * Evidence: `password`
  * Other Info: `userParam=username
userValue=ZAP
passwordParam=password
referer=http://localhost:8000/login`

Instances: 1

### Solution

This is an informational alert rather than a vulnerability and so there is nothing to fix.

### Reference


* [ https://www.zaproxy.org/docs/desktop/addons/authentication-helper/auth-req-id/ ](https://www.zaproxy.org/docs/desktop/addons/authentication-helper/auth-req-id/)



#### Source ID: 3

### [ Information Disclosure - Sensitive Information in URL ](https://www.zaproxy.org/docs/alerts/10024/)



##### Informational (Medium)

### Description

The request appeared to contain sensitive information leaked in the URL. This can violate PCI and most organizational compliance policies. You can configure the list of strings for this check to add or remove values specific to your environment.

* URL: http://localhost:8000/login%3Fpassword=ZAP&username=ZAP
  * Method: `GET`
  * Parameter: `password`
  * Attack: ``
  * Evidence: `password`
  * Other Info: `The URL contains potentially sensitive information. The following string was found via the pattern: pass
password`
* URL: http://localhost:8000/login%3Fpassword=ZAP&username=ZAP
  * Method: `GET`
  * Parameter: `username`
  * Attack: ``
  * Evidence: `username`
  * Other Info: `The URL contains potentially sensitive information. The following string was found via the pattern: user
username`
* URL: http://localhost:8000/register%3Fage=1&consent=on&email=zaproxy%2540example.com&password=ZAP&role=administrator&username=ZAP
  * Method: `GET`
  * Parameter: `email`
  * Attack: ``
  * Evidence: `zaproxy@example.com`
  * Other Info: `The URL contains email address(es).`
* URL: http://localhost:8000/register%3Fage=1&consent=on&email=zaproxy%2540example.com&password=ZAP&role=administrator&username=ZAP
  * Method: `GET`
  * Parameter: `password`
  * Attack: ``
  * Evidence: `password`
  * Other Info: `The URL contains potentially sensitive information. The following string was found via the pattern: pass
password`
* URL: http://localhost:8000/register%3Fage=1&consent=on&email=zaproxy%2540example.com&password=ZAP&role=administrator&username=ZAP
  * Method: `GET`
  * Parameter: `username`
  * Attack: ``
  * Evidence: `username`
  * Other Info: `The URL contains potentially sensitive information. The following string was found via the pattern: user
username`

Instances: 5

### Solution

Do not pass sensitive information in URIs.

### Reference



#### CWE Id: [ 200 ](https://cwe.mitre.org/data/definitions/200.html)


#### WASC Id: 13

#### Source ID: 3

### [ User Controllable HTML Element Attribute (Potential XSS) ](https://www.zaproxy.org/docs/alerts/10031/)



##### Informational (Low)

### Description

This check looks at user-supplied input in query string parameters and POST data to identify where certain HTML attribute values might be controlled. This provides hot-spot detection for XSS (cross-site scripting) that will require further review by a security analyst to determine exploitability.

* URL: http://localhost:8000/register%3Fage=1&consent=on&email=zaproxy%2540example.com&password=ZAP&role=administrator&username=ZAP
  * Method: `GET`
  * Parameter: `role`
  * Attack: ``
  * Evidence: ``
  * Other Info: `User-controlled HTML attribute values were found. Try injecting special characters to see if XSS might be possible. The page at the following URL:

http://localhost:8000/register?age=1&consent=on&email=zaproxy%40example.com&password=ZAP&role=administrator&username=ZAP

appears to include user input in:
a(n) [option] tag [value] attribute

The user input found was:
role=administrator

The user-controlled value was:
administrator`

Instances: 1

### Solution

Validate all input and sanitize output it before writing to any HTML attributes.

### Reference


* [ https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html ](https://cheatsheetseries.owasp.org/cheatsheets/Input_Validation_Cheat_Sheet.html)


#### CWE Id: [ 20 ](https://cwe.mitre.org/data/definitions/20.html)


#### WASC Id: 20

#### Source ID: 3


