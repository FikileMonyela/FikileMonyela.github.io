# Bethany House Trust website

I have built a multi-page website for Bethany House Trust, a child protection organisation in krugersdorp, Gauteng. This project is done for part 3 of the POE, focusing on adding functionality and setting a proper SEO.

Author: Fikile Phemela Monyela
Live Site:
Respository:

## Pages
The html pages and their purpose
-----------------
home.html -> Home page
about.html -> History, mission, vision and centers
programmes.html -> Programmes with a photo gallery and lightbox
get-involved. html -> ways to help, with aserachable list and FAQ accordion
give.html -> Donate,volunteer and foster /adapt parent
enquiry.html -> Users visiting the website can enquire about sponsoring a child or volunteering
contact.html -> A general message sent by email with a interactive map.

## Technologies
I used HTML5, CSS3, JavaScript, Leaflet and OpenStreetMap for the map.

## Features in Part 3
**Forms and validation**
enquiry.html-> It validates name, email, phone, enquiry type, start date and message. A valid form shows a response about cost (sponsor) or availability (volunteer) and is sent with AJAX (fetch) without reloading the page.
contact.html -> It validates name, email, phone, type of message and message. A valid form compiles the details into an email addressed to admin@childincrisis.org.za, ready to send.
give.html -> It validates the three forms (donation pledge, volunteer, foster or adopt).

**The interactive elements**
I added  an  Accordion (FAQ) on get-involved.html
I made and added Photo gallery with lightbox (previous, next, counter, keyboard support) on programmes.html
I used an interactive Leaflet map on contact.html
I used CSS animations and transitions, and a back-to-top button created with JavaScript

**The dynamic content**
I added a section "Find a way to help" on get-involved.html: The cards are created by JavaScript from a list, with search, category filter and sorting.

## SEO

**Keyword research**

Keyword -> Where it is used 

Children's home Krugersdorp -> Home title, description, content.
Orphanage West Rand -> Meta keywords, content 
Donate to children's charity -> Give page title, description
Foster care Gauteng -> Get involved description, meta keywords 
Volunteer Krugersdorp -> Get involved and enquiry pages 
Sponsor a child -> An Enquiry page title and description 

**On-page SEO:** 

The SEO page I have placed a unique title and meta description on every page
 I used one h1 per page with h2 and h3 below it, a descriptive alt text on images, a clean lowercase file names with hyphens, internal links in the navigation and inside page content, and a mobile-friendly layout with a viewport tag.

## Changelog

Part 2 feedback: the lecturer's feedback on Part 2 was positive ("good work") but I didn't added a readme document and the requirements of a function mobile. So below are the changes are made and adiidtions I added.

File -> Change -> Reason

enquiry.html ->  I added the form with ids on every field and a select, date and textarea; 
I changed the main heading to h1 and I put in new intro text 
The reason for the change was because I needed for JavaScript validation and to show how it differs from the contact page.

contact.html -> I rebuilt the form (added phone and type of message), I also changed the action to a mailto address, replaced the Google Maps iframe with a Leaflet map. I changed the main heading to h1 
The reason was because PHP actions did not work on static hosting and paper asks for an email and an interactive map 

give.html -> I fixed some spelling errors on ids and labels that began with a space, added ids to those error,I also added a "-- Select --" option to the volunteer select, I renamed the donate button to a pledge 
The reason for the change was because the  broken ids would stop JavaScript and labels from working 

get-involved.html -> I added the FAQ accordion and the searchable "Find a way to help" section and  changed the main heading to h1 so that the interactive elements and dynamic content requirements

programmes.html -> I added  a gallery-photo class, an onclick and descriptive alt text to the existing photos, with aloading 

javaScript/script.js -> I added validation for all five forms, helper functions, AJAX, mailto email, accordion, lightbox, map, back-to-top button and dynamic list for functionality.

css/style.css -> added new styles for ids, results, accordion, lightbox, map, animations, back-to-top and the ways-to-help list. I also fixed the spaces in the button :hover selectors and lastly I placed new features; hover colours were not working.

javaScript/script.js -> I added validation for all forms, helper functions, AJAX, the mailto email, accordion, slideshow, lightbox, map, back-to-top button and the dynamic list and  functionality 

css/style.css ->I fixed the mobile media query (60px changed to 600px); closed a missing brace so the 800px rules work; fixed the button :hover selectors; heading selectors changed to h1; slideshow, lightbox and list styles and the mobile layout never switched on; hover colours were not working

css/extras.css (new) -> Styles for error messages, results, accordion, slideshow, lightbox pop-up, map, back-to-top button and animations so that it keeps all the Part 3 styling in one place

robots.txt, sitemap.xml (new) -> I created both files in the main folder and also added SEO requirement 

 Image folder ->  I renamed the logo and monument images to lowercase names with hyphens and used Clean file names because GitHub Pages is case-sensitive

 All pages -> Added a Content Security Policy, a referrer policy, Open Graph tags and a page-specific canonical link; footer links open safely, SEO and security 

## Problems found while testing, and how I fixed them

 The Vimeo video was blocked by my own Content Security Policy. I added frame-src for player.vimeo.com on the home page.

The FAQ, lightbox and map had no styling because the CSS was not applied,so I  created a new CSS and moved the styles into css/extras.css and linked it on every page.

 The logo path used a capital letter which did not match the file name. It worked on Windows but not on GitHub Pages, so I used AI to correct it and wrote  it on every page.

The canonical link pointed to the home page but now each page now points to its own address.

The OpenStreetMap tiles was blocked when a page is opened as a file, on mirocosft edge. I test with Live Server, and the live site works normally.