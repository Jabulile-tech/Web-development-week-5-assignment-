document.addEventListener('DOMContentLoaded', () => {
    // Navigation handling
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });
                
                // Update active link
                navLinks.forEach(l => l.classList.remove('active'));
                link.classList.add('active');
            }
        });
    });

    // Change text content dynamically
    const changeTextBtn = document.getElementById('change-text');
    const dynamicText = document.getElementById('dynamic-text');
    const messages = [
        "Discover our amazing selection of candies!",
        "Try our new seasonal flavors!",
        "Special discounts on bulk orders!",
        "Free shipping on orders over $50!"
    ];
    let currentMessageIndex = 0;

    changeTextBtn.addEventListener('click', () => {
        currentMessageIndex = (currentMessageIndex + 1) % messages.length;
        dynamicText.textContent = messages[currentMessageIndex];
    });

    // Modify CSS styles via JavaScript
    const toggleStyleBtn = document.querySelector('.toggle-style');
    const candyItem = document.querySelector('.candy-item');

    toggleStyleBtn.addEventListener('click', () => {
        candyItem.classList.toggle('highlight');
    });

    // Add or remove elements
    const addElementBtn = document.getElementById('add-element');
    const candyContainer = document.querySelector('.candy-container');
    const candies = [
        { 
            name: "Gummy Bears", 
            description: "Soft and chewy gummy bears",
            image: "https://images.pexels.com/photos/5469208/pexels-photo-5469208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        { 
            name: "Lollipops", 
            description: "Colorful swirl lollipops",
            image: "https://images.pexels.com/photos/5469266/pexels-photo-5469266.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        },
        { 
            name: "Jelly Beans", 
            description: "Assorted fruit-flavored jelly beans",
            image: "https://images.pexels.com/photos/539447/pexels-photo-539447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        }
    ];
    let currentCandyIndex = 0;

    addElementBtn.addEventListener('click', () => {
        if (currentCandyIndex < candies.length) {
            const newCandy = document.createElement('article');
            newCandy.className = 'candy-item';
            newCandy.innerHTML = `
                <img src="${candies[currentCandyIndex].image}" alt="${candies[currentCandyIndex].name}" class="candy-image">
                <h3>${candies[currentCandyIndex].name}</h3>
                <p>${candies[currentCandyIndex].description}</p>
                <button class="remove-candy">Remove</button>
            `;
            candyContainer.appendChild(newCandy);

            // Add event listener to the new remove button
            newCandy.querySelector('.remove-candy').addEventListener('click', () => {
                candyContainer.removeChild(newCandy);
            });

            currentCandyIndex++;
        } else {
            alert('No more candies to add!');
        }
    });

    // Highlight current section in navigation
    const sections = document.querySelectorAll('.section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === `#${id}`) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => observer.observe(section));
});
