/*[
  {
    "name": "Great Pyramid of Giza",
    "summary": "The largest Egyptian pyramid, it served as the tomb of pharaoh Khufu, who ruled during the Fourth Dynasty of the Old Kingdom. The pyramid is the oldest of the Seven Wonders of the Ancient World, and the only wonder that has remained largely intact.",
    "location": "Giza, Egypt, Africa",
    "build_year": -2560,
    "time_period": "Ancient",
    "links": {
      "wiki": "https://en.wikipedia.org/wiki/Great_Pyramid_of_Giza",
      "britannica": "https://www.britannica.com/place/Great-Pyramid-of-Giza",
      "google_maps": "https://www.google.com/maps/place/The+Great+Pyramid+of+Giza/@29.9791705,31.1342046,17z/data=!3m1!4b1!4m6!3m5!1s0x14584587ac8f291b:0x810c2f3fa2a52424!8m2!3d29.9791705!4d31.1342046!16zL20vMDM2bWs",
      "trip_advisor": "https://www.tripadvisor.com/Attraction_Review-g294202-d308887-Reviews-Great_Pyramid_of_Cheops_Khufu-Giza_Giza_Governorate.html",
      "images": [
        "https://upload.wikimedia.org/wikipedia/commons/e/e3/Kheops-Pyramid.jpg",
        "https://cdn.britannica.com/75/178475-050-E9212E3D/Pyramid-of-Khufu-Giza-Egypt.jpg",
        "https://cdn.britannica.com/06/122506-050-C8E03A8A/Pyramid-of-Khafre-Giza-Egypt.jpg",
        "https://cdn.britannica.com/87/194387-050-CC38D282/Cross-section-interior-Great-Pyramid-of-Khufu.jpg"
      ]
    },
    "categories": [
      "SevenWonders",
      "Civ5",
      "Civ6"
    ]
  }
]*/

const wonderDetails = document.getElementById('wonder-details');

const wonderId = new URLSearchParams(window.location.search).get('id');

axios.get(`https://www.world-wonders-api.org/v0/wonders/${wonderId}`)
 .then(response=>{
  const wonder=response.data;
  wonderDetails.innerHTML = `
    <h2>${wonder.name}</h2>
    <p>${wonder.summary}</p>
    <p>${wonder.location}</p>
    <p>${wonder.build_year}</p>
    <p>${wonder.time_period}</p>
    <img src="${wonder.links.images[0]}" alt="${wonder.name}">
  `;
}) .catch(error => {
  console.error('Error fetching wonder details:', error);
});