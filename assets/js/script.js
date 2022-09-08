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

$("input[type='radio'][name='inlineRadioOptions']").click(function () {
    var score = $("input[type='radio'][name='inlineRadioOptions']:checked").val();
    console.log(score)
});