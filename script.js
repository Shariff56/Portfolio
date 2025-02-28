document.addEventListener('DOMContentLoaded', () => {
   

    // Project Hover Effect (Optional for additional animation)
    const projectItems = document.querySelectorAll('.project-item');

    projectItems.forEach(project => {
        project.addEventListener('mouseenter', () => {
            project.style.boxShadow = `0 0 15px var(--main-color), 0 0 30px var(--main-color)`;
        });
        project.addEventListener('mouseleave', () => {
            project.style.boxShadow = 'none';
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const skillMeters = document.querySelectorAll('.skill-meter');

    // Observer to animate skills on scroll
    const skillObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillValue = entry.target.getAttribute('data-skill');
                const bar = entry.target.querySelector('.bar');
                const percentage = entry.target.querySelector('.percentage');

                // Set the offset for animation based on skill value
                const offset = 251 - (251 * skillValue) / 100;
                bar.style.strokeDashoffset = offset;

                // Animate percentage counter
                let start = 0;
                const increment = setInterval(() => {
                    if (start < skillValue) {
                        start++;
                        percentage.textContent = `${start}%`;
                    } else {
                        clearInterval(increment);
                    }
                }, 10);
            }
        });
    }, { threshold: 0.5 });

    skillMeters.forEach(meter => {
        skillObserver.observe(meter);
    });
});
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        const title = this.getAttribute('data-title');
        const description = this.getAttribute('data-description');
        const details = this.querySelector('.project-details');
        details.querySelector('h3').textContent = title;
        details.querySelector('p').textContent = description;
    });
});
card.addEventListener('mouseleave', function() {
    const details = this.querySelector('.project-details');
    details.querySelector('h3').textContent = '';
    details.querySelector('p').textContent = '';
});
const form = document.getElementById('contactForm');
form.onsubmit = function(event) {
    event.preventDefault();
    google.script.run.withSuccessHandler(function(response) {
        if (response) {
            form.reset();
            document.querySelector('.success-message').style.display = 'block';
        }
    }).submitForm({
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    });
};
function doPost(e) {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1");
    var data = JSON.parse(e.postData.contents);
    sheet.appendRow([data.name, data.email, data.message, new Date()]);
    return ContentService.createTextOutput(JSON.stringify({"status": "success"})).setMimeType(ContentService.MimeType.JSON);
}
document.getElementById("currentYear").textContent = new Date().getFullYear();



let downloadButton = document.querySelector(".download");

downloadButton.addEventListener("click", (event) => {
    event.preventDefault(); 

    let url = "Resume.pdf"; 
    let a = document.createElement("a");
    a.href = url;
    a.download = "Resume.pdf"; 
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

const typingText = document.querySelector('.typing-animation');

function restartAnimation() {
  typingText.style.animation = 'none'; // Reset animation
  void typingText.offsetWidth; // Trigger reflow
  typingText.style.animation = null; // Restart animation
}

// Example: Change text and restart animation
setTimeout(() => {
  typingText.innerHTML = "Hi, It's <span>Developer</span>";
  restartAnimation();
}, 3000); // Change text after 4 seconds

function showMore() {
    const additionalContent = document.getElementById('additionalContent');
    
    // Toggle the 'show' class
    additionalContent.classList.toggle('show');
    
    // Ensure smooth scroll when content expands
    if (additionalContent.classList.contains('show')) {
        additionalContent.style.display = "block";
        additionalContent.scrollIntoView({ behavior: 'smooth' });
    } else {
        additionalContent.style.display = "none";
    }
}


