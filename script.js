const makeBlackSquare = (x, y) => {
  const div = document.createElement('div')

  div.classList.add('square')
  div.classList.add('square--black')

  div.style.left = x + 'px'
  div.style.top = y + 'px'

  document.body.appendChild(div)
}

makeBlackSquare(200, 100)
makeBlackSquare(300, 100)

