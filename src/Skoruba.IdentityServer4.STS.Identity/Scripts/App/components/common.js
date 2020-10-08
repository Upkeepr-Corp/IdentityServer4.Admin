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
        labelUp(this);
        checkValidation();
    });

    $(".common-input").change(function () {
        labelUp(this);
        checkValidation();
    });

    function labelUp(v) {
        var x = $(v).val();
        if (x == '') {
            $(v).removeClass('nonempty');
        }
        else {
            $(v).addClass('nonempty');
        }
    }
    function checkValidation() {
        var valid = $('form').valid();
        if (valid) {
            $('form button').removeClass('disabled');
        }
        else {
            $('form button').addClass('disabled');
        }
    }
};