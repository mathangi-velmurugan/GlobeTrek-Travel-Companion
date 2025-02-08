// Function to handle search
function searchDestinations() {
    let searchTerm = document.getElementById("search-input").value.toLowerCase();
    let results = document.getElementById("search-results");
    results.innerHTML = ""; // Clear previous results

    let destinations = {
        beach: [
            { name: "Bora Bora", image: "beach1.jpg" },
            { name: "Maldives", image: "beach2.jpg" }
        ],
        temple: [
            { name: "Angkor Wat", image: "temple1.jpg" },
            { name: "Meenakshi Temple", image: "temple2.jpg" }
        ],
        country: [
            { name: "Japan", image: "country1.jpg" },
            { name: "Switzerland", image: "country2.jpg" }
        ]
    };

    if (destinations[searchTerm]) {
        destinations[searchTerm].forEach(place => {
            let div = document.createElement("div");
            div.innerHTML = `<h3>${place.name}</h3><img src="${place.image}" width="200">`;
            results.appendChild(div);
        });
    } else {
        results.innerHTML = "<p>No results found</p>";
    }
}

// Function to clear search results
function clearSearch() {
    document.getElementById("search-input").value = "";
    document.getElementById("search-results").innerHTML = "";
}
