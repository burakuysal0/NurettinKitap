const telegramBot = require('node-telegram-bot-api');

const token = "5569698557:AAEb9XRRhdGu9GjhF6UfNwQ0Qa-uj_f0twQ";
const bot =new telegramBot(token, {polling:true});



bot.on('message', msg =>{
    const chatId = msg.chat.id;
    const message = msg.text.trim().toLowerCase();

    switch(message){
        case '/alinti':
             var anumber = Math.floor(Math.random() * 52) + 1;
            if (anumber == 1){
                bot.sendMessage(chatId, "Kurtların gözü doymuyor. En güzel lokmaları hep onlar yutuyor, kuzgunlara da artıkları bırakıyorlar.");
            }
            if (anumber == 2){
                bot.sendMessage(chatId, "Kapaklara dokunmayı, yeni basılmış kitapların matbaa kokulu sayfalarını çevirmeyi çok seviyordu.");
            }
            if (anumber == 3){
                bot.sendMessage(chatId, "Anlar bizim göz kapaklarımızda kalandır.");
            }
            if (anumber == 4){
                bot.sendMessage(chatId, "Çok tuhaftı! Ağlayamadım; ama ruhum paramparça olmuştu...");
            }
            if (anumber == 5){
                bot.sendMessage(chatId, "Allah yapmakta olduklarınızdan gafil (habersiz) değildir. (Bakara Süresi)");
            }
            if (anumber == 6){
                bot.sendMessage(chatId, "Yürekten gelen tek bir sözcükle de insan birçok söz söylemiş kadar dostluk belirtebilir.");
            }
            if (anumber == 7){
                bot.sendMessage(chatId, "Umut, göğsümden çoktan uçup gitti. Vücudumun ciddi uyarılarından anlıyorum ki, akıl sağlığımı uzun süre muhafaza etmem mümkün olmayacak...");
            }
            if (anumber == 8){
                bot.sendMessage(chatId, "Edebiyat siyaseti üstüdür, demek isterdi.");
            }
            if (anumber == 9){
                bot.sendMessage(chatId, "Kimi zaman hislerimize göre yaşayamayız...");
            }
            if (anumber == 10){
                bot.sendMessage(chatId, "Anlamak başka şey,kabul etmek başka");
            }
            if (anumber == 11){
                bot.sendMessage(chatId, "Günümün birkaç saatini kitaplara verirdim. Okurken başka bir dünyaya girer, bütün dertlerimi unuturdum.");
            }
            if (anumber == 12){
                bot.sendMessage(chatId, "İnsan yüreği umutsuzluğa ancak belli ölçüde katlanabilir. Sünger suyu emdiğinde, üzeriden deniz geçse bile bir damla su ekleyemez.");
            }
            if (anumber == 13){
                bot.sendMessage(chatId, "İntihar, ihanetin öbür adıdır...");
            }
            if (anumber == 14){
                bot.sendMessage(chatId, "Dayan yüreğim dayan!");
            }
            if (anumber == 15){
                bot.sendMessage(chatId, " Gerçi sevgi insanları eşitler, ama endişelenmeyin, ruhumun derinliklerinde bile olsa, sizi kendimle eşitlemiş değilim. 'Endişelenmeyin', diye yazdım size... Hiç endişelenmiş olabilir misiniz ki?");
            }
            if (anumber == 16){
                bot.sendMessage(chatId, "Hayatı anlaman gerekmiyor.Yaşaman yeterli.");
            }
            if (anumber == 17){
                bot.sendMessage(chatId, "Hz Muhammed (s.a.v) şöyle buyurdu : Allah’a yemin eden bir kimse, yeminine sivrisineğin kanadı kadar bir yalan bulaştırırsa o yaptığı kıyamete kadar kalbinde bir leke olarak kalır gider.");
            }
            if (anumber == 18){
                bot.sendMessage(chatId, "Kimseden hiçbir şey beklemiyorum. Böylece hayal kırıklığına da uğramamış oluyorum.");
            }
            if (anumber == 19){
                bot.sendMessage(chatId, "Kalbin neden durmuş rüzgarı kesilmiş değirmen gibi...");
            }
            if (anumber == 20){
                bot.sendMessage(chatId, "Yabancı bir dünyanın ortasında çırılçıplak hissediyordum kendimi.");
            }
            if (anumber == 21){
                bot.sendMessage(chatId, "Değişimin ve değişime gereksinimin olmadığı yerde akıl da yoktur.");
            }
            if (anumber == 22){
                bot.sendMessage(chatId, "Bana yoldaşlık edecek birisi olsaydı, her şey farklı olurdu fakat fena hâlde yalnızdım.");
            }
            if (anumber == 23){
                bot.sendMessage(chatId, "Değişimin ve değişime gereksinimin olmadığı yerde akıl da yoktur.");
            }
            if (anumber == 24){
                bot.sendMessage(chatId, "Seninle kavgam kalmadı! Kendine iyi bak...");
            }
            if (anumber == 25){
                bot.sendMessage(chatId, "Ahlakın çöküşü bir milleti yavaşça ve tamamen tahrip etmek için yeterlidir.");
            }
            if (anumber == 26){
                bot.sendMessage(chatId, "İnsan mücadele azmini koruduğu müddetçe, ümit daima var demektir.");
            }
            if (anumber == 27){
                bot.sendMessage(chatId, "dışlanmış biri olarak hayatına başlayabilirdi. Korkunç bir tablo, ama bu duvarın dibinde de sonsuza kadar oturamazdı ya.");
            }
            if (anumber == 28){
                bot.sendMessage(chatId, "Bugünlerde kitap okuyan birini görmek gerçekten göz yaşartıcı...");
            }
            if (anumber == 29){
                bot.sendMessage(chatId, "Pencereyi açın da içeri temiz hava girsin, taze fikirler girsin, yeni bir hayat tarzı girsin.");
            }
            if (anumber == 30){
                bot.sendMessage(chatId, "Nereye gidecektim? Ne evim, ne param, ne de beni düşünen insanlar vardı yeryüzünde.");
            }
            if (anumber == 31){
                bot.sendMessage(chatId, "Hiçbir şey beklemiyorum. Böylece hayal kırıklığına uğramıyorum.");
            }
            if (anumber == 32){
                bot.sendMessage(chatId, "Gökyüzünün benim için ne anlama geldiğini anlayamazdı.");
            }
            if (anumber == 33){
                bot.sendMessage(chatId, "Bunu sanki önemsiyorsun gibi yapmayı... İkimiz de biliyoruz ki ben sadece bir görevden ibaretim.");
            }
            if (anumber == 34){
                bot.sendMessage(chatId, "O halde... Sınırları zorlayalım ve bizim olanı alalım!");
            }
            if (anumber == 35){
                bot.sendMessage(chatId, "Bu lanet korku için teşekkürler baba!  Senin gibi bir pisliğe sahip olduğum için çok şanslıyım");
            }
            if (anumber == 36){
                bot.sendMessage(chatId, "Dostun merhaba;merkezi patlatacağız, hazır olun!");
            }
            if (anumber == 37){
                bot.sendMessage(chatId, "Umutsuz durum yoktur, umutsuz insanlar vardır. Ben hiçbir zaman umudumu yitirmedim.");
            }
            if (anumber == 38){
                bot.sendMessage(chatId, "İnsanlıkta din konusundaki uzmanlık ve derin bilgi, her türlü yanlış inançlardan arınarak gerçek bilim ve tekniğin ışıklarıyla tertemiz ve mükemmel oluncaya kadar, din oyunu aktörlerine her yerde rastlanacaktır.");
            }
            if (anumber == 39){
                bot.sendMessage(chatId, "Vatanını en çok seven , görevini en iyi yapandır…");
            }
            if (anumber == 40){
                bot.sendMessage(chatId, "Felaket başa gelmeden önce, onun önlenme sebepleri ve savunmasını düşünmek gerekir. Geldikten sonra üzülmenin faydası yoktur.");
            }
            if (anumber == 41){
                bot.sendMessage(chatId, "1919 yılı Mayısının 19'uncu günü Samsun'a çıktım.");
            }
            if (anumber == 42){
                bot.sendMessage(chatId, "O halde, ya istiklâl ya ölüm!");
            }
            if (anumber == 43){
                bot.sendMessage(chatId, "Karşımıza çıkacak zorluklar canımızı yaksa da, bizi ağlatsa da buradayız! Yaşayacağız!");
            }
            if (anumber == 44){
                bot.sendMessage(chatId, "Kim aynı işi yirmi dört yıl yapıp her gün aynı tevekkülü gösterebilir? Cerrahlar her ameliyatta sakin midir? Hâkimler? Otobüs şoförleri? Öğretmenler? O zaman bu anlayışsızlık niye?");
            }
            if (anumber == 45){
                bot.sendMessage(chatId, "İşte bize gücü yetmeyenler, sesimizi kesmek için zindana da attılar!");
            }
            if (anumber == 46){
                bot.sendMessage(chatId, "En sıkı en çok korkan dövüşür.");
            }
            if (anumber == 47){
                bot.sendMessage(chatId, "Unutulmuştu ve unutulmuş olarak kaldı.");
            }
            if (anumber == 48){
                bot.sendMessage(chatId, "Mutsuz değildi, daha doğrusu artık mutsuz bile değildi..");
            }
            if (anumber == 49){
                bot.sendMessage(chatId, "Amacımız, yaşlılığımızın geri kalan, akşamı hafif serin günlerini orada sükûnet içinde çiçekler ve kitaplar gibi hayattaki küçük, huzurlu şeylerle geçirmekti.");
            }
            if (anumber == 50){
                bot.sendMessage(chatId, "Hayatımdaki tüm acıları vücudumun her hücresinde hissediyorum.");
            }
            if (anumber == 51){
                bot.sendMessage(chatId, "İnsanın gözüne sokarcasına mutlu olmak ve duygularını arsızca sağa sola saçmak utanmazlık.");
            }
            if (anumber == 52){
                bot.sendMessage(chatId, "Konuşamayan bir hayvan duygularını sadece gözleriyle anlatabilir.. ");
            }
            /*if (anumber == 53){
                bot.sendMessage(chatId, "Dostun merhaba;merkezi patlatacağız, hazır olun!");
            }
            if (anumber == 54){
                bot.sendMessage(chatId, "Dostun merhaba;merkezi patlatacağız, hazır olun!");
            }
            if (anumber == 55){
                bot.sendMessage(chatId, "Dostun merhaba;merkezi patlatacağız, hazır olun!");
            }
            if (anumber == 56){
                bot.sendMessage(chatId, "Dostun merhaba;merkezi patlatacağız, hazır olun!");
            }
            if (anumber == 57){
                bot.sendMessage(chatId, "Dostun merhaba;merkezi patlatacağız, hazır olun!");
            }
            if (anumber == 58){
                bot.sendMessage(chatId, "Dostun merhaba;merkezi patlatacağız, hazır olun!");
            }
            if (anumber == 59){
                bot.sendMessage(chatId, "Dostun merhaba;merkezi patlatacağız, hazır olun!");
            }
            if (anumber == 60){
                bot.sendMessage(chatId, "Dostun merhaba;merkezi patlatacağız, hazır olun!");
            }
            if (anumber == 61){
                bot.sendMessage(chatId, "Dostun merhaba;merkezi patlatacağız, hazır olun!");
            }
            if (anumber == 62){
                bot.sendMessage(chatId, "Dostun merhaba;merkezi patlatacağız, hazır olun!");
            }
            if (anumber == 63){
                bot.sendMessage(chatId, "Dostun merhaba;merkezi patlatacağız, hazır olun!");
            }*/
        break;
        
        default:
            bot.sendMessage(chatId, "Anlamadım...");
        break;
    }
    console.log(JSON.stringify(msg))
});