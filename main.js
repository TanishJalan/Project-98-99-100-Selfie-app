var speechrecognition = window.webkitSpeechRecognition;
var recongnition = new speechrecognition();

function start() 
{
    document.getElementById("text_area").innerHTML = " ";
    recongnition.start();
}

recongnition.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    document.getElementById("text_area").innerHTML = content;
        if (content == "take my selfie") 
        {
            speak(); 
        }
    Webcam.attach(camera);
    setTimeout(
        function()
    {
        take_snapshot();
        img1 = "selfie1"
    }, 5000);

    setTimeout(
        function()
    {
        take_snapshot();
        img1 = "selfie2"
    }, 10000);

    setTimeout(
        function()
    {
        take_snapshot();
        img1 = "selfie3"
    }, 15000);
}

function speak() 
{
    var API1 = window.speechSynthesis;
    var speakdata = "Taking your selfie in 5 seconds";
    var savevalue  = new SpeechSynthesisUtterance(speakdata);
    API1.speak(savevalue);
}

camera = document.getElementById("camera");

Webcam.set
({
    width : 400,
    height : 400,
    image_format : 'png', 
    png_quality : 90,
})

function take_snapshot() 
{
    Webcam.snap(
        function (data_uri) 
        {
            if (img1 = "selfie1") 
            {
                document.getElementById("selfie1").innerHTML = '<img id = "selfie1_image" src = " '+ data_uri +' ">';
            }

            if (img1 = "selfie2") 
            {
                document.getElementById("selfie2").innerHTML = '<img id = "selfie2_image" src = " '+ data_uri +' ">';
            }

            if (img1 = "selfie3") 
            {
                document.getElementById("selfie3").innerHTML = '<img id = "selfie3_image" src = " '+ data_uri +' ">';
            }
        }
    );
}

function save() 
{
    link = document.getElementById("link");
    image = document.getElementById("selfie_image").src;
    link.href = image;
    link.click();
}