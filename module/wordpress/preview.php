<?php 
    function get_web_page($url) {
        $options = array(
            CURLOPT_RETURNTRANSFER => true,   // return web page
            CURLOPT_HEADER         => false,  // don't return headers
            CURLOPT_FOLLOWLOCATION => true,   // follow redirects
            CURLOPT_MAXREDIRS      => 10,     // stop after 10 redirects
            CURLOPT_ENCODING       => "",     // handle compressed
            CURLOPT_USERAGENT      => "test", // name of client
            CURLOPT_AUTOREFERER    => true,   // set referrer on redirect
            CURLOPT_CONNECTTIMEOUT => 120,    // time-out on connect
            CURLOPT_TIMEOUT        => 120,    // time-out on response
        ); 

        $ch = curl_init($url);
        curl_setopt_array($ch, $options);

        $content  = curl_exec($ch);

        curl_close($ch);

        return $content;
    }

	$args = explode('/', $args);
	$wp_show = $args[0];

    $wp_settings = $config->module_settings->wordpress;
    $api = $wp_settings->api;

    switch($wp_show) {
        case 'post':
            // get postid from args
            $postid = $args[1];
            $api .= 'posts/'.$postid;
            break;
        case 'posts':
        default:
            $api .= 'posts';
            break;
    }
    
    $response = get_web_page($api);
    $resArr = array();
    $resArr = json_decode($response);

    $content = "<style>.has-large-font-size { font-size: 1.4em; font-weight: bold; }</style>";
    switch($wp_show) {
        case 'post':
            // get postid from args
            $content .= "<h1>".$resArr->title->rendered."</h1>";
            $content .= $resArr->content->rendered;
            break;
        case 'posts':
        default:
            if(count($resArr) > 0) {
                foreach($resArr as $post) {
                    $content .= "<h1>".$post->title->rendered."</h1>";
                    $content .= $post->excerpt->rendered;
                }
            } else {
                $content = "No posts found.";
            }
            break;
    }

