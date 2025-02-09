function addItineraryItem() {
    const item = prompt("Enter itinerary item:");
    if (item) {
        const list = document.getElementById("itineraryList");
        const li = document.createElement("li");
        li.textContent = item;
        list.appendChild(li);
    }
}
function previewPhoto(event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            const img = document.createElement("img");
            img.src = e.target.result;
            document.getElementById("photoGallery").appendChild(img);
        }
        reader.readAsDataURL(file);
    }
}