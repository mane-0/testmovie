let search = document.getElementById('search');
const animesearch = [
{
url: "/post/zhernus/z-0001",
nameanime: "لە نیوەشەودا ڕویداوە",
nameanimekurdish: "نیمە شب اتفاق افتادە",
kurta: "چیرۆکی ژنێکە بەناوی شایستە",
img: "https://cinemayeran.net/assets/images/film-zhernus/newashaw.jpg"
},
{
   
url: "/post/zhernus/z-0002",
nameanime: "  کاتی چاوپێکەوتن    ",
nameanimekurdish: "   ",
kurta: "اس لە پیاوێك دەکات کە بڕیار بوو پەیوەندی بەهاوسەر و کچەکەیەوە بکات کە پێشتر کۆچیان کردبوو، دوای ئەوەی خانویەک و هاوڕێیەکی لە سایرامۆر بەکرێ گرتوە، بەڵام شتەکان بەپێی بلانەکان ناڕۆن",
img: "https://cinemayeran.net/assets/images/film-zhernus/kati-chawpekawtn.jpg"
},
{
       
url: "/post/zhernus/z-0003",
nameanime: "  ئاپاچی    ",
nameanimekurdish: "  آپاچی ",
kurta: "پێویستە هەمیشە بیر لەچارەسەرێك بکەیتەوە پێش هێرشی ئەپاچیەکان",
img: "https://cinemayeran.net/assets/images/film-zhernus/apachi.jpg"
},

{
url: "/post/zhernus/z-0004",
 nameanime: "  بەردبارانکردنی سورەیا   ",
 nameanimekurdish: "  سنگسار ثریا   ",
kurta: "  ڕۆژنامەنوسێکی فەڕەنسی دەگاتە گوندێك لەوڵاتی ئێران،ئوتومبێڵەکەی دەداتە هاشم میکانیکی گوندەکە بۆ چاککردەوە وەستانی ئەم ڕۆژنامە نوسە لەگوندەکە دەرفەتێکەبۆئەوەی ڕووبەرووی چیرۆکێکی ترسناک ببێتەوە     ",
img: "https://cinemayeran.net/assets/images/film-zhernus/bardbarankrdni-suraya.jpg"
},

{
       
url: "/post/zhernus/z-0005",
nameanime: "   داگیرکردن   ",
nameanimekurdish: "   مصادرە   ",
kurta: "  فیلمەکە لەساڵانی پەنجاکانەوە دەست پێدەکات کە باس لەکارمەندێکی هەواڵگری ئێران دەکات بەناوی ئیسماعیل یارجانلو ئەو بەکڕینی بلیتێکی یانەسیب دەبێت بە براوەی پارەیەکی زۆر...     ",
img: "https://cinemayeran.net/assets/images/film-zhernus/dagirkrdn.jpg"
},
    

{
       
url: "/post/zhernus/z-0006",
nameanime: "  خانوویەك لە شەقامی چل و یەکەم    ",
nameanimekurdish: "  خانە ای در خیابان جهل ویکم  ",
kurta: "  باس لەچیرۆکی شەڕی نێوان دوو برا هەیە کە دەبێتە هۆی کوشتنی یەکێکیان ، ئەمەسەرەتای ڕووداوەکەیە کە برا بکوژەکە هەڵدێت بەڵام دایکەکە قەناعەتی پێ دەکات کە خۆی تەسلیمی یاسابکات    ",
img: "https://cinemayeran.net/assets/images/film-zhernus/xanwyak-la-shaqami-chlw-yakam.jpg"
},

{
       
url: "/post/zhernus/z-0007",
nameanime: "  کچی ئێرانی  ",
nameanimekurdish: "  دختر ایرونی  ",
kurta: "  باسی کچێکی سەربەخۆی چاونەترس دەکات کە توانیویەتی لەسەرپێی خۆی ڕاوەستێت ڕووبەڕووی کێشەکانی ببێتەوە،دەیەوێت ئەوە بۆ دەوروبەرو بنەماڵەکەی بسەلمێنێت بسەلمێنێت کچانیش وەك کوڕان مافی ئەوەیان هەیە بڕۆنە خوازبێنی لەم ڕێگەیەوە کولتورەکان بشکێنێت ، داب و نەریتەکان گۆڕانکاریان بەسەربێت،بەم هۆیەشەوە توشی زۆر ئاستەنگ و ڕێگری دێت    ",
img: "https://cinemayeran.net/assets/images/film-zhernus/kchani-erani.jpg"
},
            
{
       
url: "/post/zhernus/z-0008",
nameanime: "   پەرشوبڵاو  ",
nameanimekurdish: " تفریق  ",
 kurta: "  فەرزانە لەسەر شەقام پیاوێک دەبینێت کە زۆر لە جەلالی هاوسەری دەچێت، کاتێک بەدوایدا دەڕوات پیاوەکە لەگەڵ ژنێکی تردا دەبینێت،دەست دەکات بە تێکدانی پەیوەندیەکەی لەگەڵ هاوسەرەکەی، پێی وایە جەلال فێڵی لێدەکات   ",
 img: "https://cinemayeran.net/assets/images/film-zhernus/parshublaw.jpg"
},

{
       
url: "/post/zhernus/z-0009",
    nameanime: "   جەهان سەمام لەگەڵ بکە  ",
   nameanimekurdish: " جهان با من برقص   ",
    kurta: " هاوڕێیانی جەهانگیر(جهان)لەسەر بانگهێشتی بەهەمەنی برای بۆ یادی لەدایك بوونی کۆبوونەتەوە،کەپێدەچێت دواهەمین یادی لەدایک بوونی بێت ، بەهۆی نەخۆشیەوە،ئەم دۆخە وایان لێدەکات پێداچونەوە بەخویان و پەیوەندیەکانیان بکەن و بیر لەژیانی خۆیان بکەنەوە ",
  img: "https://cinemayeran.net/assets/images/film-zhernus/chahan-samam-lagal-bka.jpg"
   },

{
       
url: "/post/zhernus/z-00010",
nameanime: "   عەیار١٤ ",
nameanimekurdish: "  عیار١٤     ",
kurta: " باس لەپیاوێك دەکات کە ساڵانێک لەمەوبەر بەزیرەکی خۆی لەدۆخێکی سەخت دەرهێناوا،بەڵام کاتێك کەسێکی نامۆ دەگەڕێتەوە بۆ شارۆچکە بچوکەکەی خۆی توشی کێشەدەبێت ",
img: "https://cinemayeran.net/assets/images/film-zhernus/ayar14.jpg"
},

{
 
url: "/post/zhernus/z-00011",
nameanime: " ئیتالیا ئیتالیا",
nameanimekurdish: "  ایتالیا ایتالیا     ",
kurta: " بەرفاو نادر بەڕێکەوت یەکتر دەبینن و عاشق دەبن،بەڵام لەگەڵ تێپەڕبوونی کات و ڕووداوە چاوەڕوان کراوەکان، ژیان و پەیوەندی نێوانیان دەگاتە خاڵە گرنگەکان ",
img: "https://cinemayeran.net/assets/images/film-zhernus/italya-iytalya.jpg"
},

{
 
    url: "/post/zhernus/z-00012",
    nameanime: " بەفری سەر سنەوبەرەکان ",
    nameanimekurdish: "  برف روی کاجها    ",
    kurta: " ئافرەتێك کە مامۆستای پیانۆیە ڕووبەڕووی ڕووداوێکی گرنگ دەبێتەوە لەژیانیدا،ئەو دەکەوێتە ناو دوو هەڵبژاردەوە یان دەبێت بەپێی داب و نەریت ڕەفتاربکات یان ",
    img: "https://cinemayeran.net/assets/images/film-zhernus/bafri-sar-snawbarakan.jpg"
    },

{
 
    url: "/post/zhernus/z-00013",
    nameanime: " ژوانمان لە باخی شار",
    nameanimekurdish: "  قرارمون پارک شهر   ",
    kurta: " چیرۆکی ژیانی نووسەرێک دەگێڕێتەوە کە لە کاتی نووسینی دوا ڕۆمانیدا، ڕاستی ژیانی خۆی ئاشکرا دەکات. ",
    img: "https://cinemayeran.net/assets/images/film-zhernus/jwanman-la-baxi-shar.jpg"
    },

{
 
    url: "/post/zhernus/z-00014",
    nameanime: "  کورکوژی  ",
    nameanimekurdish: " پسرکشی  ",
    kurta: " چیرۆکی ئەم فیلمە لە ساڵانی چلەکان و حەفتاکانی سەدەی ڕابردوودا ڕوودەدات و چیرۆکێکە لەبارەی نهێنی ئاڵۆزییەکانی پەیوەندی خێزانێکەوەیە کە دەیان ساڵە بەهۆی باوەڕێکی ناڕاستەوە تووشی قەیران بوونە... ",
    img: "https://cinemayeran.net/assets/images/film-zhernus/kurkuj.jpg"
    },

{
 
    url: "/post/zhernus/z-00015",
    nameanime: "  تمشك  ",
    nameanimekurdish: " تمشك  ",
    kurta: " حەمید و هوما ژن و مێردێکی نەزۆکن و بڕیاریان داوە لە ڕێگەی منداڵبوونی جێگرەوە دووگیان بن. لە ڕێگای بەدواداچوون و هەڵبژاردنی کەسێکی متمانەپێکراو بۆ ئەم مەبەستە، ئەم دووانە ژنێکی گەنج بە ناوی رضوان دەناسن کە سەرەڕای بارودۆخی لەبار کێشەی هەیە. ئەوەی بەسەر ئەم ژن و مێردەدا دێت دوای ناسینی رضوان دەبێتە هۆی ئەوەی تێگەیشتنێکی نوێ لە خۆیان و دەوروبەریان بەدەست بهێنن....",
    img: "https://cinemayeran.net/assets/images/film-zhernus/tmshk.jpg"
    },

{
 
    url: "/post/zhernus/z-00016",
    nameanime: "  سوور  ",
    nameanimekurdish: " قرمز  ",
    kurta: "هەستی کە هاوسەرەکەی کۆچی دوایی کردووە و کچێکی بچووکی هەیە، هاوسەرگیری لەگەڵ پیاوێکی دەوڵەمەند دەکات بەناوی ناصر. ناصر پیاوێکی ڕەشبینە و هەمیشە گومانی لە هەستی هەیە و لێی دەدات بۆیە خێزانەکەی داوای جیابوونەوەی لێدەکات، بە داوای لێبوردن و دەربڕینی خۆشەویستی بۆی دەیگەڕێنێتەوە ماڵەوە. تا ڕۆژێک کە بڕیارێک دەدات وبە فێڵێک کچەکەی بە بارمتە دەگرێت و.......",
    img: "https://cinemayeran.net/assets/images/film-zhernus/sur.jpg"
    },


{
 
    url: "/post/zhernus/z-00017",
    nameanime: " بنەوشەی ئەفریقی",
    nameanimekurdish: " بنفشه آفریقایی",
    kurta: "شەکوە له گه ڵ ڕه زای هاوسه ری دووه می، بڕیار ده ده ن فەرەیدونی هاوسه ڕی پێشووی که له لایه ن منداڵه کانیانه وه به نۆرینگه که سپێردرابوو، بهێنن بۆ ماڵه که یان. ئەم بڕیارە ڕووداوی نوێ لە ژیانی هەر سێ کەسەکەدا دروست دەکات",
    img: "https://cinemayeran.net/assets/images/film-zhernus/kotaye-xzmat.jpg"
    },

{
 
    url: "/post/zhernus/z-00018",
    nameanime: "  کۆتایی خزمەت ",
    nameanimekurdish: " پایان خدمت ",
    kurta: "چیرۆکی سەربازێكە لەدواین ڕۆژانی خزمەت و ئەو کێشانەی کە لەڕێگادا ڕووبەڕوودەبێتەوە،بەپێچەوانەی فەرمانی سەرووی خۆیەوە مامەڵە دەکات،سەروترێك کە پەیوەندیەکی نزیک و باوکایەتی لەگەڵیدا هەبێت،ئەمەش دەبێتە هۆی ڕووداوەکانی داهاتوی ئەم فیلمە",
    img: "https://cinemayeran.net/assets/images/film-zhernus/bnewshay-afriqi.jpg"
    },

{
 
    url: "/post/zhernus/z-00019",
    nameanime: "  دۆسیەکە کراوەیە",
    nameanimekurdish: " پروند باز است ",
    kurta: "لە دۆسیەیەکی کوشتن لە ساڵانی هەشتاکان وەرگیراوە، باس لە چیرۆکی هەرزەکارێک دەکات کە بەهۆی خۆشەویستییەوە لە شەڕێکدا هاوڕێکەی دەکوژێت و ناچارە چاوەڕێی بڕیاری دادگا بکات",
    img: "https://cinemayeran.net/assets/images/film-zhernus/dosyaka-krawaya.jpg"
    },

{
 
    url: "/post/zhernus/z-00020",
    nameanime: " ئێوارەی هەینی  ",
    nameanimekurdish: "  عصر جمعە  ",
    kurta: "خیانەت و خۆپەرستی چارەنووسێکی تاڵ بۆ ئەو سوێندخواردنە 15 ساڵە دادەنێت، کە لە ئەنجامدا بێ ماڵ و حاڵ و تەنیایی لێدەکەوێتەوە. ساڵان تێدەپەڕێت، بەنەفشەی خوشکی سۆگاند بڕیار دەدات خوشکە ونبووەکەی بدۆزێتەوە و نهێنیەک ئاشکرا بکات کە ساڵانێکە شاراوەتەوە.",
    img: "https://cinemayeran.net/assets/images/film-zhernus/ewarey-hayni.jpg"
    },
  
{
 
    url: "/post/zhernus/z-00021",
    nameanime: "  عەشق لە چوارچێوەی چەند مەترێكدا  ",
    nameanimekurdish: "  چند متر مکعب عشق ",
    kurta: "عبدالسلام لەگەڵ کچەکەی( مەرورا) خەڵکی ئەڤغانستانن و وەک پەنابەر دێنە ئێران، لە کارگەیەک دەست بە کار دەبن، مەرورا دەکەوێتە داوی خۆشەویستی کرێکارێکی ئێرانی کە لە هەمان کارگە کاردەکات بە ناوی سابیر، سابیر هەوڵدەدات هاوسەرگیری لەگەڵ مەرورا بکات و داخوازی دەکات لە باوکی، بەڵام...",
    img: "https://cinemayeran.net/assets/images/film-zhernus/ashq-lachwarcheway-chandmatrekda.jpg"
    },    

{
 
url: "/post/zhernus/z-00022",
nameanime: "  هاوکاری ",
nameanimekurdish: "  ارفاق",
kurta: "باس لە مامۆستایەکی بیرکاری بە ویژدان و بەئەمەک دەکات کە ڕووبەڕووی دۆخێکی نائارام دەبێتەوە. لە کاتی تاقیکردنەوەکاندا یەکێک لە خوێندکارەکانی نمرەی شکستخواردوو بەدەست دەهێنێت و ئەمەش دەبێتە هۆی دروستبوونی گرژی لە نێوان مامۆستا و خوێندکارەکەد.",
  img: "https://cinemayeran.net/assets/images/film-zhernus/hawkari.jpg"
},    
 

{
url: "/post/zhernus/z-00023",
nameanime: "  باوکی ئەوی تر ",
nameanimekurdish: "  پدر أن دیگران",
kurta: " ئەم فیلمە چیرۆکی منداڵێکە کە سەرەڕای گەیشتن بە تەمەنی ٦ ساڵی هێشتا قسە ناکات و هەمووان گاڵتەی پێدەکەن و لە خێزان و خەڵکی دەوروبەریشدا جگە لە دایکی کەس پشتیوانی ناکات و زیاتر گرنگی بە کوڕە گەورەکەیان دەدەن. تا کوڕەکە... ",
  img: "https://cinemayeran.net/assets/images/film-zhernus/bawki-awi-tr.jpg"
},  


{
url: "/post/zhernus/z-00024",
nameanime: "  پیاسەیەك لەناو تەمدا",
nameanimekurdish: "  پرسە در مە  ",
kurta: " ئەمین کە ئاوازدانەر و پیانۆژەنە , دوای ئەوەی لەگەڵ ڕۆیا، ئەکتەری شانۆ هاوسەرگیری دەکات، ڕووبەڕووی چەندین کێشە دەبێتەوە کە سێبەری لەسەر ژیانیان دادەنێت تا ئەو ڕادەیەی واز لە کارەکەی دەهێنێت و هاوسەرەکەی لەدەست دەدات و ناهاوسەنگ دەبێ ",
img: "https://cinemayeran.net/assets/images/film-zhernus/pyasayak-lanaw-tamda.jpg"
},  
    
    
{
url: "/post/zhernus/z-00025",
nameanime: "  پیاوێکی بێ سێبەر  ",
nameanimekurdish: "   مرد بدون سایە   ",
kurta: " دوای ئەوەی فیلمێکی دۆکیۆمێنتاری لەسەر توندوتیژی دروست دەکات، ماهان کوشان هەڕەشەی ژیانی لەسەرە و سایەی هاوسەری بە خۆشەویستییەوە بە هانایەوە دێت، بەڵام ڕووداوە ئاڵۆزەکان هەموو شتێک دەگۆڕن ",
img: "https://cinemayeran.net/assets/images/film-zhernus/pyawek-babe-sebar.jpg"
},  


{
url: "/post/zhernus/z-00026",
nameanime: "  زاڵاوا ",
nameanimekurdish: "   زالاوا  ",
kurta: " ",
img: "https://cinemayeran.net/assets/images/film-zhernus/zalaw.jpg"
},  


{
url: "/post/zhernus/z-00027",
nameanime: "  محمد پێغەمبەری خوا ",
nameanimekurdish: "   محمد رسول‌الله  ",
kurta: " ئەم فلمە باسی ژیانی پێغەمبەر محمد( سەلامی خوای لەسەر بێت )دەکات، فلمێکە پڕ لە ئامۆژگاری و جوانی ئیمان و نیعمەتی ئیسلام... ",
img: "https://cinemayeran.net/assets/images/film-zhernus/muhamad-pegamberi-xwa.jpg"
},  

{
url: "/post/zhernus/z-00028",
nameanime: "  هەناسە",
nameanimekurdish: "   پرسە درحوالی من ",
kurta: ".. باس لە ژیانی چوار منداڵ دەکات بە ناوەکانی بەهار، نادر، کەمال و مریەم، کە لەگەڵ باوکیان و داپیرەیان دەژین لە پەنجاکانی سەدەی ڕابردوودا . دونیای ئەم منداڵانە جیهانێکی پڕ لە خەونی جوانی منداڵانە",
img: "https://cinemayeran.net/assets/images/film-zhernus/hanasa.jpg"
},  


{
url: "/post/zhernus/z-00029",
nameanime: "  گەڕانێکی بێهودە بەدەوری خود",
nameanimekurdish: "   نفس ",
kurta: "باسی دونیای ژنێکە کە لە دڵی تارانی ئەمڕۆدا لە لێواری تەمەنی سی ساڵدایە، کە بە دوای خەونەکەیدا دەگەڕێت",
img: "https://cinemayeran.net/assets/images/film-zhernus/garaneki-behuda-badawri-xud.jpg"
},  


{
url: "/post/zhernus/z-00030",
nameanime: "  نەبات   ",
nameanimekurdish: "   نبات ",
kurta: "پیاوێکی چل‌وچوار ساڵە ژنەکەی مردووە و لەگەڵ کچە دوانزە ساڵانەکەیدا دەژیت، بەڵام بە هاتنی ژنێک بۆ نێو ژیانی کچەکەی هەموو شتێک دەگۆڕێت...",
img: "https://cinemayeran.net/assets/images/film-zhernus/nebat.jpg"
},  


{
url: "/post/zhernus/z-00031",
nameanime: "  وەرزی نێرگز   ",
nameanimekurdish: "   فصل نرگس ",
kurta: "باس لە دووژنە شوفێری تەکسی و ئەکتەرێك و مامۆستایەکی مۆسیقاو کارەکتەری دیکە دەکات ، لەکاتی فیلمەکەدا بینەر شاهیدی گرێکانی جیرۆکی هەریەکێك لەو کارەکتەرانە دەبێت",
img: "https://cinemayeran.net/assets/images/film-zhernus/warzi-nergz.jpg"
},  


{
url: "/post/zhernus/z-00032",
nameanime: "  یاری گورگ  ",
nameanimekurdish: "   گرگ بازی ",
kurta: "کۆمەڵێک گەنج کە شانۆیان خۆشدەوێت بابەتێکیان بۆ نمایشەکەیان هەیە بەڵام بەهۆی نەبوونی وەبەرهێنانەوە نمایشەکەیان دوادەخرێ",
img: "https://cinemayeran.net/assets/images/film-zhernus/yari-gurg.jpg"
},  


{
url: "/post/zhernus/z-00033",
nameanime: "   سەرکەش  ",
nameanimekurdish: "  طاغی ",
kurta: "چیرۆکی ژیانی ژنێکی کەشتیوانیە لەبارودخۆی ژیانی یاخی بووە،لەدوای ناکۆکی لەگەڵ هاوسەرەکەیدا بڕیاردەدات بارودۆخەکە بگۆڕێت و یانێکی نوێ دەستپێبکات بەڵام",
img: "https://cinemayeran.net/assets/images/film-zhernus/sarkash.jpg"
},  


{
url: "/post/zhernus/z-00034",
nameanime: "   شین ",
nameanimekurdish: "  آبی ",
kurta: "کچێک بەناوی مهتاب لەگەڵ کورێک بەناوی ئەرستۆ توشی رووداوی هاتووچۆ دەبن ئەنجامی ئەم رووداوە دەبێتر هۆی تۆڵەسەندنەوە لەلایەن هەردوولاوە",
img: "https://cinemayeran.net/assets/images/film-zhernus/shin.jpg"
}, 


{
url: "/post/zhernus/z-00035",
nameanime: "   دەربارەی ئێلی",
nameanimekurdish: "  درباره الی ",
kurta: "یرۆکی گەشتێکی سێ رۆژەی چەند خێزانێكە کە بۆ پشوودان گەشتیان بۆ باکووری وڵات کردوە ، کەلەگەشتەکەیاندا ڕووداوی نەخوازراو ڕوودەدات",
img: "https://cinemayeran.net/assets/images/film-zhernus/darbarey-eli.jpg"
}, 

{
url: "/post/zhernus/z-00036",
nameanime: "  تەنها تۆ دایکم بە  ",
nameanimekurdish: " فقط تو مادر من باش  ",
kurta: "باس لە ژیانی دایکێك دەکات کە لەدووڕیانێكدا گیری خواردوە نازانێت چیبکات و چ هەڵبژاردنێك ئەنجام بدات",
img: "https://cinemayeran.net/assets/images/film-zhernus/tanha-to-daykm-ba.jpg"
}, 


{
url: "/post/zhernus/z-00037",
nameanime: "  ماحی ",
nameanimekurdish: " ماحی ",
kurta: "ئەم فیلمە لە ڕووداوێکی ڕاستیەوە وەرگیراوە چیرۆکی کچێکە بەناوی ماحی کە لە هەتیوخانە لەخوشکە دوانەکەی جیادەکرێتەوەو دەکەوێتە داوی چەند کەسانێکەوە کە بۆ کاری نایاسایی بەکاری دەهێنن لەدرێژەی رووداوەکەدا",
img: "https://cinemayeran.net/assets/images/film-zhernus/mahi.jpg"
}, 


{
url: "/post/zhernus/z-00038",
nameanime: "  ژووری تاریك ",
nameanimekurdish: " اتاق تاریک ",
kurta: "فەرهاد و هالە لاپەڕەیەکی نوێی ژیانیان دەست پێکردوە ئەمەش سەرەتای گۆڕانکاریەکانی دیکەیە کە وایان لێدەکات ڕووبەڕووی کێشەی نوێ ببنەوە",
img: "https://cinemayeran.net/assets/images/film-zhernus/zhuri-taruk.jpg"
}, 


{
url: "/post/zhernus/z-00039",
nameanime: "  ڕۆژێکی تایبەت ",
nameanimekurdish: " یک روز بخصوص",
kurta: "حامد دەبێت هەڵبژاردنێك بکات بۆ نەشتەرگەری دڵی خوشکەکەی ،هەڵبژاردنێك کە لەداهاتوودا ڕێگەی جیاوازی خستۆتە بەردەمی",
img: "https://cinemayeran.net/assets/images/film-zhernus/rozheki-taybat.jpg"
}, 

{
url: "/post/zhernus/z-00040",
nameanime: " هەڵەتێگەشتن ",
nameanimekurdish: " سوءتفاهم  ",
kurta: "چیرۆکی بارمتەگرتنێكە کەهەمووشتێك لە چوارچێوەی واقعدا روودەدات",
img: "https://cinemayeran.net/assets/images/film-zhernus/hala-tegashtn.jpg"
}, 


{
url: "/post/zhernus/z-00041",
nameanime: "  من دایکم  ",
nameanimekurdish: " من مادر هستم  ",
kurta: "  باس لە ژیانی دوو خێزان دەکات کە لە دۆخی لێكجیابوونەوەن لەم نێوەندەدا ڕووداوێك بەسەر کچە نۆزدەساڵانەکەی یەكێك  ",
img: "https://cinemayeran.net/assets/images/film-zhernus/mn-daykm.jpg"
}, 


{
url: "/post/zhernus/z-00042",
nameanime: "   جیابوونەوە  ",
nameanimekurdish: "  رفتن   ",
kurta: " جیرۆکی (فریشتەو نەبی )چیرۆکی عیشقێکە گەیشتن ونەگەیشتنیان لەنێوان تەلی دڕکاوی و ونبونی لەناو توپوتۆز چیرۆکی خۆشەویستیەك   ",
img: "https://cinemayeran.net/assets/images/film-zhernus/jyabwnawe.jpg"
}, 


{
url: "/post/zhernus/z-00043",
nameanime: " پێش خۆرهەڵاتن ",
nameanimekurdish: "  پیش از طلوع  ",
kurta: " تەرانە و سامان شەوی پێش زەماوەندەکەیان بەشداری ئاهەنگێکی دۆستانە دەکەن یاریەك کە بەگاڵتەیەکی تەلەفۆنی دەستپێدەکات لێرەوە ڕووداوەکان دەست پێدەکات   ",
img: "https://cinemayeran.net/assets/images/film-zhernus/peshxorhalatn.jpg"
}, 


{
url: "/post/zhernus/z-00044",
nameanime: " سێ هەناسەی پەنگخواردوو  ",
nameanimekurdish: "  سه کام حبس ",
kurta: "  نەسیم و موجتەبی ژن و مێردێکی گەنجن کە تازە منداڵیان بووە و ژیانێکی باش و سادە دەژین    ",
img: "https://cinemayeran.net/assets/images/film-zhernus/se-hanasay-pang-xwardw.jpg"
}, 


{
url: "/post/zhernus/z-00045",
nameanime: " ناهید ",
nameanimekurdish: "  ناهید   ",
kurta: "  ناهید ژنێکی گەنجە کە بەهۆی ئاڵوودەبوونی ئەحمەدی هاوسەری لێی جیابۆتەوە بەتایبکردنی تێزی خوێندکاری بژێوی و خەرجی خۆی مناڵەکەی پەیدا دەکات    ",
img: "https://cinemayeran.net/assets/images/film-zhernus/nahid.jpg"
}, 


{
url: "/post/zhernus/z-00046",
nameanime: " ڕۆژە نارنجیەکان",
nameanimekurdish: "  روزهای نارنجی  ",
kurta: "  چیرۆکی فیلمەکە باس لە ژیانی ژنێک دەکات کە نێوەندگیری دەکات لە بەکارهێنانی کرێکاری وەرزی بۆ کارکردن لە باخچەیەک لە باکوری وڵات    ",
img: "https://cinemayeran.net/assets/images/film-zhernus/rozha-narchyakan.jpg"
}, 

{
url: "/post/zhernus/z-00047",
nameanime: " سۆزی دایک ",
nameanimekurdish: "   مهر مادری  ",
kurta: "  مینا فەهیمی وەك چارەسەرکار و توێژەری کۆمەڵایەتی لە خانەی چارسەرکردنی پەروەردەی کوڕانی بێ سەرپەرشت دەست بەکار دەبێت یەکێك لە کوڕەکانی خانەکە بەناوی ( مەهدی ) خانمی فەهیمی وەك دایکی خۆی دەبینیت    ",
img: "https://cinemayeran.net/assets/images/film-zhernus/sozi-dayk.jpg"
}, 


{
url: "/post/zhernus/z-00048",
nameanime: " شێدار",
nameanimekurdish: "    نمور  ",
kurta: "  داود برا گەورەی خێزانەکەیە کە لەسەر داوای دانیالی برای داوای لێدەکات دوای پازدە ساڵ لەگەڵ دلئارامی خوشکی ئاشت ببنەوە بەڵام....    ",
img: "https://cinemayeran.net/assets/images/film-zhernus/shedar.jpg"
}, 


{
url: "/post/zhernus/z-00049",
nameanime: "  ئێمە هەموومان تاوانبارین ",
nameanimekurdish: "    ما همه گناهکاریم  ",
kurta: "  یوسف پێویستی بە پارەیەکی زۆرە بۆ چارەسەرکردنی کچەکەی و ئامادەیە هەموو شتێک بفرۆشێت بۆ بەدەستهێنانی ئەو پارەیە    ",
img: "https://cinemayeran.net/assets/images/film-zhernus/emahamwman-tawanbarin.jpg"
}, 


{
url: "/post/zhernus/z-00050",
nameanime: "  ئاڵتون و مس",
nameanimekurdish: "    طلا و مس ",
kurta: "  ڕەزا طلبە کە بەم دواییانە لەگەڵ خێزانەکەی هاتبوون بۆ تاران بۆ بەشداریکردن لە پۆلەکانی ئەخلاقی کە زۆر شتیان دەربارەی بیستووە. بەڵام ئەو تێبینی نەخۆشییەکی فرەیی مێردەکەی    ",
img: "https://cinemayeran.net/assets/images/film-zhernus/altwnums.jpg"
}, 


{
url: "/post/zhernus/z-00051",
nameanime: " چاکەتی چەرمی  ",
nameanimekurdish: "    کت چرمی ",
kurta: "  عیسا فەرەهمەند کارمەندی ڕێکخراوی سەلامەتی، لە پڕۆسەی پشکنینی سەنتەرێکی چاودێریکردنی کچانی بێ سەرپەرشت، تێبینی باندێکی گوماناوی خراپەکار دەکات.    ",
img: "https://cinemayeran.net/assets/images/film-zhernus/chakati-charmi.jpg"
}, 


{
url: "/post/zhernus/z-00052",
nameanime: " لەو دیو دیوارەوە ",
nameanimekurdish: "     شب، داخلی، دیوار ",
kurta: " عەلی پیاوێکی نابینایە دەیەوێت خۆی بکوژێت، کە لەسەر خاڵی چاودێری بیناکەیان پەشیمان دەبێتەوە، هەواڵی پێ دەدەن پۆلیس بەدوای ژنێکەوەیە، کە هەڵاتووە و لە شوێنێکی بیناکەدا خۆی شاردووەتەوە. عەلی وردە وردە دەزانێت کە لەیلا ژنە هەڵهاتووەکە لە شوقەکەی ئەودایە    ",
img: "https://cinemayeran.net/assets/images/film-zhernus/shawek-law-diw-diwarawa.jpg"
}, 



{
url: "/post/zhernus/z-00053",
nameanime: " دایکایەتی ",
nameanimekurdish: "    مادری   ",
kurta: "  باس لە ژیانی دوو خوشک دەکات کە بە تەنیا لە شاری یەزد دەژین. لەگەڵ ئەو جیاوازییەی کە یەکێکیان خۆشەویستییەکەی بەجێهێشتووە و ئەوی دیکەیان لە خۆشەویستییەکەی جیابۆتەوە. پێکەوە لەبەردەم ئەو کێشە و پرسانەی کە لە ڕێگادان وەستاون تا   ",
img: "https://cinemayeran.net/assets/images/film-zhernus/daykane.jpg"
}, 



{
url: "/post/zhernus/z-00054",
nameanime: " ئاتابای ",
nameanimekurdish: "    آتابای  ",
kurta: "  ئاتابای چیرۆکی پیاوێکە بە ناوی کازم کە لەگەڵ باوک و خوشکەزاکەی لە گوندی پیرکەندی شهرستان دەژین. کازم، کە خوێندکاری تەلارسازی لە فاکەڵتی هونەرە جوانەکانی زانکۆی تاران بوو، دوای شکستی سۆزداری وازی لە زانکۆ هێنا و گەڕایەوە زێدی خۆی روداوەکان لێرەوە دەست پێدەکا   ",
img: "https://cinemayeran.net/assets/images/film-zhernus/atabay.jpg"
}, 



{
url: "/post/zhernus/z-00055",
nameanime: " بەبەردبوو ",
nameanimekurdish: "    فسیل  ",
kurta: "   چیرۆکی سێ هاوڕێیە لە سەردەمی پێش شۆڕش، کە باندێکی مۆسیقی پێک دەهێنن و هەوڵ بۆ بەناوبانگ بوون دەدەن   ",
img: "https://cinemayeran.net/assets/images/film-zhernus/babardbu.jpg"
}, 



{
url: "/post/zhernus/z-00056",
nameanime: " لە دوای ڕۆیشتن  ",
nameanimekurdish: "    بعد از رفتن ",
kurta: "  ئارش ( صابر ابر ) دوای ماوەیەکی زۆر لە دووری دەگەڕێتەوە بۆ زێدی خۆی و بەدوای کەسە ونبووەکەیدا دەگەڕێت   ",
img: "https://cinemayeran.net/assets/images/film-zhernus/ladway-royshtn.jpg"
}, 


{
url: "/post/zhernus/z-00057",
nameanime: " جاڵجاڵۆکە ",
nameanimekurdish: "   عنکبوت ",
kurta: " سەعید پیاوێکی چل ساڵەیە، دوای ئەوەی کە هاوسەرەکەی لەلایەن شۆفێرێکی تاکسیەوە ئازار دەدرێ و بێزار دەکرێت، بڕیار دەدات تۆڵەی لێ بکاتەوە و ئەوەش تووشی ڕێگایەکی تاریکی دەکات.   ",
img: "https://cinemayeran.net/assets/images/film-zhernus/chalchaloka.jpg"
}, 



{
url: "/post/zhernus/z-00058",
nameanime: " یانەی هاوسەران ",
nameanimekurdish: "   کلوب همسران  ",
kurta: "چیرۆکی سێ پیاوە کە پێگە و دەسەڵاتێکی گەورەیان لە کۆمەڵگادا هەیە، بەڵام لە ماڵەوە زۆر بێ دەسەڵاتن و دەترسن لە ژنەکانیان تا ڕۆژێک ئەم سێ پیاوە لەگەڵ ژنێکی نامۆ لەناو بەرزکەرەوەیەکدا گیردەخۆن و دەبێتە سەرەتای هەڵهاتنیان لە ژنەکانیان.کە بە یارمەتی بارمتەگرێک پەنا دەبەنە دوورگەی کیش   ",
img: "https://cinemayeran.net/assets/images/film-zhernus/yaney-hawsaran.jpg"
}, 


{
url: "/post/zhernus/z-00059",
nameanime: "تەرانە ",
nameanimekurdish: "   ترانە ",
kurta: "  چیرۆکی ژیانی کچێکی خوێندکارە کە خێزانەکەی کێشەی زۆری بۆ دروست کردووە تا ئەو ڕادەیەی کە لە کۆمپانیایەکی مۆدێلی نافەرمی کار دەکات بۆ ئەوەی بتوانێت بژێوی ژیانی خۆی دابین بکات و لە ڕێگادا لەلایەن کەسانێکەوە دەگیرێت کە هەراسانی دەکەن تا ڕۆخی مردن   ",
img: "https://cinemayeran.net/assets/images/film-zhernus/terane.jpg"
}, 


{
url: "/post/zhernus/z-00060",
nameanime: "ئۆکسێنەر",
nameanimekurdish: "   اکسیدان ",
kurta: "  چیرۆکی ژن و مێردێکە بە ناوەکانی ئەسڵان و نیگار ، کە ئەسلان حەزدەکات بەبێ مۆڵەتی ژنەکەی لە دەرەوەی وڵات بژی و بە نایاسایی گەشت بۆ دەرەوەی وڵات بکات. ئەسلان بەدوای ڕێگایەکدا دەگەڕێت بۆ گەیشتن بە ئەوروپا بۆ گەڕاندنەوەی خۆشەویستەکەی و شتی سەیر دەکات بۆ وەرگرتنی ڤیزا لە وڵاتێکی ئەوروپی  ",
img: "https://cinemayeran.net/assets/images/film-zhernus/oksenar.jpg"
}, 


{
url: "/post/zhernus/z-00061",
nameanime: " نەزەر علی ",
nameanimekurdish: "  نظر علی ",
kurta: "  ئەو فلمە چیرۆکەکەی ڕاستیە و باسی ئەوە دەکات نزر علی نامەیەک بۆ خودا دەنوسێت و دەیخاتە درزی دیواری مزگەوت خواش وەڵامی نامەکەی دەداتەوە....  ",
img: "https://cinemayeran.net/assets/images/film-zhernus/nazar-ali.jpg"
}, 

{
url: "/post/zhernus/z-00062",
nameanime: " کاپتن ",
nameanimekurdish: " کاپیتان ",
kurta: " بە من دەڵێن عیسا، هەر کارێکم بووێت ئەنجامی دەدەم.  ",
img: "https://cinemayeran.net/assets/images/film-zhernus/kaptn.jpg"
}, 

{
url: "/post/zhernus/z-00063",
nameanime: "عەشقێکی سادە",
nameanimekurdish: " یك عشقانە سادە ",
kurta: " دوو هاوڕێ لە تەمەنێکی زوەوە بەڵێنێکیان داوە بەیەك بەبەیەك گەشتنی کچەکەی بەناوی (گندوم ) بە کوڕی هاوڕێکەی بەناوی(کەرامەت) ،بەڵام کچەکە خۆشەویستی خۆی دەبێت و چارەنوسیان بەجۆرێکی تری لێدێ...  ",
img: "https://cinemayeran.net/assets/images/film-zhernus/ashqeki-sada.jpg"
}, 

{
url: "/post/zhernus/z-00064",
nameanime: " شاعیری زبڵەکان  ",
nameanimekurdish: " شاعر زباله‌ها   ",
kurta: " فڕێدەری پاشماوەکان نهێنییەکانی ناو ماڵێك دەدۆزێتەوە بە کۆکردنەوەی خاشاک لەبەردەرگای ماڵەکان ئەمە دەبێتە هۆی سەرکێشییەکی سۆزداری و کۆمەڵایەتی... ",
img: "https://cinemayeran.net/assets/images/film-zhernus/shahirizblakan.jpg"
}, 


{
url: "/post/zhernus/z-00065",
nameanime: " فریشتەکان پێکەوە دێن ",
nameanimekurdish: " فرشته‌ها با هم می‌آیند  ",
kurta: "چیرۆکی کەسایەتیەکی ئایینیە بەناوی احمد لەگەڵ هاوسەرەکەی لەیلا لەکاتێكدا لەژیانێکی نەبوونیدا بەسەردەبەن لەهامن کاتتدا دەبنە خاوەنی سێ منداڵ لەیەك کاتتدا ",
img: "https://cinemayeran.net/assets/images/film-zhernus/frishtakan-pekawa-den.jpg"
}, 



{
url: "/post/zhernus/z-00066",
nameanime: " تاقیکردنەوەی کۆتایی ",
nameanimekurdish: " امتحان نهایی ",
kurta: " شەهاب حوسێنی لەم فیلمەدا ڕۆڵی مامۆستای بیرکاری دەبینێت ئەم مامۆستایە بۆ فێرکردنی وانەی تایبەتی دەرس بە کورێك دەڵێ و دەچێتە ماڵەوەیان ئەمەش دەبێتە هۆی ئاشنابوونی دایکی مناڵەکە کە ڕووداوی گەلێك دێتە پێش ",
img: "https://cinemayeran.net/assets/images/film-zhernus/taqikrdnawey-kotaye.jpg"
}, 


{
url: "/post/zhernus/z-00067",
nameanime: " لەژێر چاودێری ",
nameanimekurdish: " زیر نظر ",
kurta: " پیاوێك بە ناوی محسن لەکاتی ڕۆشتنی هاوسەرەکەی هاوڕێکەی بەناوی ئومێد بانگهێشتی ماڵەوا دەکات لەکاتێك کە هاوسەرەکەی بڕیار دەدات بگەڕێتەوە ماڵەوە موحسین تێدەگات کە قەنەفەکە کون بووەو کە ئەم باسە ڕووداوگەڵێك دێنێتە پێشەەوە ",
img: "https://cinemayeran.net/assets/images/film-zhernus/lazher-chawderi.jpg"
}, 

{
url: "/post/zhernus/z-00068",
nameanime: " کلاشینکۆف ",
nameanimekurdish: " کلاشینکف ",
kurta: " باس لە گەنجێکی سەرباز دەکات کە خوشکەکەی لەلایەن کەسێکی نەناسراو ئازار دراوە بەچەکێك کە لەگەڵی دایە پۆستی پاسەوانی بانك بەجێدەهێڵی و ... ",
img: "https://cinemayeran.net/assets/images/film-zhernus/klashinkof.jpg"
}, 

{
url: "/post/zhernus/z-00069",
nameanime: " مێرووخۆر ",
nameanimekurdish: " مورچه خوار ",
kurta: "  فیلمەکە باس لە تۆڕەکۆمەڵایەتیەکان دەکا کە وەکو تەونی جاڵجاڵۆکە قوربانیانی مەجازی وەکو مێرویەك دەخەنە داوی خۆیان و قوتیان دەدەن ",
img: "https://cinemayeran.net/assets/images/film-zhernus/meruxor.jpg"
}, 


{
url: "/post/zhernus/z-00070",
nameanime: " نهۆمی سێیەم ",
nameanimekurdish: "  طبقه سوم ",
kurta: "  کچێکی گەنج لە میوانیەکی شەوان هەڵدێت و دەچێتە ناو ماڵێکەوە کە ئافرەتێکی لێ دەژی رووداوی چاوەروان نەکراو روودەد.. ",
img: "https://cinemayeran.net/assets/images/film-zhernus/nhomi-syeam.jpg"
}, 


{
url: "/post/zhernus/z-00071",
nameanime: " مۆخی ئێسك",
nameanimekurdish: "  مغز استخوان ",
kurta: "  .منداڵەکەی پەیمان توشی شێرپەنجە بووە و تاکە ڕێگە بۆ ڕزگارکردنی بەکارهێنانی خانە بنەڕەتیەکانی ناوکی خوشکەکەیەتی بەڵام تەحەدای سەرەکی چیرۆکەکە ئەوەیە پەیمان جیابۆتەوە کە دایکی منداڵەکەیە ",
img: "https://cinemayeran.net/assets/images/film-zhernus/moxi-esk.jpg"
}, 


{
url: "/post/zhernus/z-00072",
nameanime: "  ڕێگای لاوەکی ",
nameanimekurdish: "   ادە فرعی  ",
kurta: "  مانی بەبێ ئەوەی بزانێت چ چارەنوسێك چاوەڕێی دەکات دەچێتە سەر رێگای لاوەکی.. ",
img: "https://cinemayeran.net/assets/images/film-zhernus/regay-lawaki.jpg"
}, 



{
url: "/post/zhernus/z-00073",
nameanime: "  چیرۆکی دەریا  ",
nameanimekurdish: "   حکایت دریا ",
kurta: "  ەم فیلمە چیرۆکی چەند کەسانێک دەگێڕێتەوە، کە پاش ماوەیەک دووری دووبارە لەیەکتر نزیک دەبنەوە. بەڵام ئایا ئەم نزیکییە دەتوانێت قەرەبووی دووری ڕابردوو بکاتەوە!؟ ",
img: "https://cinemayeran.net/assets/images/film-zhernus/chiroki-darya.jpg"
}, 


{
url: "/post/zhernus/z-00074",
nameanime: "  هەمووشتێك بۆ فرۆشتن  ",
nameanimekurdish: "   مه‌چیز برای فروش  ",
kurta: " گەنجێکی کرێکار کە سەرۆکی خێزانێكەهەوڵدەدات کارێك بۆ برا سەربازە بچوکەکەی بدۆزێتەوە لەهەمان کارگەدا کە خۆی کاری لێدەکات .... ",
img: "https://cinemayeran.net/assets/images/film-zhernus/hamu-shtek-bo-froshtn.jpg"
}, 


{
url: "/post/zhernus/z-00075",
nameanime: "  هەنگی کرێکار ",
nameanimekurdish: "  زنبور کارگر  ",
kurta: " ساڵانێک لەمەوبەر بیوک بەهۆی هەڵەی پزیشکێک هاوسەرەکەی لەدەستدا و خۆیشی لە شەڕێکدا کوژا . ئێستا کچەکەی بەدوای تۆڵەسەندنەوەیە لە بکوژەکە و تاکە شاهیدی ئەمە دەزگیرانی بکوژەکەیە ",
img: "https://cinemayeran.net/assets/images/film-zhernus/hangi-krekar.jpg"
}, 


{
url: "/post/zhernus/z-00076",
nameanime: " هێشتانا ",
nameanimekurdish: "  هنوز نە ",
kurta: " دایك و باوکی هەستی ئەیانەوێ بەبۆنەی لەدایك بوونی ئەو کە لەدەرەوەی ئێرامە لەڕێگەی سکایپەوە پیرۆزبایی لێبکەن.. ",
img: "https://cinemayeran.net/assets/images/film-zhernus/heshta-na.jpg"
}, 


{
url: "/post/zhernus/z-00077",
nameanime: " بوون  ",
nameanimekurdish: "  بودن  ",
kurta: "کوڕێکی گەنج کە فرسەتی زۆری نییە بۆ ژیان بەسەربردن لە نێوان مردن و ژیان ، بوون و نەبوون هەوڵی خۆی ئەدات .  ",
img: "https://cinemayeran.net/assets/images/film-zhernus/bun.jpg"
}, 



{
url: "/post/zhernus/z-00078",
nameanime: " گۆرانی دووکەسی ",
nameanimekurdish: "   آهنگ دو نفره   ",
kurta: "  ڕێڕەوی ژیانمان چەندە لە ڕێڕەوی دوکەڵی جگەرە دەچێت، هەردووکیان بە ئاڕاستەیەکدا دەڕۆن کە بە دڵمان نییە  ",
img: "https://cinemayeran.net/assets/images/film-zhernus/gorani-dwkasi.jpg"
}, 


{
url: "/post/zhernus/z-00079",
nameanime: " کاسێتی ڤیدیۆیی ",
nameanimekurdish: "   نوار ویدئو  ",
kurta: "  پیاوێک ئەیەوێت چاوپێکەوتن لەگەڵ کوڕێکدا بکات و پرسیاری تایبەتی لێبکات ، لەم پرسیارو وەڵامانەدا چەند بابەتێکی گرنگ ڕوون ئەبێتەو  ",
img: "https://cinemayeran.net/assets/images/film-zhernus/kaseti-vidyoi.jpg"
}, 



{
url: "/post/zhernus/z-00080",
nameanime: " ئێمە ڕانەهاتووین  ",
nameanimekurdish: "   آااادت نمی‌کنیم  ",
kurta: "  ئەحمەد رەزا موقەدەم (فروتن) مامۆستایەکی ناسراوی زانکۆیە کە گومانەکانی مێهتابی هاوسەری لە پەیوەندییەکەی لەگەڵ یەکێک لە خوێندکارەکانی دەبێتە هەوێنی کارەساتێکی پێشبینی نەکراو  ",
img: "https://cinemayeran.net/assets/images/film-zhernus/emaranahatwyn.jpg"
}, 


{
url: "/post/zhernus/z-00081",
nameanime: " ڕوشان ",
nameanimekurdish: "  خراش  ",
kurta: "  لەیلاو دەرسا بۆ بەڕێکردنی باوکی دەرسا ئەیانەوێت بڕۆن بۆ فڕۆکە خانە کە ڕوداوێک داهاتویان دەگۆڕێت  ",
img: "https://cinemayeran.net/assets/images/film-zhernus/rushan.jpg"
}, 


{
url: "/post/zhernus/z-00082",
nameanime: " ئیسرافیل ",
nameanimekurdish: " اسرافیل  ",
kurta: "  لەکاتی خەمباربوونی بە مردنی کوڕەکەی (ماهی)ئاشقی سەردەمی هەرزەکاری لەسەفەرەکی دوور ودرێژ دەگەڕێتەوە چیرۆکی (٢٠) ساڵ پێش ئێستا زیندوو دەبێتەوە  ",
img: "https://cinemayeran.net/assets/images/film-zhernus/israfil.jpg"
}, 



{
url: "/post/zhernus/z-00083",
nameanime: " من تەرانەی پازدە ساڵم ",
nameanimekurdish: "من، ترانه ۱۵ سال دارم  ",
kurta: "  ترانە خوێندکارێکی پازدەساڵە دایکی وەفاتی کردووە و باوکیشی لە زیندانە و لەگەڵ داپیرەی دەژی ڕۆژێکیان ئەمیر بە تەرانە دەڵێ کە عاشقی بووە وە بڕیاری هاوسەرگیری پێ دەدا بەڵام دواتر..  ",
img: "https://cinemayeran.net/assets/images/film-zhernus/mn-taraney-pazdasalm.jpg"
}, 


{
url: "/post/zhernus/z-00084",
nameanime: " پردی دار ",
nameanimekurdish: "  پل چوبی  ",
kurta: "  پردی دار ڕێڕەوێک بوو لە باکووری تاران، لەنێوان پایتەخت و شەمیران. پردی پەویوەندی تارانی کۆن و تارانی مۆدێرن. ئێستا گەڕەکی پردی دار یادگاریەکی ڕابردووە. ناوێک لە دڵی شارەکەدا جێهێڵراوە - شوێنی ڕووداوێکی ڕۆمانسی ناخۆشە  ",
img: "https://cinemayeran.net/assets/images/film-zhernus/prdidar.jpg"
}, 



{
url: "/post/zhernus/z-00085",
nameanime: " جوانترین ڕویا ",
nameanimekurdish: "  زیباترین رؤیا ",
kurta: "  دەربارەی پیاوێکە کە هاوسەرەکەی لە دەست دەدات ، لەدوای مەرگی هاوسەرەی دووبارە عاشقی کەسێکی تر دەبێت.  ",
img: "https://cinemayeran.net/assets/images/film-zhernus/chwantrinruya.jpg"
}, 

{
url: "/post/zhernus/z-00086",
nameanime: " ئەسپی سپی باڵدار ",
nameanimekurdish: "  اسب سفید بالدار ",
kurta: " لە گەڕان بەدوای خۆشەویستی منداڵیدا، تەها دەگەڕێتەوە بۆ شارۆچکەکەی خۆی کە بەهۆی جەنگەوە وێران بووە،لەوێ کچەکە بیست ساڵ لەمەوبەر داوای لێکردووە ببێتە ئەسپێکی باڵداری سپی...",
img: "https://cinemayeran.net/assets/images/film-zhernus/aspispibaldar.jpg"
}, 

{
url: "/post/zhernus/z-00087",
nameanime: " ماڵی هاوڕێ لەکوێیە؟ ",
nameanimekurdish: "  خانه دوست کجاست؟ ",
kurta: "کوڕێکی هەشت ساڵە ئەبێت دەفتەری هاوڕێکەی کە بە هەڵە هەڵیگرتووە بە خێرایی بگەڕێنێتەوە ، ئەگەر نا هاوڕێکەی لە قوتابخانە دەردەکرێت. ",
img: "https://cinemayeran.net/assets/images/film-zhernus/malihawrelakwyea.jpg"
}, 




{
url: "/post/zhernus/z-00088",
nameanime: " ڕووبەڕووبوونەوە ",
nameanimekurdish: "  مواجهه ",
kurta: " کەرەستەکان لە مرۆڤەکان زیاتر دەمێننەوە دوو چەقۆ دوای نزیکەی سەد ساڵ جارێکی تر ڕووبەڕووی یەک دەبنەوە کێ دەزانێت ڕەنگە ئەم بەریەك کەوتنە بەردەوام بێت ڕەنگە ئەم چیرۆکە لێرە کۆتایی پێبێت ",
img: "https://cinemayeran.net/assets/images/film-zhernus/rubarubwnawa.jpg"
}, 

{
url: "/post/zhernus/z-00089",
nameanime: " تامی گێلاس ",
nameanimekurdish: "  طعم گیلاس ",
kurta: " باس لە پیاوێک دەکات گۆڕی بۆ خۆی ئامادە کردووە و بە نیازە لەوێ خۆی بکوژێت ، بەدوای کەسێکدا دەگەڕێت دوای مردنی خۆڵی بەسەردا بکات بۆ ئەم مەبەستەش دەچێتە لای کەسانی جیاواز ",
img: "https://cinemayeran.net/assets/images/film-zhernus/tamigelas.jpg"
}, 



{
url: "/post/zhernus/z-00090",
nameanime: " تاوان ",
nameanimekurdish: "  گناە ",
kurta: " دەربارەی نهێنییەکانی پیاوێکە کە لە دوایین ساتەکانی ژیانیدا ئاشکرا دەبێت. ",
img: "https://cinemayeran.net/assets/images/film-zhernus/tawan.jpg"
}, 



{
url: "/post/zhernus/z-00091",
nameanime: " ودا ",
nameanimekurdish: "  ودا ",
kurta: "تەواوی ڕووداوەکان لە ماڵێکی کۆن ڕوودەدات پیاوێك بە تێپەڕبوونی یادگاری و کابووسەکانی تێدەگات هیچ شتێك بەوجۆرەنیە کە چاوەڕێی دەکرد ڕاستی ترسناکترە لەو کابووسانەی کە دەیبینێت  ",
img: "https://cinemayeran.net/assets/images/film-zhernus/wda.jpg"
}, 





{
url: "/post/zhernus/z-00092",
nameanime: " پاسەوانی شەو ",
nameanimekurdish: "  نگهبان شب ",
kurta: "  رەسول پاسەوانی کۆمەڵگەیەکی نیشتەجێبوونە کە عاشقی کچێکی کەم بیست دەبێت بەناوی نەسیبە، بەڵام بەهۆی تێکەڵبوونی خاوەن کارەکەیەوە، ژیانە سادە و عاشقانەکەیان تووشی کێشە دەبێت  ",
img: "https://cinemayeran.net/assets/images/film-zhernus/paswanishaw.jpg"
}, 



{
url: "/post/zhernus/z-00093",
nameanime: " نێرگزی ",
nameanimekurdish: "  نرگسی ",
kurta: " هەوڵدانی کەسێکی توشبوو بە داون نیشان دەدات بەناوی حوسێن کە ئارەزووی دۆزینەوەی عەشقێکە بۆ هاوسەرگیری  ",
img: "https://cinemayeran.net/assets/images/film-zhernus/nergzi.jpg"
}, 


{
url: "/post/zhernus/z-00094",
nameanime: " وادیار ",
nameanimekurdish: "  وادیار ",
kurta: " ئاژەڵێکی دڕندە هێرش دەکاتە سەر ساسانی دایکە دووگیان خەڵکی دێی روستا پێیان وایە ئەگەر ئاژەڵێکی کێوی هێرش بکاتە سەر ژنی دووگیان ئەوا هەموو دانیشتوانی ئەو گوندە تووشی ڤایرۆسی هاری دەبن و تاکە ڕێگا بۆ ڕزگارکردنی هەمووان کوشتنی ئەو ئاژەڵەیە  ",
img: "https://cinemayeran.net/assets/images/film-zhernus/wadyar.jpg"
}, 



{
url: "/post/zhernus/z-00095",
nameanime: " فریاکەوتن ",
nameanimekurdish: "  وضعیت اورژانسی ",
kurta: " کچێکی شەش ساڵە بە ناوی نازەنین هەوڵ ئەدات لە ئەو کارمەندی فریاگوزارییە نزیکبێتەوە کە بۆ چارەسەرکردنی دایکی هاتووە بۆ ماڵەوەیان دەیەوێت نهێنییەک بۆ کارمەندەکە ئاشکرا بکات کە بێزاری دەکات ئەو نهێنییە...  ",
img: "https://cinemayeran.net/assets/images/film-zhernus/fryakawtn.jpg"
}, 


{
url: "/post/zhernus/z-00096",
nameanime: "زیندانی تاکەکەسی ",
nameanimekurdish: "  سلول انفرادی ",
kurta: " چیرۆکی هاوسەرێکی گەنج دەگێڕێتەوە کە باری خۆشگوزەرانی و دارایی و پەروەردەیەکی باشیان هەیە، بەڵام بەهۆی نەبوونی تێگەیشتنی ڕۆشنبیرییەوە بە تێپەڕبوونی کات تووشی جیابوونەوەیەکی سۆزداری دەبن. ئەوان لە ژێر یەک سەقفدا دەژین، بەڵام وادیارە مەیلەکان لە یەکەوە دوورن، تاوەکو  ",
img: "https://cinemayeran.net/assets/images/film-zhernus/zindanitakakasi.jpg"
}, 



{
url: "/post/zhernus/z-00097",
nameanime: "پەریا ",
nameanimekurdish: "  پریا ",
kurta: " پریا لە منداڵیدا لەلایەن هاوسەری دایکیەوە دەستدرێژی سێکسی کراوەتە سەر و ئەم نهێنییەی لە هەمووان شاردووەتەوە. دوای چەندین ساڵ و بەهۆی نەخۆشیی دایکیەوە، ناچار دەبێت ڕووبەڕووی باوکی بەخێوکەرەکەی ببێتەوە کە ماوەیەکی زۆر لەمەوبەر لێیان دابڕاوە و...  ",
img: "https://cinemayeran.net/assets/images/film-zhernus/perya.jpg"
}, 



{
url: "/post/zhernus/z-00098",
nameanime: "پەریا ",
nameanimekurdish: "  پریا ",
kurta: " پریا لە منداڵیدا لەلایەن هاوسەری دایکیەوە دەستدرێژی سێکسی کراوەتە سەر و ئەم نهێنییەی لە هەمووان شاردووەتەوە. دوای چەندین ساڵ و بەهۆی نەخۆشیی دایکیەوە، ناچار دەبێت ڕووبەڕووی باوکی بەخێوکەرەکەی ببێتەوە کە ماوەیەکی زۆر لەمەوبەر لێیان دابڕاوە و...  ",
img: "https://cinemayeran.net/assets/images/film-zhernus/perya.jpg"
}, 



{
url: "/post/zhernus/z-00099",
nameanime: "لیبیدو ",
nameanimekurdish: "  لیبیدو ",
kurta: " کوڕێکی هەرزەکار لە گوندێک نهێنی کچێک دەبینێت بێ دەنگی لێدەکات بەڵام مەرجێکی بۆ داناوە..  ",
img: "https://cinemayeran.net/assets/images/film-zhernus/libido.jpg"
}, 



{
url: "/post/zhernus/z-000100",
nameanime: "شاری جوان ",
nameanimekurdish: "  شهر زیبا ",
kurta: "  ",
img: "https://cinemayeran.net/assets/images/film-zhernus/shari-chwan.jpg"
}, 


{
url: "/post/zhernus/z-000101",
nameanime: "کۆتا خوانی ئێوارە ",
nameanimekurdish: "  شام آخر ",
kurta: "   ",
img: "https://cinemayeran.net/assets/images/film-zhernus/kotaxwani-ewara.jpg"
}, 


{
url: "/post/zhernus/z-000102",
nameanime: "تۆ هێشتا لێرەی ",
nameanimekurdish: " تو هنوز اینجایی ",
kurta: "  هەموومان وەك یەکین لە تاریکیدا ",
img: "https://cinemayeran.net/assets/images/film-zhernus/toheshta-leray.jpg"
}, 


{
url: "/post/zhernus/z-000103",
nameanime: "سیازنگی ",
nameanimekurdish: " سیازنگی ",
kurta: "  ڕەزا کوڕێکی گەنجە کە حەوت ساڵ لەمەوبەر لە ئێوارەی کۆتایی ساڵدا چوو بۆ خوازبێنی زاری و هەموو ساڵێک لە ئێوارەی جەژندا تووشی بەدبەختی و",
img: "https://cinemayeran.net/assets/images/film-zhernus/syazangi.jpg"
}, 


{
url: "/post/zhernus/z-000104",
nameanime: "خانم",
nameanimekurdish: " خانوم ",
kurta: "  چیرۆکی سێ ئافرەتە لە سێ بەشی تاران لە باکوورەوە بۆ باشوور. لەم فیلمەدا پیاوانی چیرۆکەکە خراپ نین. خانم بەشێکە لە قوربانیدانی ژنانی ئێرانی ",
img: "https://cinemayeran.net/assets/images/film-zhernus/xanm.jpg"
}, 


{
url: "/post/zhernus/z-000105",
nameanime: "ئارەقی سارد  ",
nameanimekurdish: " عرق سرد ",
kurta: "  ئەفروز ئەردەستانی (باران کوثری) کاپتنی هەڵبژاردەی فۆتسالی ئافرەتانی ئێرانە بە گۆڵەکەی ئەفروز هەڵبژاردەی وڵات بۆ یەکەمجار خۆی بۆ یاری کۆتایی ئاسیا ئامادە کرد و بەرەو مالیزیا بەڕێدەکەوێت و لە فڕۆکەخانەی ئەفروز بۆی دەردەکەوێت کە مێردەکەی ڕێگری لە چوونە دەرەوەی وڵات کردووە ",
img: "https://cinemayeran.net/assets/images/film-zhernus/araqi-sard.jpg"
}, 



{
url: "/post/zhernus/z-000106",
nameanime: "ناڵەی جودایی  ",
nameanimekurdish: " نغمەی جدایی ",
kurta: "  یئەوە دڵەکانن کە نیشتیمانی ڕاستی بنیات دەنێنن نەك ئەو سنورانەی کە لە نەخشەدا کێشراون ، جیهانی عیشق جیهانێکە بەبێ بەبێ نەخشە بەبێ سنوری جورگافی ",
img: "https://cinemayeran.net/assets/images/film-zhernus/nalayjudaye.jpg"
}, 



{
url: "/post/zhernus/z-000107",
nameanime: "گومان",
nameanimekurdish: " تردید",
kurta: "یرۆکی ژیانی کوڕێکە بەناوی سیاوەش کە دوای مردنی باوکی , مامی دەستی بەسەر سامانی باوکیدا گرتووە لەلایەکی دیکەوە سیاوەش عاشقی ئامۆزاکەی یە. دوای ماوەیەک سیاوەش هەواڵی هاوسەرگیری دایکی لەگەڵ مامی دەزانێت و ... ",
img: "https://cinemayeran.net/assets/images/film-zhernus/guman.jpg"
}, 



{
url: "/post/zhernus/z-000108",
nameanime: "من و زیبا ",
nameanimekurdish: " من و زیبا",
kurta: "  فیلمەکە چیرۆکی پیاوێک دەگێڕێتەوە بەناوی موسا کە هاوسەرەکەی راحلە پێش ئەوەی بگاتە ماڵەوە بەهۆی ئازاری منداڵبوونەوەوە دەمرێت. بە درێژایی ژیانی، موسا خۆی لۆمەی مردنی ژنەکەی دەکات...... ",
img: "https://cinemayeran.net/assets/images/film-zhernus/mnwziba.jpg"
}, 


{
url: "/post/zhernus/z-000109",
nameanime: "وس کچان هاوار ناکەن",
nameanimekurdish: " هیس! دخترها فریاد نمی‌زنند  ",
kurta: "  شیرینی هەشت ساڵان، لەلایەن پیاوێکی نزیکیانەوە دەستدرێژی دەکرێتە سەر ئەوەی کە برینەکە قۆڵتر دەکات و بارودۆخەکە خراپتر دەکات، ئەوەیە کە کچەکە هیچ کەس نادۆزێتەوە کە دەردی خۆی لاباس بکات ",
img: "https://cinemayeran.net/assets/images/film-zhernus/ws.kchanhawarnakan.jpg"
}, 



{
url: "/post/zhernus/z-000110",
nameanime: " نزیکی ٨ ی بەیانی",
nameanimekurdish: "حدود ٨ صبح ",
kurta: "  چیرۆکەکە لە ڕاستییەوە وەرگیراوە، پیاوێک مۆبایلی هاوسەرەکەی دەبینێت کە لە لایەن پیاوێکی دیکەوە پەیامی عاشقانەی بۆ هاتووە و ئەمەش وا لە هاوسرەکەی دەکات ",
img: "https://cinemayeran.net/assets/images/film-zhernus/nziki8bayani.jpg"
}, 























{
url: "/post/drama-zhernus/dz-0001",
nameanime: "ساڵانێك دوور لە ماڵەوە ",
nameanimekurdish: " سالهای دور از خانە ",
kurta: " چیرۆکێکی جیاواز و گاڵتەجاڕانەیە کە باس لە ڕۆژانی دوای خزمەتی سەربازی خەنجەری و ژیانی زەهرا دەکات، کە ١٥١٢ ڕۆژ دوای ڕووداوەکانی زنجیرەی ت. ",
img: "https://cinemayeran.net/assets/images/dramay-zhernws/salanek-dur-lamalawa.jpg"
}, 


{
url: "/post/drama-zhernus/dz-0002",
nameanime: " باوکە گواردیۆلا ",
nameanimekurdish: " پدر گواردیولا ",
kurta: " باوکە گواردیولا چیرۆکی خێزانێک دەگێڕێتەوە کە راستی یک ڕوداوە سەبەبی گۆڕینی پەیوەندیان بوە و چارەنوسی ڕێگای جیاواز یان دەخاتە پێش ",
img: "https://cinemayeran.net/assets/images/dramay-zhernws/pedar-guwardyola.jpg"
}, 


{
url: "/post/drama-zhernus/dz-0003",
nameanime: " ئابڕووی ونبوو ",
nameanimekurdish: " حیثیت گمشدە ",
kurta: " باسی ژن و مێردێک دەکات بەناوەکانی (هاجەر) و (ئەمیر) کە مناڵیان نابێت ، بەڵام دواتر (ئەمیر ) ڕووداوی بەئازارو قوڵی بەسەردادێ و لەناکاو بۆی دەردەکەوێ پێی ئابڕوی کەوتۆتەناو... ",
img: "https://cinemayeran.net/assets/images/dramay-zhernws/pedar-guwardyola.jpg"
}, 


{
url: "/post/drama-zhernus/dz-0004",
nameanime: " هاوبەشی تاوان  ",
nameanimekurdish: "شریك جرم ",
kurta: " میترا، پارێزەرێکی ناسراوە، ڕۆژێک لە نووسینگەی یاسایی خۆیدا ڕووبەڕووی تاوانێکی چاوەڕواننەکراو دەبێتەوە. ئەم ڕووداوە ناچاری دەکات دەست بە لێکۆڵینەوە بکات. وەک پارێزەرێک دەبێت بەدوای ڕاستی و بەڵگەدا بگەڕێت کە بتوانێت لە دادگادا بەرگری لە بریکارەکە بکات. بەڵام بەم شێوەیە ڕووبەڕووی کێشەی نوێ دەبێتەوە کە تەنانەت ڕەنگە پیشە و ناوبانگی بخاتە مەترسییەوە. ",
img: "https://cinemayeran.net/assets/images/dramay-zhernws/pedar-guwardyola.jpg"
}, 



{
url: "/post/drama-zhernus/dz-0005",
nameanime: " گۆڕەپانی سوور ",
nameanimekurdish: "میدان سرخ ",
kurta: " شەیدا بۆ چارەسەری کچەکەی نیازی سەفەری دەرەوەی وڵاتی هەبوو بەڵام بەهۆی درۆ و کارەنهێنیەکانی هاوسەرەکەیەوە ڕوبەڕووی ڕوداوێکی ترسناک دەبێتەوە ، کەژیانی ئەو بۆ هەمیشە دەگۆڕێت...... ",
img: "https://cinemayeran.net/assets/images/dramay-zhernws/gorapani-sur.jpg"
}, 


{
url: "/post/drama-zhernus/dz-0006",
nameanime: " نهێنی مانەوە ",
nameanimekurdish: "رازبقا ",
kurta: "رەحیم گەنجێکە لەلایەن خەڵکەوە هەراسان دەکرێت، خێزانەکەی و ئیرەجی هاوڕێی و دانیشتوانی گەڕەکەکە بەدەستیەوە دەناڵێنن. دوای دزینی بارێکی ڤاکسینی کۆرۆنا لە قاچاخچییەکان",
img: "https://cinemayeran.net/assets/images/dramay-zhernws/nheni-manawa.jpg"
}, 


{
url: "/post/drama-zhernus/dz-0007",
nameanime: " تاوانی فریشتە ",
nameanimekurdish: "گناه فرشتە ",
kurta: "ئاگر شتێکی خراپ نیە، ئەوەی کە زیادەیە دەیسوتێنێ، شتێک بمێنێتەوە دەمێنێتەوە و ناسوتێت…!",
img: "https://cinemayeran.net/assets/images/dramay-zhernws/tawani-frishta.jpg"
}, 

{
url: "/post/drama-zhernus/dz-0008",
nameanime: " ڕوخان ",
nameanimekurdish: "سقوط ",
kurta: "ئایسان و ژاکان پێکەوە پەیوەندییەکی سۆزدارییان هەیە، و جارێکی دیکە یەکتر دەدۆزنەوە. بڕیارە دووبارە درەختی خۆشەویستی ئاو بدەن...سەفەرێک دەکەن کەکۆتاییەکەی تاریکیە",
img: "https://cinemayeran.net/assets/images/dramay-zhernws/ruxan.jpg"
}, 


{
url: "/post/drama-zhernus/dz-0009",
nameanime: " ئانتن ",
nameanimekurdish: "آنتن ",
kurta: "گەوهەر دوای ساڵێک لە سەعی کردن بە سەرکەوتویی لە کۆلێجی پزیشکی وەرگیرا ، بەم حاڵەوە ڕۆشتە زانکۆ و کۆمەڵێک ڕووداوی سەیری لە زانکۆو ماڵەوە بەسەر دێت ،زنجیرەی کۆمیدی انتن چیرۆکی بنەماڵەیەک باس ئەکات کە پەیوەندی سەیری بە مردنی برا گەورەکەیان و ....",
img: "https://cinemayeran.net/assets/images/dramay-zhernws/antn.jpg"
}, 





{
url: "/post/drama-zhernus/dz-00010",
nameanime: "خوێنی سارد ",
nameanimekurdish: " خون سرد ",
kurta: " ئایسان و ژاکان پێکەوە پەیوەندییەکی سۆزدارییان هەیە، و جارێکی دیکە یەکتر دەدۆزنەوە. بڕیارە دووبارە درەختی خۆشەویستی ئاو بدەن...سەفەرێک دەکەن کەکۆتاییەکەی تاریکیە",
img: "https://cinemayeran.net/assets/images/dramay-zhernws/hawbashi-tawan.jpg"
}, 



{
url: "/post/drama-zhernus/dz-00011",
nameanime: "پێستی شێر ",
nameanimekurdish: " پوست شیر ",
kurta: "نەعیم کە ماوەی ۱٥ ساڵ لە زینداندا خۆڕاگر بوو بە خۆشەویستی بینینی کچەکەی دوای ئازادبوونی، لە قەیرانێکی گەورەدایە بۆ ئەوەی چاوی پێ بکەوێت ئەم زنجیرەیه که چیرۆکی پۆلیسێکی هۆشیاری بەشانۆی شەهاب حوسەینی دەگێڕێته وه له جۆری درامای ملتهب دروست کراوە   ",
img: "https://cinemayeran.net/assets/images/dramay-zhernws/pesti-sher.jpg"
}, 



{
url: "/post/drama-zhernus/dz-00012",
nameanime: "بێ لانە ",
nameanimekurdish: " بی همگان ",
kurta: "  دوای ئازادبوونی لە زیندان، ئەمیر عەلی (محەممەد سادقی ڕۆڵی تێدا دەگێڕێت) هەوڵدەدات قەرەبووی ساڵانی لەدەستچوو بکاتەوە و ژیانێکی نوێ بۆ خۆی بنیات بنێت، بەڵام چارەنووس هەلومەرجی دیکەی بۆ دروست دەکات ",
img: "https://cinemayeran.net/assets/images/dramay-zhernws/belana.jpg"
}, 


{
url: "/post/drama-zhernus/dz-00013",
nameanime: "شەهرزاد ",
nameanimekurdish: " شهرزاد ",
kurta: "  لە ئێران، تاران، ساڵی ١٩٥٣، شەهرزاد و فەرهاد یەکتریان خۆشدەوێت و بەنیازن هاوسەرگیری بکەن، بەڵام کەسێک کە نازناوی ئاغای گەورەی هەیە چارەنووسێکی دیکەی بۆیان داناوە. ",
img: "https://cinemayeran.net/assets/images/dramay-zhernws/shahrzad.jpg"
}, 


{
url: "/post/drama-zhernus/dz-00014",
nameanime: "ماری تاران ",
nameanimekurdish: " ماری تاران ",
kurta: " دەربارەی دەرهێنەرێکی فیلمە کە تێوەگلاوە لە دۆسیەیەکی کوشتن ",
img: "https://cinemayeran.net/assets/images/dramay-zhernws/mari-taran.jpg"
}, 


{
url: "/post/drama-zhernus/dz-00015",
nameanime: "کچی گەیلان ",
nameanimekurdish: " گیلدخت ",
kurta: " باس لە کچەکەی تاغیخان دەکات کە گوڵنار و خۆشەویستەکەی ئیسماعیل میرشکارە کە بەڵێنی دڵیان بە یەکتر دەدەن ...... ",
img: "https://cinemayeran.net/assets/images/dramay-zhernws/kchi-gaylan.jpg"
}, 


{
url: "/post/drama-zhernus/dz-00016",
nameanime: "جەنگەڵی پڕململانێ ",
nameanimekurdish: " جنگل آسفالت ",
kurta: " لە دارستاندا یان دەبێت شارەزای شەڕکردن بیت یان ڕاکردن، یان ڕاوچیت یان نێچیر، دارستان شوێنی ترس نییە…  ",
img: "https://cinemayeran.net/assets/images/dramay-zhernws/darstani-prmlmlane.jpg"
}, 


{
url: "/post/drama-zhernus/dz-00017",
nameanime: "چارەسەرکردن ",
nameanimekurdish: " درمانگر ",
kurta: " (باران) ماوەیەکە بە هۆکاری خەمۆکی بە نهێنی سەردانی پزیشکی دەرونی دەکات ، بەڵام ئەمجارە ڕوداوێکی سەیری بۆ دێتە پێش داوا لە پزیشکەکەی دەکات بۆ هاوکاری بێتە سەردانی ...  ",
img: "https://cinemayeran.net/assets/images/dramay-zhernws/charasarkrdn.jpg"
}, 


{
url: "/post/drama-zhernus/dz-00018",
nameanime: "خاتونی سەردار ",
nameanimekurdish: " بانوی سردار ",
kurta: " چیرۆکی ژیانی ژنێکی ئازا و بوێرە، بە ناوی مەریەم، ناسراو بە مەریەم خاتوون، یان خاتوونی سەردار کە بەرامبەر دوژمن و ناحەزان جەنگاوە و دادپەروەری بەرپا کردوە...  ",
img: "https://cinemayeran.net/assets/images/dramay-zhernws/xatunisardar.jpg"
}, 


{
url: "/post/drama-zhernus/dz-00019",
nameanime: "گەنجینەی مظفر ",
nameanimekurdish: "گنج مظفر ",
kurta: " گەنجینەی موزەفەر بەسەرهاتی میراتێکی بە جی ماو لە خان قلی‌خان، و گەرەکی قهلەک و و تارانە . تەلارێکی دوو بەشە لە لایەکی موزەفەری زەرگەنده ناسراوە به #موزەفەر خان و خێزانەکەی و خزمەتکار و دانیشتوانی و لەلایەکی مەنسوری زەرگەنده کوڕە مامی موزەفەر خان لەگەڵ هاوسەرەکەی شەیدا و مناڵی هاوسەرەکەی تێدا دەژین  ",
img: "https://cinemayeran.net/assets/images/dramay-zhernws/ganchiney-mzafar.jpg"
}, 


































{
url: "/post/doblaj/d-0001",
nameanime: "ئەکواریۆم ",
nameanimekurdish: " اکواریوم ",
kurta: " چیرۆکی پاڵەوانێکی گەنجی پێشبڕکێی ئۆتۆمبێلە بە ناوی جاڤید کە گەشت دەکات بۆ تورکیا بۆ ئەوەی بچێتە ئەمریکا و لەوێ ڕووبەڕووی چەندین کێشە دەبێتەوە. لە تورکیا بە هەڵە چاوی بە شیرین دەکەوێت و وردە وردە تێدەگات کە لە تەڵەی ساحیب کە تاوانبارێکی مەترسیدارە...  ",
img: "https://cinemayeran.net/assets/images/filmi-doblazh/akwaryom.jpg"
}, 


{
url: "/post/doblaj/d-0002",
nameanime: "دادگایی ",
nameanimekurdish: " محاکمە",
kurta: " ەم فیلمە چیرۆکی پارێزەرێکە، کە دادوەری دەکات و بە دۆسیەی کەسێکی ئەفغانی ژیانی دووچاری گۆڕانکاری زۆر دەبێتەوە..  ",
img: "https://cinemayeran.net/assets/images/filmi-doblazh/dadgayy.jpg"
}, 



{
url: "/post/doblaj/d-0003",
nameanime: "دەنگی دەریا ",
nameanimekurdish: " رویای خیس ",
kurta: " چیرۆکی ئارش و نازەنین، ئارش منداڵێکی تەمەن 16 ساڵە، دایک و باوکی لێک جیابوونەتەوە و کوڕەکە دوای ئەوەی ماوەیەک لەگەڵ دایکیدا دەژیت بەهۆی کێشە و گرفتەوە دەچێتە لای باوکی لەوێ چاوی بە کچێکی هەرزەکار دەکەوێت و ژیانی دەگۆڕێت..  ",
img: "https://cinemayeran.net/assets/images/filmi-doblazh/dangi-darya.jpg"
}, 




{
url: "/post/doblaj/d-0004",
nameanime: " جاسوس ",
nameanimekurdish: " کلاغ پر ",
kurta: "ڕەزا دوای 2 ساڵ لە پەیوەندی لەگەڵ ڕۆیا، کارێک لەڕۆژنامەدا پەیدا دەکات و بانگی ڕۆیا دەکات تا دیداری زەماوەند بکات، بەڵام ڕوئیا بەساردی مامەڵەی لەگەڵ دەکات، چونکە بە پێشنیاری دایکی بە گەنجێکی دەوڵەمەند بەناوی مەسعود کە لە دنیای فاشیۆن کار دەکات بڕوات بۆ باکور.  ",
img: "https://cinemayeran.net/assets/images/filmi-doblazh/jasws.jpg"
}, 



{
url: "/post/doblaj/d-0005",
nameanime: " کڵاوێک بۆ باران  ",
nameanimekurdish: " کلاهی برای باران ",
kurta: " باران ئێبی بەکرێ دەگرێت بۆ ئەوەی سەرنجی پیروز ڕابکێشێت و هانی بدات بۆ ئەوەی هاوسەرگیری لەگەڵ بکات.. ",
img: "https://cinemayeran.net/assets/images/filmi-doblazh/klawek-bo-baran.jpg"
}, 


{
url: "/post/doblaj/d-0006",
nameanime: " قەرەبوو ",
nameanimekurdish: " تلافی",
kurta: " ژنو مێردێک بڕیاری تەڵاق دەدەن، بەڵام ڕۆژێک پێش جیابونەوە پیاوەکە بۆی دەردەکەوێت کە ژنەکەی شێرپەنجەی هەیە و دوو مانگی تر زیندوە، بۆیە بڕیار دەدات ڕێگری لە جیابونەوەکانیان بکات و دوای ئەوەی ژنەکەی دەمرێت ماڵ و موڵکی بۆ دەمێنێتەوە.. ",
img: "https://cinemayeran.net/assets/images/filmi-doblazh/qarabu.jpg"
}, 




{
url: "/post/doblaj/d-0007",
nameanime: " دوو ژن ",
nameanimekurdish: " دو زن ",
kurta: " باس لە ژیانی دوو قوتابی زانکۆ دەکات لە بەشی ئەندازیاری لە سەرەتای سەرهەڵدانی شۆڕشی ئیسلامی ئێرانی ",
img: "https://cinemayeran.net/assets/images/filmi-doblazh/dwzhn.jpg"
}, 



{
url: "/post/doblaj/d-0008",
nameanime: " ژیانێکی شیرین ",
nameanimekurdish: " زندگی شیرین  ",
kurta: " ئەمیر مێهرجووی ئەکتەرە کە لە ڕێگای هاوسەرگیری لەگەڵ کچە دڵخوازەکەی بەناوی هێستی ڕووبەڕووی کێشەی خێزانی دەبێتەوە. فەریبورز برای دووانەکەی ئەمیر دوای چەندین ساڵ چووەتە ناو ئێرانەوە، بەڵام هاتنی کێشەکانی ئەمیر چەند هێندە دەکات... ",
img: "https://cinemayeran.net/assets/images/filmi-doblazh/zhyaneke-shirin.jpg"
}, 




{
url: "/post/doblaj/d-0009",
nameanime: " نیوەی بۆ من نیوەی بۆ تۆ  ",
nameanimekurdish: " نصف مال من نصف مال تو ",
kurta: " چیڕۆکی ئەم فیلمە باسی پیاوێک دەکات کە بە نهێنی ژنی دووەمی هێناوە و هیچ کام لە ژنەکان نازانن کە ئەم پیاوە خاوەنی ژنێکی ترە .مناڵەکانیان لە هەمان قوتاخانە دەخوێنن ئەوان ئاشکرای دەکەن ",
img: "https://cinemayeran.net/assets/images/filmi-doblazh/niwaybomn-niwayboto.jpg"
}, 




{
url: "/post/doblaj/d-00010",
nameanime: " گەشتێکی پڕ لە ڕووداو ",
nameanimekurdish: " سفر پر ماجرا ",
kurta: "چیرۆکی ژن و مێردێکە بە ناوەکانی محسین و ئاهی کە بۆ مانگی هەنگوینی سەفەرێك ڕێك دەخەن بەڵام لەگەشتەکەیاندا ڕووداوگەلێکیان بەسەردێت ",
img: "https://cinemayeran.net/assets/images/filmi-doblazh/gashtekiprlarwdaw.jpg"
}, 


{
url: "/post/doblaj/d-00011",
nameanime: " کوڕی ئادەم کچی حەوا ",
nameanimekurdish: " پسر آدم، دختر حوا",
kurta: " فەرهود (حەمید کۆمیلی) و مینا (مەهناز ئەفشار) ، دوو پارێزەری گەنج کێبڕکێ دەکەن بۆ ئەو نوسینگە پارێزەریەی کە بە پێیان دراوە. کاتێك دۆسیەی جیابوونەوەی ژنو مێردێك بەناوەکانی ناصر و محبوبە کە دەیانەوێت لەیەك جیاببنەوە . فەرهود و مینادەبن بە پارێزەریان کە دەبێتە هۆی دروستبوونی ڕکابەری لە نێوانیان ",
img: "https://cinemayeran.net/assets/images/filmi-doblazh/kuriadam-kchihawa.jpg"
}, 



{
url: "/post/doblaj/d-00012",
nameanime: "   دوو بووك ",
nameanimekurdish: " دو عروس   ",
kurta: " فەرهود (حەمید کۆمیلی) و مینا (مەهناز ئەفشار) ، دوو پارێزەری گەنج کێبڕکێ دەکەن بۆ ئەو نوسینگە پارێزەریەی کە بە پێیان دراوە. کاتێك دۆسیەی جیابوونەوەی ژنو مێردێك بەناوەکانی ناصر و محبوبە کە دەیانەوێت لەیەك جیاببنەوە . فەرهود و مینادەبن بە پارێزەریان کە دەبێتە هۆی دروستبوونی ڕکابەری لە نێوانیان ",
img: "https://cinemayeran.net/assets/images/filmi-doblazh/dubuk.jpg"
}, 






























{
url: "/post/drama-doblaj/dd-0001",
nameanime: "   لە دڵی مندا ",
nameanimekurdish: " در قلب من  ",
kurta: " ئەم زنجیرەیە باس لە ژیانی دوو خێزانی هەژار و دەوڵەمەند دەکات کە کچی خێزانی دەوڵەمەندەکە بەناوی، سارا، حەز لە ڕەزای ماڵە هەژارەکە دەکات و و خاڵی ساراش حەز لە لەیلای ماڵە هەژار دەکا، و لەگەڵ نیشاندانی هەندێک کێشەی کۆمەڵایەتی ",
img: "https://cinemayeran.net/assets/images/dramay-doblazh/ladli-mnda.jpg"
}, 



{
url: "/post/drama-doblaj/dd-0002",
nameanime: "   ماڵ بە کۆڵ ",
nameanimekurdish: " خانە بە دوش ",
kurta: "بەسەرهاتەکانی میرزا ماشەڵڵا ماشەڵڵا کەسێکی دەستکورتە کە گرفتی دراڤی تەنگی پێ ھەڵچنیوە. ھەر بۆیە بە مەبەستی چارەسەریی کێشەکانی لەگەڵ «بەیات» ناوێک کە بە ھەڵکەوت لەگەڵی دا ئاشنا بووە ھاوکاری دەکات و پارەیەکی بۆ گەشت کردن بەرەو مالێزی دەداتێ، کەچی کابرا بە ساختەچی دەر ئەچی. ",
img: "https://cinemayeran.net/assets/images/dramay-doblazh/malbakol.jpg"
}, 




{
url: "/post/drama-doblaj/dd-0003",
nameanime: "    کرێچی  ",
nameanimekurdish: " دردسر والدین ",
kurta: "  عەلی پورحاتم کارمەندێکە چوار منداڵی هەیە و هاوسەرەکەی لەدەست داوە دوای ئەوەی یەکێک لە کوڕەکانی لەگەڵ هاوپۆلەکەی (سوهێل) دەمەقاڵێی کردووە چاوی بە ئێران یەزدانپەنا دایکی هاوپۆلی کوڕەکەی دەکەوێت کە ئەویش مێردی لەدەستداوە و سێ منداڵی هەیە و هەردووکیان بڕیار دەدەن پێکەوە ژیان دەست پێبکەن بەڵام منداڵەکانیان بەو یەکگرتنەوەیە ڕازی نابن ",
img: "https://cinemayeran.net/assets/images/dramay-doblazh/krechi.jpg"
}, 









];
let clasl_list_serach = document.getElementsByClassName('clasl_list_serach')[0];
window.addEventListener('load', ()=>{
animesearch.forEach(Element => {
const { url, nameanime, kurta, img, nameanimekurdish } = Element ;
let card = document.createElement('a');
card.classList.add("pad-search"),
card.innerHTML = `
<a href="${url}" class="list-movie-search image">
<img src="${img}" style="height: 100px;">
<div class="testshow"
<span1 class="textdown"><h9>${nameanime} <span1 style="display: none;">${nameanimekurdish} ${kurta}</span1></h9>
<span1 style="
color: #6d6d6de8;
">
${kurta}
</span1></span1>
<div class="testshow2"
<span1 style="display: none;"><h1>${nameanimekurdish}</h1></span1></div></div>
</a>
`;
clasl_list_serach.appendChild(card);
});
});
search.addEventListener('keyup', ()=>{
    let filter = search.value.toUpperCase();
    let a = clasl_list_serach.getElementsByTagName('a');
    for (let i = 0; i < a.length; i++) {
        let b = a[i].getElementsByClassName('testshow')[0];
        let c = b.getElementsByTagName('h9')[0];

        let TextValue = c.textContent || c.innerText;
        if (TextValue.toUpperCase().indexOf(filter) > -1) {
            a[i].style.display = '';
            clasl_list_serach.style.visibility = "visible";
            clasl_list_serach.style.display = "block";
            clasl_list_serach.style.opacity = 1;
        } else {
            a[i].style.display = 'none';
        }
        if (search.value == 0) {
            clasl_list_serach.style.visibility = "hidden";
            clasl_list_serach.style.display = "none";
            clasl_list_serach.style.opacity = 0;
        }
    }
})