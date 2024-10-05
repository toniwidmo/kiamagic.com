// Globals used in this module
var wordpress_args, wordpress_config, wordpress_api, wordpress_users, wordpress_tags, wordpress_categories, wordpress_preloaded=0;

// wordpress post globals
var wordpress_post_template, wordpress_post;

// wordpress posts list globals
var wordpress_posts_template, wordpress_posts, wordpress_posts_displayed, wordpress_username, wordpress_posts_tags, wordpress_posts_count;

/* A special content module for pulling content from a wordpress site via the wordpress api */
function wordpress_menuitem(args) {
	var args_json = JSON.stringify(args);
	// get json object ready for injecting into html href...
	args_json = args_json.replace(/"/g,'&quot;');
	//console.log(args_json);
	return "javascript:wordpress_load('"+args_json+"');";
}

function wordpress_display(content) {
	$('#contentArea').html(content);
}
function wordpress_load(args) {
	console.log("Inside wordpress_load.");
	if(wordpress_preloaded < 3) {
		// Try to call enigmagick again in 1/10 of a second.
		setTimeout(function () {
			wordpress_load(args);
		}, 100);
		return null;
	}

	wordpress_args = args;
console.log('args: '+args);
	args = JSON.parse(args.replace(/&quot;/g,'"'));
console.log('args JSON parsed: '+args);
console.log(args.show);

	if(wordpress_api != "") {
		wordpress_parse_args(args);
        switch(args.show) {
            case "post":
                getWordPressPost(args.postid);
                //console.log("post: "+args.user+" "+args.postid);
                break;
            case "posts":
            default:
                // First clear contentArea, because we might need to make multiple calls to refill it.
                $('#contentArea').html('');
                wordpress_posts_displayed = new Array();
                getWordPressPosts(args.count,1,args.tag);
                //console.log("Get posts for: user(s): "+args.user+", tag(s): "+args.tag+", count: "+args.count);
                break;
        }
    } else {
        //wordpress_warning_msg("WordPress Error: API Not Defined.");
        console.log("WordPress Error: API Not Defined.");
        pushStateWithoutDuplicate('WordPress Error: API Not Defined.', './?p=wordpress/');
    }
}
function wordpress_permlink(permlink) {
	console.log( "wordpress_permlink start." );
	let args, tag, postid;

	console.log(permlink);
	permlink = permlink.filter((str) => str !== '');
	console.log(permlink);

    if(permlink.length >= 1) {
        switch(permlink[0]) {
            case 'post':
                postid = permlink[1];
                args='{"show": "post", "postid": "'+postid+'"}';
                break;
            case 'posts':
                if(permlink.length >= 2) {
                    tag=permlink[1];
                    args='{"show": "posts", "tag": "'+tag+'"}';
                } else {
                    args='{"show": "posts"}';
                }
                break;
        }
    } else {
        args='{"show": "posts"}';
    }

	console.log(args);
	console.log( "wordpress_permlink end." );

	wordpress_load(args);
}

function getWordPressPosts(count,page,tag) {
    let posts_url = wordpress_api+"posts/";
    console.log(posts_url);

	$.get(posts_url).then(posts => {
        processWordPressPosts(posts);
    });
}

function processWordPressPosts(posts) {
    console.log(posts);
	var template = wordpress_posts_template;
    wordpress_posts = posts;
	var content = '', author;


	var postsLength = wordpress_posts.length;
	for (var i = 0; i < postsLength; i++) {
		post_obj = wordpress_posts[i];

        if(typeof wordpress_config.authors[post_obj.author] === 'undefined') {
            author = wordpress_config.authors["default"];
        } else {
            author = wordpress_config.authors[post_obj.author];
        }
       
        /*wordpress_posts_displayed.push(post_obj.permlink);
        display_count++;
        //template+="post_obj "+i+": "+JSON.stringify(post_obj)+"<br><br>";
        //template+="json_metadata "+i+": "+JSON.stringify(json_metadata); */

        // Insert post values for this post
        template = template.replace(/{wordpress_posts_tags}/g,'');
        template = template.replace(/{wordpress_posts_title}/g,post_obj.title.rendered);
        template = template.replace(/{wordpress_posts_id}/g,post_obj.id);
        template = template.replace(/{wordpress_posts_guid}/g,post_obj.guid);
        template = template.replace(/{wordpress_posts_author}/g,author);

        template = template.replace(/{wordpress_posts_href}/g,"javascript:getWordPressPost('"+post_obj.id+"');");

        created_date=new Date(post_obj.date_gmt);
        display_date = created_date.toLocaleDateString(config.dateformat.locale, config.dateformat.options);
        template = template.replace(/{wordpress_posts_date}/g,display_date);

        // Full body
        template = template.replace('{wordpress_posts_content}',post_obj.content.rendered);

        var post_content = $($.parseHTML(post_obj.content.rendered));
        var img_src = post_content.find('img').attr('src');

        template = template.replace(/{wordpress_posts_img}/g,img_src);        
        if(typeof img_src === 'undefined') {
            template = template.replace(/{wordpress_posts_thumb}/g,'no_thumb');
        } else {
            template = template.replace(/{wordpress_posts_thumb}/g,'has_thumb');
        }

        // Body preview
        template = template.replace('{wordpress_posts_excerpt}',post_obj.excerpt.rendered);

        // Append post to content string if it has a matching tag
        content += template;
        //Reset template
        var template = wordpress_posts_template; 
    }
	// Append content to contentArea
	$('#contentArea').append(content);
}

function getWordPressPost(post_id) {
    let posts_url = wordpress_api+"posts/"+post_id;
    console.log(posts_url);

	$.ajax({
        type: 'GET',
        url: posts_url
    }).done(processWordPressPost);
}

function processWordPressPost(post_obj) {
    console.log("processWordPressPost()");
    console.log(post_obj);

	var template = wordpress_post_template;

    template = template.replace(/{wordpress_post_tags}/g,'');
    template = template.replace(/{wordpress_post_title}/g,post_obj.title.rendered);
    template = template.replace(/{wordpress_post_id}/g,post_obj.id);
    template = template.replace(/{wordpress_post_guid}/g,post_obj.guid);
    template = template.replace(/{wordpress_post_author}/g,post_obj.author);


    created_date=new Date(post_obj.date_gmt);
    display_date = created_date.toLocaleDateString(config.dateformat.locale, config.dateformat.options);
    template = template.replace(/{wordpress_post_date}/g,display_date);

    // Full body
    template = template.replace('{wordpress_post_content}',post_obj.content.rendered);

    // Body preview
    template = template.replace('{wordpress_post_excerpt}',post_obj.excerpt.rendered);

    // Display post
    content = template;

	$('#contentArea').html(content);
    pushStateWithoutDuplicate(post_obj.title.rendered, './?p=wordpress/post/'+post_obj.id);
}

/* WordPress Initialisation Functions */
function wordpress_parse_args(args) {
	console.log("wordpress_parse_args(args)");
	console.log(args);
	let push_msg = "WordPress"; // To Do: Allow a setting override for this.
	let url_args = ''
	if(args.show) {
        console.log(args.show);
        if(args.show == "" || args.show == "posts") {
            push_msg += " Posts";
            url_args += 'posts/';
            if(args.tag) {
                if(args.tag != "") {
                    console.log(args.tag);
                    push_msg += " with tag: '"+args.tag+"'";
                    url_args += args.tag+'/'
                }
            }
        }
	}

	pushStateWithoutDuplicate(push_msg, './?p=wordpress/'+url_args);
}

//Template loaded functions
function wordpressCommentTemplateLoaded(template) {
	wordpress_comment_template = template;
    wordpress_preloaded++;
	console.log( "wordpress CommentTemplate load was performed." );
}
function wordpressPostTemplateLoaded(template) {
	wordpress_post_template = template;
    wordpress_preloaded++;
	console.log( "wordpress PostTemplate load was performed." );
}
function wordpressPostsTemplateLoaded(template) {
	wordpress_posts_template = template;
    wordpress_preloaded++;
	console.log( "wordpress PostsTemplate load was performed." );
}
//Load the templates
function loadWordPressTemplates() {
	// Get template from theme
	var theme_template = "/theme/"+config.theme+"/wordpress-post.html";
	$.ajax(theme_template).done(wordpressPostTemplateLoaded).fail(function(){
		// Else use default template
		$.ajax("/module/wordpress/wordpress-post.html").done(wordpressPostTemplateLoaded);
	});
	// Get template from theme
	var theme_template = "/theme/"+config.theme+"/wordpress-posts.html";
	$.ajax(theme_template).done(wordpressPostsTemplateLoaded).fail(function(){
		// Else use default template
		$.ajax("/module/wordpress/wordpress-posts.html").done(wordpressPostsTemplateLoaded);
	});
	// Get template from theme
	var theme_template = "/theme/"+config.theme+"/wordpress-comment.html";
	$.ajax(theme_template).done(wordpressCommentTemplateLoaded).fail(function(){
		// Else use default template
		$.ajax("/module/wordpress/wordpress-comment.html").done(wordpressCommentTemplateLoaded);
	});
}
function getWordPressUsers() {
    let posts_url = wordpress_api+"users/";
    console.log(posts_url);

	$.ajax({
        type: 'GET',
        url: posts_url
    }).done(processWordPressUsers);
}
function processWordPressUsers(users) {
    console.log("processWordPressUsers()");
    wordpress_users = users;
    console.log(wordpress_users);
    wordpress_preloaded++;
}
function getWordPressTags() {
    let posts_url = wordpress_api+"tags/";
    console.log(posts_url);

	$.ajax({
        type: 'GET',
        url: posts_url
    }).done(processWordPressTags);
}
function processWordPressTags(tags) {
    console.log("processWordPressTags()");
    wordpress_tags = tags;
    console.log(wordpress_tags);
    wordpress_preloaded++;
}
function initWordPress() {
    if(typeof config.module_settings == "object") {
        console.log("module settings detected");
        if(typeof config.module_settings.wordpress == "object") {
            console.log("wordpress module settings detected");
            wordpress_config = config.module_settings.wordpress;
            wordpress_api = wordpress_config.api;
            console.log( "wordpress_api detected." );
            console.log("wordpress_api = "+wordpress_api);

            loadWordPressTemplates();
            //getWordPressUsers();
            //getWordPressTags();
            //getWordPressCategories();
        }
    }
}
initWordPress();