$('#next').click(function () {
    var $current = $('.question.active');
    if ($($current).next(".question").length > 0) {
        $('.question').removeClass('active');
        $current.next().addClass('active');
        buttonCheck();
    }
});
$('#back').click(function () {
    var $current = $('.question.active');
    if ($($current).prev(".question").length > 0) {
        $('.question').removeClass('active');
        $current.prev().addClass('active');
        buttonCheck();
    }
});
buttonCheck();

function buttonCheck() {
    var $current = $('.question.active');
    if ($($current).next(".question").length == 0) {
        $('#next').hide();
        $('#result-btn').show();
        $('#back').show();
    } else if ($($current).prev(".question").length == 0) {
        $('#back').hide();
        $('#next').show();
    } else {
        $('#next').show();
        $('#back').show();
    }
}

$("#start").click(function () {
    $(".our_mission").hide();
    $(".start-test").hide();
    $("#question-box").show();
});

let answers = [];
let total = 0;
/* .hide( "slide", { direction: "left"  }, 2000 ) */
$("input[type='radio'][name='inlineRadioOptions']").click(function () {
    let score = $("input[type='radio'][name='inlineRadioOptions']:checked").val();
    answers.push(Number(score))
    total = answers.reduce((a, b) => a + b, 0)
    console.log(score)
    console.log(answers)
    console.log(total)
});

$('#result-btn').click(function () {
    $('.question.active').hide();
    $('#result-btn').hide();
    $('#back').hide();
    $('#result').show()
});

const gaugeElement = document.querySelector(".gauge");

function setGaugeValue(gauge, value) {
    if (value < 0 || value > 100) {
        return;
    }

    gauge.querySelector(".gauge-fill").style.transform = `rotate(${value / 200}turn)`;
    gauge.querySelector(".gauge-cover").textContent = `${value}%`;
}


setGaugeValue(gaugeElement, total)