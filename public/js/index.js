function Submitted_Quote_Form(){
    Email = $('#Sender_Email').val();
    Message = $('#Sender_Message').val();
    if(Email == '' || Message == ''){
        Empty_box = $('.toggle-send-message-notification-empty');
        Empty_box[0].style.visibility = 'visible';
        setTimeout(() => {Empty_box[0].style.visibility = 'hidden';}, 2500);
        return false;
    }
    sendMail(Email,Message);
}
function Submitted_Contact_Form(){
    Name = $('#Sender_Name').val();
    Email = $('#Sender_Email_Enquiry_Form').val();
    Phone = $('#Sender_Phone').val();
    Service = $('#Sender_Service').val();
    Message = $('#Sender_Message_Enquiry_Form').val();
    if(Name == '' || Email == '' || Phone == '' || Service == '' ||Message == ''){
        Empty_box = $('.toggle-Enquiry-Form-notification-empty');
        Empty_box[0].style.visibility = 'visible';
        setTimeout(() => {Empty_box[0].style.visibility = 'hidden';}, 2500);
        return false;
    }
    ContactFormMail(Name,Email,Phone,Service,Message);
}

function sendMail(Email='',Message=''){
    Loader = $('.preloader');
    Loader[0].style.visibility = 'visible';
    $.ajax({
        method: 'POST',
        url: 'https://formsubmit.co/ajax/tusharsethi100@gmail.com',
        dataType: 'json',
        accepts: 'application/json',
        data: {
            Email: Email,
            Message: Message
        },
        success:function(data){
            Loader[0].style.visibility = 'hidden';
            if(data.success == 'true'){
                message_box = $('.toggle-send-message-notification');
                message_box[0].style.visibility = 'visible';
                // console.log(1);
                $('#Sender_Email').val('');
                $('#Sender_Message').val('');
                setTimeout(() => {message_box[0].style.visibility = 'hidden';}, 2500);
            }
        }, 
        error:function(data){
            Loader[0].style.visibility = 'hidden';
            message_box2 = $('.toggle-send-message-notification-error');
            message_box2[0].style.visibility = 'visible';
            setTimeout(() => {message_box2[0].style.visibility = 'hidden';}, 2500);
        }
    });
}

function ContactFormMail(Name='',Email='',Phone='',Service='',Message=''){
    Loader = $('.preloader_Enquiry_form');
    Loader[0].style.visibility = 'visible';
    $.ajax({
        method: 'POST',
        url: 'https://formsubmit.co/ajax/tusharsethi100@gmail.com',
        dataType: 'json',
        accepts: 'application/json',
        data: {
            Name: Name,
            Email: Email,
            Phone_Number: Phone,
            Service_Required: Service,
            Message: Message
        },
        success:function(data){
            Loader[0].style.visibility = 'hidden';
            if(data.success == 'true'){
                message_box = $('.toggle-Enquiry-Form-notification');
                message_box[0].style.visibility = 'visible';
                $('#Sender_Name').val('');
                $('#Sender_Email_Enquiry_Form').val('');
                $('#Sender_Phone').val('');
                $('#Sender_Service').val('')
                $('#Sender_Message_Enquiry_Form').val('');
                setTimeout(() => {message_box[0].style.visibility = 'hidden'}, 2500);
            }
        },
        error:function(data){
            Loader[0].style.visibility = 'hidden';
            message_box2 = $('.toggle-Enquiry-Form-notification-error');
            message_box2[0].style.visibility = 'visible';
            setTimeout(() => {message_box2[0].style.visibility = 'hidden';}, 2500);
        }
    });
}