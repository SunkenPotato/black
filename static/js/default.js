
function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    }
    else {
        expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
}

function getCookie(c_name) {
    if (document.cookie.length > 0) {
        c_start = document.cookie.indexOf(c_name + "=");
        if (c_start != -1) {
            c_start = c_start + c_name.length + 1;
            c_end = document.cookie.indexOf(";", c_start);
            if (c_end == -1) {
                c_end = document.cookie.length;
            }
            return unescape(document.cookie.substring(c_start, c_end));
        }
    }
    return "";
}



function detectMob() {
    const toMatch = [
        /Android/i,
        /webOS/i,
        /iPhone/i,
        /iPad/i,
        /iPod/i,
        /BlackBerry/i,
        /Windows Phone/i
    ];
    
    return toMatch.some((toMatchItem) => {
        return navigator.userAgent.match(toMatchItem);
    });
}

function mobileUserAgreedToExperimental() {
    
}

if (detectMob()) {
    if (confirm("This website has not been optimized yet for mobile devices. Are you sure you want to continue?") || getCookie("mobileUnsupportedAgreed") == "true" || getCookie("mobileUnsupportedAgreed") == null) {
        createCookie("mobileUnsupportedAgreed", true, 15)
    } else {
        createCookie("mobileUnsupportedAgreed", false, 15)
        window.location.href = 'https://google.com'
    }
}


function getRandomColor() {
    let color;
    do {
        color = Math.floor(Math.random() * 16777215).toString(16);
        while (color.length < 6) {
            color = "0" + color;
        }
        color = "#" + color;
    } while (isTooDark(color));
    return color;
}

function isTooDark(color) {
    const r = parseInt(color.slice(1, 3), 16);
    const g = parseInt(color.slice(3, 5), 16);
    const b = parseInt(color.slice(5, 7), 16);

    const brightness = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
    return brightness < 0.4; 
}

const randomColor = getRandomColor();
document.documentElement.style.setProperty('--animate-color', randomColor);