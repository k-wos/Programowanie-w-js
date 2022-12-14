
const sounds = {
    'q': './sounds/clap.wav',
    'w':'./sounds/boom.wav',
    'e':'./sounds/kick.wav',
    'r':'./sounds/snare.wav'
};



const channels =[
    [],
    [],
    [],
    []
];
let isRecording = false;
let currentChannel = 0;

document.addEventListener('keypress', event=>{
    if(sounds.hasOwnProperty(event.key)){
        const audioElement = new Audio(sounds[event.key]);
        audioElement.play();

        if(isRecording){
            channels[currentChannel].push(event.key);
        }
    }
})


document.querySelector('#recordButton').addEventListener('click',() =>{
    isRecording = true;
    console.log(isRecording)
});

document.querySelector('#stopButton').addEventListener('click',() =>{
    isRecording = false;
    currentChannel = (currentChannel + 1) % 4;
    console.log(isRecording)
});

document.querySelector('#playButton').addEventListener('click',()=>{
    for(let i=0; i<4; i++){
        const channel = channels[i];
        for(let j=0; j<channel.length; j++){
            setTimeout(()=>{
                const audioElement = new Audio(sounds[channel[j]]);
                audioElement.play();
                console.log(channel[j])
            }, j*1000);
        }
    }
})

function playChannel(channelNumber){
    const channel = channels[channelNumber];
    for(let i = 0; i< channel.length; i++){
        setTimeout(()=>{
            const audioElement = new Audio(sounds[channel[i]]);
            audioElement.play();
        }, i*1000);
    }
}

document.querySelector('#channel1Button').addEventListener('click', ()=>{
    playChannel(0);
})
document.querySelector('#channel2Button').addEventListener('click', ()=>{
    playChannel(1);
})
document.querySelector('#channel3Button').addEventListener('click', ()=>{
    playChannel(2);
})
document.querySelector('#channel4Button').addEventListener('click', ()=>{
    playChannel(3);
})
document.querySelector('#allChannels').addEventListener('click', ()=>{
   for(let i =0;i<4;i++){
    playChannel(i);
   }
})



