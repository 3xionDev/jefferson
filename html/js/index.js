function toggleCite() {
    if (document.getElementById("works-cited-content").innerHTML == "Click to reveal references") {
        document.getElementById("works-cited-content").innerHTML = "https://learning.mheducation.com/ <br>https://en.wikipedia.org/wiki/Presidency_of_Thomas_Jefferson <br>https://www.whitehousehistory.org/bios/thomas-jefferson <br>https://www.presidency.ucsb.edu/documents/thomas-jefferson-event-timeline"
    } else {
        document.getElementById("works-cited-content").innerHTML = "Click to reveal references"
    }

}