let container= document.querySelector('.container')
let lorem= `lorem ipsum ...`
container.innerHTML= `
    <button onclick="document.querySelector('.box').innerHTML= ${lorem}" 
    class="btn">fill the box with lorem</button>
    <div class="box">sth here...</div>
`