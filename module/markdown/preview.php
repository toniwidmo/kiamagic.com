<?php 
	$md_file = strtok($args, '/');

    if(file_exists("./content/".$md_file)) {
        require_once("Parsedown.php");

        $content = file_get_contents("./content/".$md_file);

        $Parsedown = new Parsedown();

        $content = $Parsedown->text($content);
    } else {
        if(file_exists("./content/404.html")) {
            $content = file_get_contents("./content/404.html");
        } else {
            $content = "404 - File Not Found.";
        }
    }

