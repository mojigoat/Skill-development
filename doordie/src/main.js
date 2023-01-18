
(function ($) {
    "use strict";


     /*==================================================================
    [ Focus input ]*/
    $('.input100').each(function(){
        $(this).on('blur', function(){
            if($(this).val().trim() != "") {
                $(this).addClass('has-val');
            }
            else {
                $(this).removeClass('has-val');
            }
        })    
    })
  
  
    /*==================================================================
    [ Validate ]*/
    var input = $('.validate-input .input100');

    $('.validate-form').on('submit',function(){
        var check = true;

        for(var i=0; i<input.length; i++) {
            if(validate(input[i]) == false){
                showValidate(input[i]);
                check=false;
            }
        }

        return check;
    });


    $('.validate-form .input100').each(function(){
        $(this).focus(function(){
           hideValidate(this);
        });
    });

    function validate (input) {
        if($(input).attr('type') == 'email' || $(input).attr('name') == 'email') {
            if($(input).val().trim().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{1,5}|[0-9]{1,3})(\]?)$/) == null) {
                return false;
            }
        }
        else {
            if($(input).val().trim() == ''){
                return false;
            }
        }
    }

    function showValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).addClass('alert-validate');
    }

    function hideValidate(input) {
        var thisAlert = $(input).parent();

        $(thisAlert).removeClass('alert-validate');
    }
    
    

})(jQuery);

function pop(div) {
    document.getElementById(div).style.display = 'block';
}

function hide(div) {
    document.getElementById(div).style.display = 'none';
}
//To detect escape button
document.onkeydown = function (evt) {
    evt = evt || window.event;
    if (evt.keyCode == 27) {
        hide('popDiv');
    }
};

//WHEEL
const wheel = document.getElementById("wheel");
const spinBtn = document.getElementById("spin-btn");
const finalValue = document.getElementById("final-value");
//Object that stores values of minimum and maximum angle for a value
const rotationValues = [
    { minDegree: 76, maxDegree: 90, value: 1 },
    { minDegree: 61, maxDegree: 75, value: 2 },
    { minDegree: 46, maxDegree: 60, value: 3 },
    { minDegree: 31, maxDegree: 45, value: 4 },
    { minDegree: 16, maxDegree: 30, value: 5 },
    { minDegree: 0, maxDegree: 15, value: 6 },
    { minDegree: 346, maxDegree: 360, value: 7 },
    { minDegree: 331, maxDegree: 345, value: 8 },
    { minDegree: 316, maxDegree: 330, value: 9 },
    { minDegree: 301, maxDegree: 315, value: 10 },
    { minDegree: 286, maxDegree: 300, value: 11 },
    { minDegree: 271, maxDegree: 285, value: 12 },
    { minDegree: 256, maxDegree: 270, value: 13 },
    { minDegree: 241, maxDegree: 255, value: 14 },
    { minDegree: 226, maxDegree: 240, value: 15 },
    { minDegree: 211, maxDegree: 225, value: 16 },
    { minDegree: 196, maxDegree: 210, value: 17 },
    { minDegree: 181, maxDegree: 195, value: 18 },
    { minDegree: 166, maxDegree: 180, value: 19 },
    { minDegree: 151, maxDegree: 165, value: 20 },
    { minDegree: 135, maxDegree: 150, value: 21 },
    { minDegree: 121, maxDegree: 135, value: 22 },
    { minDegree: 106, maxDegree: 120, value: 23 },
    { minDegree: 91, maxDegree: 105, value: 24 },
];
//Size of each piece
const data = [5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5];
//background color for each piece
var pieColors = [
  "#3d8f79",
  "#51BCA0",
  "#3d8f79",
  "#51BCA0",
  "#3d8f79",
  "#51BCA0",
  "#3d8f79",
  "#51BCA0",
  "#3d8f79",
  "#51BCA0",
  "#3d8f79",
  "#51BCA0",
  "#3d8f79",
  "#51BCA0",
  "#3d8f79",
  "#51BCA0",
  "#3d8f79",
  "#51BCA0",
  "#3d8f79",
  "#51BCA0",
  "#3d8f79",
  "#51BCA0",
  "#3d8f79",
  "#51BCA0",
];
//Create chart
let myChart = new Chart(wheel, {
  //Plugin for displaying text on pie chart
  plugins: [ChartDataLabels],
  //Chart Type Pie
  type: "pie",
  data: {
    //Labels(values which are to be displayed on chart)
    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24],
    //Settings for dataset/pie
    datasets: [
      {
        backgroundColor: pieColors,
        data: data,
      },
    ],
  },
  options: {
    //Responsive chart
    responsive: true,
    animation: { duration: 0 },
    plugins: {
      //hide tooltip and legend
      tooltip: false,
      legend: {
        display: false,
      },
      //display labels inside pie chart
      datalabels: {
        color: "#ffffff",
        formatter: (_, context) => context.chart.data.labels[context.dataIndex],
        font: { size: 24 },
      },
    },
  },
});
//display value based on the randomAngle
const valueGenerator = (angleValue) => {
  for (let i of rotationValues) {
    //if the angleValue is between min and max then display it
    if (angleValue >= i.minDegree && angleValue <= i.maxDegree) {
      finalValue.innerHTML = `<p>Value: ${i.value}</p>`;
      spinBtn.disabled = false;
      break;
    }
  }
};

//Spinner count
let count = 0;
//100 rotations for animation and last rotation for result
let resultValue = 101;
//Start spinning
spinBtn.addEventListener("click", () => {
  spinBtn.disabled = true;
  //Empty final value
  finalValue.innerHTML = `<p>Good Luck!</p>`;
  //Generate random degrees to stop at
  let randomDegree = Math.floor(Math.random() * (355 - 0 + 1) + 0);
  //Interval for rotation animation
  let rotationInterval = window.setInterval(() => {
    //Set rotation for piechart
    /*
    Initially to make the piechart rotate faster we set resultValue to 101 so it rotates 101 degrees at a time and this reduces by 1 with every count. Eventually on last rotation we rotate by 1 degree at a time.
    */
    myChart.options.rotation = myChart.options.rotation + resultValue;
    //Update chart with new value;
    myChart.update();
    //If rotation>360 reset it back to 0
    if (myChart.options.rotation >= 360) {
      count += 1;
      resultValue -= 5;
      myChart.options.rotation = 0;
    } else if (count > 15 && myChart.options.rotation == randomDegree) {
      valueGenerator(randomDegree);
      clearInterval(rotationInterval);
      count = 0;
      resultValue = 101;
    }
  }, 10);
});