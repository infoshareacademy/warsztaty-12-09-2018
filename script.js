window.addEventListener(
  'load',
  () => {
    const makeBlackSquare = (x, y) => {
      const div = document.createElement('div')

      div.classList.add('square')
      div.classList.add('square--black')

      div.style.left = x + 'px'
      div.style.top = y + 'px'

      document.body.appendChild(div)
    }

    const render = (positionsOfSquares) => {
      if (!positionsOfSquares) return

      const maxX = Math.max(
        ...positionsOfSquares.map(position => position.x)
      )
      const maxY = Math.max(
        ...positionsOfSquares.map(position => position.y)
      )

      document.body.innerHTML = ''

      document.body.style.width = (maxX + 10) + 'px'
      document.body.style.height = (maxY + 10) + 'px'

      positionsOfSquares.forEach((position) => {
        makeBlackSquare(position.x, position.y)
      })
    }

    const dbRef = firebase.database().ref('/squares')

    document.body.addEventListener(
      'click',
      (event) => {
        dbRef.push(
          { x: event.pageX, y: event.pageY }
        )

        render()
      }
    )

    dbRef.on(
      'value',
      (snapshot) => {
        const positionsOfSquares = Object.values(snapshot.val())

        render(positionsOfSquares)
      }
    )
  }
)
