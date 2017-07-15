<?php
  $recepient = "sergey.denisyuk@gmail.com";
  $sitename = "Название сайта";

  $email = trim($_POST["email"]);
  $name = trim($_POST["name"]);
  $title = trim($_POST["title"]);
  $message = trim($_POST["message"]);


  if ($name!='' and $email!='' and $message!='') {
      $message = "$email, $name, $title, $message";
      $res = mail($recepient, 'Subject', $message);
      if ($res) {
          echo 1;
      } else {
          echo 0;
      }
  }
  else {
      echo 0;
  }

  ?>