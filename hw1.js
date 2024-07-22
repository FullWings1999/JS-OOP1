/*
    媽媽請小強去買東西
    買兩個蘋果回來，如果雞蛋特價的話，買一打回來

    背景 雞蛋一個五元，特價一個三元
    蘋果一個六十元


*/

function Ming(appleprice,eggprice){
    this.Buy= function(){
        const cost = appleprice + eggprice;
        if(eggprice == 0)
        console.log("我買了兩個蘋果，花了" + appleprice);
        else
        console.log("我買了兩個蘋果，還有一打雞蛋，因為雞蛋打折，我花了" + cost);
    };
};

function Apple(){
    this.price = 120;
};

function Eggs(eggdiscont){
    
    if(eggdiscont == 0) this.price = 0;
    else this.price = 36;

};



function main(eggdiscont){
    const eggc = parseInt(eggdiscont);
    var apple = new Apple();
    var egg = new Eggs(eggc);
    var ming = new Ming(apple.price,egg.price); 

    console.log(ming.Buy());
};