<?php
    // REST API: The KIA Speaks API
    // This looks in the KIA Speaks source file, kiaspeaks.txt, and selects 1-5 random sentences as a reply to send back via JSON.

    // initialise response
    $response = '';

    // Get all possible lines 
    $all_lines = file('kiaspeaks.txt', FILE_IGNORE_NEW_LINES);

    // Number of sentences
    $sentences = rand(2, 5);

    $rand_keys = array_rand($all_lines, $sentences);

    for ($i = 0; $i < $sentences; $i++) {
        $response .= $all_lines[$rand_keys[$i]] . " ";
    }

    //Get rid of new lines and weird white space...
    $response = preg_replace('!\s+!', ' ', $response);

    $response_obj = (object) [
        'api' => 'KIA Speaks',
        'sentences' => $sentences,
        'response' => $response
    ];

    // Output lines
    header("Content-Type: application/json");
    echo json_encode($response_obj);
    exit();
?>