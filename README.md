# TheMonkees - Project Stream 1 – Create A Website For A Band


------------
Overview
------------
This project consists in building a static website for a band.
The purpose of this website is to target fans and potential fans and:
-	Provide them some information about the band and its members
-	Show them news about the band, PR, new gigs, etc.
-	Give them the chance to listen to some audio clips and video clips as they become available and access to the whole discography in iTunes without leaving the website
-	Provide them information about upcoming gigs and how to contact the band to book them for an event such a wedding, Christmas party, etc.
-	Give them a way to contact them regarding any matter by filling out a form and showing the address in a map.
-	They can subscribe to a newsletter to keep up to date with everything related to the band

I was provided with photos, a video clip and audio clips of the band (https://github.com/Code-Institute-Org/project-assets) and I added some more images to the collection.

The website contains 6 different sections/pages:
-	Home: provides an overview of the band and quick access to other sections of the website (calls to action)
-	The Band: provides more information about the band and its members
-	News: provides overview and link to news related to the band
-	Music: provides an audio player with some pre-selected clips and a video player with one video clip. It also allows the user to search for “The Monkees” in iTunes and get a table result with each song information and a link to buy it.
-	Book the band & gigs: provides information about upcoming gigs with dates, some public and some private, giving the user the chance to see which dates the band is not available as well as give them the chance to get more information on the public gigs they might be interested in. It also provides a form to book the band for an event.
-	Contact: provides a form to contact the band and a map and the address of their office.

-----------------------
Technology & Structure
-----------------------
The website was created using HTML, CSS and Javascript.
Library: bootstrap
Framework: Angular.js

Internal Structure
------------------
The Angular Application:
-	Templates – HTML files with an associated controller that will define the data to be presented for viewing in the browser
-	app.js: - defines the application and configuration
-	controller.js – interlayer between the template and the service
-	directive.js -  UI components that can be included in templates, views or new html elements that can have dynamic behaviour
-	service.js – allow model data and business logic to be retrieved from some source and passed on to controllers via dependency injection

index.html is the file running in the browser and populating the different content.
               /--> (directive.js) bandNav --> (template/directive) bandNav.html --> For all pages
 -----------  /
| index.html |---> (directive.js) footer --> (template/directive) footer.html --> For all pages
 -----------  \
               \--> (app.js) calls html templates e.g. home.html  (see table below) --> Populates content depending on template


Below you can find the different HTML templates and the different angular elements they interact with.
________________________________________________________________________________________________________________
| Template  |  Controllers             |   Directives  | Services          |  Templates   | Templates/Directives |
|________________________________________________________________________________________________________________|
| home      | HomeController           | newsletterCta |        -          |       -      | newsletter-cta       |
|             FormNewsletterController |      -        |        -          |       -      |          -           |
| ---------------------------------------------------------------------------------------------------------------|
| the-band  | TheBandController        | newsletterCta |        -          |       -      | newsletter-cta       |
|             FormNewsletterController |      -        |        -          |       -      |                      |
| ---------------------------------------------------------------------------------------------------------------|
| news      | NewsController           |      -        |        -          |       -      |          -           |
| ---------------------------------------------------------------------------------------------------------------|
| music     | MusicController          |      -        |        -          |       -      |          -           |
|             AudioPlayerController    |      -        |        -          |       -      |          -           |
|             ITunesListController     |      -        | itunesListService | iTunes-search|          -           |
| ---------------------------------------------------------------------------------------------------------------|
| book-band | BookBandController       |      -        |        -          |       -      |          -           |
|             FormCookUsController     |      -        |        -          |       -      |          -           |
|             BookedDatesController    |      -        | sharedBookedDates |       -      |          -           |
| ---------------------------------------------------------------------------------------------------------------|
| contact   | ContactController        | make-map      |        -          |       -      | map                  |
| 	      FormContactUsController  |      -        |        -          |       -      |          -           |
| _______________________________________________________________________________________________________________|


Directory Structure
------------------
The Monkees/
      audio/
    css/
      vendor/
      style.css
    fonts/
    images/
    javascript/
      vendor/
      app.js
      controller.js
    directive.js
    service.js
    templates/
      directives/
        bandNav.html
        footer.html
        map.html
        newsletter-cta.html
    book-band.html
    contact.html
    home.html
    iTunes-search.html
    music.html
    news.html
    the-band.html
    video/
    index.html
    README.md


-----------
Testing
------------------
Manual testing was used in the different stages of this process using different browsers (Chrome, Firefox, IE and Opera) and different screen sizes using the Element Inspector and the responsive/device mode.

Tests:
- Responsiveness: The pages structure are using bootstrap which make them responsive. The menu changes size and ultimately becomes a three bars menu when the screen is small. The text of the banners also resizes with the screen. Tested in different browsers and screen sizes.
- Hyperlinks: Tested every hyperlink/button in the website re-directing people from one page to another.
- Dynamic content: Tested content populated via angular controllers, directives and services in different browsers.
- Form Validation: All the forms have validation rules such us length and format of the content of the field. All the forms have been tested and validation rules work.

Known Issues:
- The map in Contact us only shows up sometimes.
