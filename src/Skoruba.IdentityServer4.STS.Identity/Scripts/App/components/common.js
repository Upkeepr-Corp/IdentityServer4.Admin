window.onload = function () {
    $(".input-icon__password").click(function (event) {
        var x = $(this).parent().children('input')[0];
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
    });
    $(".common-input").val(function () {
        inputUp(this)
    });

    $(".common-input").change(function () {
        inputUp(this);
    });

    function inputUp(v) {
        var x = $(v).val();
        if (x == '') {
            $(v).removeClass('nonempty');
        }
        else {
            $(v).addClass('nonempty');
        }
    }
};