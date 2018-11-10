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

### Useful References
Selenium NodeJS Webdriver
https://github.com/SeleniumHQ/selenium/wiki/WebDriverJs
https://seleniumhq.github.io/selenium/docs/api/javascript/index.html

HTML5 WebSockets
https://www.html5rocks.com/en/tutorials/websockets/basics/

