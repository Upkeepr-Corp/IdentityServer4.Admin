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
        var x = $(this).val();
        console.log('x', x);
        if (x == '') {
            $(this).removeClass('nonempty');
        }
        else {
            $(this).addClass('nonempty');
        }
    });

    $(".common-input").keydown(function () {
        var x = $(this).val();
        if (x == '') {
            $(this).removeClass('nonempty');
        }
        else {
            $(this).addClass('nonempty');
        }
    });

    setTimeout(function () {
        $(".common-input").each(function (index, item) {
            var x = $(item).val();
            console.log(x);
            console.log(item);
            if (x == '') {
                $(this).removeClass('nonempty');
            }
            else {
                $(this).addClass('nonempty');
            }
        });
    }, 2000);



};