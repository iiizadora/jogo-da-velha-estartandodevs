const espacoJogo = document.querySelectorAll('.space');

const jog1 = 'X'
const jog2 = 'O'

iniciarJogo();


function iniciarJogo() {
  let jogadorDaVez = true;
  for (let espacoPreenchido of espacoJogo) {

    espacoPreenchido.addEventListener("click", function () {
      if (espacoPreenchido.innerHTML == 0  ) {

        if (jogadorDaVez) {

          const pieceX = document.querySelector('.jog1')
          espacoPreenchido.appendChild(pieceX);

                
        } else if( !jogadorDaVez ) {
          
          const pieceO = document.querySelector('.jog2')
          espacoPreenchido.appendChild(pieceO);
          
        }
      }
      });
  }
}



