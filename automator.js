function connectAll() {
    let connects = document.querySelectorAll(`button`)
    connects.forEach((item) => {
       { if (item.innerText == 'Connect'){
            item.click();
        }}
            
    })
}

function likeAll(){
    let likes = document.querySelectorAll('span.reactions-react-button')
    console.log(likes[0].children[0])
    console.log(typeof(likes[0].children[0].getAttribute("aria-pressed")))
    likes.forEach((item) => {
        if (item.children[0].getAttribute("aria-pressed") == "false"){
            item.children[0].click()
            setTimeout(()=>{}, 1000)
        }  
    })
}

if (window.location.toString() == 'https://www.linkedin.com/mynetwork/' || window.location.toString() == 'https://www.linkedin.com/mynetwork/grow/'){
    if(confirm(`Connect to all people?`))
        connectAll()
}
    
else if(confirm(`Like all posts?`))
    likeAll()