//Sorry I'm turning this in so late. I just gave up my second job I was working so I could have more time for homework. Working two jobs was too much for school.


//Was trying out the bonus but couldn't figure out how to do it. Just gonna move on to the next homework assignements
// function tile(url, left, bottom, width, height){
//   for(let h=0;h<height;h++){
//     for(let w=0;w<width;w++){
//         newImage(url, left, + w*100, bottom+h*100)
//     }
//   }
// }

// let horizon = window.innerWidth 
// let heightOfSky = window.innerWidth-horizon
// let heightOfGrass = horizon

// tile('assets/sky.png', 100, horizon, window.innerWidth/100, heightOfSky/100)
// tile('assets/grass.png', 0, 0, 300, 500)


//Part 3 | Refactoring using a function
function newImage(url, left, bottom){
  let newObject = document.createElement('img')
  newObject.src = url
  newObject.style.position = 'fixed'
  newObject.style.left = left + 'px'
  newObject.style.bottom = bottom + 'px'
  document.body.append(newObject)
  return newObject
}

newImage('assets/green-character.gif', 100, 100)
newImage('assets/pine-tree.png', 450, 200)

//Part 4 | Adding more images to the webpage
newImage('assets/tree.png', 200, 300)
newImage('assets/pillar.png', 350, 100)
newImage('assets/crate.png', 150, 200)
newImage('assets/well.png', 500, 425)


//Part 5 | Adding another item users can pick up


  //Part 5 cont'd... This is what I had before the homework asked if "document.createElement" was used more
  // function newItem(url, left, bottom)
  // let item = document.createElement('img')
  // item.src = url
  // item.style.position = 'fixed'
  // item.style.left = left + 'px'
  // item.style.bottom = bottom + 'px'
  // document.body.append(item)

  function newItem(url, left, bottom){
    let newObject = newImage(url, left, bottom)

    newObject.addEventListener('dblclick', function(){
      newObject.remove()
    })
  }
  
  newItem('assets/sword.png', 500, 405)
  newItem('assets/shield.png', 165, 185)
  newItem('assets/staff.png', 600, 100)


  //Bonus - Adding background images