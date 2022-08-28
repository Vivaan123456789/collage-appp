var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition()

function start() {
    document.getElementById("textbox").innerHTML = "";
    recognition.start()
}
recognition.onresult = function run(event) {
    console.log(event);
    var Content = event.results[0][0].transcript
    document.getElementById("textbox").innerHTML = Content;
    if (Content == "take my selfie") {
        speak();
    }
}

function speak() {
    var synth = window.speechSynthesis;
    speak_data = "Taking Your Selfie in 5 seconds";
    var utterThis = new SpeechSynthesisUtterance(speak_data)
    synth.speak(utterThis)
    Webcam.attach(camera)
    setTimeout(function () {
        image_id = "selfie1"
        takeSnapshot();
        speak_data = "Taking Your Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data)
        synth.speak(utterThis)

    }, 5000);
    setTimeout(function () {
        image_id = "selfie2"
        takeSnapshot();
        speak_data = "Taking Your Selfie in 5 seconds";
        var utterThis = new SpeechSynthesisUtterance(speak_data)
        synth.speak(utterThis)
    
    }, 10000);
    setTimeout(function () {
        image_id = "selfie3"
        takeSnapshot();
        
    
    }, 15000);
    }


camera = document.getElementById("camera")
Webcam.set({
    width: 360,
    hieght: 250,
    image_format: 'png',
    png_quality: 90
})

function takeSnapshot() {
    Webcam.snap(function (data_uri) {
        if(image_id=="selfie1"){
            document.getElementById('result1').innerHTML ='<img id="selfie1" src="' + data_uri + '"/>';
        }
        if(image_id=="selfie2"){
            document.getElementById('result2').innerHTML ='<img id="selfie2" src="' + data_uri + '"/>';
        }
        if(image_id=="selfie3"){
            document.getElementById('result3').innerHTML ='<img id="selfie3" src="' + data_uri + '"/>';
        }
    });

}

