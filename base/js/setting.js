// color-theif
const colorThief = new ColorThief();
const img = document.getElementById("poster-img");
const box = document.querySelector('#poster');
const getColorFun = () => {
    var color = colorThief.getColor(img);
    let [R, G, B] = color;
    if (RGBtoHSL(R, G, B)[2] > 50) {
        var element = `<style>:root{--background-color:rgb(${R}, ${G}, ${B});}#poster-text{color:#000;}.partition-name,.link-name,.link-explain,.link-ping,.said h3,.said h4,.said h5,.said a{color:#000;}</style>`;
    } else {
        var element = `<style>:root{--background-color:rgb(${R}, ${G}, ${B});}</style>`;
    }
    box.innerHTML = element;
};

if (img.complete) {
    getColorFun();
} else {
    img.addEventListener('load', function () {
        getColorFun();
    });
}

readTextFile("./base/list.json", function (text) {
    data = JSON.parse(text);
    let obj = data;
    for (i in obj) {
        var link_box = '';
        for (l in obj[i]){
            link_box = link_box + '<a class="link-box" href="'+obj[i][l]["url"]+'"><div class="link-image"><img src="'+obj[i][l]["icon"]+'"></div><div class="link-name">'+obj[i][l]["name"]+'</div><div class="link-explain">'+obj[i][l]["explain"]+'</div><div class="link-ping" id="'+obj[i][l]["name"]+'"></div></a>';
        }
        document.write('<div class="partition"><div class="partition-name" id="'+i+'">- '+i+' -</div><div class="partition-box">'+link_box+'</div></div>')
    }
});

/* <div class="partition">
            <div class="partition-name" id="dm">- 动漫 -</div>
            <div class="partition-box">

                <a class="link-box" href="#">
                    <div class="link-image">
                        <img src="./base/img/favicon.png">
                    </div>
                    <div class="link-name">###</div>
                    <div class="link-explain">#######</div>
                    <div class="link-ping" id="####">

                    </div>
                </a>

                <a class="link-box" href="#">
                    <div class="link-image">
                        <img src="./base/img/favicon.png">
                    </div>
                    <div class="link-name">###</div>
                    <div class="link-explain">#######</div>
                    <div class="link-ping" id="pingtest">
                        <div class="ping-gray"></div>Ping~
                    </div>
                </a>

            </div>
        </div> */