console.log(localStorage.getItem('theme'));

if(localStorage.getItem('theme')!==null){
    const theme = localStorage.getItem('theme');
    document.getElementById('main').className = theme;
    if(theme==='light-theme'){
        document.getElementById('themeSelector').innerHTML="DARK MODE?";
    }
    else if(theme==='dark-theme'){
        document.getElementById('themeSelector').innerHTML="LIGHT MODE?";
    }
}
else{
    document.getElementById('main').className = 'light-theme';
}

function switchTheme(){
    const element = document.getElementById('main');
    if(element.className==='light-theme'){
        element.className='dark-theme';
        localStorage.setItem('theme', 'dark-theme');
        document.getElementById('themeSelector').innerHTML="LIGHT MODE?";
    }
    else{
        element.className='light-theme';
        localStorage.setItem('theme', 'light-theme');
        document.getElementById('themeSelector').innerHTML="DARK MODE?";
    }
}