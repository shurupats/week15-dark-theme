function changeTheme(){
    let theme = themeSelector.value;
    let newThemePath=`./assets/css/${theme}.css`;

    let themeLink=document.getElementById(`theme-link`);
    themeLink.setAttribute(`href`, newThemePath);
}

let themeSelector =document.getElementById(`theme`);
themeSelector.addEventListener("change", changeTheme); 