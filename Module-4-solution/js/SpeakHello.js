(function(){
var helloSpeaker = {
    speakWord: "Hello",
    speak: function(name){
        console.log(speakWord + " " + name);
    }
};
    window.helloSpeaker = helloSpeaker;
})(window);