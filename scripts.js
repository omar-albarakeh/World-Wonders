document.addEventListener("DOMContentLoaded", () => {
    const wondersList = document.getElementById('wonders-list');
    const details = document.getElementById("wonders-short-details");

    axios.get('https://www.world-wonders-api.org/v0/wonders')
        .then(response => {
            const wonders = response.data;

            wonders.forEach(wonder => {
                const listItem = document.createElement('li');
                listItem.classList.add('wonder-item');

                listItem.innerHTML = `
                    <div class="wonder-item-content">
                        <a href="details.html?id=${wonder.id}">
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
                            <p><strong>Location:</strong> ${wonder.build_year}</p>
                            <h3>For More Information Click in the Image</h3>
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

                wondersList.appendChild(listItem);
            });
        })
        .catch(error => {
            console.error('Error fetching wonders:', error);
        });
});
