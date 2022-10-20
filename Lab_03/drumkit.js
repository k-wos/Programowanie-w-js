document.addEventListener('keypress', onKeyPress)

function onKeyPress(event){
    const key = event.key
    let sound = ''
    switch(key){
        case 'a':
            sound = 'clap'
            break
        case 'w':
            sound = 'kick'
            break
        case 's':
            sound = 'boom'
            break
        case 'd':
            sound = 'snare'
            break
    }
    
    
    
    playSound(sound)
    console.log(key)
}

function playSound(sound){
    const audioTag = document.querySelector('#'+ sound)
    audioTag.currentTime = 0
    audioTag.play()
   
}