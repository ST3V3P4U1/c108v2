function startclassification() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/P3UevWpnl/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
dog=0;
cat=0;
function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("detected").innerHTML="Detected Dog -" +dog+"Detected Cat"+cat;
        document.getElementById("voice").innerHTML="I Can Hear - "+results[0].label;
        img=document.getElementById("animalimage");
        if(results[0].label=="Bark"){
            img.src="download (1).jpeg";
            dog=dog+1;
        }
        else if(results[0].label=="Meow"){    
        img.src="download.jpeg";
        cat=cat+1;
    }
    else{
        img.src="https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
    }
    }
}
