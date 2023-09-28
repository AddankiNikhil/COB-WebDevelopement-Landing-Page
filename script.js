// alert("file linked");
function func(some){
   var clas= "."+some;
//    clas="'"+clas+"'";
//    console.log(clas);
    clas+=' .info';
    // console.log(clas);
    var fruitcont=document.querySelector(".fruitcontainer");
    // console.log(fruitcont);

    var i=0
    while (i<5)
    {    if (fruitcont.children[i].className!=some)
        // {console.log(i);
        {
            fruitcont.children[i].style.filter="blur(5px)";
        }
        i++;
        
    }
    var info_text=document.querySelector(clas);
    console.log(document.querySelector(".varieties .message"));
    
    switch(some){
        case "kiwi":info_text.innerHTML="<h4>Fact</h4><p>Kiwi is a Good Source of Anti-Oxidants</p>";
            break;
        case "grapes":
        info_text.innerHTML="<h4>Fact</h4><p>Grapes are a good source of potassium,and can bring down high blood pressure and risk of heart disease.</p>"                                              
        break;
                                                           // break;
        case "pineapple":info_text.innerHTML="<h4>Fact</h4><p>A good source of Vitamin C Helps in dealing with Inflammation and Aids in Digestion.</p>"
            break;
        case "apple":info_text.innerHTML="<h4>Fact</h4><p>Improves Heart and Bone Health and Detoxifies your body.</p>"
            break;
        case "dragonfruit":info_text.innerHTML="<h4>Fact</h4><p>Can Boost Your immunity System and helps in Blood sugar management.</p>"
            break;          
    }
    info_text.style.display="block";
    console.log();
    
}
function func1(some){
    var clas= "."+some;
    clas+=' .info';    
        var info_text=document.querySelector(clas);
        info_text.innerHTML="";
        info_text.style.display="none";
        var fruitcont=document.querySelector(".fruitcontainer");
        var i=0
        while (i<5)
            {
                fruitcont.children[i].style.filter="blur(0px)";
                i++;
            }
}
