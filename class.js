/*
var dog = {
    name : "柴犬",
    color : "yellow",
    shoemoemeo : function(){
        console.log("我會賣萌");
    },
    giveMeSomeCaress : function(){
        console.log("摸摸我");
    },
    coquettish : function(){
        console.log("我會撒嬌");
    },
    playDumb : function(){
        console.log("我什麼都不知道");
    },
};
*/
function ShibaInu(name, color){
    this.name = name;
    this.color = color;
    this.shoemoemeo = function() {
        console.log("我會賣萌");
    };
    this.giveMeSomeCaress = function(){
        console.log("摸摸我");
    };
    this.coquettish = function(){
        console.log("我會撒嬌");
    };
    this.playDumb = function(){
        console.log("我什麼都不知道");
    };
    this.playWith = function(someone){
        console.log(this.name + "跟" + someone.name +"一起玩")
    };
}

function Cat(name){
    this.name = name;
} 

var dog = new ShibaInu("柴柴","黃色");
var cat = new Cat("貓貓"); 

