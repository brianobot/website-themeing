// define variables to hold the classname for the 2 themes
// define variable to hold reference to the switch button
let theme_dark = 'theme-dark';
let theme_light = 'theme-light';
let theme_switch = document.getElementById("theme-switch");

// function to set to a given theme/color-scheme
function setTheme(themeName){
    console.log("setting theme to ", themeName);
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
    if (themeName === theme_dark){
        theme_switch.innerHTML = "Switch  ☀"
    } else {
        theme_switch.innerHTML = "Switch  🌙"
    }
}

// function to toggle between light and dark theme
function toggleTheme(){
    if (localStorage.getItem('theme') === theme_dark){
        setTheme(theme_light);
    } else {
        setTheme(theme_dark);
    }
}

// Immediately invoke the function to set the theme on initial load
(function (){
    if (localStorage.getItem('theme') === theme_dark){
        setTheme(theme_dark);
    } else {
        setTheme(theme_light);
    }
})();