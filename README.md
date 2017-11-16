# ComputerDB CRUD
Simple protractor-cucumber autotests for checking CRUD functionality for ComputerDB
Resource: http://computer-database.herokuapp.com/computers

## Getting Started
These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites
* Install NodeJS (v6.x.x or later)
* Install Protractor Globally and update WebDriver
```
npm install -g protractor
webdriver-manager update
```
* Checkout from GIT repositories
```
git clone -b working_pickle https://github.com/Palarden/comp_db.git
```
* Install dependencies from package.json
```
npm insall      //in project directory
```
* Start up a server with
```
webdriver-manager start
```

## Running tests
Run the test with: 
```
protractor conf.js      //in project directory
```

### Cover functionality:
 * Create new Computer
 * Find computer by name
 * Edit created computer
 * Deleted created computer
 
 
 
<div class="postman-run-button"
data-postman-action="collection/import"
data-postman-var-1="3eac58ea7e13de506b61"
data-postman-param="env%5BBE%20portfolio_summary_persistence%5D=W3siZW5hYmxlZCI6dHJ1ZSwia2V5IjoiZG9tYWluIiwidmFsdWUiOiJodHRwOi8vZmFsbGluZy1kb2NrZXItOTAtcG9ydGZvbGlvc3VtbWFyeS5iYWNrYmFzZS5kZXY6ODA4MCIsInR5cGUiOiJ0ZXh0In0seyJlbmFibGVkIjp0cnVlLCJrZXkiOiJ0b2tlbiIsInZhbHVlIjoiQmVhcmVyIGV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUpwYzNNaU9pSlBibXhwYm1VZ1NsZFVJRUoxYVd4a1pYSWlMQ0pwWVhRaU9qRTFNVEE0TWpJek56WXNJbVY0Y0NJNk1UVTBNak0xT0RNM05pd2lZWFZrSWpvaWQzZDNMbVY0WVcxd2JHVXVZMjl0SWl3aWMzVmlJam9pYW5KdlkydGxkRUJsZUdGdGNHeGxMbU52YlNJc0lrZHBkbVZ1VG1GdFpTSTZJa2xvYjNJaUxDSlRkWEp1WVcxbElqb2lTMng1YldOb2RXc2lMQ0pGYldGcGJDSTZJbXB5YjJOclpYUkFaWGhoYlhCc1pTNWpiMjBpTENKU2IyeGxJanBiSWtGa2JXbHVhWE4wY21GMGIzSWlMQ0pRY205cVpXTjBJRUZrYldsdWFYTjBjbUYwYjNJaVhYMC43QnQzbWJrMW5EcWZKSzdVZmNTaHFQek81c0FKblJoRmNGR0FacUFyR1hZIiwidHlwZSI6InRleHQifSx7ImVuYWJsZWQiOnRydWUsImtleSI6ImJhc2VVcmwiLCJ2YWx1ZSI6Ii9wb3J0Zm9saW8tc3VtbWFyeS1wcmVzZW50YXRpb24tc2VydmljZS92MiIsInR5cGUiOiJ0ZXh0In0seyJlbmFibGVkIjp0cnVlLCJrZXkiOiJwb3J0Zm9saW9JZCIsInZhbHVlIjoiMiIsInR5cGUiOiJ0ZXh0In0seyJlbmFibGVkIjp0cnVlLCJrZXkiOiJ1cmwiLCJ2YWx1ZSI6Int7ZG9tYWlufX17e2Jhc2VVcmx9fSIsInR5cGUiOiJ0ZXh0In0seyJlbmFibGVkIjp0cnVlLCJrZXkiOiJ0cmFuc2FjdGlvbklkIiwidmFsdWUiOiIxODI4NTE0IiwidHlwZSI6InRleHQifSx7ImVuYWJsZWQiOnRydWUsImtleSI6ImludmFsaWRUb2tlbiIsInZhbHVlIjoiQmVhcmVyIGV5SjBlWEFpT2lKS1YxUWlMQ0poYkdjaU9pSklVekkxTmlKOS5leUpwYzNNaU9pSlBibXhwYm1VZ1NsZFVJRUoxYVd4a1pYSWlMQ0pwWVhRaU9qRTFNVEEzTXpVNU56Y3NJbVY0Y0NJNk1UVTBNakkzTVRrM055d2lZWFZrSWpvaWQzZDNMbVY0WVcxd2JHVXVZMjl0SWl3aWMzVmlJam9pYW5KdlkydGxkRUJsZUdGdGNHeGxMbU52YlNJc0lrZHBkbVZ1VG1GdFpTSTZJa3B2YUc1dWVTSXNJbE4xY201aGJXVWlPaUpTYjJOclpYUWlMQ0pGYldGcGJDSTZJbXB5YjJOclpYUkFaWGhoYlhCc1pTNWpiMjBpTENKU2IyeGxJanBiSWsxaGJtRm5aWElpTENKUWNtOXFaV04wSUVGa2JXbHVhWE4wY21GMGIzSWlYWDAuUW44TWJadjBjRzJDOHg3U2M0bURYeFZNcFYxbGJ1NjNRWHVpQUxpRnByVSIsInR5cGUiOiJ0ZXh0In0seyJlbmFibGVkIjp0cnVlLCJrZXkiOiJwb3J0Zm9saW9faWQxIiwidmFsdWUiOiIxIiwidHlwZSI6InRleHQifSx7ImVuYWJsZWQiOnRydWUsImtleSI6InBvcnRmb2xpb19pZDIiLCJ2YWx1ZSI6IjIiLCJ0eXBlIjoidGV4dCJ9LHsiZW5hYmxlZCI6dHJ1ZSwia2V5IjoicG9ydGZvbGlvX2lkMyIsInZhbHVlIjoiMyIsInR5cGUiOiJ0ZXh0In0seyJlbmFibGVkIjp0cnVlLCJrZXkiOiJuYW1lIiwidmFsdWUiOiJ0ZXN0IiwidHlwZSI6InRleHQifSx7ImVuYWJsZWQiOnRydWUsImtleSI6Im5ld19uYW1lIiwidmFsdWUiOiJ0ZXN0X2RvbmUiLCJ0eXBlIjoidGV4dCJ9LHsiZW5hYmxlZCI6dHJ1ZSwia2V5IjoicG9ydGZvbGlvX2FkZF9pZCIsInZhbHVlIjoiSUJBTiIsInR5cGUiOiJ0ZXh0In0seyJlbmFibGVkIjp0cnVlLCJrZXkiOiJteVNlbmRSZXF1ZXN0IiwidmFsdWUiOiJ2YXIgbXlTZW5kUmVxdWVzdCA9IGZ1bmN0aW9uKGNvbmZpZykge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgcG0uc2VuZFJlcXVlc3QoY29uZmlnLCBmdW5jdGlvbihlcnIsIHJlc3VsdCkge1xuICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICByZWplY3QoZXJyKTtcbiAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9KTtcbn0iLCJ0eXBlIjoidGV4dCJ9LHsiZW5hYmxlZCI6dHJ1ZSwia2V5IjoidXVpZCIsInZhbHVlIjoiIiwidHlwZSI6InRleHQifSx7ImVuYWJsZWQiOnRydWUsImtleSI6ImNvcnJlY3RfdXVpZCIsInZhbHVlIjoiIiwidHlwZSI6InRleHQifSx7ImVuYWJsZWQiOnRydWUsImtleSI6ImludmFsaWRfdXVpZCIsInZhbHVlIjoiIiwidHlwZSI6InRleHQifV0="></div>
<script type="text/javascript">
  (function (p,o,s,t,m,a,n) {
    !p[s] && (p[s] = function () { (p[t] || (p[t] = [])).push(arguments); });
    !o.getElementById(s+t) && o.getElementsByTagName("head")[0].appendChild((
      (n = o.createElement("script")),
      (n.id = s+t), (n.async = 1), (n.src = m), n
    ));
  }(window, document, "_pm", "PostmanRunObject", "https://run.pstmn.io/button.js"));
</script>
