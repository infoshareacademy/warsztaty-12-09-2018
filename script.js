const makeBlackSquare = (x, y) => {
  const div = document.createElement('div')

  div.classList.add('square')
  div.classList.add('square--black')

  div.style.left = x + 'px'
  div.style.top = y + 'px'

  document.body.appendChild(div)
}

const render = () => {
  document.body.innerHTML = ''

  positionsOfSquares.forEach((position) => {
    makeBlackSquare(position.x, position.y)
  })
}

const positionsOfSquares = [
  { x: 200, y: 100 },
  { x: 300, y: 100 },
  { x: 300, y: 200 },
  { x: 300, y: 300 },
]

render()

document.body.addEventListener(
  'click',
  (event) => {
    firebase.database().ref('/squares').push(
      { x: event.pageX, y: event.pageY }
    )

    render()
  }
)