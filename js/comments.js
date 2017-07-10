/**
 * Created by Sol on 16.01.2017.
 */
$('document').ready(function (){
    $('#comments').on('submit', sendComments);
    $('#commail, #commes, #comname').on('keyup', checkComments);
});


function  checkComments() {
    var mail = $('#commail').val();
    mail = $.trim(mail);
    var name = $('#comname').val();
    name = $.trim(name);
    var message = $('#commes').val();
    message = $.trim(message);
    // if (mail!='' && name!='' && message!='') {
    //     $('form button[id="sendCom"]').removeAttr('disabled');
    // }
    // else {
    //     $('form button[id="sendCom"]').attr('disabled', 'disabled');
    // }
}

function sendComments() {
    event.preventDefault();
    $.post(
        "comment.php",
        {
            "email" : $('#commail').val(),
            "name"  : $('#comname').val(),
            "message"  : $('#commes').val()
        },
        function (data){
            if (data==1){
                $('#send-res').html('Ваш запит прийнятно');
                $('#myModal').modal('show');
                setTimeout(function(){
                    $('#myModal').modal('hide');
                    $('#comments').val(' ');
                }, 3000);

            }
            else {
                $('#send-res').html('Спробуйте ще раз');
                $('#myModal').modal('show');
            }
        }

    );
    $("#comments").trigger('reset');//id_form - ID вашей формы
}