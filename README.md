# chat-scraper
Real-time chat-scraping for NLP pipelines using Selenium.

### Steps
1) Setup socket server for rx.
2) Setup WebDriver.
3) Attach HTML DOM Observer to chat element.
4) Attach socket client to webdriver (via .executeScript())
5) Listen for chat-events on the server!

### Requirements
You need FireFox Geckodriver for browser automation:
https://github.com/mozilla/geckodriver

*OR

You need Google ChromeDriver
http://chromedriver.chromium.org/


### Useful References
Selenium NodeJS Webdriver
https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs
https://seleniumhq.github.io/selenium/docs/api/javascript/index.html

MutationObserver
https://davidwalsh.name/mutationobserver-api

Socket.io
https://github.com/socketio/socket.io
