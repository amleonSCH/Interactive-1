//Slect HTML Elements 
const map = document.querySelector("#map");
const mapBtn = document.querySelector("#map-button");
const mapStatus = document.querySelector("#mapStatus");
const roomName = document.querySelector("#room-name");
const roomDescription = document.querySelector("#room-description");
const hallBtn = document.querySelector("#hall-button");
const storageBtn = document.querySelector("#storage-button");
const libraryBtn = document.querySelector("#library-button");

// const groceries = ["apple", "banana", "cherry"];

// List of Room
const rooms = {
    hall: {
        name: "Hall",
        description: "You are in a hallway, it's dimly lit.",
        map: "assets/images/02_floorplan.png",
    },
    storage: {
        name: "Storage",
        description: "Youare in a Storage room,",
        map: "assets/images/03_floorplan.png",
    },
     library: {
        name: "Library",
        description: "You are in a Library, be studious,",
        map: "assets/images/04_floorplan.png",
    },
};

// Remember which room the person is in
let currentRoom = "hall";

// remember the state of the map[hidden/nont hidden]
let mapVisible = false;

// SHOW ROOM 
function showRoom() {
    const room = rooms[currentRoom];
    roomName.textContent = room.name;
    roomDescription.textContent = room.description;
    map.src = room.map;
}

// show the current room on the page
function toggleMap () {
    mapVisible = !mapVisible; 

    if (mapVisible) {
        map.style.display = "block";
        mapBtn.textContent = "Hide map";
        mapStatus.textContent = "The map is visible!";
    } else {
        map.style.display = "none";  
        mapBtn.textContent = "Show map";
        mapStatus.textContent = "The map is hidden!";
    }
}

// Move to new room 
function goToRoom(roomName){
    currentRoom = roomName;
    showRoom();
}

// Button Interaction 
mapBtn.addEventListener("click", toggleMap);

hallBtn.addEventListener("click", function(){
goToRoom("hall");
}) 

storageBtn.addEventListener("click", function(){
goToRoom("storage");
}) 

libraryBtn.addEventListener("click", function(){
goToRoom("library");
}) 

showRoom();