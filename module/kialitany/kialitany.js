/* A content module version of KIASpeaks */

/* NodeJS Module Standard Functions */
function kialitany_menuitem(args) {
	return "javascript:kialitany_load('');";
}
function kialitany_load(args) {
	console.log('kialitany_load');
	if(kialitany_templates_to_load > 0) {
		// Try to call load function again in 1/10 of a second.
		setTimeout(function () {
			kialitany_load(args);
		}, 100);
		return null;
	}

	kialitany_display();
	pushStateWithoutDuplicate('KIA Litany', './?p=kialitany/');
}

function kialitany_display() {
	console.log('kialitany_display');
	var content = kialitany_template;
	console.log(content);
	$('#contentArea').html(content);

	kialitany_full();
}

function kialitany_permlink(permlink) {
	permlink = permlink.join("/");
	kialitany_load(permlink);
}

/** KIA Litany Functions */
function kialitany_full() {
	console.log('kialitany_full');
	$("#kialitany_short").transition({ height: '0px', opacity: '0' });
	$("#kialitany_story").transition({ height: '0px', opacity: '0' });
	$("#kialitany_full").transition({ height: 'auto', opacity: '1' });
}

function kialitany_short() {
	$("#kialitany_story").transition({ height: '0px', opacity: '0' });
	$("#kialitany_full").transition({ height: '0px', opacity: '0' });
	$("#kialitany_short").transition({ height: 'auto', opacity: '1' });
}

function kialitany_origin() {
	$("#kialitany_short").transition({ height: '0px', opacity: '0' });
	$("#kialitany_full").transition({ height: '0px', opacity: '0' });
	$("#kialitany_story").transition({ height: 'auto', opacity: '1' });
}


function kialitany_random_array_item(items) {
    let item = items[Math.floor(Math.random() * items.length)];

    return item;
}

//Template loaded functions
var kialitany_template;
var kialitany_templates_to_load = 1;

function kialitanyTemplateLoaded(template) {
	kialitany_template = template;
	kialitany_templates_to_load = kialitany_templates_to_load-1;
	console.log( "kialitany template load was performed." );
}
//Load the templates
function loadKIALitanyTemplates() {
	console.log( "kialitany template load starting..." );
	// Get template from theme if it exists, otherwise use defaults
	var theme_template = "./theme/"+config.theme+"/kialitany.html";
	$.ajax(theme_template).done(kialitanyTemplateLoaded).fail(function(){
		// Else use default template
		$.ajax("./module/kialitany/kialitany.html").done(kialitanyTemplateLoaded);
	});
}
loadKIALitanyTemplates();
