<?php 
	$text_file = strtok($args, '/');

    //var_dump($text_file);

    if(file_exists("./content/".$text_file)) {
        $content = file_get_contents("./content/".$text_file);
    } else {
        if(file_exists("./content/404.html")) {
            $content = file_get_contents("./content/404.html");
        } else {
            $content = "404 - File Not Found.";
        }
    }

