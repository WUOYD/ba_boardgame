import { io } from 'socket.io-client'

export const socket = io(window.location.hostname + ':3000')

let fullscreen = false;

document.onclick = function (argument) {
    if(fullscreen == false){
        var conf = confirm("Bitte bestätigen für Vollbild!");
        var docelem = document.documentElement;
    
        if (conf == true) {
            if (docelem.requestFullscreen) {
                docelem.requestFullscreen();
            }
            else if (docelem.mozRequestFullScreen) {
                docelem.mozRequestFullScreen();
            }
            else if (docelem.webkitRequestFullScreen) {
                docelem.webkitRequestFullScreen();
            }
            else if (docelem.msRequestFullscreen) {
                docelem.msRequestFullscreen();
            }
        }
        fullscreen = true
    }

    document.addEventListener('fullscreenchange', function () {
        if (!document.fullscreenElement) {
            fullscreen = false
        }
    });

    document.addEventListener('mozfullscreenchange', function () {
        if (!document.mozFullScreenElement) {
            fullscreen = false
        }
    });

    document.addEventListener('webkitfullscreenchange', function () {
        if (!document.webkitFullscreenElement) {
            fullscreen = false
        }
    });

    document.addEventListener('msfullscreenchange', function () {
        if (!document.msFullscreenElement) {
            fullscreen = false
        }
    });
}

