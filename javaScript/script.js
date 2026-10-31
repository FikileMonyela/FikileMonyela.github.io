function updateDateTime() {
    const now = new Date();
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
    };
    const el = document.getElementById('datetime');
    if (el) {
        el.textContent = now.toLocaleDateString('en-US', options);
    } 
}

updateDateTime();
setInterval(updateDateTime, 1000);

//*Form validation

//===CONTACT PAGE.html VALIDATION ===
function checkContact() {
    let name = document.getElementById("contact-name").value.trim();
    let email = document.getElementById("contact-email").value.trim();
    let phone = document.getElementById("contact-phone").value.trim();
    let msgType = document.getElementById("contact-type").value;
    let message = document.getElementById("contact-message").value.trim();

    document.getElementById("contact-name-error").innerHTML = "";
    document.getElementById("contact-email-error").innerHTML = "";
    document.getElementById("contact-phone-error").innerHTML = "";
    document.getElementById("contact-type-error").innerHTML = "";
    document.getElementById("contact-message-error").innerHTML = "";
    document.getElementById("contact-result").innerHTML = "";
    let valid = true;

    if (name == "") {
        document.getElementById("contact-name-error").innerHTML = "Empty,Please enter your name";
        valid = false;
    } else if (name.length < 2) {
        document.getElementById("contact-name-error").innerHTML = "Name must be at least 2 characters long";
        valid = false;
    } else if (!/^[A-Za-z\s'-]+$/.test(name)) {
        document.getElementById("contact-name-error").innerHTML = "Name can only contain letters, spaces, hyphens and apostrophes";
        valid = false;
    }

    if (email == "") {
        document.getElementById("contact-email-error").innerHTML = "Empty,Please enter your email";
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("contact-email-error").innerHTML = "Please enter a valid email address.";
        valid = false;
    }

    if (phone == "") {
        document.getElementById("contact-phone-error").innerHTML = "Empty.Please enter your phone number";
        valid = false;
    } else if (!/^(\+27|0)[0-9]{9}$/.test(phone)) {
        document.getElementById("contact-phone-error").innerHTML = "Enter a valid South African number, e.g. 0829007832 or +27829007832";
        valid = false;
    }

    //checking if a message type was selected
    if (msgType == "") {
        document.getElementById("contact-type-error").innerHTML = "Please select the type of message";
        valid = false;
    }

    //message length
    if (message == "") {
        document.getElementById("contact-message-error").innerHTML = "Empty, Please type your message";
        valid = false;
    } else if (message.length < 10) {
        document.getElementById("contact-message-error").innerHTML = "Message must be at least 10 characters long";
        valid = false;
    } else if (message.length > 500) {
        document.getElementById("contact-message-error").innerHTML = "Message must not be more than 500 characters";
        valid = false;
    }
    if (valid == false) {
        return false;
    }

    //compiling the information into an email
    let recipient = "admin@childincrisis.org.za";
    let subject = msgType + " message from " + name;
    let body = "Name: " + name + "\n" +
               "Email: " + email + "\n" +
               "Phone: " + phone + "\n" +
               "Type of message: " + msgType + "\n\n" +
               "Message:\n" + message;

    //opening the user's email app with the email ready to send
    window.location.href = "mailto:" + recipient + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);

    document.getElementById("contact-result").textContent = "Thank you " + name + "! Your email is ready, please press send in your email app.";

    return false;
}


//===ENQUIRE PAGE.html VALIDATION ===

function checkEnquiryStatus() {
    let name = document.getElementById("enq-name").value.trim();
    let email = document.getElementById("enq-email").value.trim();
    let phone = document.getElementById("enq-phone").value.trim();
    let type = document.getElementById("enq-type").value;
    let date = document.getElementById("enq-date").value;
    let message = document.getElementById("enq-message").value.trim();

    document.getElementById("enq-name-error").innerHTML = "";
    document.getElementById("enq-email-error").innerHTML = "";
    document.getElementById("enq-phone-error").innerHTML = "";
    document.getElementById("enq-type-error").innerHTML = "";
    document.getElementById("enq-date-error").innerHTML = "";
    document.getElementById("enq-message-error").innerHTML = "";
    document.getElementById("enquiry-result").innerHTML = "";

    let valid = true;

    //checking if the name is empty and if it is valid
    if (name == "") {
        document.getElementById("enq-name-error").innerHTML = "Empty.Please enter your full name";
        valid = false;
    } else if (name.length < 2) {
        document.getElementById("enq-name-error").innerHTML = "Name must be at least 2 characters long";
        valid = false;
    } else if (!/^[A-Za-z\s'-]+$/.test(name)) {
        document.getElementById("enq-name-error").innerHTML = "Name can only contain letters, spaces, hyphens and apostrophes";
        valid = false;
    }

    //checking if the email is empty and if it is valid
    if (email == "") {
        document.getElementById("enq-email-error").innerHTML = "Empty.Please enter your email";
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        document.getElementById("enq-email-error").innerHTML = "Please enter a valid email address.";
        valid = false;
    }

    //checking if the phone number is empty and if it is valid
    if (phone == "") {
        document.getElementById("enq-phone-error").innerHTML = "Empty.Please enter your phone number";
        valid = false;
    } else if (!/^(\+27|0)[0-9]{9}$/.test(phone)) {
        document.getElementById("enq-phone-error").innerHTML = "Enter a valid South African number, e.g. 0829007832 or +27829007832";
        valid = false;
    }

    //checking if an enquiry type was selected
    if (type == "") {
        document.getElementById("enq-type-error").innerHTML = "Please select if you want to volunteer or sponsor";
        valid = false;
    }

    //checking if the date is empty and that it is not in the past
    if (date == "") {
        document.getElementById("enq-date-error").innerHTML = "Please choose a start date";
        valid = false;
    } else {
        let today = new Date();
        today.setHours(0, 0, 0, 0);
        if (new Date(date) < today) {
            document.getElementById("enq-date-error").innerHTML = "The start date cannot be in the past";
            valid = false;
        }
    }

    //checking the message length
    if (message == "") {
        document.getElementById("enq-message-error").innerHTML = "Empty.Please tell us more.";
        valid = false;
    } else if (message.length < 10) {
        document.getElementById("enq-message-error").innerHTML = "Message must be at least 10 characters long";
        valid = false;
    } else if (message.length > 300) {
        document.getElementById("enq-message-error").innerHTML = "Message must not be more than 300 characters";
        valid = false;
    }

    //stop the submission if any field is invalid
    if (valid == false) {
        return false;
    }

    //processing the enquiry and building the response
    let startDate = new Date(date);
    let day = startDate.getDay();   //0 = Sunday, 6 = Saturday
    let response = "";

    if (type == "sponsor") {
        let sponsorCost = 500;   //monthly cost in rand, change to the real amount
        response = "Thank you " + name + "! Sponsoring a child costs R" + sponsorCost + " per month. We will email the sponsorship details to " + email + ".";
    } else {
        response = "Thank you " + name + "! Volunteering is free. ";
        if (day == 0 || day == 6) {
            response += "Weekend slots are available for events and centre activities from " + startDate.toDateString() + ". ";
        } else {
            response += "Weekday afternoon slots are available for homework help and tutoring from " + startDate.toDateString() + ". ";
        }
        response += "We will confirm your spot by email.";
    }

    //AJAX - sending the enquiry without reloading the page
    let enquiryData = {
        name: name,
        email: email,
        phone: phone,
        type: type,
        startDate: date,
        message: message
    };

    document.getElementById("enquiry-result").textContent = "Sending your enquiry...";

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(enquiryData)
    })
    .then(function (reply) {
        if (reply.ok) {
            document.getElementById("enquiry-result").textContent = response;
            document.getElementById("enquiry-form").reset();
        } else {
            document.getElementById("enquiry-result").textContent = "Something went wrong, please try again later.";
        }
    })
    .catch(function () {
        document.getElementById("enquiry-result").textContent = "Could not send your enquiry. Please check your internet connection and try again.";
    });

    return false;
}

//===Give.html VALIDATION ===

//Donation form validation
function checkDonate() {
    let name = document.getElementById("donate-full-name").value.trim();
    let email = document.getElementById("donate-email").value.trim();
    let amount = document.getElementById("donate-amount").value;

    document.getElementById("donate-name-error").innerHTML = "";
    document.getElementById("donate-email-error").innerHTML = "";
    document.getElementById("donate-amount-error").innerHTML = "";
    document.getElementById("donate-result").innerHTML = "";

    let valid = true;

    if (name == "") {
        document.getElementById("donate-name-error").innerHTML = "Empty, Please enter your full name";
        valid = false;
    } else if (name.length < 2) {
        document.getElementById("donate-name-error").innerHTML = "Name must be at least 2 characters long";
        valid = false;
    } else if (nameIsValid(name) == false) {
        document.getElementById("donate-name-error").innerHTML = "Name can only contain letters, spaces, hyphens and apostrophes";
        valid = false;
    }

    if (email == "") {
        document.getElementById("donate-email-error").innerHTML = "Empty, Please enter your email";
        valid = false;
    } else if (emailIsValid(email) == false) {
        document.getElementById("donate-email-error").innerHTML = "Please enter a valid email address.";
        valid = false;
    }

    if (amount == "") {
        document.getElementById("donate-amount-error").innerHTML = "Empty, Please enter an amount";
        valid = false;
    } else if (Number(amount) < 20) {
        document.getElementById("donate-amount-error").innerHTML = "The minimum pledge is R20";
        valid = false;
    } else if (Number(amount) > 100000) {
        document.getElementById("donate-amount-error").innerHTML = "The maximum pledge is R100000";
        valid = false;
    }

    if (valid == false) {
        return false;
    }

    document.getElementById("donate-result").textContent = "Thank you " + name + "! Your pledge of R" + amount + " has been received. We will email the banking details to " + email + ".";
    document.getElementById("donate-form").reset();

    return false;
}


//Volunteer form validation
function checkVolunteer() {
    let name = document.getElementById("volunteer-full-name").value.trim();
    let email = document.getElementById("volunteer-email").value.trim();
    let phone = document.getElementById("volunteer-phone").value.trim();
    let helpType = document.getElementById("volunteer-help-type").value;
    let message = document.getElementById("volunteer-message").value.trim();

    document.getElementById("volunteer-name-error").innerHTML = "";
    document.getElementById("volunteer-email-error").innerHTML = "";
    document.getElementById("volunteer-phone-error").innerHTML = "";
    document.getElementById("volunteer-type-error").innerHTML = "";
    document.getElementById("volunteer-message-error").innerHTML = "";
    document.getElementById("volunteer-result").innerHTML = "";

    let valid = true;

    if (name == "") {
        document.getElementById("volunteer-name-error").innerHTML = "Empty, Please enter your full name";
        valid = false;
    } else if (name.length < 2) {
        document.getElementById("volunteer-name-error").innerHTML = "Name must be at least 2 characters long";
        valid = false;
    } else if (nameIsValid(name) == false) {
        document.getElementById("volunteer-name-error").innerHTML = "Name can only contain letters, spaces, hyphens and apostrophes";
        valid = false;
    }

    if (email == "") {
        document.getElementById("volunteer-email-error").innerHTML = "Empty, Please enter your email";
        valid = false;
    } else if (emailIsValid(email) == false) {
        document.getElementById("volunteer-email-error").innerHTML = "Please enter a valid email address.";
        valid = false;
    }

    if (phone == "") {
        document.getElementById("volunteer-phone-error").innerHTML = "Empty, Please enter your phone number";
        valid = false;
    } else if (phoneIsValid(phone) == false) {
        document.getElementById("volunteer-phone-error").innerHTML = "Enter a valid South African number, e.g. 0829007832 or +27829007832";
        valid = false;
    }

    if (helpType == "") {
        document.getElementById("volunteer-type-error").innerHTML = "Please select how you would like to help";
        valid = false;
    }

    if (message != "" && message.length < 10) {
        document.getElementById("volunteer-message-error").innerHTML = "Message must be at least 10 characters long, or leave it empty";
        valid = false;
    } else if (message.length > 300) {
        document.getElementById("volunteer-message-error").innerHTML = "Message must not be more than 300 characters";
        valid = false;
    }

    if (valid == false) {
        return false;
    }

    document.getElementById("volunteer-result").textContent = "Thank you " + name + "! Our team will call you on " + phone + " about helping with " + helpType + ".";
    document.getElementById("volunteer-form").reset();

    return false;
}


//Foster form validation 
function checkFoster() {
    let name = document.getElementById("foster-full-name").value.trim();
    let email = document.getElementById("foster-email").value.trim();
    let phone = document.getElementById("foster-phone").value.trim();
    let parentType = document.getElementById("foster-help-type").value;

    document.getElementById("foster-name-error").innerHTML = "";
    document.getElementById("foster-email-error").innerHTML = "";
    document.getElementById("foster-phone-error").innerHTML = "";
    document.getElementById("foster-type-error").innerHTML = "";
    document.getElementById("foster-result").innerHTML = "";

    let valid = true;

    if (name == "") {
        document.getElementById("foster-name-error").innerHTML = "Empty, Please enter your full name";
        valid = false;
    } else if (name.length < 2) {
        document.getElementById("foster-name-error").innerHTML = "Name must be at least 2 characters long";
        valid = false;
    } else if (nameIsValid(name) == false) {
        document.getElementById("foster-name-error").innerHTML = "Name can only contain letters, spaces, hyphens and apostrophes";
        valid = false;
    }

    if (email == "") {
        document.getElementById("foster-email-error").innerHTML = "Empty, Please enter your email";
        valid = false;
    } else if (emailIsValid(email) == false) {
        document.getElementById("foster-email-error").innerHTML = "Please enter a valid email address.";
        valid = false;
    }

    if (phone == "") {
        document.getElementById("foster-phone-error").innerHTML = "Empty, Please enter your phone number";
        valid = false;
    } else if (phoneIsValid(phone) == false) {
        document.getElementById("foster-phone-error").innerHTML = "Enter a valid South African number, e.g. 0829007832 or +27829007832";
        valid = false;
    }

    if (parentType == "") {
        document.getElementById("foster-type-error").innerHTML = "Please select foster or adoptive parent";
        valid = false;
    }

    if (valid == false) {
        return false;
    }

    let wording = "foster parent";
    if (parentType == "adoptive") {
        wording = "adoptive parent";
    }

    document.getElementById("foster-result").textContent = "Thank you " + name + "! A social worker will contact you on " + phone + " to explain how to become an " + wording + ".";
    document.getElementById("foster-form").reset();

    return false;
}

//===Frequently Asked Questions===
function toggleFaq(button) {
    let answer = button.nextElementSibling;
    let allButtons = document.getElementsByClassName("faq-question");
    let allAnswers = document.getElementsByClassName("faq-answer");
    let wasOpen = (answer.style.display == "block");

    //close all the answers first
    for (let i = 0; i < allAnswers.length; i++) {
        allAnswers[i].style.display = "none";
        allButtons[i].classList.remove("open");
    }

    if (wasOpen == false) {
        answer.style.display = "block";
        button.classList.add("open");
    }
}

// ===PHOTO GALLERY LIGHTBOX===
let currentPhoto = 0;

function openLightbox(picture) {
    let photos = document.getElementsByClassName("gallery-photo");

    // looks for thecphoto was clicked
    for (let i = 0; i < photos.length; i++) {
        if (photos[i] == picture) {
            currentPhoto = i;
        }
    }

    //remove an old lightbox 
    closeLightbox();

    //create the dark background whhen hovering
    let box = document.createElement("div");
    box.id = "lightbox";
    box.onclick = function (event) {
        if (event.target == box) {
            closeLightbox();
        }
    };

    //creates the counter, the big picture and the caption
    let count = document.createElement("p");
    count.id = "lightbox-count";

    let bigPicture = document.createElement("img");
    bigPicture.id = "lightbox-picture";

    let caption = document.createElement("p");
    caption.id = "lightbox-caption";

    //creates the buttons
    let buttons = document.createElement("div");
    buttons.id = "lightbox-buttons";

    let previousButton = document.createElement("button");
    previousButton.textContent = "Previous";
    previousButton.onclick = previousPhoto;

    let closeButton = document.createElement("button");
    closeButton.textContent = "Close";
    closeButton.onclick = closeLightbox;

    let nextButton = document.createElement("button");
    nextButton.textContent = "Next";
    nextButton.onclick = nextPhoto;

    //puts everything together and show it on the page
    buttons.appendChild(previousButton);
    buttons.appendChild(closeButton);
    buttons.appendChild(nextButton);

    box.appendChild(count);
    box.appendChild(bigPicture);
    box.appendChild(caption);
    box.appendChild(buttons);
    document.body.appendChild(box);

    showPhoto();
}

//---Current Photo---
//showing the current photo inside the lightbox
function showPhoto() {
    let photos = document.getElementsByClassName("gallery-photo");
    let photo = photos[currentPhoto];

    document.getElementById("lightbox-picture").src = photo.src;
    document.getElementById("lightbox-picture").alt = photo.alt;
    document.getElementById("lightbox-caption").textContent = photo.alt;
    document.getElementById("lightbox-count").textContent = (currentPhoto + 1) + " of " + photos.length;
}

//---Next Photo---
//going to the next photo, after the last one it goes back to the first
function nextPhoto() {
    let photos = document.getElementsByClassName("gallery-photo");
    currentPhoto = currentPhoto + 1;
    if (currentPhoto == photos.length) {
        currentPhoto = 0;
    }
    showPhoto();
}

//---Previous Photo---
//going to the previous photo, before the first one it goes to the last
function previousPhoto() {
    let photos = document.getElementsByClassName("gallery-photo");
    currentPhoto = currentPhoto - 1;
    if (currentPhoto < 0) {
        currentPhoto = photos.length - 1;
    }
    showPhoto();
}

//--closing the lightbox--
function closeLightbox() {
    let box = document.getElementById("lightbox");
    if (box != null) {
        box.remove();
    }
}

//keyboard: Escape closes, left and right arrows change the photo
document.addEventListener("keydown", function (event) {
    let box = document.getElementById("lightbox");
    if (box == null) {
        return;
    }
    if (event.key == "Escape") {
        closeLightbox();
    } else if (event.key == "ArrowRight") {
        nextPhoto();
    } else if (event.key == "ArrowLeft") {
        previousPhoto();
    }
});

let waysToHelp = [
    {
        title: "Homework help and tutoring",
        category: "Volunteer",
        colour: "volunteer",
        description: "Help children catch up at school with homework help and tutoring in our education support programmes.",
        link: "give.html",
        linkText: "Volunteer now"
    },
    {
        title: "Daily centre activities",
        category: "Volunteer",
        colour: "volunteer",
        description: "Join our team in the daily activities and events that keep our centres warm, safe and full of life.",
        link: "give.html",
        linkText: "Volunteer now"
    },
    {
        title: "Fundraising",
        category: "Volunteer",
        colour: "volunteer",
        description: "Use your skills to raise money that provides food, clothing, education and care for our children.",
        link: "give.html",
        linkText: "Volunteer now"
    },
    {
        title: "Event planning",
        category: "Volunteer",
        colour: "volunteer",
        description: "Help us plan the events that bring our children, families and supporters together.",
        link: "give.html",
        linkText: "Volunteer now"
    },
    {
        title: "Pledge a donation",
        category: "Donate",
        colour: "donate",
        description: "Your donation helps provide food, clothing, education and care. Every contribution counts, no matter how small.",
        link: "give.html",
        linkText: "Pledge now"
    },
    {
        title: "Sponsor a child",
        category: "Donate",
        colour: "donate",
        description: "Sponsor a child and get an instant answer about the monthly cost and how it works.",
        link: "enquiry.html",
        linkText: "Ask about sponsoring"
    },
    {
        title: "Food security outreach",
        category: "Donate",
        colour: "donate",
        description: "Help us provide food to families in our community who are struggling.",
        link: "give.html",
        linkText: "Donate now"
    },
    {
        title: "Become a foster parent",
        category: "Foster or adopt",
        colour: "foster",
        description: "Open your home to a child who needs a safe and loving family. Our social workers will guide you through the process.",
        link: "give.html",
        linkText: "Become a foster parent"
    },
    {
        title: "Become an adoptive parent",
        category: "Foster or adopt",
        colour: "foster",
        description: "Give a child a family for life. Our social workers will explain what is needed and walk with you.",
        link: "give.html",
        linkText: "Become an adoptive parent"
    }
];

//searching, filtering, sorting and showing the ways to help
function showWaysToHelp() {
    let list = document.getElementById("help-list");

    //stop if this page has no list
    if (list == null) {
        return;
    }

    //getting the values from the search box and the two drop-downs
    let searchText = document.getElementById("help-search").value.trim().toLowerCase();
    let category = document.getElementById("help-category").value;
    let sortBy = document.getElementById("help-sort").value;

    //filtering: keep only the items that match the search and the category
    let results = [];

    for (let i = 0; i < waysToHelp.length; i++) {
        let item = waysToHelp[i];
        let allText = (item.title + " " + item.description + " " + item.category).toLowerCase();

        let matchesSearch = allText.includes(searchText);
        let matchesCategory = (category == "All" || item.category == category);

        if (matchesSearch && matchesCategory) {
            results.push(item);
        }
    }

    //sorting the results
    if (sortBy == "az") {
        results.sort(function (a, b) {
            return a.title.localeCompare(b.title);
        });
    } else if (sortBy == "za") {
        results.sort(function (a, b) {
            return b.title.localeCompare(a.title);
        });
    } else if (sortBy == "category") {
        results.sort(function (a, b) {
            return a.category.localeCompare(b.category);
        });
    }

    //clear the old cards
    list.innerHTML = "";

    //showing how many results were found
    let count = document.getElementById("help-count");
    if (results.length == 0) {
        count.textContent = "No results found. Try a different word or choose All categories.";
    } else {
        count.textContent = "Showing " + results.length + " of " + waysToHelp.length + " ways to help";
    }

    //creating a card for every result
    for (let i = 0; i < results.length; i++) {
        let item = results[i];

        let card = document.createElement("div");
        card.className = "help-card " + item.colour;

        let tag = document.createElement("span");
        tag.className = "help-tag";
        tag.textContent = item.category;

        let heading = document.createElement("h3");
        heading.textContent = item.title;

        let description = document.createElement("p");
        description.textContent = item.description;

        let link = document.createElement("a");
        link.className = "get-involved-button";
        link.href = item.link;
        link.textContent = item.linkText;

        card.appendChild(tag);
        card.appendChild(heading);
        card.appendChild(description);
        card.appendChild(link);
        list.appendChild(card);
    }
}

//resetting the search, filter and sort
function clearWaysToHelp() {
    document.getElementById("help-search").value = "";
    document.getElementById("help-category").value = "All";
    document.getElementById("help-sort").value = "recommended";
    showWaysToHelp();
}

//loading the ways to help when the page opens
showWaysToHelp();




function loadMap() {
    let mapBox = document.getElementById("map");

    //stop if this page has no map
    if (mapBox == null) {
        return;
    }
    
    let latitude = -26.096678;
    let longitude = 27.789018;

    let map = L.map("map").setView([latitude, longitude], 14);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap contributors"
    }).addTo(map);

    L.marker([latitude, longitude]).addTo(map)
        .bindPopup("Bethany House Trust<br>Monument, Krugersdorp")
        .openPopup();
}

loadMap();


//back to top button: created with JavaScript and shown after scrolling down
function addBackToTop() {
    let topButton = document.createElement("button");
    topButton.id = "back-to-top";
    topButton.textContent = "Top";

    topButton.onclick = function () {
        window.scrollTo(0, 0);
    };

    document.body.appendChild(topButton);

    window.addEventListener("scroll", function () {
        if (window.scrollY > 300) {
            topButton.classList.add("show");
        } else {
            topButton.classList.remove("show");
        }
    });
}

addBackToTop();



//slideshow on programmes.html: plays the background photos and lands on the main photo
function startSlideshow() {
    let slideshow = document.getElementById("programme-slideshow");

    //stop if this page has no slideshow
    if (slideshow == null) {
        return;
    }

    let allSlides = slideshow.getElementsByClassName("slide");
    let mainSlide = slideshow.getElementsByClassName("main-slide")[0];

    //put the background photos first and the main photo last
    let order = [];
    for (let i = 0; i < allSlides.length; i++) {
        if (allSlides[i] != mainSlide) {
            order.push(allSlides[i]);
        }
    }
    order.push(mainSlide);

    //nothing to play if there are no background photos
    if (order.length == 1) {
        return;
    }

    //start with the first background photo
    let position = 0;
    mainSlide.classList.remove("active");
    order[0].classList.add("active");

    //change photo every 2.5 seconds
    let timer = setInterval(function () {
        order[position].classList.remove("active");
        position = position + 1;
        order[position].classList.add("active");

        //stop when we land on the main photo
        if (order[position] == mainSlide) {
            clearInterval(timer);
        }
    }, 2500);
}

startSlideshow();