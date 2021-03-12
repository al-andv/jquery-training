$(document).ready(function() {
    jQuery.validator.addMethod('valid_name', function (value) {
        var regexName = "^[a-zA-Z_ÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơ" +
            "ƯĂẠẢẤẦẨẪẬẮẰẲẴẶẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪ" +
            "ễệỉịọỏốồổỗộớờởỡợụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
        return value.trim().match(regexName);
    });

    jQuery.validator.addMethod('valid_age', function (value) {
        var regexAge = /^\d+$/;
        return value.trim().match(regexAge);
    });

    jQuery.validator.addMethod('valid_phone', function (value) {
        var regexPhone = /^(0[23789][0-9]{8}|1[89]00[0-9]{4})$/;
        return value.trim().match(regexPhone);
    });

    $("#form").validate({
        rules: {
            name: {
                required: true,
                minlength: 7,
                valid_name: true
            },
            age: {
                required: true,
                valid_age: true,
                min: 19

            },
            email: {
                required: true,
                maxlength: 255,
                email: true
            },
            phone: {
                required: true,
                valid_phone: true
            }
        },
        messages: {
            name: {
                required: "Vui lòng nhập tên !",
                minlength: "Tên phải dài hơn 6 kí tự !",
                valid_name: "Tên không được là số !"
            },
            age: {
                required: "Vui lòng nhập tuổi !",
                valid_age: "Tuổi phải là số !",
                min: "Tuổi phải lớn hơn 18 !"
            },
            email: {
                required: "Vui lòng nhập email !",
                maxlength: "Email không quá 255 kí tự !",
                email: "Email không hợp lệ !"
            },
            phone: {
                required: "Vui lòng nhập số điện thoại !",
                valid_phone: "Số điện thoại không hợp lệ !"
            }
        }
    });
});
