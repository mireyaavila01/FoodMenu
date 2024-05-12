"use strict";
let menu = {
    drinks: [
        "Water", "Tea", "Sweet Tea",
        "Coke", "Dr. Pepper", "Sprite"
    ],
    entrees: [
        "Hamburger w/ Fries",
        "Grilled Cheese w/ Tater Tots",
        "Grilled Chicken w/ Veggies",
        "Chicken Fried Steak w/ Mashed Potatoes",
        "Fried Shrimp w/ Coleslaw",
        "Veggie Plate"
    ],
    desserts: [
        "Cheesecake", "Chocolate Cake", "Snickerdoodle Cookie"
    ]
};

const menuCategories = document.getElementById("menuCategories");
const drinkMenu = document.getElementById("drinkMenu");
const entreesMenu = document.getElementById("entreesMenu");
const dessertsMenu = document.getElementById("dessertsMenu");

const drinksDropdown = document.getElementById("drinksDropdown");
const entreesDropdown = document.getElementById("entreesDropdown");
const dessertsDropdown = document.getElementById("dessertsDropdown");

window.onload = function () {
    menuCategories.onchange = hideOrShowDrinkMenu;
    hideOrShowDrinkMenu();
    //hideOrShowDrinkMenu.onchange = displayDrinkMenu;
    //displayEntreesMenu()
   // displayDessertsMenu()

};

function hideOrShowDrinkMenu() {
    //let menuCategory = document.getElementById("menuCategories");
    let selectedCategory = menuCategories.value;

    if (selectedCategory === "drinks") {
        drinksDropdown.style.visibility = "visible"; 
        displayDrinkMenu();
    }
    else if(selectedCategory === "entrees"){
        entreesDropdown.style.visibility = "visible";
        displayEntreesMenu();
    }
    else if (selectedCategory === "desserts"){
        dessertsDropdown.style.visibility = "visible";
        displayDessertsMenu();
    }
    else{
        drinksDropdown.style.visibility = "hidden";
        entreesDropdown.style.visibility = "hidden";
        dessertsDropdown.style.visibility = "hidden";
    }
}

function displayDrinkMenu() {

    let newOption = document.createElement("option");
    newOption.textContent = "Select a Drink";
    newOption.value = "";
    drinkMenu.appendChild(newOption);

    for (let i = 0; i < menu.drinks.length; i++) {
        let newOption = document.createElement("option");
        newOption.textContent = menu.drinks[i];
        newOption.vale = menu.drinks[i];
        drinkMenu.appendChild(newOption);
    }
}

function displayEntreesMenu() {
    let newOption = document.createElement("option");
    newOption.textContent = "Select a Entree";
    newOption.value = "";
    entreesMenu.appendChild(newOption);

    for (let i = 0; i < menu.entrees.length; i++) {
        let newOption = document.createElement("option");
        newOption.textContent = menu.entrees[i];
        newOption.vale = menu.entrees[i];
        entreesMenu.appendChild(newOption);

    }

}


function displayDessertsMenu() {
    let newOption = document.createElement("option");
    newOption.textContent = "Select a Dessert";
    newOption.value = "";
    dessertsMenu.appendChild(newOption);

    for (let i = 0; i < menu.desserts.length; i++) {
        let newOption = document.createElement("option");
        newOption.textContent = menu.desserts[i];
        newOption.vale = menu.desserts[i];
        dessertsMenu.appendChild(newOption);

    }
}