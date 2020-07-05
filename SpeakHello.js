
(function (window) {
    var helloSpeaker = {};
    var speakWord = "Hello";
    helloSpeaker.speak = function HelloSpeaker(name) {
        console.log(speakWord + " " + name);
    };
    window.helloSpeaker = helloSpeaker;

})(window);

