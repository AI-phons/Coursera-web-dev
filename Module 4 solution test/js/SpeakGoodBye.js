(function(){
    var byeSpeaker = {
        speakWord: "Good Bye",
        speak: function(name){
            console.log(speakWord + " " + name);
        }
    };
        window.byeSpeaker = byeSpeaker;
})(window);
