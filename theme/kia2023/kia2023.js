var k_adjective_array = ['KIA',"K.'.I.'.A.'.",'Kaotic','Kaote','Kallisti','Kabbalistic','Kabbalist','Krazy','Kloned','Krazed','Kindred','Killer','Killed','Kommunity','Kool','Korporate','Kissing','Karnal','Kthulhoid','Komplete','Kristen','Kosher','Klippothic','Krabtastic','Kretinous','Kinky','Kemetic','Knighted','Khmer','Kushite','Keebler','Knitted','Kunzite','Kikkoman','Kakistocratic','Kalyptric','Kenotist','Ketchupy','Kindergarten','Kinetic','Knackish','Knavish','Kleptomaniac','Kiwi','Kosmic'];
var k_people_array = ['Kabal','Kabbalists','Klingons','Klowns','Klones','Kindred','Killers','Kommand','Kings','Kweens','Knights','Kommunity','Kore','Kin','Klan','Kids'];
var k_deity_array = ['Kali','Kundalini','Kosmos','Ki','Kauket','Kuk','Khnum','Khepera','Khepri','Khonsu','Khonzu','Kronos','Koronzon','Karnonos','Krsnik','Kupala','Koliada','Karzełek','Kościej','Kikimora','Krishna','Kurma','Kalki','Kāmadeva','Kwaku','Khonvoum','Kthulhu','Khorne','Kain','Kristus','Khefir','Kidinu','Kadima','Kouros','Kumbari','Kolob','Kadlu',"Khalifate"];
var k_noun_array = ['Kia','Krater','Kaos','Key','Kundalini','Kallisti','Kosmos','Kabbala','Kommand','Kingdom','Kommune','Komputer','Korporation','Kore','Konton','Kiss','Kether','Kadath','Kitsune','Kathmandu','Kelpie','Kyoto','Kempo','Karate','Klippoth','Kimchi','KoRn','Kobald','Khorsabad','Kerasine','Kindergarten','Kurgan','Kremlin','Kiwi','Koala','Kourt','Klingon'];
var k_drug_array = ['Kanabis','Klonopin','Kratom','Kokaina','Kaotica','Ketamine','K'];
var k_drink_array = ['Kummel','Kola','Koffee','Kafe','Kava','Kahula','Krupnik','Kamora'];

var i_adjective_array = ['Illuminated','Invisible','Illuminatus','Initiated',"I.'.I.'.",'Insane','Industrial','Infected','Infek','Independent','Internal','Infernal','Intoxicated','Idealist','Individualist','Intelligent','Intelligence','Incorporated','Illicit','Idiotic','Inebriated','Infused','Immortal','Insomniac','Imaginary','Informed','Illegal','Illegitimate','Idolised','Internationalist','Immersive','Indigo','Ill','Inebriated','Infanticidal','Icky','Impish','Inbred','Indoctrinated','Incestuous','Inuit','Ipecac','Ithaqua', 'Ithuriel', 'Ivanoma', 'Iblis','Ivory','Introvert','Introverted','Illogical','Irrational','Icy','Ismaeli','Insectoid'];
var i_people_array = ['Illuminates','Illuminati','Initiates',"I.'.I.'.",'Invokers','Immortals','Insectivores','Invertibrates','Idols','Ismaelis','Idiots','Illiterates','Inmates'];
var i_noun_array = ['Insanity','Institute','Information','Ice','Id','Intelligence','Intercourse','Invocation','I-Ching','Incorporation','Idiocy','Insectivore','Invertibrate','Image','Idolatry','Idol','Isle','Illness','It','Imbolc','Ivory','Ischyros','Insect'];
var i_verb_array = ['Infects','Infected','Infecting','Intercourse','Imitates','Imitated','Imitating','Infused','Infuses','Infusing','Informed','Informs','Informing','Idolised','Idolises','Idolising','Indoctrinated','Indoctrinates','Indoctrinating','Imbibed','Imbibes','Imbibing','Ingested','Ingests','Ingesting','Individuating','Individuated','Individuates','Inverting'];
var i_deity_array = ['Isis','Iusaaset','Iris','Indra','Ishana','Iemanja','Inanna', 'Isolde','Izanami','Izanagi'];
var i_drug_array = ['Interferon', 'Insulin'];

var a_noun_array = ["A.'.A.'.",'AISB','Aetherics','Angel','Aethers','Aetherics','Aeons','Action','Annwn','Abyss','Aeon','Aeonics','Age','Adventure','Androgyne','Assembly','Association','Azoth','Awareness','Anti-Christ','Adultary','Anima','Animus','Apple','Apples','Avalon','AI','Artisan','Architect','Actor','Actress','Albatros','Albino','Aligator','Asp','Anaconda','Aardvark','American','Avocado','Asia','Asians','Australia','Australians','Austria','Austrians','Allegory','Allegorical','Advise','Adverse','Aneristic','Apophenia','Asparagus', 'Aegean', 'Androphobes', 'Agoraphobes', 'Albatross', 'Array', 'Arrangement', 'Agreement','Anarchy','Anarchism','Alchemy','AK47s'];
var a_people_array = ['Adepts','Agents','Alchemists','Anarchists','Activists','Anarchons',"A.'.A.'.",'AISB','Athletes','Arithmeticians','Alchoholics','Angels','Aesir','Agnostics','Avatars','Ashvins','Adroa','Adroanzi','Ajok','Arebati','Agayu','Adventurers','Androgynes','Amoralists','Atavisms','AIs','Anti-Christs','Animals','Archetypes','Artists','Advisors','Arbitrators', 'Abbotts', 'Androids', 'Alabamans', 'Aberrations', 'Abominations', 'Abolitionists', 'Amputees', 'Archangels', 'Abyssinians', 'Akkadians','Assassins','Apples'];
var a_deity_array = ['Anu','Anubis','Ashur','Aphrodite','Artemis','Astarte','Ashtoroth','Astaroth','Astarot','Asteroth','Atum','Amunet','Atum-Ra','Anuket','Amun','Apis','Amon','Apep','Apophis','Ammit','Ares','Apollo','Athena','Auzawandilaz','Agilaz','Ala','Alkonost','Ādityas','Agni','Atar','Amlak','Anansi','Asase-Ya','Agé','Ayaba','Abassi','Atai','Azathoth','Azo','AOS','Al','uncle Al','Anti-Christ','the Artisan','the Architect','Adversary','Aneris','Apophis','Angakok', 'Aumaqua', 'Anahata', 'Asiaq', 'Ankou', 'Architeuthis','Apophenia','Ardhanarishvara'];
var a_drug_array = ['Awareness','Ayahuasca','Acid','Apples','Amphetamines','Afghan','Aquatic centipede','Anarchy','Apples','Asana'];
var a_drink_array = ['Awareness','Ayahuasca','Acid','Absinthe','Alcohol','Ale','Alco-pops','Advocaat','Asana'];

var people_noun_array = ['of the','guarding','making','teaching','learning from','inspiring','inspired by'];
var people_deity_array = ['of','worshipping','serving','working with','working for','invoking','sacrificing to','dancing around','possessed by'];
var people_drug_array = ['on','high on','tripping on','taking','consuming','dealing','sharing','indulging in'];
var people_drink_array = ['on','drunk on','tipsy on','taking','consuming','dealing','sharing','indulging in'];

var noun_noun_array = ['and','in','with','not','but no','like','similar to'];
var noun_people_array = ['of the','collected by','found by','hoarding','researching','studied by','promoting','guarded by'];
var noun_deity_array = ['of','collected by','found by','lost by','given by','gift of','revealed by','blessed by','blessed of','beloved of'];

var deity_noun_array = ['revealing','with','giving','sharing'];
var deity_people_array = ['teaching','inspiring','possessing','illuminating','watching over','guiding','walking with','blessing'];
var deity_deity_array = ['revealing','with','teaching','inspiring','illuminating','guiding','walking with','dancing with','in sexual union with','fighting','in conflict with','battling','loving','learning from','working with','playing with','killing','birthing','leading to','hiding','consuming','devouring','spewing forth','teaching about'];

var drug_people_array = ['taking','sacrament of','shared by','given by'];

function random_array_item(items) {
    let item = items[Math.floor(Math.random() * items.length)];

    return item;
}

function kia2023_random_title() {
    console.log("kia2023_random_title()");
	let title_pattern = Math.floor(Math.random() * 75);

    switch(title_pattern) {
        case 0:
            return random_array_item(k_adjective_array)+' '+random_array_item(i_adjective_array)+' '+random_array_item(a_noun_array);
            break;
        case 1:
            return random_array_item(k_adjective_array)+' '+random_array_item(i_adjective_array)+' '+random_array_item(a_people_array);
            break;
        case 2:
            return random_array_item(k_adjective_array)+' '+random_array_item(i_adjective_array)+' '+random_array_item(a_deity_array);
            break;
        case 3:
            return random_array_item(k_adjective_array)+' '+random_array_item(i_adjective_array)+' '+random_array_item(a_drug_array);
            break;
        case 4:
            return random_array_item(k_adjective_array)+' '+random_array_item(i_adjective_array)+' '+random_array_item(a_drink_array);
            break;      
        case 5:
            return random_array_item(k_adjective_array)+' '+random_array_item(i_people_array)+' '+random_array_item(people_noun_array)+' '+random_array_item(a_noun_array);
            break;    
        case 6:
            return random_array_item(k_adjective_array)+' '+random_array_item(i_people_array)+' '+random_array_item(people_noun_array)+' '+random_array_item(a_people_array);
            break;
        case 7:
            return random_array_item(k_adjective_array)+' '+random_array_item(i_people_array)+' '+random_array_item(people_deity_array)+' '+random_array_item(a_deity_array);
            break; 
        case 8:
            return random_array_item(k_adjective_array)+' '+random_array_item(i_people_array)+' '+random_array_item(people_drug_array)+' '+random_array_item(a_drug_array);
            break; 
        case 9:
            return random_array_item(k_adjective_array)+' '+random_array_item(i_people_array)+' '+random_array_item(people_drink_array)+' '+random_array_item(a_drink_array);
            break; 
        case 10:
            return random_array_item(k_adjective_array)+' '+random_array_item(i_noun_array)+' '+random_array_item(noun_noun_array)+' '+random_array_item(a_noun_array);
            break; 
        case 11:
            return random_array_item(k_adjective_array)+' '+random_array_item(i_noun_array)+' '+random_array_item(noun_people_array)+' '+random_array_item(a_noun_array);
            break; 
        case 12:
            return random_array_item(k_adjective_array)+' '+random_array_item(i_noun_array)+' '+random_array_item(noun_deity_array)+' '+random_array_item(a_deity_array);
            break;
        case 13:
            return random_array_item(k_adjective_array)+' '+random_array_item(i_noun_array)+' '+random_array_item(noun_noun_array)+' '+random_array_item(a_drug_array);
            break; 
        case 14:
            return random_array_item(k_adjective_array)+' '+random_array_item(i_noun_array)+' '+random_array_item(noun_noun_array)+' '+random_array_item(a_drink_array);
            break; 
        case 15:
            return random_array_item(k_adjective_array)+' '+random_array_item(i_deity_array)+' '+random_array_item(deity_noun_array)+' '+random_array_item(a_noun_array);
            break; 
        case 16:
            return random_array_item(k_adjective_array)+' '+random_array_item(i_deity_array)+' '+random_array_item(deity_people_array)+' '+random_array_item(a_people_array);
            break; 
        case 17:
            return random_array_item(k_adjective_array)+' '+random_array_item(i_deity_array)+' '+random_array_item(deity_deity_array)+' '+random_array_item(a_deity_array);
            break; 
        case 18:
            return random_array_item(k_adjective_array)+' '+random_array_item(i_deity_array)+' '+random_array_item(people_drug_array)+' '+random_array_item(a_drug_array);
            break; 
        case 19:
            return random_array_item(k_adjective_array)+' '+random_array_item(i_deity_array)+' '+random_array_item(people_drink_array)+' '+random_array_item(a_drink_array);
            break; 
        case 20:
            return random_array_item(k_adjective_array)+' '+random_array_item(i_drug_array)+' '+random_array_item(noun_noun_array)+' '+random_array_item(a_noun_array);
            break; 
        case 21:
            return random_array_item(k_adjective_array)+' '+random_array_item(i_drug_array)+' '+random_array_item(drug_people_array)+' '+random_array_item(a_people_array);
            break; 
        case 22:
            return random_array_item(k_adjective_array)+' '+random_array_item(i_drug_array)+' '+random_array_item(drug_people_array)+' '+random_array_item(a_deity_array);
            break; 
        case 23:
            return random_array_item(k_adjective_array)+' '+random_array_item(i_drug_array)+' '+random_array_item(noun_noun_array)+' '+random_array_item(a_drug_array);
            break; 
        case 24:
            return random_array_item(k_adjective_array)+' '+random_array_item(i_drug_array)+' '+random_array_item(noun_noun_array)+' '+random_array_item(a_drink_array);
            break; 
        case 25:
            return random_array_item(k_people_array)+' '+random_array_item(people_noun_array)+' '+random_array_item(i_adjective_array)+' '+' '+random_array_item(a_noun_array);
            break; 
        case 26:
            return random_array_item(k_people_array)+' '+random_array_item(people_noun_array)+' '+random_array_item(i_adjective_array)+' '+' '+random_array_item(a_people_array);
            break; 
        case 27:
            return random_array_item(k_people_array)+' '+random_array_item(people_deity_array)+' '+random_array_item(i_adjective_array)+' '+' '+random_array_item(a_deity_array);
            break; 
        case 28:
            return random_array_item(k_people_array)+' '+random_array_item(people_drug_array)+' '+random_array_item(i_adjective_array)+' '+' '+random_array_item(a_drug_array);
            break; 
        case 29:
            return random_array_item(k_people_array)+' '+random_array_item(people_drink_array)+' '+random_array_item(i_adjective_array)+' '+' '+random_array_item(a_drink_array);
            break; 
        case 30:
            return random_array_item(k_people_array)+' '+random_array_item(people_noun_array)+' '+random_array_item(i_people_array)+' '+random_array_item(people_noun_array)+' '+random_array_item(a_noun_array);
            break; 
        case 31:
            return random_array_item(k_people_array)+' '+random_array_item(people_noun_array)+' '+random_array_item(i_people_array)+' '+random_array_item(people_noun_array)+' '+random_array_item(a_people_array);
            break; 
        case 32:
            return random_array_item(k_people_array)+' '+random_array_item(people_noun_array)+' '+random_array_item(i_people_array)+' '+random_array_item(people_deity_array)+' '+random_array_item(a_deity_array);
            break;
		case 33:
            return random_array_item(k_people_array)+' '+random_array_item(people_noun_array)+' '+random_array_item(i_people_array)+' '+random_array_item(people_drug_array)+' '+random_array_item(a_drug_array);
            break;
		case 34:
            return random_array_item(k_people_array)+' '+random_array_item(people_noun_array)+' '+random_array_item(i_people_array)+' '+random_array_item(people_drink_array)+' '+random_array_item(a_drink_array);
            break;
		case 35:
            return random_array_item(k_people_array)+' '+random_array_item(people_noun_array)+' '+random_array_item(i_noun_array)+' '+random_array_item(noun_noun_array)+' '+random_array_item(a_noun_array);
            break;
		case 36:
            return random_array_item(k_people_array)+' '+random_array_item(people_noun_array)+' '+random_array_item(i_noun_array)+' '+random_array_item(noun_people_array)+' '+random_array_item(a_people_array);
            break;
		case 37:
            return random_array_item(k_people_array)+' '+random_array_item(people_deity_array)+' '+random_array_item(i_noun_array)+' '+random_array_item(noun_deity_array)+' '+random_array_item(a_deity_array);
            break;
		case 38:
            return random_array_item(k_people_array)+' '+random_array_item(people_noun_array)+' '+random_array_item(i_noun_array)+' '+random_array_item(people_deity_array)+' '+random_array_item(a_deity_array);
            break;
		case 39:
            return random_array_item(k_people_array)+' '+random_array_item(people_noun_array)+' '+random_array_item(i_noun_array)+' '+random_array_item(noun_noun_array)+' '+random_array_item(a_drug_array);
            break;
		case 40:
			return random_array_item(k_people_array)+' '+random_array_item(people_noun_array)+' '+random_array_item(i_noun_array)+' '+random_array_item(noun_noun_array)+' '+random_array_item(a_drink_array);
			break;
		case 41:
            return random_array_item(k_people_array)+' '+random_array_item(i_verb_array)+' '+random_array_item(a_noun_array);
            break;
		case 42:
            return random_array_item(k_people_array)+' '+random_array_item(i_verb_array)+' '+random_array_item(a_people_array);
            break;
		case 43:
            return random_array_item(k_people_array)+' '+random_array_item(i_verb_array)+' '+random_array_item(a_deity_array);
            break;
		case 44:
            return random_array_item(k_people_array)+' '+random_array_item(i_verb_array)+' '+random_array_item(a_drug_array);
            break;
		case 45:
            return random_array_item(k_people_array)+' '+random_array_item(i_verb_array)+' '+random_array_item(a_drink_array);
            break;
		case 46:
            return random_array_item(k_people_array)+' '+random_array_item(people_deity_array)+' '+random_array_item(i_deity_array)+' '+random_array_item(deity_noun_array)+' '+random_array_item(a_noun_array);
            break;
		case 47:
            return random_array_item(k_people_array)+' '+random_array_item(people_deity_array)+' '+random_array_item(i_deity_array)+' '+random_array_item(deity_people_array)+' '+random_array_item(a_people_array);
            break;
		case 48:
            return random_array_item(k_people_array)+' '+random_array_item(people_deity_array)+' '+random_array_item(i_deity_array)+' '+random_array_item(deity_deity_array)+' '+random_array_item(a_deity_array);
            break;
		case 49:
            return random_array_item(k_people_array)+' '+random_array_item(people_deity_array)+' '+random_array_item(i_deity_array)+' '+random_array_item(people_drug_array)+' '+random_array_item(a_drug_array);
            break;
		case 50:
            return random_array_item(k_people_array)+' '+random_array_item(people_deity_array)+' '+random_array_item(i_deity_array)+' '+random_array_item(people_drink_array)+' '+random_array_item(a_drink_array);
            break;
		case 51:
            return random_array_item(k_people_array)+' '+random_array_item(people_drug_array)+' '+random_array_item(i_drug_array)+' '+random_array_item(noun_noun_array)+' '+random_array_item(a_noun_array);
            break;
		case 52:
            return random_array_item(k_people_array)+' '+random_array_item(people_drug_array)+' '+random_array_item(i_drug_array)+' '+random_array_item(drug_people_array)+' '+random_array_item(a_people_array);
            break;
		case 53:
            return random_array_item(k_people_array)+' '+random_array_item(people_drug_array)+' '+random_array_item(i_drug_array)+' '+random_array_item(drug_people_array)+' '+random_array_item(a_deity_array);
            break;
		case 54:
			return random_array_item(k_people_array)+' '+random_array_item(people_drug_array)+' '+random_array_item(i_drug_array)+' '+random_array_item(noun_noun_array)+' '+random_array_item(a_drug_array);
			break;
		case 55:
			return random_array_item(k_people_array)+' '+random_array_item(people_drug_array)+' '+random_array_item(i_drug_array)+' '+random_array_item(noun_noun_array)+' '+random_array_item(a_drink_array);
			break;
		case 56:
			return random_array_item(k_deity_array)+' '+random_array_item(deity_noun_array)+' '+random_array_item(i_adjective_array)+' '+random_array_item(a_noun_array);
			break;
		case 57:
			return random_array_item(k_deity_array)+' '+random_array_item(deity_people_array)+' '+random_array_item(i_adjective_array)+' '+random_array_item(a_people_array);
			break;
		case 58:
			return random_array_item(k_deity_array)+' '+random_array_item(deity_deity_array)+' '+random_array_item(i_adjective_array)+' '+random_array_item(a_deity_array);
			break;
		case 59:
			return random_array_item(k_deity_array)+' '+random_array_item(deity_noun_array)+' '+random_array_item(i_adjective_array)+' '+random_array_item(a_drug_array);
			break;
		case 60:
			return random_array_item(k_deity_array)+' '+random_array_item(people_drug_array)+' '+random_array_item(i_adjective_array)+' '+random_array_item(a_drug_array);
			break;
		case 61:
			return random_array_item(k_deity_array)+' '+random_array_item(deity_noun_array)+' '+random_array_item(i_adjective_array)+' '+random_array_item(a_drink_array);
			break;
		case 62:
			return random_array_item(k_deity_array)+' '+random_array_item(people_drink_array)+' '+random_array_item(i_adjective_array)+' '+random_array_item(a_drink_array);
			break;
		case 63:
			return random_array_item(k_deity_array)+' '+random_array_item(deity_people_array)+' '+random_array_item(i_people_array)+' '+random_array_item(people_noun_array)+' '+random_array_item(a_noun_array);
			break; 
		case 64:
			return random_array_item(k_deity_array)+' '+random_array_item(deity_people_array)+' '+random_array_item(i_people_array)+' '+random_array_item(people_noun_array)+' '+random_array_item(a_people_array);
			break; 
		case 65:
			return random_array_item(k_deity_array)+' '+random_array_item(deity_people_array)+' '+random_array_item(i_people_array)+' '+random_array_item(people_deity_array)+' '+random_array_item(a_deity_array);
			break; 
		case 66:
			return random_array_item(k_deity_array)+' '+random_array_item(deity_people_array)+' '+random_array_item(i_people_array)+' '+random_array_item(people_drug_array)+' '+random_array_item(a_drug_array);
			break; 
		case 67:
			return random_array_item(k_deity_array)+' '+random_array_item(deity_people_array)+' '+random_array_item(i_people_array)+' '+random_array_item(people_drink_array)+' '+random_array_item(a_drink_array);
			break; 
            /*    

					// Deity Noun Noun
					// Deity Noun People
					// Deity Noun Deity
					// Deity Noun Drug
					// Deity Noun Drink

					// Deity Verb Noun
					// Deity Verb People
					// Deity Verb Deity
					// Deity Verb Drug
					// Deity Verb Drink

					// Deity Deity Noun
					// Deity Deity People
					// Deity Deity Deity
					// Deity Deity Drug
					// Deity Deity Drink

					// Deity Drug Noun
					// Deity Drug People
					// Deity Drug Deity
					// Deity Drug Drug
					// Deity Drug Drink

					// Noun Adj Noun
					// Noun Adj People
					// Noun Adj Deity
					// Noun Adj Drug
					// Noun Adj Drink

					// Noun People Noun
					// Noun People People
					// Noun People Deity
					// Noun People Drug
					// Noun People Drink

					// Noun Noun Noun
					// Noun Noun People
					// Noun Noun Deity
					// Noun Noun Drug
					// Noun Noun Drink

					// Noun Verb Noun
					// Noun Verb People
					// Noun Verb Deity
					// Noun Verb Drug
					// Noun Verb Drink

					// Noun Deity Noun
					// Noun Deity People
					// Noun Deity Deity
					// Noun Deity Drug
					// Noun Deity Drink

					// Noun Drug Noun
					// Noun Drug People
					// Noun Drug Deity
					// Noun Drug Drug
					// Noun Drug Drink */
        default:
            return 'KIA Invisible Agents';
    }
}

function kia2023_changeTitle() {
    //console.log("kia2023_changeTitle()");
    let newTitle = kia2023_random_title();
    //console.log(newTitle);
    //console.log($("#sitetitle").html());
    $("#sitetitle").html("<h1>"+newTitle+"</h1>");

    setTimeout(function () {
        kia2023_changeTitle();
    }, 60000);
}

kia2023_changeTitle();