
var number_of_drum_buttons = document.querySelectorAll(".drum").length;


function SoundConstrutor(file_mp3){
    this.file_mp3 = file_mp3;
    this.play_drum = function(){
        var audio = new Audio(file_mp3);
        audio.play();
    }
}

var sound_w = SoundConstrutor("sounds/crash.mp3");
var sound_a = SoundConstrutor("sounds/kick-bass.mp3");
var sound_s = SoundConstrutor("sounds/tom-1.mp3");
var sound_d = SoundConstrutor("sounds/tom-1.mp3");
var sound_j = SoundConstrutor("sounds/tom-2.mp3");
var sound_k = SoundConstrutor("sounds/tom-3.mp3");
var sound_l = SoundConstrutor("sounds/tom-4.mp3");

function main()
{
    for(var i = 0; i < number_of_drum_buttons; i++)
    {
        document.querySelectorAll("button")[i].addEventListener("click",  function(){
            var buttonInnerHtml = this.innerHTML;
            play_audio(buttonInnerHtml);
            button_animation(buttonInnerHtml);
        });


    }        

    document.addEventListener("keydown",  function(event){
            play_audio(event.key);
            button_animation(event.key);
        });
        
        
    function play_audio(drum_case)
    {
        switch(drum_case)
        {
                case "w":
                    // sound_w.play_drum();
                    var audio = new Audio("crash.mp3");
                    audio.play();
                    break;

                case "a":
                    var audio = new Audio("kick-bass.mp3");
                    audio.play();
                    break;

                case "s":
                    var audio = new Audio("snare.mp3");
                    audio.play();
                    break;

                case "d":
                    var audio = new Audio("tom-1.mp3");
                    audio.play();
                    break;

                case "j":
                    var audio = new Audio("tom-2.mp3");
                    audio.play();
                    break;

                case "k":
                    var audio = new Audio("tom-3.mp3");
                    audio.play();
                    break;

                case "l":
                    var audio = new Audio("tom-4.mp3");
                    audio.play();
                    break;
        }
    }
}


function button_animation(current_key){
    var active_button = document.querySelector("."+current_key);
    active_button.classList.add("pressed");
    
    setTimeout(function(){
        active_button.classList.remove("pressed");
    },100);
}

main();