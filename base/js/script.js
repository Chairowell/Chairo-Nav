// RGB TO HSL
function RGBtoHSL(r, g, b) {
    r /= 255, g /= 255, b /= 255;
    var max = Math.max(r, g, b),
        min = Math.min(r, g, b);
    var h, s, l = (max + min) / 2;

    if (max == min) {
        h = s = 0; // achromatic
    } else {
        var d = max - min;
        s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
        switch (max) {
            case r:
                h = (g - b) / d + (g < b ? 6 : 0);
                break;
            case g:
                h = (b - r) / d + 2;
                break;
            case b:
                h = (r - g) / d + 4;
                break;
        }
        h /= 6;
    }
    return [Math.floor(h * 100), Math.round(s * 100), Math.round(l * 100)];
};

// Ping URL setting
function pingURL(url, id) {
    const p = new Ping();
    p.ping(url, function (err,data) {
        if (data > 20000) {
            data = '<div class="ping-red"></div>Timeout'
        };
        if (data <= 20000 & data >= 5000){
            data = '<div class="ping-yellow"></div>' + (data/1000) + 's'
        };
        if (data <= 5000){
            data = '<div class="ping-green"></div>' + (data/1000) + 's'
        }
        document.getElementById(id).innerHTML = data;
    });
};

// Random Number
function randomNum(minNum,maxNum){ 
    switch(arguments.length){ 
        case 1: 
            return parseInt(Math.random()*minNum+1,10); 
        break; 
        case 2: 
            return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
        break; 
            default: 
                return 0; 
            break; 
    } 
};

// JSON File Reader
function readTextFile(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, false);
    rawFile.onreadystatechange = function () {
        if (rawFile.readyState === 4 && rawFile.status == "200") {
            callback(rawFile.responseText);
        }
    }
    rawFile.send(null);
}

// PWA
window.addEventListener('load', function () {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./base/PWA/service-worker.js');
    }
});
