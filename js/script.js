/*
 * GETINVOLVED.PHP FORM VALIDATION.
 * validates form on the client-side
 * before submission. Form block borders turn
 * red if form is not complete or written in correct format.
 **/


$(document).ready(function () {

    var first_name = $('.firstName').val();
    var last_name = $('.lastName').val();
    var phone = $('.phone').val();
    var email = $('.email').val();
    var nameCheck = /^[a-zA-Z '-]+$/;
    var emailCheck = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    var phoneReg = /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/;
    var role = $('.gwc_role').val();
    var experience = $('.experience').val();
    var education = $('.education').val();


    /*FIRST NAME*/
    
        $('.firstName').focus(
            function() {
                if ($('.firstName').val() == '') {
                    $('.error1').html('');
                    $('.box1').addClass('form_box1');
                    $('.box1').removeClass('form_box_error1');
                    $('.line').addClass('change_line_color1');
                    $('.change_line_color1').addClass('change_line_color_effect1');
                    $('.change_line_color1').removeClass('change_line_color_negative1');
                }          
        });

    $('.firstName').blur(
        function(){
            if($(this).val() == ''){
                $('.error1').html('Please enter your first name.');
                /*When input is wrong or empty, change border color to red*/
                $('.box1').addClass('form_box_error1');
                $('.line').addClass('change_line_color1');
                $('.change_line_color1').addClass('change_line_color_negative1');

            } else if (!nameCheck.test($(this).val())) {
                $('.error1').html('Invalid name.');
                $('.box1').addClass('form_box_error1');
                $('.line').addClass('change_line_color1');
                $('.change_line_color1').addClass('change_line_color_negative1');

            }
    });

    if ($('.firstName').val() == '') {
        $('.firstName').keydown(
            function() {
                $('.line').removeClass('change_line_color1');
        });
    }

    /*PHONE ADDRESS*/

     /*When input is wrong or empty, change border color to red*/
     $('.phone').focus(
        function() {
            if ($('.phone').val() == '') {
                $('.error4').html('');
                //border color changes back to neutral
                $('.box4').addClass('form_box4');
                $('.box4').removeClass('form_box_error4');
                $('.line4').addClass('change_line_color4');
                $('.change_line_color4').addClass('change_line_color_effect4');
                $('.change_line_color4').removeClass('change_line_color_negative4');
            }

    });

    $('.phone').blur(
        function(){
            if($(this).val() == ''){
                $('.error4').html('Please enter your phone number');
                //border color changes
                $('.box4').addClass('form_box_error4');
                $('.line4').addClass('change_line_color4');
                $('.change_line_color4').addClass('change_line_color_negative4');

            } else if (!phoneReg.test($(this).val())) {
                $('.error4').html('Invalid phone number.');
                $('.box4').addClass('form_box_error4');
                $('.line4').addClass('change_line_color4');
                $('.change_line_color4').addClass('change_line_color_negative4');
            }
    });

    if ($('.phone').val() == '') {
        $('.phone').keydown(
            function() {
                $('.line4').removeClass('change_line_color4');
        });
    }


    /*LAST NAME*/

    /*When input is wrong or empty, change border color to red*/
    $('.lastName').focus(
        function() {
            if ($('.lastName').val() == '') {
                $('.error2').html('');
                //border color changes back to neutral
                $('.box2').addClass('form_box2');
                $('.box2').removeClass('form_box_error2');
                $('.line2').addClass('change_line_color2');
                $('.change_line_color2').addClass('change_line_color_effect2');
                $('.change_line_color2').removeClass('change_line_color_negative2');
            }

    });

    $('.lastName').blur(
        function(){
            if($(this).val() == ''){
                $('.error2').html('Please enter your last name.');
                //border color changes
                $('.box2').addClass('form_box_error2');
                $('.line2').addClass('change_line_color2');
                $('.change_line_color2').addClass('change_line_color_negative2');

            } else if (!nameCheck.test($(this).val())) {
                $('.error2').html('Invalid name.');
                $('.box2').addClass('form_box_error2');
                $('.line2').addClass('change_line_color2');
                $('.change_line_color2').addClass('change_line_color_negative2');
            }
    });

    if ($('.lastName').val() == '') {
        $('.lastName').keydown(
            function() {
                $('.line2').removeClass('change_line_color2');
        });
    }

    /*EMAIL ADDRESS*/ 

     /*When input is wrong or empty, change border color to red*/
     $('.email').focus(
        function() {
            if ($('.email').val() == '') {
                $('.error3').html('');
                //border color changes back to neutral
                $('.box3').addClass('form_box3');
                $('.box3').removeClass('form_box_error3');
                $('.line3').addClass('change_line_color3');
                $('.change_line_color3').addClass('change_line_color_effect3');
                $('.change_line_color3').removeClass('change_line_color_negative3');
            }      
    });

    $('.email').blur(
        function(){
            if($(this).val() == ''){
                $('.error3').html('Please enter an email address.');
                //border color changes
                $('.box3').addClass('form_box_error3');
                $('.line3').addClass('change_line_color3');
                $('.change_line_color3').addClass('change_line_color_negative3');

            } else if (!emailCheck.test($(this).val())) {
                $('.error3').html('Invalid email address.');
                $('.box3').addClass('form_box_error3');
                $('.line3').addClass('change_line_color3');
                $('.change_line_color3').addClass('change_line_color_negative3');
            }
    });

    if ($('.email').val() == '') {
        $('.email').keydown(
            function() {
                $('.line3').removeClass('change_line_color3');
        });
    }

    /*GWC ROLES*/

    $('#gwc_role').focus(
        function() {
            $('.error5').html('');
            //border color changes back to neutral
            $('.box5').addClass('form_box5');
            $('.box5').removeClass('form_box_error5');
            $('.change_line_color5').removeClass('change_line_color_negative5');
    });

    /*PROGRAMMING LANGUAGES*/

    $('.languages').focus(
        function() {
            if ($(this).val() == '') {
                $('.error6').html('');
                //border color changes back to neutral
                $('.box6').addClass('form_box6');
                $('.box6').removeClass('form_box_error6');
                $('.line6').addClass('change_line_color6');
                $('.change_line_color6').addClass('change_line_color_effect6');
                $('.change_line_color6').removeClass('change_line_color_negative6');
            }
    });

    $('.languages').blur(
        function(){
            if($(this).val() == ''){
                $('.error6').html('Please type in your answer.');
                //border color changes to red
                $('.box6').addClass('form_box_error6');
                $('.line6').addClass('change_line_color6');
                $('.change_line_color6').addClass('change_line_color_negative6');
            }
    });

    if ($('.languages').val() == '') {
        $('.languages').keydown(
            function() {
                $('.line6').removeClass('change_line_color6');
        });
    }    

    /*EXPERIENCES*/

    $("input[name='radios']").focus(
        function() {
            $('.error7').html('');
            //border color changes back to neutral
            $('.box7').addClass('form_box7');
            $('.box7').removeClass('form_box_error7');
            $('.change_line_color7').removeClass('change_line_color_negative7');
    });


    /* REFERRAL MESSAGE*/

    $('.gwc_role').focus(
        function() {
            if ($(this).val() == '') {
                $('.error').html('');
                //border color changes back to neutral
                $('.box6').addClass('form_box6');
                $('.box6').removeClass('form_box_error6');
                $('.line6').addClass('change_line_color6');
                $('.change_line_color6').addClass('change_line_color_effect6');
                $('.change_line_color6').removeClass('change_line_color_negative6');
            }
    });

    $('.gwc_role').blur(
        function(){
            if($(this).val() == ''){
                $('.error6').html('Please type in your answer.');
                //border color changes to red
                $('.box6').addClass('form_box_error6');
                $('.line6').addClass('change_line_color6');
                $('.change_line_color6').addClass('change_line_color_negative6');
            }
    });

    if ($('.gwc_role').val() == '') {
        $('.gwc_role').keydown(
            function() {
                $('.line6').removeClass('change_line_color6');
        });
    }    
/*
 * When user hits submit button,
 * all form boxes are validated. If form input
 * doesn't pass validation, form box border turns red and a display error msg
 * is shown.  The form does not submit until all errors are resolved.
 **/
    
 //When user submits the form. . .

    $('.signup_form').submit(function () {

        var detectErrors = false;

        /*FIRST NAME*/
       
        if($('.firstName').val() == ''){
            $('.error1').html('Please enter your first name.');
            /*When input is wrong or empty, change border color to red*/
            $('.box1').addClass('form_box_error1');
            $('.change_line_color1').addClass('change_line_color_negative1');

            detectErrors = true;

        } else if (!nameCheck.test($('.firstName').val())) {
            $('.error1').html('Invalid name.');
            $('.box1').addClass('form_box_error1');
            $('.change_line_color1').addClass('change_line_color_negative1');

            detectErrors = true;
        }
       
        /*LAST NAME*/

        if($('.lastName').val() == ''){
            $('.error2').html('Please enter your last name.');
            /*When input is wrong or empty, change border color to red*/
            $('.box2').addClass('form_box_error2');
            $('.change_line_color2').addClass('change_line_color_negative2');

            detectErrors = true;

        } else if (!nameCheck.test($('.lastName').val())) {
            $('.error2').html('Invalid name.');
            $('.box2').addClass('form_box_error2');
            $('.change_line_color2').addClass('change_line_color_negative2');

            detectErrors = true;
        }

        /*EMAIL ADDRESS*/

        if($('.email') == ''){
            $('.error3').html('Please enter your email.');
            /*When input is wrong or empty, change border color to red*/
            $('.box3').addClass('form_box_error3');
            $('.change_line_color3').addClass('change_line_color_negative3');

            detectErrors = true;

        } else if (!emailCheck.test($('.email').val())) {
            $('.error3').html('Invalid email.');
            $('.box3').addClass('form_box_error3');
            $('.change_line_color3').addClass('change_line_color_negative3');

            detectErrors = true;
        }
       
        /*PHONE NUMBER*/

        if ($('.phone') == ''){
            $('.error4').html('Please enter your phone number.');
            /*When input is wrong or empty, change border color to red*/
            $('.box4').addClass('form_box_error4');
            $('.change_line_color4').addClass('change_line_color_negative4');

            detectErrors = true;

        } else if (!phoneReg.test($('.phone').val())) {
            $('.error4').html('Invalid phone number.');
            $('.box4').addClass('form_box_error4');
            $('.change_line_color4').addClass('change_line_color_negative4');

            detectErrors = true;
        }

        /*GWC ROLE*/

        if ($('#gwc_role').val() === '-Please Select-') {
            $('.error5').html('Please select a role.');
            //When input is wrong or empty, change border color to red
            $('.box5').addClass('form_box_error5');
            $('.change_line_color5').addClass('change_line_color_negative5');

            detectErrors = true;

        } else if (!$('#gwc_role').val() == 'Student' || !$('#gwc_role').val()== 'Volunteer' || !$('#gwc_role').val() == 'Guest Speaker') {
            $('.error5').html('Role does not exist.');
            $('.box5').addClass('form_box_error5');
            $('.change_line_color5').addClass('change_line_color_negative5');

            detectErrors = true;
        }

         /*PROGRAMMING LANGUAGES*/

         if ($('.languages').val() == ''){
            $('.error6').html('Please enter a language or type in N/A.');
            /*When input is wrong or empty, change border color to red*/
            $('.box6').addClass('form_box_error6');
            $('.change_line_color6').addClass('change_line_color_negative6');

            detectErrors = true;
        }

        /*EXPERIENCE*/

       if (!$("input[name='radios']:checked").val()) {
        $('.error7').html('Please select your years of experience.');
            /*When input is wrong or empty, change border color to red*/
            $('.box7').addClass('form_box_error7');
            $('.change_line_color7').addClass('change_line_color_negative7');
       }

       //If there are errors, do not submit form.
        if (detectErrors == true) {
            $('.error8').html('**Failed to submit. Please check the form.');
            return false;
        } else {
            return true;
        }

    });

    console.log($("input[name='radios']:checked").val());
    console.log($('#gwc_role').val());
});

    