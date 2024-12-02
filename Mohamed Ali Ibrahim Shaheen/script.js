
document.addEventListener("DOMContentLoaded", () => {
    const favoriteIcons = document.querySelectorAll(".starr i");

    favoriteIcons.forEach((icon) => {
        icon.addEventListener("click", () => {
         
            icon.classList.toggle("fa-regular");
            icon.classList.toggle("fa-solid");

            if (icon.classList.contains("fa-solid")) {
                alert("تمت الإضافة!");
            } else {
                alert("تمت الإزالة!");
            }
        });
    });
});



function animateCounter(element, start, end, duration) {
    let current = start;
    const step = (end - start) / (duration / 10);

    const interval = setInterval(() => {
        current += step;
        if (current >= end) {
            current = end;
            clearInterval(interval);
        }
        element.textContent = Math.floor(current);
    }, 10);
}

document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll(".section-five h1");
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    counters.forEach((counter) => {
                        const target = parseInt(counter.textContent, 10);
                        animateCounter(counter, 0, target, 2000); 
                    });
                    observer.disconnect(); 
                }
            });
        },
        { threshold: 0.5 }
    );

    observer.observe(document.querySelector(".section-five"));
});


document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll(".card");
    
    cards.forEach(card => {
        card.addEventListener("click", (event) => {
           
            const name = card.querySelector(".card-title").textContent;
            const location = card.querySelector(".card-text").textContent;
            const phone = card.querySelector(".fa-mobile-screen-button").parentElement.textContent.trim();
            const email = card.querySelector(".fa-envelope").parentElement.textContent.trim();

            document.getElementById("agentName").textContent = name;
            document.getElementById("agentLocation").textContent = location;
            document.getElementById("agentPhone").textContent = `Phone: ${phone}`;
            document.getElementById("agentEmail").textContent = `Email: ${email}`;

            // فتح الـ Modal
            const modal = new bootstrap.Modal(document.getElementById("agentModal"));
            modal.show();
        });
    });
});
