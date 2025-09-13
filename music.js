const tiles = document.querySelectorAll('.tile');
    const audioPlayer = document.getElementById('audioPlayer');
    let activeTile = null;

    tiles.forEach(tile => {
      tile.addEventListener('click', () => {
        const src = tile.getAttribute('data-src');
        audioPlayer.src = src;
        audioPlayer.play();

        if (activeTile) {
          activeTile.classList.remove('active');
        }
        tile.classList.add('active');
        activeTile = tile;
      });
    });
function toggleMenu() {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("open");
  }
  