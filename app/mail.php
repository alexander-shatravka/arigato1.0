<?
    $to = 'arigato.pznk@gmail.com'; //Почта получателя, через запятую можно указать сколько угодно адресов
    $subject = 'Обратный звонок'; //Загаловок сообщения
    $message = '
            <html>
                <head>
                    <title>'.$subject.'</title>
                </head>
                <body>
                    <p>Имя: '.$_POST['name'].'</p>
                    <p>Телефон: '.$_POST['phone'].'</p> 
                    <p>Почта: '.$_POST['email'].'</p> 
                    <p>Адресс доставки: '.$_POST['address'].'</p> 
                    <p>Самовывоз из:'.$_POST['pickup-destination'].'</p>  
                    <p>Количество приборов:'.$_POST['tools-quantity'].'</p> 
                    <p>Количество единиц соевого соуса:'.$_POST['sause-quantity'].'</p> 
                    <p>Количество единиц васаби:'.$_POST['vasabi-quantity'].'</p> 
                    <p>Заказ:<br>'.$_POST['cart-content'].'</p>                         
                </body>
            </html>'; //Текст нащего сообщения можно использовать HTML теги
    $headers  = "Content-type: text/html; charset=utf-8 \r\n"; //Кодировка письма
    $headers .= "From: Новый клиент (тест)<nikkot08@gmail.com>\r\n"; //Наименование и почта отправителя
    mail($to, $subject, $message, $headers); //Отправка письма с помощью функции mail

    // <p>Дата:'.$_POST['date'].'</p>
    // <p>Время:'.$_POST['time'].'</p>
?>