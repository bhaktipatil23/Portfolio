var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(event, tabname) {
    for (let tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (let tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

function openMenu() {
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "0"; // Slide in the menu
}

function closeMenu() {
    var sidemenu = document.getElementById("sidemenu");
    sidemenu.style.right = "-200px";
}

// JavaScript for show more btn
function toggleOverview() {
    const overviewSection = document.getElementById("more-overview");
    const button = document.querySelector(".btn");

    if (overviewSection.style.display === "none") {
      overviewSection.style.display = "block";
      button.textContent = "Show Less";
    } else {
      overviewSection.style.display = "none";
      button.textContent = "Show More";
    }
  }




document.addEventListener("DOMContentLoaded", () => {
    const projectElements = document.querySelectorAll('.project-overview');
    projectElements.forEach(project => {
        const button = project.querySelector('.btn');
        const hiddenContent = project.querySelector('.hidden-content');

        button.addEventListener('click', () => {
            if (hiddenContent.style.display === 'block') {
                hiddenContent.style.display = 'none';
                button.textContent = 'Show More'; // Reset button text
            } else {
                hiddenContent.style.display = 'block';
                button.textContent = 'Show Less'; // Update button text
            }
        });
    });
});















const scriptURL = 'https://script.google.com/macros/s/AKfycbwWSGhIi7KQKyPaNOBA0zay5-0XCKqzqoJKr8Bp-8vg5VhRGl4xvcS5Dr5snq0ZHA8/exec';
const form = document.forms['submit-to-google-sheet'];
const msg = document.getElementById("msg");

form.addEventListener('submit', e => {
  e.preventDefault();
  
  // Display loading message
  msg.innerHTML = "Sending message...";

  // Use fetch to send form data to Google Apps Script
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      // On success
      msg.innerHTML = "Message sent successfully!";
      form.reset();  // Reset the form
      setTimeout(() => msg.innerHTML = "", 5000);  // Clear the message after 5 seconds
    })
    .catch(error => {
      // On error
      console.error('Error!', error.message);
      msg.innerHTML = "Error sending message. Please try again later.";
    });
});




