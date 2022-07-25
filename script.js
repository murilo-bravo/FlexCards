let cards = document.querySelectorAll('.cards')

for ( let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('click', function() {
    cleanActive()
    this.classList.toggle('active')
  })
}

function cleanActive() {
    cards.forEach(function (tab) {
      tab.classList.remove('active')
    })
}