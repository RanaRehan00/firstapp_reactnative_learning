
// Constants.js

module.exports={

  // First delete the followings
  // project->android->app->google-services.json
  // project->android->app->build
  // project->android->app->release
  // Search com.lettechnologies. and replace with new ID
  apptitle:'Tafseer al Jalalayn',
  applivelink:"https://play.google.com/store/apps/details?id=com.lettechnologies.alJalalain",
  apptitleforsharing:"Tafseer al Jalalayn",
  statusbarclr:'#18174a',
  ThemeColor:'#1d1c62',
  // replace file google-services.json
  // Change in firebase.json by adding admob app ID
  bannerId:"ca-app-pub-9152919921144751/7039831127",
  interstitialId:"ca-app-pub-9152919921144751/1404361067",
  // Replace DB and add field BookMark in Table named ayah
  // Replace res folder
  // Change App Display Name in String of res folder
  // change versionCode
  // Change description specially hash tags etc

  BookArray:[],
  isBookLoaded:false,
  interstitialLoaded:false,
  statusofNet:true,
  readingheaderTitle:'',
  default:true,
  goTo:false,
 //ayah   #005757
 //vers   076969

  Color:'black',
  Color1:'#000000',
  Color2:'#000000',

  Family:'UrduTypesetting',
  ArabicFamily:'AlQalamQuranMajeedWeb',
  EnglishFamily:'UrduTypesetting',

  TxtSize:27,
  TxtSize1:27,
  TxtSize2:23,

  EnglishShowHide:false,   //uses for wordbyword
  UrduShowHide:true,
  ArabicShowHide:true,
  layout:false,

  English:true,  // uses for wordby word
  Urdu:true,
  Arabic:true,
  EnglishHide:true,
  UrduHide:false,
  ArabicHide:true,
  layoutHide:false,
  ThemeHide:true,
  MultiLanguages:false,
  EnglishCheck:false,
   AndroidBannerAd_id:'ca-app-pub-9152919921144751/8161154725', //uses at BannerAdView screenv
    //Banner Ads Ids
   // AndroidBannerAd_id:'ca-app-pub-5453344383403527/5290448765', //uses at BannerAdView screen
    IOsBannerAd_id:'ca-app-pub-3940256099942544/6300978111',// uses at BannerAdView Screen

    // 'ca-app-pub-3940256099942544/1033173712' test interstitial
    AndroidInterstitialAd_id: 'ca-app-pub-9152919921144751/3647194642',
    // Interstitial Ads Ids
   // AndroidInterstitialAd_id: 'ca-app-pub-5453344383403527/4715733698',//uses at every screen where interstitial ads applied
    IosInterstitialAd_id:'ca-app-pub-3940256099942544/1033173712',//

  SurahInfo:[
  {
   surahNumber: 1,
   ayahCount: 7,
   startayahNumber: 0,
   nameArabic: 'الفاتحة',
   nameEnglish: 'Al-Faatiha',
   nameMeaning: 'The Opening',
   searchName: '1 faatiha',
   key: 1,
   type: 'Meccan',
   rukuCount: 1
 },
 {
   surahNumber: 2,
   ayahCount: 286,
   startayahNumber: 7,
   nameArabic: 'البقرة',
   nameEnglish: 'Al-Baqara',
   nameMeaning: 'The Cow',
   searchName: '2 baqara',
   key: 2,
   type: 'Medinan',
   rukuCount: 40
 },
 {
   surahNumber: 3,
   ayahCount: 200,
   startayahNumber: 293,
   nameArabic: 'آل عمران',
   nameEnglish: 'Aal-i-Imraan',
   nameMeaning: 'The Family of Imraan',
   searchName: '3 aal e imran',
   key: 3,
   type: 'Medinan',
   rukuCount: 20
 },
 {
   surahNumber: 4,
   ayahCount: 176,
   startayahNumber: 493,
   nameArabic: 'النساء',
   nameEnglish: 'An-Nisaa',
   nameMeaning: 'The Women',
   searchName: '4 nisa',
   key: 4,
   type: 'Medinan',
   rukuCount: 24
 },
 { surahNumber: 5,
   ayahCount: 120,
   startayahNumber: 669,
   nameArabic: 'المائدة',
   nameEnglish: 'Al-Maaida',
   nameMeaning: 'The Table',
   searchName: '5 maaida',
   key: 5,
   type: 'Medinan',
   rukuCount: 16
 },
 { surahNumber: 6,
   ayahCount: 165,
   startayahNumber: 789,
   nameArabic: 'الأنعام',
   nameEnglish: 'Al-An"aam',
   nameMeaning: 'The Cattle',
   searchName: '6 anaam',
   key: 6,
   type: 'Meccan',
   rukuCount: 20
 },
 { surahNumber: 7,
   ayahCount: 206,
   startayahNumber: 954,
   nameArabic: 'الأعراف',
   nameEnglish: 'Al-A"raaf',
   nameMeaning: 'The Heights',
   searchName: '7 araaf',
   key: 7,
   type: 'Meccan',
   rukuCount: 24
 },
 { surahNumber: 8,
   ayahCount: 75,
   startayahNumber: 1160,
   nameArabic: 'الأنفال',
   nameEnglish: 'Al-Anfaal',
   nameMeaning: 'The Spoils of War',
   searchName: '8 anfaal',
   key: 8,
   type: 'Medinan',
   rukuCount: 10
 },
 { surahNumber: 9,
   ayahCount: 129,
   startayahNumber: 1235,
   nameArabic: 'التوبة',
   nameEnglish: 'At-Tawba',
   nameMeaning: 'The Repentance',
   searchName: '9 tawba',
   key: 9,
   type: 'Medinan',
   rukuCount: 16
 },
 { surahNumber: 10,
   ayahCount: 109,
   startayahNumber: 1364,
   nameArabic: 'يونس',
   nameEnglish: 'Yunus',
   nameMeaning: 'Jonas',
   searchName: '10 yunus',
   key: 10,
   type: 'Meccan',
   rukuCount: 11
 },
 { surahNumber: 11,
   ayahCount: 123,
   startayahNumber: 1473,
   nameArabic: 'هود',
   nameEnglish: 'Hud',
   nameMeaning: 'Hud',
   searchName: '11 hud',
   key: 11,
   type: 'Meccan',
   rukuCount: 10
 },
 { surahNumber: 12,
   ayahCount: 111,
   startayahNumber: 1596,
   nameArabic: 'يوسف',
   nameEnglish: 'Yusuf',
   nameMeaning: 'Joseph',
   searchName: '12 yusuf',
   key: 12,
   type: 'Meccan',
   rukuCount: 12 },
 { surahNumber: 13,
   ayahCount: 43,
   startayahNumber: 1707,
   nameArabic: 'الرعد',
   nameEnglish: 'Ar-Ra"d',
   nameMeaning: 'The Thunder',
   searchName: '13 raad',
   key: 13,
   type: 'Medinan',
   rukuCount: 6 },
 { surahNumber: 14,
   ayahCount: 52,
   startayahNumber: 1750,
   nameArabic: 'ابراهيم',
   nameEnglish: 'Ibrahim',
   nameMeaning: 'Abraham',
   searchName: '14 ibrahim',
   key: 14,
   type: 'Meccan',
   rukuCount: 7 },
 { surahNumber: 15,
   ayahCount: 99,
   startayahNumber: 1802,
   nameArabic: 'الحجر',
   nameEnglish: 'Al-Hijr',
   nameMeaning: 'The Rock',
   searchName: '15 hijr',
   key: 15,
   type: 'Meccan',
   rukuCount: 6 },
 { surahNumber: 16,
   ayahCount: 128,
   startayahNumber: 1901,
   nameArabic: 'النحل',
   nameEnglish: 'An-Nahl',
   nameMeaning: 'The Bee',
   searchName: '16 nahl',
   key: 16,
   type: 'Meccan',
   rukuCount: 16 },
 { surahNumber: 17,
   ayahCount: 111,
   startayahNumber: 2029,
   nameArabic: 'الإسراء',
   nameEnglish: 'Al-Israa',
   nameMeaning: 'The Night Journey',
   searchName: '17 israa Bani Israeel',
   key: 17,
   type: 'Meccan',
   rukuCount: 12 },
 { surahNumber: 18,
   ayahCount: 110,
   startayahNumber: 2140,
   nameArabic: 'الكهف',
   nameEnglish: 'Al-Kahf',
   nameMeaning: 'The Cave',
   searchName: '18 kahf',
   key: 18,
   type: 'Meccan',
   rukuCount: 12 },
 { surahNumber: 19,
   ayahCount: 98,
   startayahNumber: 2250,
   nameArabic: 'مريم',
   nameEnglish: 'Maryam',
   nameMeaning: 'Mary',
   searchName: '19 maryam',
   key: 19,
   type: 'Meccan',
   rukuCount: 6 },
 { surahNumber: 20,
   ayahCount: 135,
   startayahNumber: 2348,
   nameArabic: 'طه',
   nameEnglish: 'Taa-Haa',
   nameMeaning: 'Taa-Haa',
   searchName: '20 taa-haa',
   key: 20,
   type: 'Meccan',
   rukuCount: 8 },
 { surahNumber: 21,
   ayahCount: 112,
   startayahNumber: 2483,
   nameArabic: 'الأنبياء',
   nameEnglish: 'Al-Anbiyaa',
   nameMeaning: 'The Prophets',
   searchName: '21 anbiyaa',
   key: 21,
   type: 'Meccan',
   rukuCount: 7 },
 { surahNumber: 22,
   ayahCount: 78,
   startayahNumber: 2595,
   nameArabic: 'الحج',
   nameEnglish: 'Al-Hajj',
   nameMeaning: 'The Pilgrimage',
   searchName: '22 hajj',
   key: 22,
   type: 'Medinan',
   rukuCount: 10 },
 { surahNumber: 23,
   ayahCount: 118,
   startayahNumber: 2673,
   nameArabic: 'المؤمنون',
   nameEnglish: 'Al-Muminoon',
   nameMeaning: 'The Believers',
   searchName: '23 mominoon',
   key: 23,
   type: 'Meccan',
   rukuCount: 6 },
 { surahNumber: 24,
   ayahCount: 64,
   startayahNumber: 2791,
   nameArabic: 'النور',
   nameEnglish: 'An-Noor',
   nameMeaning: 'The Light',
   searchName: '24 noor',
   key: 24,
   type: 'Medinan',
   rukuCount: 9 },
 { surahNumber: 25,
   ayahCount: 77,
   startayahNumber: 2855,
   nameArabic: 'الفرقان',
   nameEnglish: 'Al-Furqaan',
   nameMeaning: 'The Criterion',
   searchName: '25 furqaan',
   key: 25,
   type: 'Meccan',
   rukuCount: 6 },
 { surahNumber: 26,
   ayahCount: 227,
   startayahNumber: 2932,
   nameArabic: 'الشعراء',
   nameEnglish: 'Ash-Shu"araa',
   nameMeaning: 'The Poets',
   searchName: '26 ash-shuaraa',
   key: 26,
   type: 'Meccan',
   rukuCount: 11 },
 { surahNumber: 27,
   ayahCount: 93,
   startayahNumber: 3159,
   nameArabic: 'النمل',
   nameEnglish: 'An-Naml',
   nameMeaning: 'The Ant',
   searchName: '27 naml',
   key: 27,
   type: 'Meccan',
   rukuCount: 7 },
 { surahNumber: 28,
   ayahCount: 88,
   startayahNumber: 3252,
   nameArabic: 'القصص',
   nameEnglish: 'Al-Qasas',
   nameMeaning: 'The Stories',
   searchName: '28 qasas',
   key: 28,
   type: 'Meccan',
   rukuCount: 8 },
 { surahNumber: 29,
   ayahCount: 69,
   startayahNumber: 3340,
   nameArabic: 'العنكبوت',
   nameEnglish: 'Al-Ankaboot',
   nameMeaning: 'The Spider',
   searchName: '29 ankaboot',
   key: 29,
   type: 'Meccan',
   rukuCount: 7 },
 { surahNumber: 30,
   ayahCount: 60,
   startayahNumber: 3409,
   nameArabic: 'الروم',
   nameEnglish: 'Ar-Room',
   nameMeaning: 'The Romans',
   searchName: '30 room',
   key: 30,
   type: 'Meccan',
   rukuCount: 6 },
 { surahNumber: 31,
   ayahCount: 34,
   startayahNumber: 3469,
   nameArabic: 'لقمان',
   nameEnglish: 'Luqman',
   nameMeaning: 'Luqman',
   searchName: '31 luqman',
   key: 31,
   type: 'Meccan',
   rukuCount: 3 },
 { surahNumber: 32,
   ayahCount: 30,
   startayahNumber: 3503,
   nameArabic: 'السجدة',
   nameEnglish: 'As-Sajda',
   nameMeaning: 'The Prostration',
   searchName: '32 sajda',
   key: 32,
   type: 'Meccan',
   rukuCount: 3 },
 { surahNumber: 33,
   ayahCount: 73,
   startayahNumber: 3533,
   nameArabic: 'الأحزاب',
   nameEnglish: 'Al-Ahzaab',
   nameMeaning: 'The Clans',
   searchName: '33 ahzaab',
   key: 33,
   type: 'Medinan',
   rukuCount: 9 },
 { surahNumber: 34,
   ayahCount: 54,
   startayahNumber: 3606,
   nameArabic: 'سبإ',
   nameEnglish: 'Saba',
   nameMeaning: 'Sheba',
   searchName: '34 saba',
   key: 34,
   type: 'Meccan',
   rukuCount: 6 },
 { surahNumber: 35,
   ayahCount: 45,
   startayahNumber: 3660,
   nameArabic: 'فاطر',
   nameEnglish: 'Faatir',
   nameMeaning: 'The Originator',
   searchName: '35 faatir',
   key: 35,
   type: 'Meccan',
   rukuCount: 5 },
 { surahNumber: 36,
   ayahCount: 83,
   startayahNumber: 3705,
   nameArabic: 'يس',
   nameEnglish: 'Yaseen',
   nameMeaning: 'Yaseen',
   searchName: '36 yaseen',
   key: 36,
   type: 'Meccan',
   rukuCount: 5 },
 { surahNumber: 37,
   ayahCount: 182,
   startayahNumber: 3788,
   nameArabic: 'الصافات',
   nameEnglish: 'As-Saaffaat',
   nameMeaning: 'Those drawn up in Ranks',
   searchName: '37 saaffaat',
   key: 37,
   type: 'Meccan',
   rukuCount: 5 },
 { surahNumber: 38,
   ayahCount: 88,
   startayahNumber: 3970,
   nameArabic: 'ص',
   nameEnglish: 'Saad',
   nameMeaning: 'The letter Saad',
   searchName: '38 saad',
   key: 38,
   type: 'Meccan',
   rukuCount: 5 },
 { surahNumber: 39,
   ayahCount: 75,
   startayahNumber: 4058,
   nameArabic: 'الزمر',
   nameEnglish: 'Az-Zumar',
   nameMeaning: 'The Groups',
   searchName: '39 zumar',
   key: 39,
   type: 'Meccan',
   rukuCount: 8 },
 { surahNumber: 40,
   ayahCount: 85,
   startayahNumber: 4133,
   nameArabic: 'غافر',
   nameEnglish: 'Al-Ghaafir',
   nameMeaning: 'The Forgiver',
   searchName: '40 ghaafir momin',
   key: 40,
   type: 'Meccan',
   rukuCount: 9 },
 { surahNumber: 41,
   ayahCount: 54,
   startayahNumber: 4218,
   nameArabic: 'فصلت',
   nameEnglish: 'Fussilat',
   nameMeaning: 'Explained in detail',
   searchName: '41 fussilat haameemsajda hameemsajda',
   key: 41,
   type: 'Meccan',
   rukuCount: 6 },
 { surahNumber: 42,
   ayahCount: 53,
   startayahNumber: 4272,
   nameArabic: 'الشورى',
   nameEnglish: 'Ash-Shura',
   nameMeaning: 'Consultation',
   searchName: '42 shura',
   key: 42,
   type: 'Meccan',
   rukuCount: 5 },
 { surahNumber: 43,
   ayahCount: 89,
   startayahNumber: 4325,
   nameArabic: 'الزخرف',
   nameEnglish: 'Az-Zukhruf',
   nameMeaning: 'Ornaments of gold',
   searchName: '43 zukhruf',
   key: 43,
   type: 'Meccan',
   rukuCount: 7 },
 { surahNumber: 44,
   ayahCount: 59,
   startayahNumber: 4414,
   nameArabic: 'الدخان',
   nameEnglish: 'Ad-Dukhaan',
   nameMeaning: 'The Smoke',
   searchName: '44 dukhaan',
   key: 44,
   type: 'Meccan',
   rukuCount: 3 },
 { surahNumber: 45,
   ayahCount: 37,
   startayahNumber: 4473,
   nameArabic: 'الجاثية',
   nameEnglish: 'Al-Jaathiya',
   nameMeaning: 'Crouching',
   searchName: '45 jaathiya jaasia',
   key: 45,
   type: 'Meccan',
   rukuCount: 4 },
 { surahNumber: 46,
   ayahCount: 35,
   startayahNumber: 4510,
   nameArabic: 'الأحقاف',
   nameEnglish: 'Al-Ahqaf',
   nameMeaning: 'The Dunes',
   searchName: '46 ahqaf',
   key: 46,
   type: 'Meccan',
   rukuCount: 4 },
 { surahNumber: 47,
   ayahCount: 38,
   startayahNumber: 4545,
   nameArabic: 'محمد',
   nameEnglish: 'Muhammad',
   nameMeaning: 'Muhammad',
   searchName: '47 muhammad',
   key: 47,
   type: 'Medinan',
   rukuCount: 4 },
 { surahNumber: 48,
   ayahCount: 29,
   startayahNumber: 4583,
   nameArabic: 'الفتح',
   nameEnglish: 'Al-Fath',
   nameMeaning: 'The Victory',
   searchName: '48 fath',
   key: 48,
   type: 'Medinan',
   rukuCount: 4 },
 { surahNumber: 49,
   ayahCount: 18,
   startayahNumber: 4612,
   nameArabic: 'الحجرات',
   nameEnglish: 'Al-Hujuraat',
   nameMeaning: 'The Inner Apartments',
   searchName: '49 hujraat',
   key: 49,
   type: 'Medinan',
   rukuCount: 2 },
 { surahNumber: 50,
   ayahCount: 45,
   startayahNumber: 4630,
   nameArabic: 'ق',
   nameEnglish: 'Qaaf',
   nameMeaning: 'The letter Qaaf',
   searchName: '50 qaaf',
   key: 50,
   type: 'Meccan',
   rukuCount: 3 },
 { surahNumber: 51,
   ayahCount: 60,
   startayahNumber: 4675,
   nameArabic: 'الذاريات',
   nameEnglish: 'Adh-Dhaariyat',
   nameMeaning: 'The Winnowing Winds',
   searchName: '51 dhaariyat zaariaat',
   key: 51,
   type: 'Meccan',
   rukuCount: 3 },
 { surahNumber: 52,
   ayahCount: 49,
   startayahNumber: 4735,
   nameArabic: 'الطور',
   nameEnglish: 'At-Tur',
   nameMeaning: 'The Mount',
   searchName: '52 tur toor',
   key: 52,
   type: 'Meccan',
   rukuCount: 2 },
 { surahNumber: 53,
   ayahCount: 62,
   startayahNumber: 4784,
   nameArabic: 'النجم',
   nameEnglish: 'An-Najm',
   nameMeaning: 'The Star',
   searchName: '53 najm',
   key: 53,
   type: 'Meccan',
   rukuCount: 3 },
 { surahNumber: 54,
   ayahCount: 55,
   startayahNumber: 4846,
   nameArabic: 'القمر',
   nameEnglish: 'Al-Qamar',
   nameMeaning: 'The Moon',
   searchName: '54 qamar',
   key: 54,
   type: 'Meccan',
   rukuCount: 3 },
 { surahNumber: 55,
   ayahCount: 78,
   startayahNumber: 4901,
   nameArabic: 'الرحمن',
   nameEnglish: 'Ar-Rahmaan',
   nameMeaning: 'The Beneficent',
   searchName: '55 rahman rehman',
   key: 55,
   type: 'Medinan',
   rukuCount: 3 },
 { surahNumber: 56,
   ayahCount: 96,
   startayahNumber: 4979,
   nameArabic: 'الواقعة',
   nameEnglish: 'Al-Waaqia',
   nameMeaning: 'The Inevitable',
   searchName: '56 waqia waaqia waqiah',
   key: 56,
   type: 'Meccan',
   rukuCount: 3 },
 { surahNumber: 57,
   ayahCount: 29,
   startayahNumber: 5075,
   nameArabic: 'الحديد',
   nameEnglish: 'Al-Hadid',
   nameMeaning: 'The Iron',
   searchName: '57 hadid hadeed',
   key: 57,
   type: 'Medinan',
   rukuCount: 4 },
 { surahNumber: 58,
   ayahCount: 22,
   startayahNumber: 5104,
   nameArabic: 'المجادلة',
   nameEnglish: 'Al-Mujaadila',
   nameMeaning: 'The Pleading Woman',
   searchName: '58 mujaadila mujadila',
   key: 58,
   type: 'Medinan',
   rukuCount: 3 },
 { surahNumber: 59,
   ayahCount: 24,
   startayahNumber: 5126,
   nameArabic: 'الحشر',
   nameEnglish: 'Al-Hashr',
   nameMeaning: 'The Exile',
   searchName: '59 hashr hashar',
   key: 59,
   type: 'Medinan',
   rukuCount: 3 },
 { surahNumber: 60,
   ayahCount: 13,
   startayahNumber: 5150,
   nameArabic: 'الممتحنة',
   nameEnglish: 'Al-Mumtahana',
   nameMeaning: 'She that is to be examined',
   searchName: '60 mumtahana mumtahina',
   key: 60,
   type: 'Medinan',
   rukuCount: 2 },
 { surahNumber: 61,
   ayahCount: 14,
   startayahNumber: 5163,
   nameArabic: 'الصف',
   nameEnglish: 'As-Saff',
   nameMeaning: 'The Ranks',
   searchName: '61 saff',
   key: 61,
   type: 'Medinan',
   rukuCount: 2 },
 { surahNumber: 62,
   ayahCount: 11,
   startayahNumber: 5177,
   nameArabic: 'الجمعة',
   nameEnglish: 'Al-Jumu"a',
   nameMeaning: 'Friday',
   searchName: '62 jumma',
   key: 62,
   type: 'Medinan',
   rukuCount: 2 },
 { surahNumber: 63,
   ayahCount: 11,
   startayahNumber: 5188,
   nameArabic: 'المنافقون',
   nameEnglish: 'Al-Munaafiqoon',
   nameMeaning: 'The Hypocrites',
   searchName: '63 munaafiqoon munafiqoon',
   key: 63,
   type: 'Medinan',
   rukuCount: 2 },
 { surahNumber: 64,
   ayahCount: 18,
   startayahNumber: 5199,
   nameArabic: 'التغابن',
   nameEnglish: 'At-Taghaabun',
   nameMeaning: 'Mutual Disillusion',
   searchName: '64 taghaabun taghabun',
   key: 64,
   type: 'Medinan',
   rukuCount: 2 },
 { surahNumber: 65,
   ayahCount: 12,
   startayahNumber: 5217,
   nameArabic: 'الطلاق',
   nameEnglish: 'At-Talaaq',
   nameMeaning: 'Divorce',
   searchName: '65 talaaq',
   key: 65,
   type: 'Medinan',
   rukuCount: 2 },
 { surahNumber: 66,
   ayahCount: 12,
   startayahNumber: 5229,
   nameArabic: 'التحريم',
   nameEnglish: 'At-Tahrim',
   nameMeaning: 'The Prohibition',
   searchName: '66 tahrim tehreem',
   key: 66,
   type: 'Medinan',
   rukuCount: 2 },
 { surahNumber: 67,
   ayahCount: 30,
   startayahNumber: 5241,
   nameArabic: 'الملك',
   nameEnglish: 'Al-Mulk',
   nameMeaning: 'The Sovereignty',
   searchName: '67 mulk',
   key: 67,
   type: 'Meccan',
   rukuCount: 2 },
 { surahNumber: 68,
   ayahCount: 52,
   startayahNumber: 5271,
   nameArabic: 'القلم',
   nameEnglish: 'Al-Qalam',
   nameMeaning: 'The Pen',
   searchName: '68 qalam',
   key: 68,
   type: 'Meccan',
   rukuCount: 2 },
 { surahNumber: 69,
   ayahCount: 52,
   startayahNumber: 5323,
   nameArabic: 'الحاقة',
   nameEnglish: 'Al-Haaqqa',
   nameMeaning: 'The Reality',
   searchName: '69 haaqqa',
   key: 69,
   type: 'Meccan',
   rukuCount: 2 },
 { surahNumber: 70,
   ayahCount: 44,
   startayahNumber: 5375,
   nameArabic: 'المعارج',
   nameEnglish: 'Al-Ma"aarij',
   nameMeaning: 'The Ascending Stairways',
   searchName: '70 maarij ma"aarij',
   key: 70,
   type: 'Meccan',
   rukuCount: 2 },
 { surahNumber: 71,
   ayahCount: 28,
   startayahNumber: 5419,
   nameArabic: 'نوح',
   nameEnglish: 'Nooh',
   nameMeaning: 'Noah',
   searchName: '71 nooh',
   key: 71,
   type: 'Meccan',
   rukuCount: 2 },
 { surahNumber: 72,
   ayahCount: 28,
   startayahNumber: 5447,
   nameArabic: 'الجن',
   nameEnglish: 'Al-Jinn',
   nameMeaning: 'The Jinn',
   searchName: '72 jinn',
   key: 72,
   type: 'Meccan',
   rukuCount: 2 },
 { surahNumber: 73,
   ayahCount: 20,
   startayahNumber: 5475,
   nameArabic: 'المزمل',
   nameEnglish: 'Al-Muzzammil',
   nameMeaning: 'The Enshrouded One',
   searchName: '73 muzzammil muzammil muzamil',
   key: 73,
   type: 'Meccan',
   rukuCount: 2 },
 { surahNumber: 74,
   ayahCount: 56,
   startayahNumber: 5495,
   nameArabic: 'المدثر',
   nameEnglish: 'Al-Muddaththir',
   nameMeaning: 'The Cloaked One',
   searchName: '74 muddaththir mudassir',
   key: 74,
   type: 'Meccan',
   rukuCount: 2 },
 { surahNumber: 75,
   ayahCount: 40,
   startayahNumber: 5551,
   nameArabic: 'القيامة',
   nameEnglish: 'Al-Qiyaama',
   nameMeaning: 'The Resurrection',
   searchName: '75 qiyaama qayyamah',
   key: 75,
   type: 'Meccan',
   rukuCount: 2 },
 { surahNumber: 76,
   ayahCount: 31,
   startayahNumber: 5591,
   nameArabic: 'الانسان',
   nameEnglish: 'Al-Insaan',
   nameMeaning: 'Man',
   searchName: '76 insaan dahar',
   key: 76,
   type: 'Medinan',
   rukuCount: 2 },
 { surahNumber: 77,
   ayahCount: 50,
   startayahNumber: 5622,
   nameArabic: 'المرسلات',
   nameEnglish: 'Al-Mursalaat',
   nameMeaning: 'The Emissaries',
   searchName: '77 mursalaat',
   key: 77,
   type: 'Meccan',
   rukuCount: 2 },
 { surahNumber: 78,
   ayahCount: 40,
   startayahNumber: 5672,
   nameArabic: 'النبإ',
   nameEnglish: 'An-Naba',
   nameMeaning: 'The Announcement',
   searchName: '78 naba',
   key: 78,
   type: 'Meccan',
   rukuCount: 2 },
 { surahNumber: 79,
   ayahCount: 46,
   startayahNumber: 5712,
   nameArabic: 'النازعات',
   nameEnglish: 'An-Naazi"aat',
   nameMeaning: 'Those who drag forth',
   searchName: '79 naazi"aat naaziyat',
   key: 79,
   type: 'Meccan',
   rukuCount: 2 },
 { surahNumber: 80,
   ayahCount: 42,
   startayahNumber: 5758,
   nameArabic: 'عبس',
   nameEnglish: 'Abasa',
   nameMeaning: 'He frowned',
   searchName: '80 abasa',
   key: 80,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 81,
   ayahCount: 29,
   startayahNumber: 5800,
   nameArabic: 'التكوير',
   nameEnglish: 'At-Takwir',
   nameMeaning: 'The Overthrowing',
   searchName: '81 takwir takveer',
   key: 81,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 82,
   ayahCount: 19,
   startayahNumber: 5829,
   nameArabic: 'الإنفطار',
   nameEnglish: 'Al-Infitaar',
   nameMeaning: 'The Cleaving',
   searchName: '82 infitaar',
   key: 82,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 83,
   ayahCount: 36,
   startayahNumber: 5848,
   nameArabic: 'المطففين',
   nameEnglish: 'Al-Mutaffifin',
   nameMeaning: 'Defrauding',
   searchName: '83 mutaffifin',
   key: 83,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 84,
   ayahCount: 25,
   startayahNumber: 5884,
   nameArabic: 'الإنشقاق',
   nameEnglish: 'Al-Inshiqaaq',
   nameMeaning: 'The Splitting Open',
   searchName: '84 inshiqaaq',
   key: 84,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 85,
   ayahCount: 22,
   startayahNumber: 5909,
   nameArabic: 'البروج',
   nameEnglish: 'Al-Burooj',
   nameMeaning: 'The Constellations',
   searchName: '85 burooj',
   key: 85,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 86,
   ayahCount: 17,
   startayahNumber: 5931,
   nameArabic: 'الطارق',
   nameEnglish: 'At-Taariq',
   nameMeaning: 'The Morning Star',
   searchName: '86 taariq tariq',
   key: 86,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 87,
   ayahCount: 19,
   startayahNumber: 5948,
   nameArabic: 'الأعلى',
   nameEnglish: 'Al-A"laa',
   nameMeaning: 'The Most High',
   searchName: '87 a"laa aala',
   key: 87,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 88,
   ayahCount: 26,
   startayahNumber: 5967,
   nameArabic: 'الغاشية',
   nameEnglish: 'Al-Ghaashiya',
   nameMeaning: 'The Overwhelming',
   searchName: '88 ghaashiya ghashia',
   key: 88,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 89,
   ayahCount: 30,
   startayahNumber: 5993,
   nameArabic: 'الفجر',
   nameEnglish: 'Al-Fajr',
   nameMeaning: 'The Dawn',
   searchName: '89 fajar',
   key: 89,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 90,
   ayahCount: 20,
   startayahNumber: 6023,
   nameArabic: 'البلد',
   nameEnglish: 'Al-Balad',
   nameMeaning: 'The City',
   searchName: '90 balad',
   key: 90,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 91,
   ayahCount: 15,
   startayahNumber: 6043,
   nameArabic: 'الشمس',
   nameEnglish: 'Ash-Shams',
   nameMeaning: 'The Sun',
   searchName: '91 ash-shams shams',
   key: 91,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 92,
   ayahCount: 21,
   startayahNumber: 6058,
   nameArabic: 'الليل',
   nameEnglish: 'Al-Lail',
   nameMeaning: 'The Night',
   searchName: '92 lail',
   key: 92,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 93,
   ayahCount: 11,
   startayahNumber: 6079,
   nameArabic: 'الضحى',
   nameEnglish: 'Ad-Dhuhaa',
   nameMeaning: 'The Morning Hours',
   searchName: '93 dhuhaa',
   key: 93,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 94,
   ayahCount: 8,
   startayahNumber: 6090,
   nameArabic: 'الشرح',
   nameEnglish: 'Ash-Sharh',
   nameMeaning: 'The Consolation',
   searchName: '94 sharh',
   key: 94,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 95,
   ayahCount: 8,
   startayahNumber: 6098,
   nameArabic: 'التين',
   nameEnglish: 'At-Tin',
   nameMeaning: 'The Fig',
   searchName: '95 at-teen at-tin',
   key: 95,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 96,
   ayahCount: 19,
   startayahNumber: 6106,
   nameArabic: 'العلق',
   nameEnglish: 'Al-Alaq',
   nameMeaning: 'The Clot',
   searchName: '96 alaq',
   key: 96,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 97,
   ayahCount: 5,
   startayahNumber: 6125,
   nameArabic: 'القدر',
   nameEnglish: 'Al-Qadr',
   nameMeaning: 'The Power, Fate',
   searchName: '97 qadar qadr',
   key: 97,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 98,
   ayahCount: 8,
   startayahNumber: 6130,
   nameArabic: 'البينة',
   nameEnglish: 'Al-Bayyina',
   nameMeaning: 'The Evidence',
   searchName: '98 bayyina bayyinah',
   key: 98,
   type: 'Medinan',
   rukuCount: 1 },
 { surahNumber: 99,
   ayahCount: 8,
   startayahNumber: 6138,
   nameArabic: 'الزلزلة',
   nameEnglish: 'Az-Zalzala',
   nameMeaning: 'The Earthquake',
   searchName: '99 zalzala',
   key: 99,
   type: 'Medinan',
   rukuCount: 1 },
 { surahNumber: 100,
   ayahCount: 11,
   startayahNumber: 6146,
   nameArabic: 'العاديات',
   nameEnglish: 'Al-Aadiyaat',
   nameMeaning: 'The Chargers',
   searchName: '100 aadiyaat adiyat',
   key: 100,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 101,
   ayahCount: 11,
   startayahNumber: 6157,
   nameArabic: 'القارعة',
   nameEnglish: 'Al-Qaari"a',
   nameMeaning: 'The Calamity',
   searchName: '101 qaari"a',
   key: 101,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 102,
   ayahCount: 8,
   startayahNumber: 6168,
   nameArabic: 'التكاثر',
   nameEnglish: 'At-Takaathur',
   nameMeaning: 'Competition',
   searchName: '102 takaathur takasur',
   key: 102,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 103,
   ayahCount: 3,
   startayahNumber: 6176,
   nameArabic: 'العصر',
   nameEnglish: 'Al-Asr',
   nameMeaning: 'The Declining Day, Epoch',
   searchName: '103 asr asar',
   key: 103,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 104,
   ayahCount: 9,
   startayahNumber: 6179,
   nameArabic: 'الهمزة',
   nameEnglish: 'Al-Humaza',
   nameMeaning: 'The Traducer',
   searchName: '104 humaza',
   key: 104,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 105,
   ayahCount: 5,
   startayahNumber: 6188,
   nameArabic: 'الفيل',
   nameEnglish: 'Al-Fil',
   nameMeaning: 'The Elephant',
   searchName: '105 fil feel',
   key: 105,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 106,
   ayahCount: 4,
   startayahNumber: 6193,
   nameArabic: 'قريش',
   nameEnglish: 'Quraish',
   nameMeaning: 'Quraysh',
   searchName: '106 quraish quresh',
   key: 106,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 107,
   ayahCount: 7,
   startayahNumber: 6197,
   nameArabic: 'الماعون',
   nameEnglish: 'Al-Maa"un',
   nameMeaning: 'Almsgiving',
   searchName: '107 maa"un maun',
   key: 107,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 108,
   ayahCount: 3,
   startayahNumber: 6204,
   nameArabic: 'الكوثر',
   nameEnglish: 'Al-Kawthar',
   nameMeaning: 'Abundance',
   searchName: '108 kawthar kausar',
   key: 108,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 109,
   ayahCount: 6,
   startayahNumber: 6207,
   nameArabic: 'الكافرون',
   nameEnglish: 'Al-Kaafiroon',
   nameMeaning: 'The Disbelievers',
   searchName: '109 kaafiroon kafirun',
   key: 109,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 110,
   ayahCount: 3,
   startayahNumber: 6213,
   nameArabic: 'النصر',
   nameEnglish: 'An-Nasr',
   nameMeaning: 'Divine Support',
   searchName: '110 nasr nasar',
   key: 110,
   type: 'Medinan',
   rukuCount: 1 },
 { surahNumber: 111,
   ayahCount: 5,
   startayahNumber: 6216,
   nameArabic: 'اﻟﻠﻬﺐ‎',
   nameEnglish: 'Al-Lahab',
   nameMeaning: 'The Palm Fibre',
   searchName: '111 lahab',
   key: 111,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 112,
   ayahCount: 4,
   startayahNumber: 6221,
   nameArabic: 'الإخلاص',
   nameEnglish: 'Al-Ikhlaas',
   nameMeaning: 'Sincerity',
   searchName: '112 ikhlaas ikhlas',
   key: 112,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 113,
   ayahCount: 5,
   startayahNumber: 6225,
   nameArabic: 'الفلق',
   nameEnglish: 'Al-Falaq',
   nameMeaning: 'The Dawn',
   searchName: '113 falaq',
   key: 113,
   type: 'Meccan',
   rukuCount: 1 },
 { surahNumber: 114,
   ayahCount: 6,
   startayahNumber: 6230,
   nameArabic: 'الناس',
   nameEnglish: 'An-Naas',
   nameMeaning: 'Mankind',
   searchName: '114 naas',
   key: 114,
   type: 'Meccan',
   rukuCount: 1 },
 ],








 }
