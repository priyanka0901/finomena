    //global variables
    var store;
    var click = 0;
    var useranswer = [];
    var rightanswer = 0;
    var wronganswer = 0;
    var username;

    //fetch data from json file
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
        if($("#name").val().length > 0) {
            username =  $("#name").val(); //retrive name 
            $('#home').css('display','none');
            $('#ques-layout').css('display','block');
            displayques(0);
        }else {
            $("#home").append("<p>requried enter name</p>");
        }
    });
   
    
    //onclick of option inc counter
    function counter() {
      if (click < store.length-1) {
            click += 1;
            displayques(click);
        }else { //after ques display result
            $('#ques-layout').css('display','none');
            $('#page-layout').css('display','none');
            $('#result-layout').css('display','block');
            displayResult();
        }
    };

    //fetching user answer
    $('.ques-option').on('click', function(e) {
        useranswer.push(e.target.innerHTML);
        counter();
    });
    
    //calculating right and wrong ans & display on result div
    function displayResult() {
        for(var i = 0; i < useranswer.length; i++) {
            if(useranswer[i] === store[i].right){
                rightanswer += 1;
            }else {
                wronganswer += 1;
            }
        }
        graphmaker(rightanswer,wronganswer);
        for(var i = 0; i <=4; i++){
            $('.result-ques').append("<p>"+ store[i].ques +"</p>");
            if(useranswer[i] === store[i].right){
                $('.result-ques').append("<p>"+ useranswer[i] +"</p>");
            } 
            else{
                $('.result-ques').append("<p>"+ useranswer[i] +"</p>", "<p>"+ store[i].right+"</p>");
            }                   
        }
         document.getElementById('userName').innerHTML = username;
    }
    
    //graph design
    function graphmaker(right, wrong) {
        var ctx = document.getElementById("myChart").getContext('2d');
        var myChart = new Chart(ctx, {
          type: 'pie',
          data: {
            labels: ["Right", "Wrong"],
            datasets: [{
              backgroundColor: [
                "#2ecc71",
                "#ff3b3b"
              ],
              data: [right, wrong]
            }]
          }
        });
    };
   

   

