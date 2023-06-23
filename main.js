x = 0;
y = 0;

draw_apple = "";

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start(){
  document.getElementById("status").innerHTML = "Hann Mai Sunn raha hun Bolo";
  recognition.start()
  }
   recognition.onresult = function(event){
      console.log(event)
  
      var content = event.results[0][0].trascript;
  
      document.getElementById("status").innerHTML = "mujhe samja hai"+ content;
      if(content == "circle"){
        x= Math.floor(Math.random() * 900);
        y= Math.floor(Math.random() * 600);
        document.getElementById("status").innerHTML = "Shuru kiya cicle";
        draw_circle= "set"
      }
  
  
      if(content == "rectangle"){
          x= Math.floor(Math.random() * 900);
          y= Math.floor(Math.random() * 600);
          document.getElementById("status").innerHTML = "Shuru kiya rectanlge";
          draw_rect= "set";
  
        }
      }
  

function setup() {
  canvas = createCanvas(900,600)
}

function draw() {
  if(draw_apple == "set")
  {
    document.getElementById("status").innerHTML = to_number + " Apples drawn";
    draw_apple = "";
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    speak_data = "";
}
