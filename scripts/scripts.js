document.addEventListener("DOMContentLoaded", () => {
    const wondersList = document.getElementById('wonders-list');
    const details = document.getElementById("wonders-short-details");
    const storedWonders = localStorage.getItem('wonders');

    const wonders = storedWonders ? JSON.parse(storedWonders) : [];

    wonders.forEach(wonder => {
        const listItem = document.createElement('li');
        listItem.classList.add('wonder-item');

        listItem.innerHTML = `
            <div class="wonder-item-content">
                <a href="#" data-id="${wonder.id}" class="wonder-link">
                    <img src="${wonder.links.images[0]}" alt="${wonder.name}">
                    <p>${wonder.name}</p>
                </a>
            </div>`;

        listItem.addEventListener("mouseenter", () => {
            details.style.display = "block";
            details.innerHTML = `
                <div class="wonder-popup">
                    <h2>${wonder.name}</h2>
                    <p><strong>Location:</strong> ${wonder.location}</p>
                    <p><strong>Year Built:</strong> ${wonder.build_year}</p>
                    <h3>For More Information Click the Image</h3>
                </div>`;
        });

        listItem.addEventListener("mousemove", (e) => {
            const viewportWidth = window.innerWidth;

            if (e.pageX < viewportWidth * 0.6) {
                details.style.left = `${e.pageX + 15}px`;
            } else {
                details.style.left = `${e.pageX - details.offsetWidth - 15}px`;
            }
            details.style.top = `${e.pageY + 15}px`;
        });

        listItem.addEventListener("mouseleave", () => {
            details.style.display = "none";
        });

        listItem.querySelector('.wonder-link').addEventListener("click", (event) => {
            event.preventDefault();
            localStorage.setItem('selectedWonder', JSON.stringify(wonder));
            window.location.href = 'details.html?id=' + wonder.id;
        });

        wondersList.appendChild(listItem);
    });
});