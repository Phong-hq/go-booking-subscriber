
$(document).ready(function(){
    $("#id-input input").keyup( function(e) {
        var value = $(this).val()
        console.log(e.originalEvent);
        if(e.originalEvent.key && e.originalEvent.key == 'Enter') {
            $("#submit-btn").click();
        }
        else{
            if(value && value != '') {
                $("#submit-btn").removeClass("disabled");
                $("#submit-btn-1").removeClass("disabled");
                $("#submit-btn-2").removeClass("disabled");
                $("#clear-btn").addClass("d-flex");
            }
            else{
                $("#submit-btn").addClass("disabled");
                $("#submit-btn-1").addClass("disabled");
                $("#submit-btn-2").addClass("disabled");
                $("#clear-btn").removeClass("d-flex");
            }
        }
    })
})

$(document).ready(function(){
    $("#submit-btn").click(function(){
        var value = $("#id-input input").val()
        var url = 'sms:gocheckin1@hotmail.com?body='+ value
        window.location.href = url;
    });
})

$(document).ready(function(){
    $("#submit-btn-1").click(function(){
        var value = $("#id-input input").val()
        var url = 'sms:gocheckin1@hotmail.com;body='+ value
        window.location.href = url;
    });
})

$(document).ready(function(){
    $("#submit-btn-2").click(function(){
        var value = $("#id-input input").val()
        var url = 'sms:gocheckin1@hotmail.com&body='+ value
        window.location.href = url;
    });
})


$(document).ready(function(){
    $("#clear-btn").click(function(){
        $("#id-input input").val('')
        $("#submit-btn").addClass("disabled");
    });
})
