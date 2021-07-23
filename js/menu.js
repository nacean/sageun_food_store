const First_Menu_Button = document.getElementById("menu_first");
const Second_Menu_Button = document.getElementById("menu_second");

const All_Things = document.getElementById("all_things");
const About_Say = document.getElementById("About_blah");

First_Menu_Button.addEventListener("click",Hide_About);
Second_Menu_Button.addEventListener("click",Hide_Main);

function Hide_Main() {
    About_Say.classList.remove(hidden_name);
    All_Things.classList.add(hidden_name);
    All_Things.classList.remove("First_FadeIn");
    // All_Things.classList.add("FadeIn");
    Second_Menu_Button.style.backgroundColor = "rgb(209, 207, 207)";
    First_Menu_Button.style.removeProperty("background-color");
}
function Hide_About() {
    All_Things.classList.remove(hidden_name);
    About_Say.classList.add(hidden_name);
    // About_Say.classList.add("FadeIn");
    Second_Menu_Button.style.removeProperty("background-color");
    First_Menu_Button.style.backgroundColor = "rgb(209, 207, 207)";
}