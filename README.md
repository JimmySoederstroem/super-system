# super-system
Cybersecurity and data privacy-Jimmy

# LOGBOOK
| Date | Used hours | Subject | Output |
| :---         |     :---:      |     :---:      |          ---: |
| 2.11.2024   | 1     | Git repository    | First assignment done    |
| 2.11.2024   | 1     | Cisco networking academy. Chapter 1   | Read the material and quiz 1 done    |
| 2.11.2024   | 1     | Cisco networking academy. Chapter 2   | Read the material and quiz 2 done    |
| 9.11.2024   | 1     | Cisco networking academy. Chapter 3   | Read the material and quiz 3 done    |
| 9.11.2024   | 1     | Cisco networking academy. Chapter 4   | Read the material and quiz 4 done    |
| 9.11.2024   | 1     | Cisco networking academy. Chapter 5   | Read the material and quiz 6 done    |
| 9.11.2024   | 1     | Cisco networking academy. Final exam   | Final exam done    |
| 11.11.2024   | 1     | Burp and portswigger   | I got familiar with burp and portswigger environments    |
| 13.11.2024   | 0,5     | Portswigger   | Lab 1 authentication done    |
| 13.11.2024   | 0,5     | Portswigger   | Lab 2 authentication done    |
| 13.11.2024   | 0,5     | Portswigger   | Lab 3 authentication done    |
| 13.11.2024   | 0,5     | Portswigger   | Lab 1 access control done    |
| 13.11.2024   | 0,5     | Portswigger   | Lab 2 access control done    |
| 13.11.2024   | 0,5     | Portswigger   | Lab 3 access control done    |
| 13.11.2024   | 0,5     | Portswigger   | Lab 1 sql injection done    |
| 13.11.2024   | 0,5     | Portswigger   | Lab 2 sql injection done    |
| 13.11.2024   | 0,5     | Portswigger   | Lab 1 NOsql injection done    |
| 18.11.2024   | 3    | Phase 1   | database created and server.js, index.html    |
| 19.11.2024   | 8     | Phase 1 Problem solving  | error still on, I will start Phase 1 from the beginning, Copilot can not fix the error   |
| 19.11.2024   | 7     | Phase 1 | Phase 1 completed   |
| 25.11.2024   | 9     | Phase 2 | Phase 2 implemented new files and ran fiirst scan|
| 26.11.2024   | 6     | Phase 2 | Second scan and fixes|
| 1.12.2024   | 1     | Phase 2 | Completed and submitted|
| 1.12.2024   | 5     | Phase 3 | Reviewing my code, ran zap scans and found possible vulnerabilities and solutions to them|
| 10.12.2024   | 9     | Phase 4 | Started phase 4 and everything went fine until the last step where I did not get my code to work so I decided to try the code provided and in the end all my code was so messed up that nothing worked anymore so I could not complete phase 4|
| 15.12.2024   | 0,5     | Portswigger   | Lab 4 access control done    |
| 15.12.2024   | 0,5     | Portswigger   | Lab 5 access control done    |
| 15.12.2024   | 0,5     | Portswigger   | Lab 6 access control done    |
| 15.12.2024   | 1     | Final Phase   | Report done    |


# Phase 1 changes done between report 1 and 2
| Change | Output |
| :---         |           ---: |
|  Content Security Policy (CSP) Header  |  Alert unsuccessfully removed despiter many different attempts    |
| Anti-clickjacking Header   | Alert removed    |
| MIME Type Sniffing Protection  | Alert removed    |
| XSS Protection   | Alert removed    |
| Referrer Policy   | Alert removed    |
| Strict Transport Security   | Alert removed    |
| User-Agent Header Validation   | Alert removed    |
| Form Submission Method   | Alert removed    |

# Phase 2 changes done between report 1 and 2
| Change | Output |
| [Report Before fix](https://github.com/JimmySoederstroem/super-system/edit/main/Index_login_register_before_fix-.md) | [Report After fix](https://github.com/JimmySoederstroem/super-system/blob/main/Phase2_after_fiix.md) |
| :---         |           ---: |
| CSP: Wildcard directive  |  Alert unsuccessfully removed despiter many different attempts to remove wildcard (*) from the CSP directiives    |
| Anti-clickjacking Header   | Alert removed    |
| Script unsafe-inline  | Alert unsuccessfully removed despiter many different attempts to replace unsafe-inliiine with nonces for scripts    |
| Style src unsafe-inline  | Alert unsuccessfully removed despiter many different attempts to replace unsafe-inlinewith nonces styles    |
| Informatiion Disclosure   | Alert unsuccessfully removed despiter many different attempts to ensure sensitive data is not passed in URLs by using post request for sensitive data    |
| User controllable HTML element attribute   | Alert unsuccessfully removed despiter many different attempts to ensure user inputs are sanitiized to prevent XSS attacks    |
| Authentication request identified   | Alert unsuccessfully removed despiter many different attempts to ensure authentication mechaniisms are secure    |
| CSP Notices   | Alert unsuccessfully removed despiter many different attempts to ensure csp directives are correctly implemented wiithout usiing wildcards or unsafe-inline    |
| Modern web application   | Alert removed    |
| Most of the alerts were very diffiicult to remove with the help of AI and when some alert was successfully removed I got some new alert.   |

# Phase 3
https://github.com/JimmySoederstroem/super-system/blob/main/Phase3.md
