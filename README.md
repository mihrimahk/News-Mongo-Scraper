
<h1>News-Mongo-Scraper</h1>

<h2>About App </h2>
A web app utizilizing Cheerio to scrape the most recent CBC World news from the cbc.ca. Articles are stored in a MongoDB via Mongoose. Users can run a new scrape or add comments on the articles displayed on the page.
MongoDB unique fields prevent adding same stories again. Also every articles' image and metadata are displayed.<p>


<p align="center">
<img alt="Mongo News Scraper" src="./public/images/cbc-news-mongo-scrapper.png" style="width: 80px;">
</p>


<h2>Technologies Used</h2>
<ul>
  <li>Express</li>
  <li>Handlebars</li>
  <li>CSS</li>
  <li>JavaScript</li>
  <li>jQuery</li>
  <li>Node.js</li>
  <li>Cheerio</li>
  <li>Axios</li>
  <li>MongoDB</li>
  <li>Mongoose</li>
  <li>AJAX</li>
  <li>Request</li>
</ul>

<h2>How does it work?</h2>
When you arrive on the landing page, click "Get News" to scrape the most recent CBC headlines and images from the CBS website. Then, you can scroll down to add comments about the articles or view comments left by other users.


<h2>Check it out on Heroku!</h2>
https://cbc-news-mongo-scraper.herokuapp.com/
