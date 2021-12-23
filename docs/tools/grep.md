---
sidebar_position: 1
---

# grep

### Get e-mails:
```bash
grep -E -o "\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,6}\b"
```

### Get valid IP addresses:

```bash
grep -E -o "(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)"
```

### Search for a text in any files of the current dir

```bash
grep -r "MY SEARCH TERM"
```

### Searching for URLs:

```bash
grep -Eo '(http|https)://[^/"]+'
```

### Exclude result in search:

```bash
grep -v "TERM TO EXCLUDE"
```

### Recursive search only for specific type of files:

```bash
# will search for the regex only in html files
# in the current directory recursively
grep --include=\*.html -rE "MY_REGEX" ./
```