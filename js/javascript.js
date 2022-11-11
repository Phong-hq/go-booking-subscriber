
$(document).ready(function(){
    $("#id-input input").keyup( function(e) {
        var value = $(this).val()
        // value = value.toLowerCase();
        // $(this).val(value)
        if(e.originalEvent.key && e.originalEvent.key == 'Enter') {
            $("#submit-btn").click();
        }
        else{
            if(value && value != '') {
                $("#submit-btn-2").removeClass("disabled");
                $("#clear-btn").addClass("d-flex");
            }
            else{
                $("#submit-btn-2").addClass("disabled");
                $("#clear-btn").removeClass("d-flex");
            }
        }
    })
})


$(document).ready(function(){
    $("#submit-btn-2").click(function(){
        var userAgent = window.navigator.userAgent
        var phone = 'gocheckin1@hotmail.com'
        var value = $("#id-input input").val()
        $("#test").text(userAgent)
        $("#sms-phone").text(phone)
        $("#sms-body").text(value.toLowerCase())
        if(userAgent.toLowerCase().includes('ipad') || userAgent.toLowerCase().includes('iphone')) {
            value = value.toLowerCase().replaceAll(' ', '%20')
            var url = 'sms:' + phone + '&body=REG%20'+ value
            console.log(url);
            window.location.href = url;

        }
        else {
            $("#myInput").click();
        }
    });
})


$(document).ready(function(){
    $("#clear-btn").click(function(){
        $("#id-input input").val('')
        $("#submit-btn").addClass("disabled");
    });
})

