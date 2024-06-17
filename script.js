document.onkeydown = function(e){
    e = e || window.event;
    var key = e.which || e.keyCode;
	var videoContainerElement = document.getElementById('eitv-player-container');
	var player = videoContainerElement.player;
    if(key===77) /*M*/{
                if (player.isMuted()) {
                    player.unmute();
                }
                else {
                    player.mute();
                }
    }
	if(key===39) /*Seta para direita*/ {
                player.seek(Math.min(player.getDuration(), player.getCurrentTime() + 5));
    }
	if(key===37) /*Seta para esquerda*/{
                player.seek(Math.min(player.getDuration(), player.getCurrentTime() - 5));
    }
	if(key===38) /*Seta para cima*/{
                player.setVolume(Math.min(100, player.getVolume() + 10));
    }
	if(key===40) /*Seta para baixo*/{
                player.setVolume(Math.min(100, player.getVolume() - 10));
    }
	if(key===80) /*P*/{
                if (player.isPlaying()) {
                    player.pause();
                }
                else {
                    player.play();
                }
    }
	if(key===190) /*Ponto(.)*/{
                player.seek(Math.min(player.getDuration(), player.getCurrentTime() + 1/25));
    }
	if(key===188) /*Vírgula(,)*/{
                player.seek(Math.min(player.getDuration(), player.getCurrentTime() - 1/25));
    }
}
