// Changing the style of scroll bar
// window.onscroll = function() {myFunction()};
		
// function myFunction() {
// 	var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
// 	var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
// 	var scrolled = (winScroll / height) * 100;
// 	document.getElementById("myBar").style.width = scrolled + "%"; 
// }

function scrollAppear() {
    var introText = document.querySelector('.side-text');
    var sideImage = document.querySelector('.sideImage');
    var introPosition = introText.getBoundingClientRect().top;
    var imagePosition = sideImage.getBoundingClientRect().top;
    
    var screenPosition = window.innerHeight / 1.2;
  
    if(introPosition < screenPosition) {
      introText.classList.add('side-text-appear');
    }
    if(imagePosition < screenPosition) {
      sideImage.classList.add('sideImage-appear');
    }
  }
  
  window.addEventListener('scroll', scrollAppear);
  
  
  
  // For LOGIN
  var x = document.getElementById("login");
  var y = document.getElementById("register");
  var z = document.getElementById("btn");
  var a = document.getElementById("log");
  var b = document.getElementById("reg");
  var w = document.getElementById("other");
  
  function register() {
    x.style.left = "-400px";
    y.style.left = "50px";
    z.style.left = "110px";
    w.style.visibility = "hidden";
    b.style.color = "#fff";
    a.style.color = "#000";
  }
  
  function login() {
    x.style.left = "50px";
    y.style.left = "450px";
    z.style.left = "0px";
    w.style.visibility = "visible";
    a.style.color = "#fff";
    b.style.color = "#000";
  }
    
  // CheckBox Function
  function goFurther(){
    if (document.getElementById("chkAgree").checked == true) {
      document.getElementById('btnSubmit').style = 'background: linear-gradient(to right, #FA4B37, #DF2771);';
    }
    else{
      document.getElementById('btnSubmit').style = 'background: lightgray;';
    }
  }
  
  function google() {
        window.location.assign("https://accounts.google.com/signin/v2/identifier?service=accountsettings&continue=https%3A%2F%2Fmyaccount.google.com%2F%3Futm_source%3Dsign_in_no_continue&csig=AF-SEnbZHbi77CbAiuHE%3A1585466693&flowName=GlifWebSignIn&flowEntry=AddSession", "_blank");
  }
  
  // QUIZ Page
  document.addEventListener("DOMContentLoaded", function () {    const onlineCounseling = document.getElementById("online-counseling");
    const roadmap = document.getElementById("roadmap");    const contactUs = document.getElementById("contact-us");
    // Add event listeners for the counseling options
    onlineCounseling.addEventListener("click", () => {        // You can add code to open an online counseling chat or form here
      window.location.href="online-coun.html"; //  alert("Online counseling is coming soon!");  
      });
    roadmap.addEventListener("click", () => {
      window.location.href="roadmap.html"; // You can add code to navigate to the roadmap page here        alert("Explore our educational and career roadmap!");
    });
  
   
    contactUs.addEventListener("click", () => {        // You can add code to open a contact form or provide contact details here
     
      // alert("Contact us for support and inquiries.");   
      window.location.href="contact.html" });
});

document.addEventListener("DOMContentLoaded", function () {
  const roadmap1 = document.getElementById("roadmap1");
  const roadmap2 = document.getElementById("roadmap2");

  // Add event listeners for the roadmap options
  roadmap1.addEventListener("click", () => {
      // You can add code to navigate to the first roadmap page here
      alert("Explore Roadmap 1 for your education journey!");
  });

  roadmap2.addEventListener("click", () => {
      // You can add code to navigate to the second roadmap page here
      alert("Discover Roadmap 2 for your educational goals!");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const volunteerForm = document.getElementById("volunteer-form");
  const donateButton = document.getElementById("donate-button");

  // Submit volunteer form
  volunteerForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      // You can send this data to your server for processing or save it in a database
      // For now, we'll just display an alert
      alert(`Thank you, ${name}! Your volunteer information has been submitted.`);
      
      // Clear the form
      volunteerForm.reset();
  });

  // Handle donation button click
  donateButton.addEventListener("click", function () {
      // You can implement the donation processing logic here (e.g., redirect to a payment gateway)
      alert("Thank you for your donation!");
  });
});
