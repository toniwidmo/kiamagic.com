<?php
	$content = "PHP Generated Preview Goes Here...";
	$title = "Title of the page goes here.";
	
	if (file_exists("./local_config.json")) {
		$json = file_get_contents("./local_config.json");#
	} else {
		$json = file_get_contents("./config.json");#
	}
	
	$config = json_decode($json);

	$title = $config->sitetitle;
	$meta_description = $config->sitetitle;

	$page = $_GET['p'];

	if(is_null($page)) {
		$page = $config->firstpage->type.'/'.implode("/",$config->firstpage->args);
	}
	$module = strtok($page, '/');
	$args = substr($page, strpos($page, "/") + 1);
?>
<?php require_once(__DIR__.'/module/'.$module.'/preview.php'); ?>
<!doctype html>
<html lang="en">
	<head>
		<title id="title"><?=$title?></title>
		<script src="jquery.js"></script>
		<script src="init.js"></script>
		<meta charset="utf-8">
		<meta name="viewport" content="width=device-width, initial-scale=1">
		<meta name="description" content="<?=$meta_description?>">
		<link rel="icon" type="image/png" href="content/default/widmoinc-logo-32px.png" sizes="32x32">
		<link rel="icon" type="image/png" href="content/default/widmoinc-logo-32px.png" sizes="32x32">
		<link rel="icon" type="image/png" href="content/default/widmoinc-logo-32px.png" sizes="32x32">
		<style>
			body{
				background: #1a1813;
				color: #bca43a;
				text-align: center;
				margin-top: 2em;
			}
		</style>
	</head>

	<body>
		<?=$content?>
	</body>
</html>
