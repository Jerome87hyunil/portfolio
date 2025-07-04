// Custom scripts for portfolio 

document.addEventListener('DOMContentLoaded', function () {
    var typedOptions = {
        strings: ['풀스택 개발자', '인디해커'],
        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    };
    var typed = new Typed('#typed-text', typedOptions);

    VANTA.WAVES({
        el: "#home",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0x1a2330,
        shininess: 25.00,
        waveHeight: 15.00,
        waveSpeed: 0.75,
        zoom: 0.75
    });
}); 