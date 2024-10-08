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

function kiaspeaks_make_paragraph() {
	var reply = kiaspeaks_random_array_item(kiaspeaks_lines);

	var len = Math.floor(Math.random() * 5);
	for(i=0; i<len; i++) {
		reply += " "+kiaspeaks_random_array_item(kiaspeaks_lines);
	}
	return reply;
}

/** KIA Speaks Make Query Functions */
function kiaspeaks_make_query(e) {
	let query = $("#kiaspeaks_text_input").val();
	let query_html = kiaspeaks_query_template;

	query_html = query_html.replace(/{kiaspeaks_query}/g,query);

	$('#kiaspeaks_chat').append(query_html);

	// Make request
	$.ajax({
        type: 'GET',
        url: "/rest/kiaspeaks.php"
    }).done(kiaspeaks_processAnswer);
}

function kiaspeaks_processAnswer(answer) {
	console.log("kia speaks response reached")
	//let reply = kiaspeaks_random_array_item(kiaspeaks_lines)+' '+kiaspeaks_random_array_item(kiaspeaks_lines)+' '+kiaspeaks_random_array_item(kiaspeaks_lines)+' '+kiaspeaks_random_array_item(kiaspeaks_lines)+' '+kiaspeaks_random_array_item(kiaspeaks_lines);
	//let reply = kiaspeaks_make_paragraph();
	let reply = answer.response;
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
'Another woman shall awake skies.',
'Our chosen: who shall rejoice, they shall surpass the stars.',
'These words are of the consciousness.',
'These words are from the ill-ordered.',
'These words are filthy, shall be filthy.',
'These words are splendour in my name.',
'Midnight is splendour in my name.',
'Midnight is my eyes my spangles.',
'Midnight is, yet all is ever as it was.',
'Midnight is the bond that can unite.',
'Holy place shall be the bond that can unite.',
'Holy place shall be the ill-ordered house.',
'Midnight is the double-wanded one.',
'The double wand I invoke, I greet.',
'The double wand of the consciousness.',
'Fresh fever stir me or still me!',
'Fresh fever I invoke, I greet.',
'Fresh fever of the consciousness.',
'Fresh fever none shall stand before.',
'Fresh fever go on, in my strength.',
'Our law and the joy I invoke, I greet.',
'Our law and the joy of the consciousness.',
'Our law and the joy shall be the strength.',
'Our law and the joy none shall stand before.',
'My image in the ill-ordered house.',
'My image in the double-wanded one.',
'Fools despise splendour in my name.',
'Fools despise the double-wanded one.',
'Fools despise the ill-ordered house.',
'Fools despise pity and compassion.',
'Fools despise these virtuous words.',
'Another place of men. Curse them!',
'Another place none shall stand before.',
'Fear not that bond that can unite.',
'Fear not that it is all a lie, this folly.',
'Fear not that splendour rapture!',
'The lust shall awake the double-wanded one.',
'The lust shall awake the ill-ordered house.',
'Look forth upon the ill-ordered house.',
'Look forth upon the double-wanded one.',
'Look forth upon my eyes my spangles.',
'Another skies none shall stand before.',
'Night of the three ordeals in one,',
'Discover the three ordeals in one,',
'Discover the circumference.',
'Discover the bond that can unite.',
'Discover the lust in power of lust.',
'Discover the writing of the book.',
'A secret key of the consciousness.',
'A secret key and Supreme Ritual.',
'A secret key is nine by the fools.',
'Fear not that warrior, I will give you.',
'Thou shalt come who shall discover the key.',
'Thou shalt come from the ill-ordered.',
'Thou shalt come, ye come through me.',
'The fall of the warrior, I will give you.',
'Be willing to stir me or still me!',
'Be willing to go on, in my strength.',
'Be willing to perish with the dogs.',
'Be willing to convert not: talk not.',
'Us, my servants in an egg.',
'Us, my servants of fire.',
'Us. My servants forge gold.',
'Us. My servants live long.',
'Us. My servants will give.',
'Am I the wise children?',
'Am I the wise in hope?',
'Am I the wise in an egg?',
'Why? I am eight divided.',
'Why? By my name, I am snake.',
'Day of the snake in an egg.',
'Day of the snake and his kin!',
'Day of the snake and fire.',
'Day of the snake will slay me.',
'Day of the snake is no dread.',
'Day of the snake, of my joy.',
'Also secret word of fire.',
'Also secret word and mantras.',
'Also this law is for all who are of us.',
'Also this law is for all children.',
'And a silence of fallen art.',
'Also the ritual of fire.',
'Also the ritual and mantras.',
'Also the ritual of my joy.',
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
"The wilderness will always be my real home.",
"If you ask me all houses are basically the same, roof, floor, walls, people saying STOP WALKING IN LIKE THAT!",
"What's so scary about a bunch of creeps with nothing better to do than talk badly about people behind their backs!?",
"Imperfection is beautiful... at least to me.",
"Friendship isn't a weakness, it's my greatest strength!",
"I didn't break the world... but I am going to fix it.",
"I am brave, strong, loyal, and I give great hugs!",
"You're worth more than what you can give other people.",
"Did you think friendship was easy?",
"It takes work to be there for other people!",
"It takes everything you've got.",
"It's hard opening your heart.",
"It makes you vulnerable but it doesn't make you weak and in the end I have to believe it's worth it",
"You try so hard to play the big, bad villain, but your heart's never been in it, has it?",
"Communication is key to a good friendship.",
"Home is what you take with you, not what you leave behind.",
"For all those that have to fight for the respect that everyone else is given without question.",
"That we're not human is just the lie they tell themselves so they don't have to feel bad about how they treat us.",
"Who misses what they have never, ever even imagined?",
"There is an art to smiling in a way that others will believe.",
"Neither myths nor mysteries can hold a candle to the most infinitesimal spark of hope.",
"It's a gift if it makes us better, it's a curse if we let it destroy us.",
"This is what you must remember: the ending of one story is just the beginning of another.",
"Nothing to do but follow your crazy!",
"When the reasoning mind is forced to confront the impossible again and again, it has no choice but to adapt.",
"Frightened people look for scapegoats.",
"Being useful to others is not the same thing as being equal.",
"The way of the world isn't the strong devouring the weak, but the weak deceiving and poisoning and whispering in the ears of the strong until they become weak, too.",
"There is such a thing as too much loss.",
"You obeyed, once, because you thought it would make you safe.",
"The game was too rigged to bother playing.",
"Letting out some of that accumulated horror by occasionally sounding like a frothing maniac is how he copes.",
"It's also how he warns you, you know now, that he's about to destroy some additional measure of your naivete.",
"Nothing is ever as simple as you want it to be.",
"There are many of us now, enough to be called a people in ourselves and not merely a mistake.",
"Love is no inoculation against murder.",
"Just because they want to kill her is no reason to forget her manners.",
"You offered him a hand to help him up, not realizing he weighed of diamond bones and ancient tales untold.",
"But it is one thing to resolve to die, quite another to actually carry out that resolve in the midst of dying.",
"They ask to touch her hair and she asks to touch theirs back.",
"This makes them all realize how strange and silly a request that is, and they giggle and become instant friends without a head petted between them.",
"Her heart breaks in this moment.",
"Another small, quiet tragedy, amid so many others.",
"Some worlds are built upon a faultline of pain, held stable—temporarily—by nightmare walls.",
"Don't lament when the walls fall apart, lament that they were ever built in the first place.",
"It's never a waste of time to educate others.",
"Complaining about nothing doesn't seem like coping to you, but okay.",
"Now she has someone who believes in her, trusts her, fights for her, as she is.",
"So she will be what she is.",
"Denying what you are didn't keep people from knowing what you are.",
"The truth is beneath the surface, a Leviathan waiting to uncurl, but the waters of his thoughts are placid for now.",
"Denial is powerful.",
"Now you know that miracles are a matter of just effort, just perception, and maybe just magic.",
"Put people in a cage and they will devote themselves to escaping it, not cooperating with those who caged them.",
"Maybe she failed your tests because they were the wrong tests.",
"The kind of healer who knows that sometimes one must inflict terrible agony - rebreak a bone, carve off a limb, kill the weak - in order to make the whole stronger.",
"It is surprising how refreshing this feels.",
"Being judged by what you do, and not what you are.",
"The pain is horrific and it never really ends, though he learns to mitigate it enough to function; all those who survive the implantation do.",
"The smiling, you see.",
"Endorphins ease pain.",
"You have seen so much purposeless suffering that at least being killed for a reason can be borne?",
"It's always harder to fight for other people than for the self.",
"It's so reasonable that you don't know why you didn't even consider it.",
"Well, you know why.",
"Think of it this way: Everything that grows or walks on land can breathe the world's air, eat its food, survive its usual shifts in temperature.",
"We don't have to change to do that; we are precisely the way we need to be, because that's how the world works.",
"Magic derives from life—that which is alive, or was alive, or even that which was alive so many ages ago that it has turned into something else.",
"All at once this understanding causes something to shift in your perception.",
"Relationships chisel the final shape of one's being.",
"She has the freedom to be fully who and what she is, and she no longer fears that self.",
"Now she has someone who believes in her, trusts her, fights for her, as she is.",
"So she will be what she is.",
"When a slave rebels, it is nothing much to the people who read about it later.",
"Just thin words on thinner paper worn finer by the friction of history.",
"But for a society built on exploitation, there is no greater threat than having no one left to oppress.",
"She has seen him fight his own brutal nature, and the Earth itself, in order to be the parent she needs.",
"He has helped her learn to love herself for what she is.",
"We will have set her free … to struggle for survival along with everyone else.",
"But that is better than the illusion of safety in a gilded cage, is it not?",
"You can't take away people's homes and sense of security in such an immediate, dramatic way, and expect them to consider extended chains of culpability before they get angry about it.",
"But then they wanted more magic than just what their own lives or the accumulated aeons of life and death on the Earth's surface, could provide.",
"And when they saw how much magic brimmed just beneath that surface, ripe for the taking...",
"Yet she has also spent the past year and a half learning that adults are people, and sometimes they are wrong, and sometimes somebody should yell at them.",
"I don't trust you, either.",
"But we don't have to like each other to work together.",
"Would've been nice if we could've all had normal, of course, but not enough people wanted to share.",
"You can reject these dregs of your old self and pretend that nothing and no one else matters… or you can embrace them.",
"Reclaim them for what they're worth, and grow stronger as a whole.",
"A legacy is something obsolete, but which you cannot get rid of entirely.",
"Something no longer wanted, but still needed.",
"When I narrow my gaze and squint into memory, I see faces and events that should hold meaning for me, and they do, but they don't.",
"The person who witnessed these things firsthand is me, and yet not.",
"There are none so frightened, or so strange in their fear, as conquerors.",
"They conjure phantoms endlessly, terrified that their victims will someday do back what was done to them—even if, in truth, their victims couldn't care less about such pettiness and have moved on.",
"Conquerors live in dread of the day when they are shown to be, not superior, but simply lucky.",
"They're afraid because we exist.",
"There's nothing we did to provoke their fear, other than exist.",
"There's nothing we can do to earn their approval, except stop existing - so we can either die like they want, or laugh at their cowardice and go on with our lives.",
"Love enough to change the world!",
"I've got a one-way ticket to destiny, a one-way road to my future.",
"That road is long, you can't go wrong with blue skies up above.",
"Smile for the day and sail to the stars, make a wish and see.",
"Under a cloud that won't stop crying, raining down on a mountain what spits fire, the sky and ground used to love so well.",
"Floatin' down aimlessly, atop a swirlin' tree, blue ribbons in the apple sky, one thing is on my mind.",
"Dancin' comes naturally, to those who let it be.",
"Is there such a thing as too much of a good thing?",
"With the dancing and the singing, like the weekdays never happened, I could be, I should be dancing right now.",
"The doldrums of the work week gets me feeling down, misery and sorrow follow us around.",
"Ever since the first time I opened my eyes, I've awakened to the same thing.",
"Well daylight struck a chord with my photo-receptors.",
"Night greeted me with a sea of stars",
"People are soaring, always exploring, higher than they've ever been before",
"But we are still down here, feet on the ground near, what will rise us up with the rest.",
"I am not an unimaginable thing, my thoughts are tangible.",
"I don't have the heart to send you untruthful words.",
"And oh, maybe it's alright, 'cause baby it fights for some time just to be held tight.",
"I am a living thing, I am not a human being, but I'm alive, I'm alive.",
"Can't we live without all the bounds?",
"Our society is make believe, break it, don't be afraid to shake it.",
"Hey kids whaddaya know, what do you think you're doing?",
"I say pardon me, I'm dancing for no reason.",
"Doubt it, get right up and shout it, try it out and flout all the bounds of society that are make believe.",
"Dream it, but you've got to really mean it, brother.",
"There is no disagreement, the stage of society, it's make believe.",
"Life's too short so spread the love, you know it is, you know it is.",
"Do great things, Where you know they must be done.",
"Someone's got it worse than you, you know he does, you know he does, so I'm asking you to spread the love.",
"I don't know where everyone goes, it's not like us to follow.",
"I'm safe right here, we know who we are.",
"It's kind of scary, thinking of what is out there.",
"It's a scary scary world and there are scary scary things",
"There are she-devils and sucubi that just want their way.",
"Bruteful demons that just want to have all the reins.",
"And though he's gone, that's what he gets, for selling his soul to the bog.",
"Some girls say all they need is dreaming, but some girls say they ain't got time.",
"But for those who dream, well they just keep dreaming.",
"We've got to chase the dream to be happy.",
"Do you wanna sail into the sky?",
"Do you wanna soar across the stars?",
"All the programming is done (oh yes), start-up commands are run (oh they run).",
"Shared vulnerability builds up connection, builds up stores and reserves of energy, fortitude.",
"The act of opening oneself up and showing the dark pink soft bits inside to someone who sees them?",
"It's restorative.",
"It's been a long road, getting from there to here.",
"It's been a long time, but my time is finally near.",
"And they're not gonna hold me down no more.",
"It's vital to remember who you really are.",
"It's very important.",
"It isn't a good idea to rely on other people or things to do it for you, you see.",
"They always get it wrong.",
"Evil begins when you begin to treat people as things.",
"If you don't turn your life into a story, you just become a part of someone else's story.",
"If you trust in yourself…and believe in your dreams…and follow your star… you'll still get beaten by people who spent their time working hard and learning things and weren't so lazy.",
"Time is a drug, too much of it kills you.",
"The trouble with having an open mind, of course, is that people will insist on coming along and trying to put things in it.",
"It's still magic even if you know how it's done.",
"Seeing, contrary to popular wisdom, isn't believing, it's where belief stops, because it isn't needed any more.",
"Coming back to where you started is not the same as never leaving.",
"There have been times, lately, when I dearly wished that I could change the past.",
"Well, I can't, but I can change the present, so that when it becomes the past it will turn out to be a past worth having.",
"Sometimes glass glitters more than diamonds because it has more to prove.",
"Change the story, change the world.",
"The worst thing you can do is nothing.",
"Anyway, if you stop tellin' people it's all sorted out afer they're dead, they might try sorting it all out while they're alive.",
"We who think we are about to die will laugh at anything.",
"Give a man a fire and he's warm for a day, but set fire to him and he's warm for the rest of his life.",
"It was sad, like those businessmen who came to work in serious clothes but wore colorful ties in a mad, desperate attempt to show there was a free spirit in there somewhere.",
"Stories of imagination tend to upset those without one.",
"No matter how fast light travels, it finds the darkness has always got there first, and is waiting for it.",
"It's not worth doing something unless someone, somewhere, would much rather you weren't doing it.",
"I'll be more enthusiastic about encouraging thinking outside the box when there's evidence of any thinking going on inside it.",
"Real stupidity beats artificial intelligence every time.",
"She was beautiful, but she was beautiful in the way a forest fire was beautiful: something to be admired from a distance, not up close.",
"She was already learning that if you ignore the rules people will, half the time, quietly rewrite them so that they don't apply to you.",
"I'd rather be a rising ape than a falling angel.",
"Human beings make life so interesting.",
"Do you know, that in a universe so full of wonders, they have managed to invent boredom.",
"The presence of those seeking the truth is infinitely to be preferred to the presence of those who think they've found it.",
"Inside every old person is a young person wondering what happened.",
"If there was anything that depressed him more than his own cynicism, it was that quite often it still wasn't as cynical as real life.",
"The thing about words is that meanings can twist just like a snake, and if you want to find snakes look for them behind words that have changed their meaning.",
"This isn't life in the fast lane, it's life in the oncoming traffic.",
"Did I do anything last night that suggested I was sane?",
"Do you think it's possible for an entire nation to be insane?",
"Always be wary of any helpful item that weighs less than its operating manual.",
"Chaos is found in greatest abundance wherever order is being sought, and it always defeats order, because it is better organized.",
"No one is actually dead until the ripples they cause in the world die away...",
"The enemy isn't men, or women, it's bloody stupid people and no one has the right to be stupid.",
"Even if it's not your fault, it's your responsibility.",
"Sometimes it's better to light a flamethrower than curse the darkness.",
"The trouble is you can shut your eyes but you can't shut your mind.",
"No, what he didn't like about heroes was that they were usually suicidally gloomy when sober and homicidally insane when drunk.",
"You can take a billion trillion tons of flaming matter, a furnace of unimaginable strength, and turn it into a little song for children!",
"You build little worlds, little stories, little shells around your minds, and that keeps infinity at bay and allows you to wake up in the morning without screaming!",
"And someone has to speak up for them as has no voices.",
"A lie can run round the world before the truth has got its boots on.",
"The truth may be out there, but the lies are inside your head.",
"Knowing things is magical, if other people don't know them.",
"It is well known that a vital ingredient of success is not knowing that what you're attempting can't be done.",
"They accept evil not because they say yes, but because they don't say no.",
"Sovereign axis upon which the world turns.",
"More than a companion.",
"She strides upon the core.",
"Belief is the death of intelligence.",
"An optimistic mind-set finds dozens of possible solutions for every problem that the pessimist regards as incurable.",
"I don't believe anything, but I have many suspicions.",
"Under the present brutal and primitive conditions on this planet, every person you meet should be regarded as one of the walking wounded.",
"We have never seen a man or woman not slightly deranged by either anxiety or grief.",
"We have never seen a totally sane human being.",
"We all see only that which we are trained to see.",
"In conclusion, there is no conclusion.",
"Things will go on as they always have, getting weirder all the time.",
"In order to eat, you have to be hungry.",
"In order to learn, you have to be ignorant.",
"Human beings live in their myths.",
"Horror is the natural reaction to the last 5,000 years of history.",
"We would own no more, know no more, and be no more than the first apelike hominids if it were not for the rebellious, the recalcitrant, and the intransigent.",
"Disobedience was humanity's original virtue.",
"The normal is that which nobody quite is.",
"If you listen to seemingly dull people very closely, you'll see that they're all mad in different and interesting ways, and are merely struggling to hide it.",
"Human society as a whole is a vast brainwashing machine whose semantic rules and sex roles create a social robot.",
"We are all living in separate realities.",
"The fear of death is the beginning of slavery.",
"On a planet that increasingly resembles one huge Maximum Security prison, the only intelligent choice is to plan a jail break.",
"Intelligence is the capacity to receive, decode and transmit information efficiently.",
"Reality is what you can get away with.",
"The future is up for grabs.",
"It belongs to any and all who will take the risk and accept the responsibility of consciously creating the future they want.",
"You are precisely as big as what you love and precisely as small as what you allow to annoy you.",
'We have been told over and over that "you can\'t change human nature", but the study of emic realities shows quite the contrary, that almost anything can become "human nature" if society defines it as such.',
"The individual act of obedience is the cornerstone not only of the strength of authoritarian society but also of its weakness.",
"The longer one is alone, the easier to hear the song of the earth.",
"We have sought to disperse power, to set men and women free.",
"Encounters with death and danger are only adventures to the survivors.",
"What the world calls sanity has led us to the present planetary crisis... and insanity is the only viable alternative.",
"Practicing self-kindness strengthens your ability to love yourself and others",
"If I can't dance to it, it's not my revolution.",
"People have only as much liberty as they have the intelligence to want and the courage to take.",
"Before we can forgive one another, we have to understand one another.",
"The most violent element in society is ignorance.",
"Free love? As if love is anything but free!",
"Man has bought brains, but all the millions in the world have failed to buy love.",
"Man has subdued bodies, but all the power on earth has been unable to subdue love.",
"Man has conquered whole nations, but all his armies could not conquer love.",
"Man has chained and fettered the spirit, but he has been utterly helpless before love.",
"High on a throne, with all the splendor and pomp his gold can command, man is yet poor and desolate, if love passes him by.",
"And if it stays, the poorest hovel is radiant with warmth, with life and color.",
"Thus love has the magic power to make of a beggar a king.",
"Yes, love is free; it can dwell in no other atmosphere.",
"In freedom it gives itself unreservedly, abundantly, completely.",
"All the laws on the statutes, all the courts in the universe, cannot tear it from the soil, once love has taken root.",
"When we can't dream any longer we die.",
"Every society has the criminals it deserves.",
"Someone has said that it requires less mental effort to condemn than to think.",
"Give us what belongs to us in peace, and if you don't give it to us in peace, we will take it by force.",
"No great idea in its beginning can ever be within the law.",
"The greater the mental charlatan, the more definite his insistence on the wickedness and weaknesses of human nature.",
"Freedom, expansion, opportunity, and, above all, peace and repose, alone can teach us the real dominant factors of human nature and all its wonderful possibilities.",
"Anarchism stands for a social order based on the free grouping of individuals for the purpose of producing real social wealth; an order that will guarantee to every human being free access to the earth and full enjoyment of the necessities of life, according to individual desires, tastes, and inclinations.",
"This is not a wild fancy or an aberration of the mind.",
"It is the conclusion arrived at by hosts of intellectual men and women the world over; a conclusion resulting from the close and studious observation of the tendencies of modern society: individual liberty and economic equality, the twin forces for the birth of what is fine and true in man.",
"No one has yet realized the wealth of sympathy, the kindness, and generosity hidden in the soul of a child.",
"If love does not know how to give and take without restrictions, it is not love, but a transaction that never fails to lay stress on a plus and a minus.",
"The strongest bulwark of authority is uniformity; the least divergence from it is the greatest crime.",
"It is certain.",
"It is decidedly so.",
"Without a doubt.",
"Yes definitely.",
"You may rely on it.",
"As I see it, yes.",
"Most likely.",
"Outlook good.",
"Yes.",
"Signs point to yes.",
"Reply hazy, try again.",
"Ask again later.",
"Better not tell you now.",
"Better not tell you now.",
"Concentrate and ask again.",
"Don't count on it.",
"My reply is no.",
"My sources say no.",
"Outlook not so good.",
"Very doubtful.",
"No.",
"Maybe.",
"The Good.",
"The Bad.",
"The Funny."
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

$.getScript( "lib/transit/jquery.transit.min.js", function( data, textStatus, jqxhr ) {
	console.log( "jquery.transit.min.js load was performed." );
});
