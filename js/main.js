/*==================== Preloader ====================*/
document.body.classList.add("stopScrolling");
window.addEventListener("load", function () {
    /* -------------------- Page Loader--------------------- */
    document.querySelector(".pageLoader").classList.add("fade-out");
    setTimeout(function () {
        document.querySelector(".pageLoader").style.display = "none";
        document.body.classList.remove("stopScrolling");
    }, 600);
});

/*==================== SHOW MENU ====================*/
const navMenu = document.getElementById('navMenu'),
    navToggle = document.getElementById('navToggle'),
    navClose = document.getElementById('navClose')

/* MENU SHOW */
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('showMenu')
    })
}

/* MENU HIDDEN*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('showMenu')
    })
}


/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.navLink')

function linkAction() {
    const navMenu = document.getElementById('navMenu')
    /* When we click on each nav__link, we remove the show-menu class */
    navMenu.classList.remove('showMenu')
}
navLink.forEach(n => n.addEventListener('click', linkAction));


/*==================== Change Background Header ====================*/
function scrollHeader() {
    const header = document.getElementById('header');
    /* When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag */
    if (this.scrollY >= 80)
        header.classList.add('scrollHeader');
    else header.classList.remove('scrollHeader');
}
window.addEventListener('scroll', scrollHeader);

/*==================== Faqs Accordion ====================*/
const accordions = document.querySelectorAll(".faqsItem");

accordions.forEach((item) => {
    const accordionHeader = item.querySelector(".faqsHeader");

    accordionHeader.addEventListener("click", () => {

        const openItem = document.querySelector(".accordionOpen");
        /* Toggle Accordion Items */
        toggleItem(item);
        /* Close all items and open only clicked one */
        if (openItem && openItem != item) {
            toggleItem(openItem);
        }
    })
})
/* Toggle Accordion Function */
const toggleItem = (item) => {
    const accordionContent = item.querySelector(".faqsContent");

    if (item.classList.contains("accordionOpen")) {

        accordionContent.removeAttribute("style");
        item.classList.remove("accordionOpen");
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + 'px';
        item.classList.add('accordionOpen');
    }
}

/*==================== Scroll Sections Active Links ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.navMenu a[href*=' + sectionId + ']').classList.add('activeLink')
        } else {
            document.querySelector('.navMenu a[href*=' + sectionId + ']').classList.remove('activeLink')
        }
    })
}
window.addEventListener('scroll', scrollActive);


/*==================== Show Scroll Top ====================*/
function scrollUp() {
    const scrollUp = document.getElementById('scrollUp');
    // When the scroll is higher than 200 viewport height, 
    //add the showScroll class to the a tag with the scrollTop class
    if (this.scrollY >= 200)
        scrollUp.classList.add('showScroll');
    else
        scrollUp.classList.remove('showScroll');
}
window.addEventListener('scroll', scrollUp)


/*==================== Dark Light Theme ====================*/
const themeButton = document.getElementById('themeBtn');
const darkTheme = 'darkTheme';
const iconTheme = 'ri-sun-line';

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selectedTheme')
const selectedIcon = localStorage.getItem('selectedIcon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

// We validate if the user previously chose a topic
if (selectedTheme) {
    // If the validation is fulfilled, 
    // we ask what the issue was to know if we activated or deactivated the dark
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selectedTheme', getCurrentTheme())
    localStorage.setItem('selectedIcon', getCurrentIcon())
})
/*==================== Show Reveal Animation ====================*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})
sr.reveal(`.homeData`)
sr.reveal(`.homeImg`, { delay: 500 })
sr.reveal(`.homeSocial`, { delay: 600 })
sr.reveal(`.aboutImg , .contactBox`, { origin: 'left' })
sr.reveal(`.aboutData, .contactForm`, { origin: 'right' })
sr.reveal(`.stepsCard, .productCard, .faqsGroup, .footerContent`, { interval: 100 })

/*==================== Inputs Validation ====================*/
let validateform = () => {

    var subject = document.myform.subject.value;
    var message = document.myform.message.value;
    var email = document.myform.email.value;
    const inputFeilds = document.querySelectorAll("input");
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    //----------------- If All Inputs Empty Validation

    if (Array.from(inputFeilds).filter(input => input.value !== "")) {
        document.getElementById("emailError").style.display = "block";
        document.getElementById("emailError").innerHTML = "Email Can't Be Empty";
        document.getElementById("subjectError").style.display = "block";
        document.getElementById("subjectError").innerHTML = "Subject Can't Be Empty";
        document.getElementById("messageError").style.display = "block";
        document.getElementById("messageError").innerHTML = "You've to write a message";
    }

    //----------------- Email Validation

    if (email == null || email == "") {
        document.getElementById("emailError").style.display = "block";
        document.getElementById("emailError").innerHTML = "Email Can't Be Empty";
        return false;
    }
    if (!(email.match(regexEmail))) {
        document.getElementById("emailError").style.display = "block";
        document.getElementById("emailError").innerHTML =
            "You have entered an invalid email address!";
        return false;
    } else {
        document.getElementById("emailError").style.display = "none";
    }

    //----------------- Subject Validation

    if (subject == null || subject == "") {
        document.getElementById("subjectError").style.display = "block";
        document.getElementById("subjectError").innerHTML = "Subject Can't Be Empty";
        return false;
    } else {
        document.getElementById("subjectError").style.display = "none";
    }
    //----------------- Message Validation

    if (message == null || message == "") {
        document.getElementById("messageError").style.display = "block";
        document.getElementById("messageError").innerHTML = "You've to write a message";
        return false;
    } else {
        document.getElementById("messageError").style.display = "none";
        return true;
    }
}

//------------------------ Prevent Form Deafult Redirecting
var formSubmitBtn = document.getElementById("formSubmitBtn");
formSubmitBtn.addEventListener('click', function (e) {
    var isValid = validateform();
    if (isValid === true) {
        document.getElementById("formSuccess").classList.add("activeMessage");
    }
    e.preventDefault();
});

//----------------- Subscribe Validation
var subscribeBtn = document.getElementById("subscribeBtn");
subscribeBtn.addEventListener('click', function (e) {

    var subscribe = document.getElementById("subscribe").value;
    let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (subscribe == null || subscribe == "") {
        document.getElementById("subscribeError").style.display = "block";
        document.getElementById("subscribeError").innerHTML = "Enter email to Subscribe";
        return false;
    }
    if (!(subscribe.match(regexEmail))) {
        document.getElementById("subscribeError").style.display = "block";
        document.getElementById("subscribeError").innerHTML =
            "You have entered an invalid email address!";
        return false;
    } else {
        document.getElementById("subscribeError").style.display = "none";
        document.getElementById("subscribeSuccess").classList.add("activeMessage");
        e.preventDefault();
        return true;
    }

});

/*==================== Prevent Link ====================*/
document.querySelectorAll(".disabledLink").forEach((link) => {
    link.setAttribute("href", "javascript:void(0)");
})