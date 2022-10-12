let col1 = document.getElementById('color1')
let col2 = document.getElementById('color2')
let col3 = document.getElementById('color3')

  col1.style.backgroundColor = 'green' 

btnChange.addEventListener('click',()=>{
    if(col1.style.backgroundColor == 'green'){
        col2.style.backgroundColor="yellow"
        col3.style.backgroundColor="white"
        col1.style.backgroundColor="white"
    }
    else if(col2.style.backgroundColor == 'yellow'){
        col3.style.backgroundColor="red"
        col1.style.backgroundColor="white"
        col2.style.backgroundColor="white"

    }
    else if(col3.style.backgroundColor == 'red'){
        col1.style.backgroundColor="green"
        col2.style.backgroundColor="white"
        col3.style.backgroundColor="white"


    }
})