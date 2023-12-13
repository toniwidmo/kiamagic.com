// rss Global Variables
var rss_template;
var rss_template_loaded = false;
var rss_item_template;
var rss_item_template_loaded = false;
var rss_source="";
var rss_args;

/* A content module for displaying rss feeds */

/* BlackPress Module Standard Functions */
function rss_menuitem(args) {
	var args_json = JSON.stringify(args);
	args_json = args_json.replace(/"/g,'&quot;');
	return "javascript:rss_load('"+args_json+"');";
}
function rss_load(args) {
	var feed, feed_source;

	console.log( "rss_load." );
	if(!rss_template_loaded) {
		// Try to call rss again in 1/10 of a second.
		setTimeout(function () {
			rss_load(args);
		}, 100);
		return null;
	}
	if(!rss_item_template_loaded) {
		// Try to call rss again in 1/10 of a second.
		setTimeout(function () {
			rss_load(args);
		}, 100);
		return null;
	}

	rss_args = args;
	args = JSON.parse(args.replace(/&quot;/g,'"'));
	
	console.log( args );
	console.log( JSON.stringify(args) );
	if(args.feed) {
		console.log(args.feed);
		feed_source = args.feed;

		push_msg = "RSS feed for '"+args.feed+"'";
		pushStateWithoutDuplicate(push_msg, './?p=rss/'+args.feed);

		if(typeof config.data_sources == "object") {
			//console.log(config.data_sources);
			//console.log(config.data_sources.enigmagick);
			//console.log(typeof config.data_sources.enigmagick);
			//console.log(config.data_sources.enigmagick[0]);
			if(typeof config.data_sources[args.feed] == "object" && config.data_sources[args.feed][0] == "rss") {
				feed = config.data_sources[args.feed][1];
				console.log( "RSS feed detected." );

				rss_display(feed);
			} else {
				console.log("RSS Error: Feed Incorrectly Defined.");
			}
		} else {
			console.log("RSS Error: Feed Not Defined.");
		}
	} else {
		console.log("RSS Error: No Feed Argument.");
	}

}

function rss_display(RSS_URL) {
	var content = rss_template;
	$('#contentArea').html(content);

	console.log( "rss_display." );
	fetch(RSS_URL)
	.then(response => response.text())
	.then(str => new window.DOMParser().parseFromString(str, "text/xml"))
	.then(data => {
	  console.log(data);
	  const items = data.querySelectorAll("item");
	  let html = ``;

	  // change this to use the templates
	  items.forEach(el => {
		var content = rss_item_template;
		//console.log(el);
		console.log($(el).find("content\\:encoded").html());
		//replace the placeholders...
		content = content.replace(/{rss_item_title}/g,el.querySelector("title").firstChild.data);
		content = content.replace(/{rss_item_date}/g,el.querySelector("pubDate").innerHTML);
		content = content.replace(/{rss_item_url}/g,el.querySelector("link").innerHTML);

		let body = $(el).find("content\\:encoded").html().replace("<![CDATA[","").replace("]]>","");
		content = content.replace(/{rss_item_body}/g,body);

		$('#rss_items').append(content);
	  });
	});
}

function rss_permlink(permlink) {
	console.log( "rss_permlink start." );
	let args, feed;

	console.log(permlink);
	permlink = permlink.filter((str) => str !== '');
	console.log(permlink);

	//switch(permlink.length) {
	//	case 1:
			// search -> default cipher and text

			args = '{"feed": "'+permlink[0]+'"}';
	//		break;
	//}
	console.log(args);
	console.log( "rss_permlink end." );

	rss_load(args);
}

/* Template preloading functions */
//Template loaded function
function rssTemplateLoaded(template) {
	rss_template = template;
	rss_template_loaded = true;
	console.log( "rss template load was performed." );
}
function rssItemTemplateLoaded(template) {
	rss_item_template = template;
	rss_item_template_loaded = true;
	console.log( "rss item template load was performed." );
}
//Load the templates
function loadrssTemplates() {
	// Get template from theme
	var theme_template = "./theme/"+config.theme+"/rss.html";
	$.ajax(theme_template).done(rssTemplateLoaded).fail(function(){
		// Else use default template
		$.ajax("./module/rss/rss.html").done(rssTemplateLoaded);
	});
	var theme_template = "./theme/"+config.theme+"/rss-item.html";
	$.ajax(theme_template).done(rssItemTemplateLoaded).fail(function(){
		// Else use default template
		$.ajax("./module/rss/rss-item.html").done(rssItemTemplateLoaded);
	});
}
loadrssTemplates();
