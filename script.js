// ---------- Elements ----------
const lostTab = document.getElementById("lostTab");
const foundTab = document.getElementById("foundTab");
const lostForm = document.getElementById("lostForm");
const foundForm = document.getElementById("foundForm");

// ---------- 1. Tab switch ----------
lostTab.addEventListener("click", function () {
    lostForm.style.display = "block";
    foundForm.style.display = "none";
    lostTab.className = "tab active";
    foundTab.className = "tab";
});

foundTab.addEventListener("click", function () {
    lostForm.style.display = "none";
    foundForm.style.display = "block";
    foundTab.className = "tab active";
    lostTab.className = "tab";
});

// ---------- 2. Aajker date default ----------
const today = new Date().toISOString().split("T")[0];
document.getElementById("lDate").value = today;
document.getElementById("fDate").value = today;

// ---------- 3. Lost form validation ----------
const lName = document.getElementById("lName");
const lCategory = document.getElementById("lCategory");
const lLocation = document.getElementById("lLocation");
const lDate = document.getElementById("lDate");
let lostError = lostForm.querySelectorAll(".error");

lostForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let ok = true;

    if (lName.value.trim() === "") {
        lostError[0].innerHTML = "Item name is required.";
        ok = false;
    } else {
        lostError[0].innerHTML = "";
    }

    if (lCategory.value === "") {
        lostError[1].innerHTML = "Please select a category.";
        ok = false;
    } else {
        lostError[1].innerHTML = "";
    }

    if (lLocation.value.trim() === "") {
        lostError[2].innerHTML = "Lost location is required.";
        ok = false;
    } else {
        lostError[2].innerHTML = "";
    }

    if (lDate.value === "") {
        lostError[3].innerHTML = "Lost date is required.";
        ok = false;
    } else {
        lostError[3].innerHTML = "";
    }

    if (ok) {
        alert("Lost item report submitted!");
        lostForm.reset();
        lDate.value = today;
    }
});

// ---------- 4. Found form validation ----------
const fName = document.getElementById("fName");
const fCategory = document.getElementById("fCategory");
const fKept = document.getElementById("fKept");
const fDate = document.getElementById("fDate");
let foundError = foundForm.querySelectorAll(".error");

foundForm.addEventListener("submit", function (event) {
    event.preventDefault();
    let ok = true;

    if (fName.value.trim() === "") {
        foundError[0].innerHTML = "Item name is required.";
        ok = false;
    } else {
        foundError[0].innerHTML = "";
    }

    if (fCategory.value === "") {
        foundError[1].innerHTML = "Please select a category.";
        ok = false;
    } else {
        foundError[1].innerHTML = "";
    }

    if (fKept.value.trim() === "") {
        foundError[2].innerHTML = "Please write where the item is kept.";
        ok = false;
    } else {
        foundError[2].innerHTML = "";
    }

    if (fDate.value === "") {
        foundError[3].innerHTML = "Found date is required.";
        ok = false;
    } else {
        foundError[3].innerHTML = "";
    }

    if (ok) {
        alert("Found item report submitted!");
        foundForm.reset();
        fDate.value = today;
    }
});
