Webcam.set({
    width : 350,
    height : 300,
    image_format :'png',
    png_quality :90
    });
    
    camera = document.getElementById("camera");
    Webcam.attach('#camera');
    
    function take_snapshot()
    {
        Webcam.snap(function(data_uri){
            document.getElementById("result").innerHTML = '<img id = "captured_image" src = "'+ data_uri +'"/>';
        });
    }
    
    console.log('ml5 version:' , ml5.version);
    classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/v_sl95BzE/model.json',modelLoaded);

    
    function modelLoaded()
{
    console.log("Model Loaded !!");
}

function Check()
{
    img = document.getElementById('captured_image');
    classifier.classify(img , gotResult);
}

function gotResult(error , results)
{
    if(error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_object_name").innerHTML = results[0].label;
        document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
    }
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "The First Prediction Is" + prediction_1;
    speak_data_2 = "The Second Prediction Is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);

}