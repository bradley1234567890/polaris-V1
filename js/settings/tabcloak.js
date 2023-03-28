/*
Hello epic hacker (maybe skid) you are looking at one of the many scripts that powers the site,
this script has extra comments and info to help you understand what is going on.
This JavaScript code defines functions that manage the state of a web page's tab,
such as its title and icon, and its theme.
It retrieves a JSON object from local storage, which contains the current state of the tab,
and updates the web page's elements with the stored values.
The code provides functions to modify the tab state and settings, such as setTitle, setFavicon,
resetTab, setTheme, and setThemeColor.
These functions update the web page's elements and store the updated state in local storage.
*/

// Check if there is a saved tab data in localStorage
var tab = localStorage.getItem("tab");

if (tab) {
  // If there is saved data, try to parse it
  try {
    var tabData = JSON.parse(tab);
  } catch {
    // If there is an error in parsing, create an empty object
    var tabData = {};
  }
} else {
  // If there is no saved data, create an empty object
  var tabData = {};
}

// Set the title and icon fields to the values saved in tabData, if they exist
if (tabData.title) {
  document.getElementById("title").value = tabData.title;
}
if (tabData.icon) {
  document.getElementById("icon").value = tabData.icon;
}

// Default tab settings
var settingsDefaultTab = {
  title: "Settings | 3kh0",
  icon: "./images/logo.png",
};

// Function to set the document title
function setTitle(title = "") {
  if (title) {
    document.title = title;
  } else {
    document.title = settingsDefaultTab.title;
  }

  // Update the saved tab data with the new title
  var tab = localStorage.getItem("tab");

  if (tab) {
    // If there is saved data, try to parse it
    try {
      var tabData = JSON.parse(tab);
    } catch {
      // If there is an error in parsing, create an empty object
      var tabData = {};
    }
  } else {
    // If there is no saved data, create an empty object
    var tabData = {};
  }

  if (title) {
    // If there is a new title, update tabData
    tabData.title = title;
  } else {
    // If the title is empty, delete the title field from tabData
    delete tabData.title;
  }

  // Save the updated tab data to localStorage
  localStorage.setItem("tab", JSON.stringify(tabData));
}

// Function to set the favicon
function setFavicon(icon) {
  if (icon) {
    document.querySelector("link[rel='icon']").href = icon;
  } else {
    document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
  }

  // Update the saved tab data with the new icon
  var tab = localStorage.getItem("tab");

  if (tab) {
    // If there is saved data, try to parse it
    try {
      var tabData = JSON.parse(tab);
    } catch {
      // If there is an error in parsing, create an empty object
      var tabData = {};
    }
  } else {
    // If there is no saved data, create an empty object
    var tabData = {};
  }

  if (icon) {
    // If there is a new icon, update tabData
    tabData.icon = icon;
  } else {
    // If the icon is empty, delete the icon field from tabData
    delete tabData.icon;
  }

  // Save the updated tab data to localStorage
  localStorage.setItem("tab", JSON.stringify(tabData));
}

function setCloak(cloak) { // applies only to premade cloaks
  switch (cloak) {
    case "search": // Google Search
      setTitle("Google");
      setFavicon("/assets/fonts/icons/Google.ico");
      location.reload();
      break;
    case "drive": // Google Drive
      setTitle("My Drive - Google Drive");
      setFavicon("/assets/fonts/icons/Drive.ico");
      location.reload();
      break;
      case "librex": // LibreX
      setTitle("LibreX");
      setFavicon("");
      location.reload();
      break;
    case "youtube": // YouTube 
      setTitle("YouTube");
      setFavicon("");
      location.reload();
      break;  
    case "gmail": // Gmail
      setTitle("Gmail");
      setFavicon("/assets/fonts/icons/Gmail.ico");
      location.reload();
      break;
    case "classroom": // Google Classroom
      setTitle("Classes");
      setFavicon("");
      location.reload();
      break;
    case "canvas": // Canvas 
      setTitle("Canvas");
      setFavicon("/assets/fonts/icons/Canvas.ico");
      location.reload();
      break;
    case "zoom": // Zoom
      setTitle("Zoom");
      setFavicon("");
      location.reload();
      break;
      case "cornhub": // Cornhub
      setTitle("Cornhub");
      setFavicon("");
      location.reload();
      break;
      case "indivious": // Indivious
      setTitle("Indivious");
      setFavicon("");
      location.reload();
      break;
    case "khan": // Khan Academy
      setTitle("Dashboard | Khan Academy"); 
      setFavicon("");
      location.reload();
      break;
  }
}

// Function to reset the tab settings to default
function resetTab() {
  document.title = settingsDefaultTab.title;
  document.querySelector("link[rel='icon']").href = settingsDefaultTab.icon;
  document.getElementById("title").value = "";
  document.getElementById("icon").value = "";
  localStorage.setItem("tab", JSON.stringify({}));
}

// Function to set the theme
function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.body.setAttribute("theme", theme);
  document.body.style = "";
  localStorage.removeItem("theme_color");

  // Find the theme color from the themes array and set the color
  themes.forEach((palette) => {
    if (palette.theme == theme) {
      document.querySelector("#theme_color").value = palette.color;
    }
  });
}

// Function to set the custom theme color
function setThemeColor(theme) {
  localStorage.setItem("theme", "custom");
  localStorage.setItem("theme_color", theme);
  document.body.setAttribute("theme", "custom");
  document.body.style = `--theme: ${theme}; --background: ${getContrastHex(theme)}; --text: ${getColorHex(theme)}; --text-secondary: ${getColorHex(theme)};`;
}
// =======================
/*
More custom cloak tomfoolery(searchable dropdown)
*/

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function showccdrop() { // show
  document.getElementById("ccdrop").classList.toggle("show");
}
// the below has been stolen from w3schools
function search() {
  var input, filter, ul, li, a, i;
  input = document.getElementById("ccsearch"); // the search bar in the dropdown
  filter = input.value.toUpperCase();
  div = document.getElementById("ccdrop"); // dropdown(self-explainatory)
  a = div.getElementsByTagName("a");
  for (i = 0; i < a.length; i++) {
    txtValue = a[i].textContent || a[i].innerText;
    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      a[i].style.display = "";
    } else {
      a[i].style.display = "none";
    }
  }
}
