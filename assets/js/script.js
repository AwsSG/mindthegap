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
    $(".our_mission").hide("fast");
    $(".start-test").hide("fast");
    $("#question-box").show("fast");
});

let answers = [];
let total = 0;

$("input[type='radio'][name='inlineRadioOptions']").click(function () {
    let score = $("input[type='radio'][name='inlineRadioOptions']:checked").val();
    answers.push(Number(score))
    total = answers.reduce((a, b) => a + b, 0)
    console.log(score)
    console.log(answers)
    console.log(total)
});
