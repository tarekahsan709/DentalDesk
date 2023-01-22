import { raw } from "./raw";
export const rs: typeof raw = {
	/**
	 * common
	 */
	patient: "pacijent",
	appointment: "Zakazano vreme",
	treatment: "Tretman",
	logout: "Izadji",
	operators: "Operateri",
	missed: "propušteno",
	"who are you?": "ko si ti?",
	"switch user": "prebaci korisnika",
	expenses: "troškovi",
	profit: "profit",
	male: "muškarac",
	female: "žena",
	label: "oznaka",
	"years old": "godina starosti",
	"not registered": "nije registrovan",
	today: "danas",
	tomorrow: "sutra",
	yesterday: "juče",
	welcome: "dobrodošli",
	visit: "poseta",
	date: "datum",
	from: "iz",
	until: "do",
	age: "godina",
	payments: "plaćanja",
	upcoming: "sledeće",
	done: "završeno",
	"not done": "nije završeno",
	started: "početo",
	"not started yet": "nije još početo",
	finished: "završeno",
	"not finished yet": "nije još završeno",
	"no appointments today": "nije zakazano danas",
	days: "dana",
	register: "registracija",
	login: "logovanje",
	reload: "ponovno učitavanje",
	confirm: "potvrda",
	cancel: "otkazivanje",
	stop: "stop",
	start: "start",
	delete: "brisanje",
	save: "snimi",
	with: "sa",
	time: "vreme",
	next: "sledeće",
	previous: "prethodno",
	total: "zajedno",
	payment: "plaćanje",
	"basic info": "osnovne informacije",
	visits: "posete",
	gallery: "galerija",

	/**
	 * Appointments tables
	 */
	"appointments for today": "zakazivanja za danas",
	"appointments for tomorrow": "zakazivanja za sutra",
	"appointments for this week": "zakazivanja ove nedelje",
	"there are no appointments for tomorrow": "nema zakazivanja za sutra",
	"there are no appointments for today": "nema zakazivanja za danas",
	"all upcoming appointments": "sva predstojeća zakazivanja",
	"no upcoming appointments": "nema predstojećih zakazivanja",

	/**
	 * menu items
	 */

	home: "početak",
	settings: "podešavanja",
	treatments: "tretmani",
	patients: "pacijenti",
	prescriptions: "recepti",
	staff: "osoblje",
	orthodontic: "",
	appointments: "zakazivanja",
	statistics: "statistika",

	/**
	 * section title
	 */
	"case details": "detalji slučaja",
	"expenses & price": "cene i troškovi",
	"extra-oral features": "eksta-oralne interfencije",
	"jaw - jaw relationships": "veze između vilica",
	"intercuspal - interincisal relationships": "intercuspal - interincisal odnos",
	"upper arch space analysis": "analiza gornje vilice",
	"lower arch space analysis": "analiza donje vilice",
	problems: "problemi",
	"treatment plan": "plan tretmana",
	records: "zapisi",
	"notes for the next visit": "uputstva za sledeću posetu",
	"permanent teeth": "permanentni zubi",
	"deciduous teeth": "",
	"patient gallery": "galerija pacijenta",
	"patient appointments": "zakazivanja pacijenta",
	"contact info": "kontakt informacije",
	"other notes": "ostale zabeleške",
	"prescription details": "detalji recepta",
	"general setting": "generalna podešavanja",
	"financial settings": "finansijska podešavanja",
	"optional modules and features": "opcionalni moduli",
	"automated backups": "automatski bekap",
	"login pin": "pin za logovanje",
	permission: "prava",
	"upcoming appointments": "predstojeća zakazivanja",
	"quick stats": "brza statistika",
	"treatment details": "detalji tretmana",
	"treatments by profits": "tretman po profitu",
	"treatments by gender": "tretman po polu",
	"most involved teeth": "najčešće rađeni zubi",
	"most applied treatments": "najčešće primenjeni tretmani",
	"patients' gender": "pol pacijenta",
	"finances by date": "finansije po datumu",
	"appointments by date": "zakazivanja po datumu",
	"patients' age": "godine pacijenta",
	"other problems": "ostali problemi",

	/**
	 * toggles
	 */
	"operates on patients": "operiše na pacijentima",
	"doesn't operate on patients": "ne operiše na pacijentima",
	"can view staff page": "može videti stranicu sa osobljem",
	"can not view staff page": "ne može videti stranicu sa osobljem",
	"can view patients page": "može videti stranicu sa pacijentima",
	"can not view patients page": "ne može videti stranicu sa pacijentima",
	"can view orthodontics page": "može videti orthodontics stranicu",
	"can not view orthodontics page": "ne može videti orthodontics stranicu",
	"can view appointments page": "može videti zakazivanja",
	"can not view appointments page": "ne može videti zakazivanja",
	"can view treatments page": "može videti stranicu sa tretmanima",
	"can not view treatments page": "ne može videti stranicu sa tretmanima",
	"can view prescriptions page": "može videti stranicu sa receptima",
	"can not view prescriptions page": "ne može videti stranicu sa receptima",
	"can view statistics page": "može videti stranicu sa statistikama",
	"can not view statistics page": "ne može videti stranicu sa statistikama",
	"can view settings page": "",
	"can view labwork page": "",
	"can not view labwork page": "",
	"can not view settings page": "",
	"can edit staff page": "",
	"can not edit staff page": "",
	"can edit patients page": "",
	"can not edit patients page": "",
	"can edit orthodontics page": "",
	"can not edit orthodontics page": "",
	"can edit appointments page": "",
	"can not edit appointments page": "",
	"can edit treatments page": "",
	"can not edit treatments page": "",
	"can edit prescriptions page": "",
	"can not edit prescriptions page": "",
	"can edit settings page": "",
	"can not edit settings page": "",
	"can edit labwork page": "",
	"can not edit labwork page": "",
	"all appointments": "",
	"my appointments only": "",
	"view graphic chart": "",
	"view sorted table": "",
	"prescriptions module enabled": "",
	"prescriptions module disabled": "",
	"orthodontic module enabled": "",
	"orthodontic module disabled": "",
	"statistics module enabled": "",
	"statistics module disabled": "",
	"labwork module enabled": "",
	"labwork module disabled": "",
	"time tracking enabled": "",
	"time tracking disabled": "",

	/**
	 * buttons
	 */
	"load more": "učitati još",
	"more options": "još opcija",
	"print prescription": "ispiši recept",
	"time value": "vreme",
	"add new": "dodaj novi",
	"add visit": "dodaj poseti",
	"book new appointment": "dodaj novo zakazivanje",
	"run compaction": "pokreni kompakciju",
	"download a backup": "skini bekap",
	"restore from file": "vrati bekap iz fajla",
	"overlay prev": "preklapanje - prethodni",
	"overlay next": "preklapanje - sledeći",
	grid: "mreža",
	overlay: "preklapanje",
	"access offline": "Pristup bez neta",

	/**
	 * inputs
	 */
	"type here": "otkucaj ovde",
	search: "pretraži",
	zoom: "zum",
	rotation: "rotacija",
	"register as new staff member": "registruj novog člana osoblja",
	"server location": "lokacija servera",
	username: "korisničko ime",
	password: "šifra",
	"please wait": "molim sačekajte",
	details: "detalji",
	"units number": "broj jedinice",
	price: "cena",
	paid: "plaćeno",
	overpaid: "preplaćeno",
	outstanding: "neplaćeno",
	"patient concerns": "brige o pacijentu",
	"patient concern": "briga o pacijentu",
	"visit number": "broj posete",
	"visit date": "datum posete",
	appliance: "uređaj",
	"no appliance info": "nema informacije i uređaju",
	"no comment on this photo": "nema komentar za fotografiju",
	comment: "komentar",
	"add note": "dodati zabelešku",
	"history notes": "istorijske zabeleške",
	name: "ime",
	"birth year / age": "godina rođenja/starost",
	gender: "pol",
	phone: "telefon",
	email: "email",
	address: "adresa",
	notes: "zabeleške",
	"item name": "ime stavke",
	"dosage in mg": "doziranje u mg",
	"times per day": "puta na dan",
	"units per time": "jedinica po vremenu",
	"item form": "forma",
	language: "jezik",
	"date format": "format datuma",
	"dropbox access token": "token za dropbox",
	"time expenses (per hour)": "vremenski troškovi (po satu)",
	"currency symbol": "simbol valute",
	"backup frequency": "učestalost bekapa",
	"how many backups to retain": "koliko bekapa da ostane",
	"phone number": "broj telefona",
	"treatment title": "naziv tretmana",
	"treatment expenses (per unit)": "troškovi tretmana (po jedinici)",
	"select treatment": "odaberi tretman",
	"select a date": "odaberi datum",
	"operating staff": "odaberi osoblje",
	"no staff found": "osoblje nije nađeno",
	"select involved teeth": "odaberi zub koji se radi",
	"no teeth found": "zubi nisu nađeni",
	"select prescription": "odaberi recept",
	"no prescription found": "recept nije nađen",
	"select patient": "odaberi pacijenta",
	"no patient found": "pacijent nije nađen",
	"time (hours, minutes, seconds)": "vreme (sati, minuti, sekunde)",
	prescription: "recept",
	"involved teeth": "rađeni zubi",
	"cross/scissors bite": "ugriz",
	"patient name": "ime pacijenta",
	labels: "oznake",
	"days on duty": "dana uposlen",
	"lips competency": "usne",
	"facial profile": "facijalni profil",
	"oral hygiene": "oralna higijena",
	"skeletal relationship": "skeletalne zavisnosti",
	"molars relationship": "molarne zavisnosti",
	"canine relationship": "kanine zavisnosti",
	class: "klasa",
	condition: "stanje",
	"tooth condition": "stanje zuba",
	"tooth history": "istorija zuba",
	"filter by staff member": "filter ",
	"nasio-labial angle": "",
	overjet: "overen",
	overbite: "pregriz",
	"space available": "dostupno mesta",
	"space required": "zahtevno mesta",
	"week ends on": "nedelja se završava u",
	"on which day the week ends": "u koji dan se nedelja završava",
	"create or choose patient": "kreiraj ili odaberi pacijenta",
	upload: "slanje",

	/**
	 * dropdown options
	 */

	"competent lips": "kompetetne usne",
	"incompetent lips": "nekompetetne usne",
	"potentially competent lips": "potencijalno kompetetne usne",
	"brachycephalic profile": "brachycephalic profil",
	"dolichocephalic profile": "dolichocephalic profil",
	"mesocephalic profile": "mesocephalic profil",
	"good oral hygiene": "dobra oralna higijena",
	"bad oral hygiene": "loša oralna higijena",
	"moderate oral hygiene": "osrednja oralna higijena",
	ampoule: "ampula",
	capsule: "kapsula",
	tablet: "tableta",
	pill: "pilula",
	gel: "gel",
	lotion: "losion",
	syrup: "sirup",
	powder: "puder",
	mouthwash: "pranje usta",
	suspension: "suspenzija",
	toothpaste: "pasta za zube",
	ointment: "mast",
	spray: "sprej",
	daily: "dnevno",
	weekly: "nedeljno",
	monthly: "mesečno",
	never: "nikad",

	/**
	 * tooltips
	 */

	"flip horizontal": "obrni horizontalno",
	"flip vertical": "obrni vertikalno",
	"rotate clockwise": "rotiraj u smeru kazaljke",
	"rotate anti-clockwise": "rotiraj u smeru suprotnom od kazaljke",
	"sync with server": "sinhronizuj sa serverom",
	"server is unavailable": "server je nedostupan",
	"can't login to server": "ne može se logovati na server",
	"user panel": "korisnički panel",
	"patient details": "detalji pacijenta",
	"dental history": "dentalna istorija",
	"orthodontic case sheet": "ortodontski list slučaja",
	"view grid": "pregled mreže",
	"add photo": "dodati fotografiju",
	"delete visit": "obrisati posetu",
	restore: "povratiti stanje",
	"level and permission": "nivoi i prava",
	"staff member details": "detalji člana osoblja",

	/**
	 * dental history
	 */
	sound: "zvuk",
	filled: "popunjen",
	compromised: "kompromitovan",
	endo: "završeno",
	missing: "nedostaje",
	rotated: "rotirano",
	displaced: "izmešteno",
	"gum-recessed": "udubljenje u žvaku",

	/**
	 * table headings
	 */

	"orthodontic patient": "",
	dose: "",
	frequency: "",
	form: "",
	"staff member": "",
	"contact details": "",
	profits: "",
	"expenses/unit": "",
	"done appointments": "",

	/**
	 * units of measurement
	 */
	mg: "mg",
	mm: "mm",
	degrees: "stepeni",

	/**
	 * calendar
	 */
	january: "januar",
	february: "februar",
	march: "mart",
	april: "april",
	june: "jun",
	july: "jul",
	august: "avgust",
	september: "septembar",
	october: "oktobar",
	november: "novembar",
	december: "decembar",
	sunday: "nedelja",
	monday: "ponedeljak",
	tuesday: "utorak",
	wednesday: "sreda",
	thursday: "četvrtak",
	friday: "petak",
	saturday: "subota",
	su: "ne",
	mo: "po",
	tu: "ut",
	we: "sr",
	th: "če",
	fr: "pe",
	sa: "su",
	jan: "jan",
	feb: "feb",
	mar: "mar",
	apr: "apr",
	may: "maj",
	jun: "jun",
	jul: "jul",
	aug: "avg",
	sep: "sep",
	oct: "okt",
	nov: "nov",
	dec: "dev",

	/**
	 * editing appointment
	 */
	"other appointment": "ostala zakazivanja",
	"enter tooth number": "unesi broj zuba",
	"enter prescription": "unesi recept",
	"profit percentage": "procenat profita",
	unpaid: "neplaćeno",

	/**
	 * searching and filtering
	 */

	"out of": "od",

	/**
	 * settings
	 */
	backup: "bekap",
	actions: "akcije",
	"settings are locked": "podešavanja su zaključana",
	"to prevent unintentional changes, solve the mathematical equation to unlock":
		"da bi izbegli slučane promene, rešite matematičku formulu da ih otključate",
	/**
	 * other
	 */

	crowding: "sabijanje",
	spacing: "razmak",
	"appointments for": "zakazivanje za",
	"no phone number": "nema broja telefona",
	"no email": "nema emaila",
	"no next appointment": "nema sledećeg zakazivanja",
	"no last appointment": "nema zadnjeg zakazivanja",
	"payments made": "način plaćanja",
	"outstanding amount": "količina dugovanja",
	"overpaid amount": "količina preplate",
	"no outstanding amount": "nema dugovanja",
	"started treatment": "počet tretman",
	"has not started yet": "nije jos počet",
	"finished treatment": "završen tretman",
	"has not finished yet": "nije još završen",
	"upper arch crowding by": "gornja vilica sabijena",
	"lower arch crowding by": "donja vilica sabijena",
	"upper arch spacing by": "gornja vilica razdvojena",
	"lower arch spacing by": "donja vilica razdvojena",
	"target & expectations": "cilj i očekivanja",
	"no target info": "nema podataka o cilju",
	/**
	 * statistics page
	 */

	"applied times": "",
	"all staff members": "",

	/**
	 * treatments page
	 */
	"per unit": "po jedinici",

	/**
	 * labworks pages
	 */
	labwork: "",
	dates: "",
	laboratory: "",
	"case title": "",
	lab: "",
	"lab details": "",
	"laboratory name": "",
	"lab contact": "",
	"no laboratory found": "",
	sent: "",
	"not sent": "",
	"sent date": "",
	received: "",
	"not received": "",
	"received date": "",

	/**
	 * message bars
	 */
	"no data in this section yet, you can add new data by clicking the button above":
		"",
	"did not find anything that matches your search criteria": "",
	"you're offline. use the latest username/password you've successfully used on this machine to login to this server":
		"",
	"the case sheet of this patient does not show any problems that needs orthodontic treatment":
		"",
	"files server is offline, make sure you're online and connected": "",
	"this patient does not seem to have any problems or concerns, have you filled the case sheet?":
		"",
	"a treatment plan must be before starting the treatment": "",
	"you can not access orthodontic records while offline": "",
	"no visits recorded yet! add a new visit using the button below": "",
	"this patient does not seem to have any photo record uploaded, press the plus sign button below to start uploading":
		"",
	"you can not access patient gallery while offline": "",
	"this patient does not have any appointment": "",
	"backup and restore functionality are not available while you're offline":
		"",
	"choose the main language of display menus and items": "",
	"set the date format to be used across this application": "",
	"this access token is used to store files across the application, like backups and images":
		"",
	// tslint:disable-next-line:max-line-length
	"when time tracking enabled, this is used to calculate profits and expenses, as time is also added to the expenses so here you can put the electricity, rent, and other time dependent expenses":
		"",
	"this symbol you enter here will be used across your application": "",
	"only you can edit this pin, and it can only be 4 numbers": "",
	"you can't edit your own level and permissions": "",
	"there are no upcoming appointments for this staff member": "",
	"might not be available on this day": "",
	"price is too low": "",
	"you need to add treatments in the treatments section before being able to book new appointments":
		"",
	"click a thumbnail to expand it": "",
	"you can download a backup from below and use this button to restore it":
		"",

	/**
	 * prompts
	 */
	"all unsaved data will be lost. all data will be removed and replaced by the backup file":
		"",
	"please enter file name": "",
	"please enter your pin": "",
	"are you sure you want to delete this appointment?": "",
	"orthodontic case will be deleted": "",
	"all of the patient": "",
	"'s data will be deleted along with": "",
	"of appointments": "",
	"are you sure you want to delete the prescription?": "",
	"are you sure you want to delete": "",
	"will be deleted": "",
	"this visit data will be deleted along with all photos and notes": "",

	/**
	 * messages
	 */
	"invalid file": "pogrešan fajl",
	"invalid pin provided": "pogrešan pin",
	"restoration cancelled": "povraćanje podataka prekinuto",

	/**
	 * backup actions
	 */
	"days ago": "pre dana",
	renew: "obnova",
	download: "skidanje",
};

export default rs;