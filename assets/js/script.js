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
        $('#buttons').addClass('only-button');
    } else if ($($current).prev(".question").length == 0) {
        $('#back').hide();
        $('#next').show();
        $('#buttons').addClass('only-button');
    } else {
        $('#next').show();
        $('#back').show();
        $('#buttons').removeClass('only-button');
    }
}

$("#start").click(function () {
    $(".our_mission").hide();
    $(".start-test").hide();
    $("#question-box").show();
});

let answers = [];
let total = 0;

$("input[type='radio'][name='inlineRadioOptions']").click(function () {
    let score = $("input[type='radio'][name='inlineRadioOptions']:checked").val();
    answers.push(Number(score));
    total = answers.reduce((a, b) => a + b, 0);
    if (total <= 0) {
        total = 0;
    }else if (total > 0) {
        total = total/200;
    }
    $(".gauge-cover").text(total*200 + "%");
    $(".gauge-fill").css("transform","rotate(" + total + "turn)");
});

$('#result-btn').click(function () {
    $('.question.active').hide();
    $('#result-btn').hide();
    $('#back').hide();
    $('#result').show()
    if (total*200 <= 40) {
        $('#no-developer').show()
    }else if (total*200 <= 80) {
        $('#developer2').show()
    } else {
        $('#developer1').show()
    }
});
