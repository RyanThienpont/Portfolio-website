const phrases = ["Expert .NET Developer specializing in crafting elegant solutions with C# and ASP.NET.", "Skilled in building scalable web applications with .NET Core and Entity Framework.", "Passionate about delivering high-performance software and pushing the boundaries of .NET technology."];
let currentPhraseIndex = 0;
let textElement = document.getElementById('herotext');
let currentText = '';
let isTyping = true;

function typeText() {
  if (isTyping) {
    if (currentText.length < phrases[currentPhraseIndex].length) {
      currentText += phrases[currentPhraseIndex].charAt(currentText.length);
      textElement.textContent = currentText;
      setTimeout(typeText, 50);
    } else {
      isTyping = false;
      setTimeout(deleteText, 1000);
    }
  }
}

function deleteText() {
  if (!isTyping) {
    if (currentText.length > 0) {
      currentText = currentText.slice(0, -1);
      textElement.textContent = currentText;
      setTimeout(deleteText, 50); // Adjust deleting speed here (in milliseconds)
    } else {
      isTyping = true;
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      setTimeout(typeText, 500); // Adjust delay before typing next phrase here (in milliseconds)
    }
  }
}

typeText(); // Start the process initially



let currentImageIndex = 0;
        const images = document.querySelectorAll('#imageCarousel img');
    
        function prevImage() {
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            updateCarousel();
        }
    
        function nextImage() {
            currentImageIndex = (currentImageIndex + 1) % images.length;
            updateCarousel();
        }
    
        function updateCarousel() {
            for (let i = 0; i < images.length; i++) {
                if (i === currentImageIndex) {
                    images[i].classList.remove('hidden');
                } else {
                    images[i].classList.add('hidden');
                }
            }
        }
    
        // Automatic sliding every 5 seconds if the user isn't clicking the buttons
        let timer = setInterval(nextImage, 5000);
    
        // Reset timer when the user clicks the buttons
        function resetTimer() {
            clearInterval(timer);
            timer = setInterval(nextImage, 5000);
        }

        document.addEventListener("DOMContentLoaded", function () {
          const form = document.querySelector("form");
      
          form.addEventListener("submit", function (event) {
              event.preventDefault(); // Prevent default form submission
      
              // Get form input values
              const name = document.getElementById("name").value.trim();
              const phoneNumber = document.getElementById("phonenumber").value.trim();
              const subject = document.getElementById("subject").value.trim();
              const message = document.getElementById("message").value.trim();
      
              // Check if Name, Subject, and Message fields are filled
              if (name === "" || subject === "" || message === "") {
                  alert("Please fill in all required fields.");
                  return;
              }
      
              // Construct mailto link with form details
              const mailtoLink = `mailto:thienpont.ryan+contact@gmail.com?subject=${encodeURIComponent(subject)}&body=Name: ${encodeURIComponent(name)}%0APhone Number: ${encodeURIComponent(phoneNumber)}%0AMessage: ${encodeURIComponent(message)}`;
      
              // Open default email client with mailto link
              window.location.href = mailtoLink;
          });
      });
    // Calculate age based on birthdate
const birthDate = new Date(2002, 8, 27); // 27th September 2002 (months are zero-indexed)
const today = new Date();
age = today.getFullYear() - birthDate.getFullYear();
const monthDiff = today.getMonth() - birthDate.getMonth();
if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--; // Subtract 1 if birthday hasn't occurred yet this year
}

// Display age in the text content of the element
const ageElement = document.getElementById('age');
ageElement.textContent = age.toString();
