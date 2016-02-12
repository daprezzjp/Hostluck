(function() {
    $('form > input').keyup(function() {

        var empty = false;
        $('form > input').each(function() {
            if ($(this).val() == '') {
                empty = true;
            }
        });

        if (empty) {
            $('#mySubmit').addClass('ui-disabled');
        } else {
            $('#mySubmit').removeClass('ui-disabled');
        }
    });
})
