    //fetch data from json file
    var store;
    $.getJSON("data/data.json", function(data){ 
        store = data;
    });
    
    //layout of ques structure
    function displayques(i) {
        document.getElementById('ques-img').src = store[i].img;
        document.getElementById('ques-para').innerHTML = store[i].ques;
        document.getElementById('ques-option1').innerHTML = store[i].option1;
        document.getElementById('ques-option2').innerHTML = store[i].option2;
    };

    //change div on submit click
    $('#submit').on('click',function(){
        $('#home').css('display','none');
        $('#ques-layout').css('display','block');
        displayques(0);
    });
    
    //onclick of option inc counter
    var click = 0;
    function counter() {
        click += 1;
        displayques(click);
    };

    //fetching user click option
    var useroption = [];
    $('.ques-option').on('click', function(e) {
        useroption.push(e.target.innerHTML);
        counter();
    });

    

    
   

   

