/* A content module version of KIASpeaks */

/* NodeJS Module Standard Functions */
function kiaspeaks_menuitem(args) {
	return "javascript:kiaspeaks_load('');";
}
function kiaspeaks_load(args) {
	if(kiaspeaks_templates_to_load > 0) {
		// Try to call enigmagick again in 1/10 of a second.
		setTimeout(function () {
			kiaspeaks_load(args);
		}, 100);
		return null;
	}

	kiaspeaks_display();
	pushStateWithoutDuplicate('KIA Speaks', './?p=kiaspeaks/');
}

function kiaspeaks_display(content) {
	var content = kiaspeaks_template;

	$('#contentArea').html(content);

	$('#kiaspeaks_enter_btn').click(function(e){ kiaspeaks_make_query(e); });
	$("#kiaspeaks_text_input").focus().on('keypress',function(e) {
		if(e.which == 13) {
			console.log('Enter!');
			$("#kiaspeaks_enter_btn").trigger("click");
		}
	});
}

function kiaspeaks_permlink(permlink) {
	permlink = permlink.join("/");
	kiaspeaks_load(permlink);
}


/** KIA Speaks Make Query Functions */
function kiaspeaks_make_query(e) {
	let query = $("#kiaspeaks_text_input").val();
	let query_html = kiaspeaks_query_template;

	query_html = query_html.replace(/{kiaspeaks_query}/g,query);

	$('#kiaspeaks_chat').append(query_html);

	let reply = kiaspeaks_random_array_item(kiaspeaks_lines)+' '+kiaspeaks_random_array_item(kiaspeaks_lines)+' '+kiaspeaks_random_array_item(kiaspeaks_lines)+' '+kiaspeaks_random_array_item(kiaspeaks_lines)+' '+kiaspeaks_random_array_item(kiaspeaks_lines);
	let reply_html = kiaspeaks_answer_template;
	reply_html = reply_html.replace(/{kiaspeaks_answer}/g,reply);
	$('#kiaspeaks_chat').append(reply_html);

	$("#kiaspeaks_text_input").val("").focus();
}

var kiaspeaks_lines = [
	'Winged secret flame, my secret centre.',
'Cube in the circle.',
'I have made a secret door the manifestation.',
'Thy will, do that and no other.',
'Come in our splendour.',
'Thrill with the working!',
'If thou love, exceed!',
'Another woman shall awake skies;',
'Our chosen: who shall rejoice, they shall surpass the stars.',
'These words are of the consciousness.',
'These words are writing of the book.',
'These words are from the ill-ordered.',
'These words are filthy, shall be filthy.',
'These words are splendour in my name.',
'Midnight is splendour in my name.',
'Midnight is three ordeals in one.',
'Midnight is my eyes my spangles.',
'Midnight is, yet all is ever as it was.',
'Midnight is the bond that can unite.',
'Holy place shall be the bond that can unite.',
'Holy place shall be the ill-ordered house.',
'Midnight is the double-wanded one.',
'The double wand I invoke, I greet.',
'The double wand of the consciousness.',
'The double wand and Supreme Ritual.',
'The double wand is nine by the fools.',
'The double wand stir me or still me!',
'Fresh fever stir me or still me!',
'Fresh fever I invoke, I greet.',
'Fresh fever of the consciousness.',
'Fresh fever in it thy secret.',
'Fresh fever none shall stand before.',
'Fresh fever shall be the strength.',
'Fresh fever go on, in my strength.',
'Fresh fever, a feast for Tahuti and Law.',
'Our law and the joy I invoke, I greet.',
'Our law and the joy of the consciousness.',
'Our law and the joy called the word of Heru-ra-ha.',
'Our law and the joy shall be the strength.',
'Our law and the joy none shall stand before.',
'Our law and the joy and I The inspired.',
'My image in the word of whole of the Law.',
'My image in the joys of my love will.',
'My image in the ill-ordered house.',
'My image in the double-wanded one.',
'My image in the child of thy bowels.',
'My image in three ordeals in one.',
'My image in splendour rapture!',
'Fools despise splendour in my name.',
'Fools despise my eyes my spangles.',
'Fools despise the joys of my love will.',
'Fools despise the double-wanded one.',
'Fools despise the ill-ordered house.',
'Fools despise pity and compassion.',
'Fools despise these virtuous words.',
'Another place of men. Curse them!',
'Another place none shall stand before.',
'Fear not that bond that can unite.',
'Fear not that it is all a lie, this folly.',
'Fear not that splendour rapture!',
'Fear not that lust in power of lust.',
'The lust shall awake the joys of my love will.',
'The lust shall awake the double-wanded one.',
'The lust shall awake the child of thy bowels.',
'The lust shall awake the ill-ordered house.',
'Look forth upon the ill-ordered house.',
'Look forth upon The child of thy bowels.',
'Look forth upon the double-wanded one.',
'Look forth upon the word of whole of the Law.',
'Look forth upon my eyes my spangles.',
'Another skies none shall stand before.',
'Night of the three ordeals in one,',
'Discover the three ordeals in one,',
'Discover the circumference.',
'Discover the bond that can unite.',
'Discover the splendour rapture!',
'Discover the lust in power of lust.',
'Discover the writing of the Book.',
'A secret key these virtuous words:',
'A secret key shall be the strength.',
'A secret key of the consciousness.',
'A secret key and Supreme Ritual,',
'A secret key is nine by the fools;',
'A secret key called the word of Heru-ra-ha.',
'Fear not that warrior, I will give you.',
'Thou shalt come who shall discover the key.',
'Thou shalt come from the ill-ordered.',
'Thou shalt come who are also of my friends.',
'Thou shalt come, ye come through me.',
'The fall of the warrior, I will give you.',
'Be willing to stir me or still me!.',
'Be willing to go on, in my strength.',
'Be willing to perish with the dogs.',
'Be willing to convert not: talk not.',
'Us, my servants. Children.',
'Us, my servants in an egg.',
'Us, my servants of fire.',
'Us. My servants forge gold.',
'Us. My servants live long.',
'Us. My servants will give.',
'Am I the wise children?',
'Am I the wise and his kin?',
'Am I the wise in hope?',
'Am I the wise in an egg?',
'Why? I am eight in an egg.',
'Why? I am eight, the woman.',
'Why? I am eight, the sorrow.',
'Why? I am eight divided.',
'Why? My servants, I am snake.',
'Why? By my name, I am snake.',
'Day of the snake in an egg.',
'Day of the snake and his kin!',
'Day of the snake and fire.',
'Day of the snake will slay me.',
'Day of the snake is no dread.',
'Day of the snake, of my joy.',
'Day of the snake for Kings.',
'Also secret word shall reign.',
'Also secret word of fire.',
'Also secret word and mantras.',
'Also this law is for all who are of us.',
'Also this law is for all children.',
'And a silence of children.',
'And a silence of the woman.',
'and a silence of fallen art.',
'Also the ritual of fire.',
'Also the ritual and mantras.',
'Also the ritual of my joy.',
'Also the ritual for Kings.',
'Day my servants ye shall be.',
'Day my servants will slay me.',
"Hawk's secret word will slay me.",
"Hawk's princes shall not die.",
"It is a mortals tragedy that they can never accept this.",
"According to Hesiod, Eros arrose out of Chaos.",
"Everyone runs towards the glittering metal structure as the tentacles slash at them from the massive shells on the side of the dome.",
"The forn in which spirit chooses to manifest on any given occassion (as human, humanoid or animal creature, for example) is itself a sacred mystery.",
"What if there is no hell or they don't want us there?",
"So we lay in a black embrace, the seed is sown in a holy place.",
"Grandmother Moon lights your way in the dark, but she does not make the sun rise.",
"We can't stop here!",
"This is bat country!",
"What you should always be imagining is you at your most powerful.",
"Enjoy the pain my friend.",
"Seek the brothers of darkness.",
"Batteries not included.",
"I am he who has been born as the first son of the divine Anu.",
"Nothing has being, everything has value",
"How do you define real?",
"This god also threw an apple at me.",
"When you gaze long into the abyss, the abyss gazes into you.",
"Must I be forever solving the changing symbolism of the wretched morality called 'I'?",
"I was pretty sure I could become a better magician by doing it, and I don't think I'm wrong, yet.",
"Go to knowledge as you would go to war; wide awake, with fear, with respect and with absolute assurance.",
"Abandon all paths.",
"Follow the white rabbit...",
"Within the eye lies wisdom.",
"Lets make a deal.",
"I dare you to do better.",
"Work to better ourselves and the rest of humanity.",
"We are searching, not just for answers to our questions, but for new questions.",
"Logic is the beginning of wisdom, not the end.",
"The real violence, the violence I realized was unforgivable, is the violence we do to ourselves when we're too afraid to be who we really are.",
"I have a feeling I'm going to have a really good day today.",
"Our existence depends on sheer implausibility.",
"I was suddenly struck by her beauty and the knowledge that all beauty is temporary.",
"Death and Decay haunt every breath we take.",
"Impossibility is a kiss away from reality.",
"Who can say if it is we who make the choice or the choice that makes us?",
"It's not the drugs that make the drug addict, it's the need to escape reality.",
"We make choices and life has a way of making us pay for them.",
"Life holds onto you and sometimes if you're lucky, it finds a way to push back into your heart.",
"At a certain point, I realized there's a huge difference between what we work for and what we live for.",
"Sometimes… you make a mistake. You've got two choices: you live with it, or you fix it.",
"I love you, that's why you can't give up.",
"Believing in something doesn't make it so.",
"Art is love made public.",
"I sometimes forget that life's not just full of surprises, It's also full of gifts.",
"Nothing good ever happens when people care more about our differences than the things we have in common.",
"The future that I hope for is the same as yours, a future where our children grow up never knowing love as a wall, but only as a bridge.",
"Art, like life, is full of risks.",
"Nothing's more terrifying than a dream come true.",
"If your dream isn't worth the risk, what is?",
"Choice is less about what happens than it is about how we deal with it.",
"The improbable unfolding of recent events has led me to consider that no one thing is one thing only.",
"It is in this unfamiliar realm we find new possibilities.",
""
];

function kiaspeaks_random_array_item(items) {
    let item = items[Math.floor(Math.random() * items.length)];

    return item;
}

//Template loaded functions
var kiaspeaks_template, kiaspeaks_query_template, kiaspeaks_answer_template;
var kiaspeaks_templates_to_load = 3;

function kiaspeaksTemplateLoaded(template) {
	kiaspeaks_template = template;
	kiaspeaks_templates_to_load = kiaspeaks_templates_to_load-1;
	console.log( "kiaspeaks template load was performed." );
}
function kiaspeaksQueryTemplateLoaded(template) {
	kiaspeaks_query_template = template;
	kiaspeaks_templates_to_load = kiaspeaks_templates_to_load-1;
	console.log( "kiaspeaks query template load was performed." );
}
function kiaspeaksAnswerTemplateLoaded(template) {
	kiaspeaks_answer_template = template;
	kiaspeaks_templates_to_load = kiaspeaks_templates_to_load-1;
	console.log( "kiaspeaks answer template load was performed." );
}
//Load the templates
function loadKIASpeaksTemplates() {
	// Get template from theme if it exists, otherwise use defaults
	var theme_template = "./theme/"+config.theme+"/kiaspeaks.html";
	$.ajax(theme_template).done(kiaspeaksTemplateLoaded).fail(function(){
		// Else use default template
		$.ajax("./module/kiaspeaks/kiaspeaks.html").done(kiaspeaksTemplateLoaded);
	});
	var theme_template = "./theme/"+config.theme+"/kiaspeaks_query.html";
	$.ajax(theme_template).done(kiaspeaksQueryTemplateLoaded).fail(function(){
		// Else use default template
		$.ajax("./module/kiaspeaks/kiaspeaks_query.html").done(kiaspeaksQueryTemplateLoaded);
	});
	var theme_template = "./theme/"+config.theme+"/kiaspeaks_answer.html";
	$.ajax(theme_template).done(kiaspeaksAnswerTemplateLoaded).fail(function(){
		// Else use default template
		$.ajax("./module/kiaspeaks/kiaspeaks_answer.html").done(kiaspeaksAnswerTemplateLoaded);
	});
}
loadKIASpeaksTemplates();
