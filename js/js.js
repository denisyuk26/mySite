menu();
autoSlider();







window.onload = function () {
    document.querySelector('.tabs-header').addEventListener('click', fTabs);
    document.querySelector('.menu-down').addEventListener('click', footerTabs);
    document.querySelector('#menu-cont').addEventListener('click', menuContacts);
    var tabH = document.getElementsByClassName('tab-h');
    var tabD = document.getElementsByClassName('menu-down-a');
    var tabM = document.getElementsByClassName('menu-sec');
    function fTabs(event) {
        console.log(event);
        if (event.target.className == 'tab-h') {
            //console.log(event.target.getAttribute('data-tab'));
            // dataTab номер вкладки которую нужно отобразить
            var dataTab = event.target.getAttribute('data-tab');
            // отключаю класс active
            var tabH = document.getElementsByClassName('tab-h');
            for (var i = 0; i < tabH.length; i++) {
                tabH[i].classList.remove('active');
            }
            event.target.classList.add('active');
            // все вкладки с содержимым
            var tabBody = document.getElementsByClassName('tab-b');
            for (i = 0; i < tabBody.length; i++) {
                if (dataTab == i) {
                    tabBody[i].style.display = 'block';
                }
                else {
                    tabBody[i].style.display = 'none';
                }
            }
        }


    }

    function footerTabs(event) {
        console.log(event);
        if (event.target.className == 'menu-down-a') {
            //console.log(event.target.getAttribute('data-tab'));
            // dataTab номер вкладки которую нужно отобразить
            var dataTab = event.target.getAttribute('data-tab');
            // отключаю класс active
            var tabD = document.getElementsByClassName('menu-down-a');
            for (var i = 0; i < tabD.length; i++) {
                tabD[i].classList.remove('active');
            }

            event.target.classList.add('active');
            // все вкладки с содержимым
            var tabBody = document.getElementsByClassName('tab-b');
            for (i = 0; i < tabBody.length; i++) {
                if (dataTab == i) {
                    tabBody[i].style.display = 'block';
                }
                else {
                    tabBody[i].style.display = 'none';
                }
            }
        }
    }

}




 function lets () {
    var startGo = document.getElementById('gostart').onclick = function () {
        var open = document.getElementById('enterpage');
        var text_hide = document.getElementById('welcome');
        var header = document.getElementById('headbody');
        var main_cont = document.getElementById('main-cont');
        // var menumob = document.getElementById('menu');
        var footer = document.getElementById('footer');
        if (startGo = true){
            // open.style.display = 'none';
            open.style.height = 0;
            open.style.opacity = 0;
            //open.style.width = 0;
            open.style.transition = 'all ease .4s';
            text_hide.style.left = -99999 + 'px';
            header.style.right = 0;
            // header.style.opacity = 1;
            text_hide.style.transition = 'all ease .4s';
            main_cont.style.transition = 'all ease 3s';
            footer.style.display = 'block';
            // menu_mob.style.left = -300 + 'px';
            // document.getElementById('menu-open').style.display = 'block';

        }
    }
}
lets();

var left = 0;
var timer;

function autoSlider() {
    timer = setTimeout(function () {
        var polosa = document.getElementById('polosa');
        left = left - 128;
        if (left < -256) {
            left = 0;
            clearTimeout(timer);
        }
        polosa.style.left = left + 'px';
        autoSlider()

    }, 1000);
}


function menu() {
    var openmenu;
    var closemenu;

    openmenu =  document.getElementById('menu-open');
    closemenu = document.getElementById('menu-close');

    // document.querySelector('#menu-open').onclick = menuShow;
    // document.querySelector('#menu-close').onclick = menuHide();
    openmenu.onclick = menuShow;
    closemenu.onclick = menuHide;




    function menuShow() {
        document.querySelector('#menu').style.left = 0;
        openmenu.style.display = 'none';
        closemenu.style.display = 'block';
    }
    function menuHide() {
        document.querySelector('#menu').style.left = -300 +'px';
        openmenu.style.display = 'block';
        closemenu.style.display = 'none';
    }
}

function menuContacts(event) {
    console.log(event);
    var dataHov = document.getElementsByClassName('tab-h');
    var dataCont = event.target.getAttribute('type');
    var tabBod =document.getElementsByClassName('tab-b');
    for (var i=2; i < tabBod.length; i++ ) {
    if (dataCont == 2) {
        tabBod[2].style.display = 'block';
        tabBod[0].style.display = 'none';
        tabBod[1].style.display = 'none';
        dataHov[1].classList.removeClass('active');
        dataHov[2].classList.removeClass('active');
    }
    else {
        tabBod[0].style.display = 'none';
        tabBod[1].style.display = 'none';
        tabBod[2].style.display = 'block';

    }
    }


    // var contacts = document.getElementById('contactss');

}



function readMore() {


     document.getElementById('morea').onclick = showText;
     document.getElementById('morea2').onclick = hideText;

    function showText() {
        document.querySelector('.aboutbody').style.height = 'auto';
        document.querySelector('#morea').style.display = 'none';
        document.querySelector('#morea2').style.display = 'block';


    }
    function hideText() {
        document.querySelector('.aboutbody').style.height = 140 + 'px';
        document.querySelector('.aboutbody').style.transition = 'all ease .9s';
        document.querySelector('#morea').style.display = 'block';
        document.querySelector('#morea2').style.display = 'none';


    }

}
readMore();



