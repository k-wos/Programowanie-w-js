document.addEventListener('keypress', onKeyPress)

function onKeyPress(event){
    const key = event.key
    let sound = ''
    switch(key){
        case 'q':
            sound = 'clap'
            break
        case 'w':
            sound = 'kick'
            break
        case 'e':
            sound = 'boom'
            break
        case 'r':
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
var song = [];

function startRecording()