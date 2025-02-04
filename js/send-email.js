$("#contact-form").submit(function (e) {
    var selectedOption = document.querySelector('input[name="flexRadioDefault"]:checked');
    if (!$("input[name=name]").val()) {
        return false;
    } else if (selectedOption == 'corporate' && !$("input[name=company-name]").val()) {
        return false;
    } else if (!$("input[name=phone]").val()) {
        return false;
    } else if (!$("input[name=email]").val()) {
        return false;
    } else if (!$("textarea[name=message]").val()) {
        return false;
    }

    /*var formData = new FormData($("#contact-form")[0]);
    $.ajax({
        url: 'services/send-email.php',
        type: "POST",
        dataType: "json",
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        beforeSend: function () { },
        complete: function () { },
        success: function (result) {
            var html;
            if (result.status == 'success') {
                html = '<div class="alert alert-success alert-dismissible fade show" role="alert">';
                html += 'Your message has been sent. We shall get in touch with you shortly';
                html += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
                html += '</div>';
                $(".sent-msg").append(html);
                $("#contact-form").trigger("reset");
            } else {
                html = '<div class="alert alert-danger alert-dismissible fade show" role="alert">';
                html += 'Your message could not be sent. Please try after sometime';
                html += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
                html += '</div>';
                $(".sent-msg").append(html);
                $("#contact-form").trigger("reset");
            }

        },
        error: function () { }
    });
    e.preventDefault(e);*/
    var contactFormDetails = {
        "First_Name": $("input[name=name]").val(),
        "Last_Name": $("input[name=name]").val(),
        "Service_Type": $('input[name="flexRadioDefault"]:checked').val(),
        "Company":$("input[name=company-name]").val(),
        "Email":$("input[name=email]").val(),
        "Phone":$("input[name=phone]").val(),
        "Description":$("textarea[name=message]").val()
      }
      console.log(contactFormDetails);
      console.log(JSON.stringify(contactFormDetails));
    $.ajax({
        url: 'https://www.zohoapis.in/crm/v2/functions/Lead_Generation_WebHook/actions/execute?auth_type=apikey&zapikey=1003.a1f4aa982cd5c6bf352e00d46514cb32.e6942dcc40db025e3f39f07125a490d4',
        type: "POST",
        dataType: "json",
        cache: false,
        contentType: false,
        processData: false,
        data: JSON.stringify(contactFormDetails),
        beforeSend: function () { },
        complete: function () { },
        success: function (result) {
            var html;
            if (result.code == 'success') {
                html = '<div class="alert alert-success alert-dismissible fade show" role="alert">';
                html += 'Your message has been sent. We shall get in touch with you shortly';
                html += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
                html += '</div>';
                $(".sent-msg").append(html);
                $("#contact-form").trigger("reset");
            } else {
                html = '<div class="alert alert-danger alert-dismissible fade show" role="alert">';
                html += 'Your message could not be sent. Please try after sometime';
                html += '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';
                html += '</div>';
                $(".sent-msg").append(html);
                $("#contact-form").trigger("reset");
            }

        },
        error: function () { }
    });
    e.preventDefault(e);
});