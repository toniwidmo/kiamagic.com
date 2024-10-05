<?php 
	$html_file = strtok($args, '/');

    if($html_file === "") {
        $html_file = "404.html";
    }

    if(file_exists("./content/".$html_file)) {
        $content = file_get_contents("./content/".$html_file);
    } else {
        $content = "404 - File Not Found.";
    }

