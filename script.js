$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 50,
  nav: true,
  dots: false,
  navText: [
    '<img src="images/Icon awesome-arrow-right.svg">',
    '<img src="images/Icon awesome-arrow-left.png">',
  ],
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});

const emailInput = document.getElementById("emailInput");
const subscribeButton = document.getElementById("subscribeButton");

subscribeButton.addEventListener("click", function () {
  // Get the email value from the input field
  const email = emailInput.value;

  // Check if the email is not empty
  if (email !== "") {
    // Store the email in local storage
    localStorage.setItem("newsletterEmail", email);

    alert("You have successfully subscribed to the newsletter!");
  } else {
    alert("Please enter a valid email address!");
  }
});

const storedEmail = localStorage.getItem("newsletterEmail");
if (storedEmail) {
  emailInput.value = storedEmail;
}
