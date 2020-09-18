class Volume{
    constructor(){
this.audio_file=document.getElementById("audio_file");
this.audio_file.volume=50/100;
this.volume_range=document.getElementById("volume_range");
this.volume_range.addEventListener("change",()=>{
    this.audio_file.volume=this.volume_range.value/100;
});
this.volume_speed=document.getElementById("volume_speed");
this.volume_speed.playbackRate=1;
this.volume_speed.addEventListener("change",()=>{
   this.audio_file.playbackRate=this.volume_speed.value/100;

});
    }
}
onload=new Volume();
class Colors{
    constructor(){
        if(localStorage.getItem("SaveColor")==null){
    
            document.body.style.background = "linear-gradient(to right, #00d2ff, #928dab)";
       
        }

    this.color1 = document.getElementById("color1");
    this.color1.addEventListener("click",()=>{
        this.selectColor("color1");
    });

    this.color2 = document.getElementById("color2");
    this.color2.addEventListener("click",()=>{
        this.selectColor("color2");
    });

    this.color3 = document.getElementById("color3");
    this.color3.addEventListener("click",()=>{
        this.selectColor("color3");
    });

    this.color4 = document.getElementById("color4");
    this.color4.addEventListener("click",()=>{
        this.selectColor("color4");
    });
    
this. selectColor(localStorage.getItem("SaveColor"));
    this.selectColor(localStorage.getItem("SaveColor"));
    }

    selectColor(color){
       
        this.body = document.getElementById("body");
        if(color == "color1"){
            this.body.style.background ="rgb(27, 27, 27)";
            document.main.style.background = "rgb(27, 27, 27)";
        }
        else if(color == "color2"){
            this.body.style.background ="#c322d8";
          
            document.main.style.background ="#c322d8";
        }

        else if(color == "color3"){
            this.body.style.background =" #0b70cf";
            document.main.style.background =" ##0b70cf";
        }

        else if(color == "color4"){
            this.body.style.background = "#71a342";
            document.main.style.background ="#71a342";
        }
        localStorage.setItem("SaveColor",color);
    }

}
onload = new Colors();