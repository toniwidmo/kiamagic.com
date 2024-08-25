<?php
    // REST API: This just returns a list of available API functions
    $api_list = array("kiaspeaks.php");

    header("Content-Type: application/json");
    echo json_encode($api_list);
    exit();
?>