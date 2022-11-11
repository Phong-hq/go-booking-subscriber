
$(document).ready(function(){
    $("#id-input input").keyup( function(e) {
        var value = $(this).val()
        // value = value.toLowerCase();
        // $(this).val(value)
        if(e.originalEvent && e.originalEvent.key == 'Enter' && value  != '') {
            console.log('???s');
            $("#submit-btn").click();
        }
        else{
            if(value && value != '') {
                $("#submit-btn").removeClass("disabled");
                $("#clear-btn").addClass("d-flex");
            }
            else{
                $("#submit-btn").addClass("disabled");
                $("#clear-btn").removeClass("d-flex");
            }
        }
    })
})


$(document).ready(function(){
    $("#submit-btn").click(function(){
        var userAgent = window.navigator.userAgent
        var phone = 'gocheckin1@hotmail.com'
        var value = $("#id-input input").val()
        // $("#test").text(userAgent)
        $("#sms-phone").text(phone)
        $("#sms-body").text(value.toLowerCase())
        if(userAgent.toLowerCase().includes('mac') || userAgent.toLowerCase().includes('iphone')) {
            value = value.toLowerCase().replaceAll(' ', '%20')
            var url = 'sms:' + phone + '&body=REG%20'+ value
            window.location.href = url;
        }
        else {
            $("#modal-btn").click();
        }
    });
})


$(document).ready(function(){
    $("#clear-btn").click(function(){
        $("#id-input input").val('')
        $("#submit-btn").addClass("disabled");
    });
})

