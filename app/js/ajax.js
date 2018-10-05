function ajaxSendForm(e){
    $('#submit').click(function(e){
        e.preventDefault();
        var form_data = $('#order').serialize(); //собераем все данные из формы
            $.ajax({
            type: "POST", //Метод отправки
            url: "mail.php", //путь до php фаила отправителя
            data: form_data,
            success: function() {
                   //код в этом блоке выполняется при успешной отправке сообщения
                   location = 'thankYouPage.html'
            },
		});
        return false;
    })
}


// function ajaxSendForm(e){
//     $('#submit').click(function(e){
//         e.preventDefault();
//         $('#order').validate({

//             rules: {
//                 email: {
//                     required: true,
//                     email: true,
//                 },

//                 name : {
//                     required: true,
//                     name: true,
//                 },
//                 address : {
//                     required: true,
//                     address: true,
//                 },
//             },
//             ignore: '.passed, :hidden',
//             validClass: "passed",
//             errorClass: 'error',
//             errorPlacement: function(error, element) {
//                 return false;
//             },
//             highlight: function(element, errorClass, validClass) {
//                 jQuery(element).addClass("has-error");
//             },
//             unhighlight: function(element, errorClass, validClass) {
//                 jQuery(element).removeClass("has-error");
//             },
           
        
//             submitHandler: function(form) {
//                 var form_data = $('#order').serialize();
//                 $.ajax({
//                     type: "POST", //Метод отправки
//                     url: "mail.php", //путь до php фаила отправителя
//                     data: form_data,
//                     success: function() {
//                         alert("Спасибо за Ваш заказ. Наш менеджер свяжется с Вами");
//                     }            
//                 });
//                 return false;
//             }
//         });   
       
//     })
// }

