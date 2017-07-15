








window.onload = function () {


   var tabHead = document.querySelector('.tabs-header');
    if(tabHead){
        tabHead.addEventListener('click', fTabs, false);
    }
    var footTab = document.querySelector('.menu-down');
    if (footTab){footTab.addEventListener('click', footerTabs, false);
    }
    var tabH = document.getElementsByClassName('tab-h');
    var tabD = document.getElementsByClassName('menu-down-a');
    var tabM = document.getElementsByClassName('menu-sec');

    setTimeout(function () {
        var preloader = document.getElementById('page-preloader');
        if( !preloader.classList.contains('done') ){
            preloader.classList.add('done');
        }
    }, 1000);

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

    function lets (event) {
        var startGo = document.getElementById('gostart');
        if(startGo){
            startGo.addEventListener('click', visi, false)
        }
        function visi() {
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




    function autoSlider() {
        var left = 0;
        var timer;
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

    autoSlider();
    function autoSliderG() {
        var left = 0;
        var timer;
        timer = setTimeout(function () {
            var polosaG = document.getElementById('polosa2');
            left = left - 128;
            if (left < -256) {
                left = 0;
                clearTimeout(timer);
            }
            polosaG.style.left = left + 'px';
            autoSliderG()

        }, 1000);
    }

    autoSliderG();


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
    menu();



    function readMore() {


        var showT = document.getElementById('morea');
        var hideT = document.getElementById('morea2');
        if(showT){
            showT.addEventListener('click', showText, false);
        }
        if(hideT){
            hideT.addEventListener('click', hideText, false)
        }


        function showText() {
            document.querySelector('.aboutbody').style.height = 600 + 'px';
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






}


function showC() {

    var show;
    var hid;
    show = document.getElementsByClassName('menu-cont');
    if (show == false) {
        document.getElementById('contactsss').style.display = 'block';
        document.getElementById('contactsss').style.opacity = 1;
        // document.getElementById('contactsss').style.background = 'red';
    }
    else {
        document.getElementById('contactsss').style.display = 'block';
    }

    document.querySelector('.close-cont').addEventListener('click', closeModal);
            var modalCont = document.querySelector('.contactsss');
            function closeModal(event) {
                if (event.target = onclick) {

                }
                else {

                    document.getElementById('contactsss').style.display = 'none';
                }
            }
}


function updown() {
    var updownElem = document.getElementById('updown');

    var pageYLabel = 0;

    updownElem.onclick = function() {
        var pageY = window.pageYOffset || document.documentElement.scrollTop;

        switch (this.className) {
            case 'up':
                pageYLabel = pageY;
                window.scrollTo(0, 0);
                this.className = 'down';
                break;

            case 'down':
                window.scrollTo(0, pageYLabel);
                this.className = 'up';
        }

    }
    window.onscroll = function() {
        var pageY = window.pageYOffset || document.documentElement.scrollTop;
        var innerHeight = document.documentElement.clientHeight;

        switch (updownElem.className) {
            case '':
                if (pageY > innerHeight) {
                    updownElem.className = 'up';
                }
                break;

            case 'up':
                if (pageY < innerHeight) {
                    updownElem.className = '';
                }
                break;

            case 'down':
                if (pageY > innerHeight) {
                    updownElem.className = 'up';
                }
                break;

        }
    }

}
updown();