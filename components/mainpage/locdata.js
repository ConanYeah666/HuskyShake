const marker = require('./img/marker.png')
const BAG = require('./img/BAG.jpg')
const CSE = require('./img/CSE.jpg')
const CSE2 = require('./img/CSE2.jpg')
const DEN = require('./img/DEN.jpg')
const GWN = require('./img/GWN.jpg')
const KNE = require('./img/KNE.jpg')
const LOW = require('./img/LOW.jpg')
const MGH = require('./img/MGH.jpg')
const MLR = require('./img/MLR.jpg')
const MOR = require('./img/MOR.jpg')
const MUS = require('./img/MUS.jpg')
const OUG = require('./img/OUG.jpg')
const PAA = require('./img/PAA.jpg')
const PAB = require('./img/PAB.jpg')
const SAV = require('./img/SAV.jpg')
const SUZ = require('./img/SUZ.jpg')
const FSH = require('./img/FSH.jpg')
const MCC = require('./img/MCC.jpg')
const RAI = require('./img/RAI.jpg')
const CHL = require('./img/CHL.jpg')
const IMA = require('./img/IMA.jpg')
const HUB = require('./img/HUB.jpg')
const MNY = require('./img/MNY.jpg')
const PAR = require('./img/PAR.jpg')
const MCM = require('./img/MCM.jpg')
const CMU = require('./img/CMU.jpg')

export const locdata = [
	{
		id: 1,
		coords: {
			longitude: -122.30843948170222,
			latitude: 47.65357857054646,
			latitudeDelta: 0.006,
			longitudeDelta: 0.006,
		},
		img: marker,
    buildingImg: BAG,
		title: "Bagley Hall (BAG)",
    description: "Bagley Hall was named after Rev. Daniel Bagley whose efforts helped construct the University’s first building, Denny Hall, in 1861.",
	},
	{
		id: 2,
		coords: {
			longitude: -122.30551208141398,
			latitude: 47.653546008068396,
			latitudeDelta: 0.006,
			longitudeDelta: 0.006,
		},
		img: marker,
    buildingImg: CSE,
		title: "Paul G. Allen Center For Computer Science & Engineering (CSE)",
    discription: "The Allen Center is one of two buildings that, together, are home to the Paul G. Allen School of Computer Science & Engineering. The Allen Center’s opening in 2003 helped catapult the program to national prominence. It houses the school’s main administrative offices, plus research labs, meeting spaces, and offices for faculty, staff and graduate students.",
	},
	{
		id: 3,
		coords: {
			longitude: -122.3050424231549,
			latitude: 47.653169587506156,
			latitudeDelta: 0.006,
			longitudeDelta: 0.006,
		},
		img: marker,
    buildingImg: CSE2,
		title: "Bill & Melinda Gates Center for Computer Science & Engineering (CSE2)",
    description: "The Gates Center is one of two buildings that, together, are home to the Paul G. Allen School of Computer Science & Engineering. Opened in 2019, the Gates Center includes classrooms, labs, and community spaces for CSE majors. It also houses the school’s student services offices, plus research labs, meeting spaces, and offices for faculty, staff and graduate students.",
	},
	{
		id: 4,
		coords: {
			longitude: -122.30864733590911,
			latitude: 47.65829253766388,
			latitudeDelta: 0.006,
			longitudeDelta: 0.006,
		},
		img: marker,
    buildingImg: DEN,
		title: "Denny Hall (DEN)",
    description: "Denny Hall is the UW’s oldest building. The building was named Denny Hall in honor of Arthur A. Denny, one of the founding pioneers of Seattle and donor of land for the campus location.",
	},
	{
		id: 5,
		coords: {
			longitude: -122.307525179466,
			latitude: 47.65645620319579,
			latitudeDelta: 0.006,
			longitudeDelta: 0.006,
		},
		img: marker,
    buildingImg: GWN,
		title: "Gowen Hall (GWN)",
    description: "Gowen Hall was completed in 1932 and was originally named Condon Hall for the School of Law. The building was renamed in 1972 in honor of Rev. Herbert H. Gowen, the original head of the department of Oriental Subjects.",
	},
	{
		id: 6,
		coords: {
			longitude: -122.30876087922606,
			latitude: 47.65671983947379,
			latitudeDelta: 0.006,
			longitudeDelta: 0.006,
		},
		img: marker,
    buildingImg: KNE,
		title: "Kane Hall (KNE)",
    description: "Named after former UW President Thomas Kane, Kane Hall offers a variety of rooms and auditoriums to accommodate almost any event from large classroom lectures to private conferences.",
	},
	{
		id: 7,
		coords: {
			longitude: -122.30452908975778,
			latitude: 47.65435002621682,
			latitudeDelta: 0.006,
			longitudeDelta: 0.006,
		},
		img: marker,
		title: "Loew Hall (LOW)",
    buildingImg: LOW,
    description: "Loew Hall was built in 1965. A construction project later joined it and the adjacent Engineering Library by an underground walkway. It serves as the center of operations for the dean of the College of Engineering.",
	},
	{
		id: 8,
		coords: {
			longitude: -122.30794230069442,
			latitude: 47.655171678985695,
			latitudeDelta: 0.006,
			longitudeDelta: 0.006,
		},
		img: marker,
		title: "Mary Gates Hall (MGH)",
    buildingImg: MGH,
    description: "Formerly known as the Physics Building, Mary Gates Hall is the University’s center for undergraduate learning. The hall houses many technologically equipped classrooms and academic advising offices for undergraduates.",
	},
	{
		id: 9,
		coords: {
			longitude: -122.30614813463905,
			latitude: 47.65741315892384,
			latitudeDelta: 0.006,
			longitudeDelta: 0.006,
		},
		img: marker,
		title: "Miller Hall (MLR)",
    buildingImg: MLR,
    description: "Miller Hall was finished in 1922, when it was known as Education Hall. It was renamed Miller Hall in 1954 for William Winlock Miller, a member of the Board of Regents who served the UW for over forty years.",
	},
	{
		id: 10,
		coords: {
			longitude: -122.30502477314813,
			latitude: 47.652715610950196,
			latitudeDelta: 0.006,
			longitudeDelta: 0.006,
		},
		img: marker,
		title: "More Hall (MOR)",
    buildingImg: MOR,
    description: "More Hall was originally known as the Civil Engineering Building when it was first built in 1946. Its building was hastened by World War II’s increased engineering needs. The hall houses laboratories for structural and geotechnical research and compression testing for civil engineering design.",
	},
	{
		id: 11,
		coords: {
			longitude: -122.30599650044842,
			latitude: 47.657919139182454,
			latitudeDelta: 0.006,
			longitudeDelta: 0.006,
		},
		img: marker,
		title: "Music Building (MUS)",
    buildingImg: MUS,
    description: "",
	},
	{
		id: 12,
		coords: {
			longitude: -122.31005398030538,
			latitude: 47.65647051102995,
			latitudeDelta: 0.006,
			longitudeDelta: 0.006,
		},
		img: marker,
		title: "Odegaard Undergraduate Library (OUG)",
    buildingImg: OUG,
    description: "Odegaard Undergraduate Library is a lively and dynamic environment that serves as the center for undergraduate instruction, learning and technology. The library opened in 1972, and is named after former UW President Charles E. Odegaard. The Visitors Center is located on the basement floor of the library, facing west towards the Henry Art Gallery and the George Washington statue.",
	},
	{
		id: 13,
		coords: {
			longitude: -122.3108923382421,
			latitude: 47.65315386025087,
			latitudeDelta: 0.006,
			longitudeDelta: 0.006,
		},
		img: marker,
    buildingImg: PAA,
		title: "Physics / Astronomy Auditorium (PAA)",
    description: "",
	},
	{
		id: 14,
		coords: {
			longitude: -122.31144034411203,
			latitude: 47.65364492689799,
			latitudeDelta: 0.006,
			longitudeDelta: 0.006,
		},
		img: marker,
		title: "Physics / Astronomy Building (PAB)",
    buildingImg: PAB,
    description: "",
	},
	{
		id: 15,
		coords: {
			longitude: -122.3081226847303,
			latitude: 47.65712621783884,
			latitudeDelta: 0.006,
			longitudeDelta: 0.006,
		},
		img: marker,
		title: "Savery Hall (SAV)",
    buildingImg: SAV,
    description: "Savery Hall was originally two separate buildings, Commerce Hall (built in 1917) and Philosophy Hall (built in 1920). Commerce Hall was renamed Guthrie Hall for Edwin Guthrie, psychology professor and dean of Graduate Studies, serving the UW for over forty years. Philosophy Hall was renamed Savery Hall for William Savery, head of the Philosophy Department also for over forty years. Guthrie Hall and Savery Hall were combined into one building in 1972 and renamed Savery Hall.",
	},
	{
		id: 16,
		coords: {
			longitude: -122.30859811806005,
			latitude: 47.655793470800255,
			latitudeDelta: 0.006,
			longitudeDelta: 0.006,
		},
		img: marker,
		title: "Suzzallo Library (SUZ)",
    buildingImg: SUZ,
    description: "Former UW President Henry Suzzallo once envisioned a new library building that was to be “the soul of the University.” Opened in 1926, Suzzallo Library remains a central research hub, offers a variety of study spaces for students and is open to visitors year-round.",
	},
	{
		id: 17,
		coords: {
			longitude: -122.31567052317514,
			latitude: 47.653175937699814,
			latitudeDelta: 0.006,
			longitudeDelta: 0.006,
		},
		img: marker,
		title: "Fishery Sciences (FSH)",
    buildingImg: FSH,
    description: "",
	},
	{
		id: 18,
		coords: {
			longitude: -122.30478275104511,
			latitude: 47.660391553977604,
			latitudeDelta: 0.006,
			longitudeDelta: 0.006,
		},
		img: marker,
		title: "McCarty Hall (MCC)",
    buildingImg: MCC,
    description: "",
	},
	{
		id: 19,
		coords: {
			longitude: -122.30750665090223,
			latitude: 47.657713229337034,
			latitudeDelta: 0.006,
			longitudeDelta: 0.006,
		},
		img: marker,
		title: "Raitt Hall (RAI)",
    buildingImg: RAI,
    description: "Raitt Hall was the first hall built in the Liberal Arts Quadrangle. It was originally named the Home Economics Building when it was built in 1916. In 1946, the hall was renamed for Effie Isobel Raitt, who directed the School of Home Economics for over thirty years.",
	},
	{
		id: 20,
		coords: {
			longitude: -122.3101936055715,
			latitude: 47.65379988604244,
			latitudeDelta: 0.006,
			longitudeDelta: 0.006,
		},
		img: marker,
    buildingImg: CHL,
		title: "Chemistry Library Building (CHL)",
    description: "",
	},
	{
		id: 21,
		coords: {
			longitude: -122.30158890035925,
			latitude: 47.65357623868152,
			latitudeDelta: 0.006,
			longitudeDelta: 0.006,
		},
		img: marker,
    buildingImg: IMA,
		title: "Intramural Activities (IMA) Building",
    description: "",
	},
	{
		id: 22,
		coords: {
			longitude: -122.30542664768114,
			latitude: 47.65557131957033,
			latitudeDelta: 0.006,
			longitudeDelta: 0.006,
		},
		img: marker,
		title: "Husky Union Building (HUB)",
    buildingImg: HUB,
    description: "The Student Union Building was established in 1949, dedicated to fostering a community among all UW personnel. The building was viewed as the “hub of campus life.” The “HUB” later became the building’s nickname, followed by an official name change to the “Husky Union Building.”",
	},
	{
		id: 23,
		coords: {
			longitude: -122.31039277427561,
			latitude: 47.655959518271054,
			latitudeDelta: 0.006,
			longitudeDelta: 0.006,
		},
		img: marker,
		title: "Meany Hall (MNY)",
    buildingImg: MNY,
    description: "Considered one of the region’s premier performance facilities, Meany Hall is named after former botany and history professor Edmond Meany and is beloved by artists and audience members alike for its outstanding acoustics and intimate ambiance.",
	},
	{
		id: 24,
		coords: {
			longitude: -122.31012835660113,
			latitude: 47.65732439463644,
			latitudeDelta: 0.006,
			longitudeDelta: 0.006,
		},
		img: marker,
		title: "Parrington Hall (PAR)",
    buildingImg: PAR,
    description: "",
	},
	{
		id: 25,
		coords: {
			longitude: -122.30392440169632,
			latitude: 47.65826087361422,
			latitudeDelta: 0.006,
			longitudeDelta: 0.006,
		},
		img: marker,
		title: "McMahon Hall (MCM)",
    buildingImg: MCM,
    description: "McMahon Hall was built in 1965 and was the second co-educational residence hall on campus. McMahon was once a center for innovative housing programs for students, including foreign language immersion floors, Peace Corps and inmates of state correctional institutions.",
	},
	{
		id: 26,
		coords: {
			longitude: -122.30479007037478,
			latitude: 47.657011807651244,
			latitudeDelta: 0.006,
			longitudeDelta: 0.006,
		},
		img: marker,
		title: "Communications Building (CMU)",
    buildingImg: CMU,
    description: "",
	},
]