<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $pickup = $_POST['pickup-destination'];
    $toolsQuantity = $_POST['tools-quantity'];
    $sauseQuantity = $_POST['sause-quantity'];
    $vasabiQuantity = $_POST['vasabi-quantity'];
    $cartContent = $_POST['cart-content-for-telegram'];

    $token = "678861102:AAFs186UhEJ_S1edZox6I338cLjZanfqluw";
    $chat_id = "-317130054";

    $arr = array(
        'Имя: ' => $name,
        'Телефон: ' => $phone,
        'Email' => $email,
        'Адресс доставки: ' => $address,
        'Самовывоз из: ' => $pickup,
        'Количество приборов: ' => $toolsQuantity,
        'Количество единиц соевого соуса:' => $sauseQuantity,
        'Количество единиц васаби: ' => $vasabiQuantity,
        'Заказ: ' => $cartContent,
    );

    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

    if ($sendToTelegram) {
        header('Location: thankYouPage.html');
    } else {
        echo "Error";
    }
?>

 <!-- $name = $_POST['name'];
    $phone = $_POST['phone'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $pickup = $_POST['pickup-destination'];
    $toolsQuantity = $_POST['tools-quantity'];
    $sauseQuantity = $_POST['sause-quantity'];
    $vasabiQuantity = $_POST['vasabi-quantity'];
    $cartContent = $_POST['cart-content'];

    $token = "678861102:AAFs186UhEJ_S1edZox6I338cLjZanfqluw";
    $chat_id = "-317130054";
    
    $arr = array(
        'Имя пользователя: ' => $name,
        'Телефон: ' => $phone,
        'Email' => $email,
        'Адресс доставки: ' => $address,
        'Самовывоз из: ' => $pickup,
        'Количество приборов: ' => $toolsQuantity,
        'Количество единиц соевого соуса:' => $sauseQuantity,
        'Количество единиц васаби: ' => $vasabiQuantity,
        'Заказ ' => $cartContent,
    );

    foreach($arr as $key => $value) {
        $txt .= "<b>".$key."</b> ".$value."%0A";
    };

    $sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

    if ($sendToTelegram) {
        header('Location: thankYouPage.html');
    } else {
        echo "Error";
    } -->