document.addEventListener("DOMContentLoaded", () => {
    const wonderDetails = document.getElementById('wonder-details');
    const storedWonder = localStorage.getItem('selectedWonder');

    if (storedWonder) {
        const wonder = JSON.parse(storedWonder);
        wonderDetails.innerHTML = `
            <div class="details-imag">
                <img src="${wonder.links.images[0]}" alt="${wonder.name}">
                <img src="${wonder.links.images[1]}" alt="${wonder.name}">
                <img src="${wonder.links.images[2]}" alt="${wonder.name}">
            </div>
            <h2>${wonder.name}</h2>
            <p>${wonder.summary}</p>
            <p><strong>Location:</strong> ${wonder.location}</p>
            <p><strong>Year Built:</strong> ${wonder.build_year}</p>
            <p><strong>Time period:</strong> ${wonder.time_period}</p>
            <div class="details-links">
                <strong>For more information:</strong>
                <a href="https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza"><strong>wik - </strong></a>
                <a href="https://www.britannica.com/place/Great-Pyramid-of-Giza"><strong>britannica - </strong></a>
                <a href="https://www.tripadvisor.com/Attraction_Review-g294202-d308887-Reviews-Great_Pyramid_of_Cheops_Khufu-Giza_Giza_Governorate.html"><strong>trip_advisor - </strong></a>
                <a href="https://www.google.com/maps/place/The+Great+Pyramid+of+Giza/@29.9791705,31.1342046,17z/data=!3m1!4b1!4m6!3m5!1s0x14584587ac8f291b:0x810c2f3fa2a52424!8m2!3d29.9791705!4d31.1342046!16zL20vMDM2bWs"><strong>google maps</strong></a>
            </div>`;
    } else {
        wonderDetails.innerHTML = `<p>No wonder details available.</p>`;
    }
});