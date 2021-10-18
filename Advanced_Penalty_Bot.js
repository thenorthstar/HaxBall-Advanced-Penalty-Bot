var Map = `{"name":"Penalty","width":420,"height":200,"spawnDistance":300,"canBeStored":false,"bg":{"type":"grass","width":500,"height":250,"kickOffRadius":10,"cornerRadius":0,"color":"008000"},"vertexes":[{"x":420,"y":600,"trait":"ballArea"},{"x":420,"y":-600,"trait":"ballArea"},{"x":285,"y":500,"trait":"gkArea"},{"x":285,"y":-500,"trait":"gkArea"},{"x":315,"y":500,"trait":"gkArea"},{"x":315,"y":-500,"trait":"gkArea"},{"x":-475,"y":-200,"trait":"penArea"},{"x":-10,"y":-190,"trait":"penArea"},{"x":-10,"y":190,"trait":"penArea"},{"x":-475,"y":200,"trait":"penArea"},{"x":300,"y":-250,"trait":"line"},{"x":300,"y":250,"trait":"line"},{"x":0,"y":9,"trait":"line"},{"x":0,"y":-9,"trait":"line"},{"x":0,"y":9,"trait":"line"},{"x":0,"y":-9,"trait":"line"},{"x":175,"y":-175,"trait":"line"},{"x":300,"y":-175,"trait":"line"},{"x":175,"y":175,"trait":"line"},{"x":300,"y":175,"trait":"line"},{"x":-120,"y":-250,"trait":"line"},{"x":-120,"y":250,"trait":"line"},{"x":-120,"y":-190,"trait":"line"},{"x":-120,"y":190,"trait":"line"},{"x":300,"y":-100,"trait":"line"},{"x":350,"y":-98,"trait":"line"},{"x":350,"y":98,"trait":"line"},{"x":300,"y":100,"trait":"line"},{"x":0,"y":-15,"trait":"powerboost"},{"x":0,"y":15,"trait":"powerboost"},{"x":400,"y":-135,"trait":"line"},{"x":400,"y":135,"trait":"line"},{"x":-120,"y":180,"trait":"timebar_moving_ball_stop"},{"x":-120,"y":120,"trait":"timebar_moving_ball_stop"},{"x":-120,"y":-100,"cMask":["none"],"cGroup":["none"]},{"x":-120,"y":100,"cMask":["none"],"cGroup":["none"]},{"x":-10,"y":-100,"cMask":["none"],"cGroup":["none"]},{"x":-10,"y":100,"cMask":["none"],"cGroup":["none"]}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"gkArea"},{"v0":4,"v1":5,"trait":"gkArea"},{"v0":6,"v1":7,"trait":"penArea"},{"v0":7,"v1":8,"curve":50,"trait":"penArea"},{"v0":8,"v1":9,"trait":"penArea"},{"v0":9,"v1":6,"trait":"penArea"},{"v0":10,"v1":11,"trait":"line"},{"v0":12,"v1":13,"curve":-180,"trait":"line"},{"v0":14,"v1":15,"curve":180,"trait":"line"},{"v0":16,"v1":17,"trait":"line"},{"v0":16,"v1":18,"trait":"line"},{"v0":18,"v1":19,"trait":"line"},{"v0":20,"v1":21,"trait":"line"},{"v0":22,"v1":23,"curve":-140,"trait":"line"},{"v0":24,"v1":25,"curve":10,"trait":"goalnet"},{"v0":25,"v1":26,"curve":10,"trait":"goalnet"},{"v0":26,"v1":27,"curve":10,"trait":"goalnet"},{"v0":28,"v1":29,"curve":180,"trait":"powerboost"},{"v0":25,"v1":30,"trait":"line"},{"v0":26,"v1":31,"trait":"line"},{"v0":32,"v1":33,"trait":"timebar_moving_ball_stop"},{"v0":34,"v1":35,"trait":"dangerZoneMinX","x":-120},{"v0":36,"v1":37,"trait":"dangerZoneMaxX","x":-10},{"v0":34,"v1":36,"trait":"dangerZoneMinY","y":-100},{"v0":35,"v1":37,"trait":"dangerZoneMaxY","y":100}],"goals":[{"p0":[310,100],"p1":[310,-100],"team":"blue"},{"p0":[300,100],"p1":[-400,100],"team":"red"},{"p0":[300,-100],"p1":[-400,-100],"team":"red"},{"p0":[-10,250],"p1":[-10,-250],"team":"red"}],"discs":[{"pos":[300,100],"trait":"goalPost"},{"pos":[300,-100],"trait":"goalPost"},{"pos":[400,-135],"trait":"stanchion"},{"pos":[400,135],"trait":"stanchion"},{"pos":[-400,-1385],"trait":"arrow"},{"pos":[-340,-1385],"trait":"arrow"},{"pos":[-355,-1400],"trait":"arrow"},{"pos":[-355,-1370],"trait":"arrow"},{"pos":[-120,150],"trait":"timebar_ball_constant"},{"pos":[120,150],"trait":"timebar_ball_constant_2"},{"pos":[120,150],"trait":"timebar_ball_moving","speed":[-0.4,0]},{"pos":[1135,130],"trait":"number_indicator_0"},{"pos":[1160,130],"trait":"number_indicator_0"},{"pos":[1160,170],"trait":"number_indicator_0"},{"pos":[1135,170],"trait":"number_indicator_0"},{"pos":[1135,130],"trait":"number_indicator_1"},{"pos":[1135,170],"trait":"number_indicator_1"},{"pos":[1135,130],"trait":"number_indicator_2"},{"pos":[1160,130],"trait":"number_indicator_2"},{"pos":[1160,150],"trait":"number_indicator_2"},{"pos":[1135,150],"trait":"number_indicator_2"},{"pos":[1135,170],"trait":"number_indicator_2"},{"pos":[1160,170],"trait":"number_indicator_2"},{"pos":[1135,130],"trait":"number_indicator_3"},{"pos":[1160,130],"trait":"number_indicator_3"},{"pos":[1160,170],"trait":"number_indicator_3"},{"pos":[1135,170],"trait":"number_indicator_3"},{"pos":[1135,150],"trait":"number_indicator_3"},{"pos":[1160,150],"trait":"number_indicator_3"},{"pos":[1135,130],"trait":"number_indicator_4"},{"pos":[1160,130],"trait":"number_indicator_4"},{"pos":[1135,150],"trait":"number_indicator_4"},{"pos":[1160,170],"trait":"number_indicator_4"},{"pos":[1160,150],"trait":"number_indicator_4"},{"pos":[1160,130],"trait":"number_indicator_5"},{"pos":[1135,130],"trait":"number_indicator_5"},{"pos":[1135,150],"trait":"number_indicator_5"},{"pos":[1160,150],"trait":"number_indicator_5"},{"pos":[1160,170],"trait":"number_indicator_5"},{"pos":[1135,170],"trait":"number_indicator_5"},{"pos":[1160,130],"trait":"number_indicator_6"},{"pos":[1135,130],"trait":"number_indicator_6"},{"pos":[1135,170],"trait":"number_indicator_6"},{"pos":[1160,170],"trait":"number_indicator_6"},{"pos":[1160,150],"trait":"number_indicator_6"},{"pos":[1135,150],"trait":"number_indicator_6"},{"pos":[1135,130],"trait":"number_indicator_7"},{"pos":[1160,130],"trait":"number_indicator_7"},{"pos":[1160,170],"trait":"number_indicator_7"},{"pos":[1135,130],"trait":"number_indicator_8"},{"pos":[1160,130],"trait":"number_indicator_8"},{"pos":[1160,170],"trait":"number_indicator_8"},{"pos":[1135,170],"trait":"number_indicator_8"},{"pos":[1135,150],"trait":"number_indicator_8"},{"pos":[1160,150],"trait":"number_indicator_8"},{"pos":[1135,130],"trait":"number_indicator_9"},{"pos":[1160,130],"trait":"number_indicator_9"},{"pos":[1160,170],"trait":"number_indicator_9"},{"pos":[1135,170],"trait":"number_indicator_9"},{"pos":[1135,150],"trait":"number_indicator_9"},{"pos":[1160,150],"trait":"number_indicator_9"}],"planes":[{"normal":[0,1],"dist":-200,"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-200,"canvas_rect":[-710,-1400,1160,600],"a":[-710,-200],"b":[1160,-200]}}},{"normal":[0,-1],"dist":-200,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-200,"canvas_rect":[-710,-1400,1160,600],"a":[-710,200],"b":[1160,200]}}},{"normal":[0,1],"dist":-250,"bCoef":0.1,"_data":{"extremes":{"normal":[0,1],"dist":-250,"canvas_rect":[-710,-1400,1160,600],"a":[-710,-250],"b":[1160,-250]}}},{"normal":[0,-1],"dist":-250,"bCoef":0.1,"_data":{"extremes":{"normal":[0,-1],"dist":-250,"canvas_rect":[-710,-1400,1160,600],"a":[-710,250],"b":[1160,250]}}},{"normal":[1,0],"dist":-400,"bCoef":0.1,"_data":{"extremes":{"normal":[1,0],"dist":-400,"canvas_rect":[-710,-1400,1160,600],"a":[-400,-1400],"b":[-400,600]}}},{"normal":[-1,0],"dist":-400,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-400,"canvas_rect":[-710,-1400,1160,600],"a":[400,-1400],"b":[400,600]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"gkArea":{"vis":false,"bCoef":0,"cMask":["blue"]},"penArea":{"vis":false,"bCoef":0,"cMask":["red"]},"line":{"vis":true,"color":"C7E6BD","cMask":[]},"goalnet":{"vis":true,"bCoef":0.1,"color":"C7E6BD","cMask":["ball","red","blue"]},"powerboost":{"vis":false,"bCoef":-2.4,"cMask":["ball"],"color":"C7E6BD"},"goalPost":{"radius":5,"invMass":0,"bCoef":1.3,"color":"FFFFFF"},"stanchion":{"radius":3,"invMass":0,"bCoef":1,"color":"FFFFFF"},"arrow":{"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"],"radius":0},"timebar_ball_constant":{"bCoef":0,"radius":0,"invMass":0,"damping":0,"cMask":["c1"],"cGroup":["c1"]},"timebar_ball_constant_2":{"bCoef":0,"radius":0,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"]},"timebar_ball_moving":{"bCoef":0,"radius":0,"invMass":5e-324,"damping":1,"cMask":["c1"],"cGroup":["c1"]},"timebar_moving_ball_stop":{"vis":false,"bCoef":0,"cMask":["c1"],"cGroup":["c1"],"bias":-280},"number_indicator_0":{"radius":0,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"]},"number_indicator_1":{"radius":0,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"]},"number_indicator_2":{"radius":0,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"]},"number_indicator_3":{"radius":0,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"]},"number_indicator_4":{"radius":0,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"]},"number_indicator_5":{"radius":0,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"]},"number_indicator_6":{"radius":0,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"]},"number_indicator_7":{"radius":0,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"]},"number_indicator_8":{"radius":0,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"]},"number_indicator_9":{"radius":0,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"]},"dangerZoneMinX":{"vis":false,"cMask":["none"],"cGroup":["none"]},"dangerZoneMaxX":{"vis":false,"cMask":["none"],"cGroup":["none"]},"dangerZoneMinY":{"vis":false,"cMask":["none"],"cGroup":["none"]},"dangerZoneMaxY":{"vis":false,"cMask":["none"],"cGroup":["none"]}},"joints":[{"d0":5,"d1":6,"color":"FF0000"},{"d0":6,"d1":7,"color":"FF0000"},{"d0":6,"d1":8,"color":"FF0000"},{"d0":9,"d1":10,"color":"718C5A"},{"d0":9,"d1":11,"color":"C7E6BD","length":[0,240]},{"d0":12,"d1":13,"color":"FF0000"},{"d0":13,"d1":14,"color":"FF0000"},{"d0":14,"d1":15,"color":"FF0000"},{"d0":12,"d1":15,"color":"FF0000"},{"d0":16,"d1":17,"color":"FF4000"},{"d0":18,"d1":19,"color":"FF8000"},{"d0":19,"d1":20,"color":"FF8000"},{"d0":20,"d1":21,"color":"FF8000"},{"d0":21,"d1":22,"color":"FF8000"},{"d0":22,"d1":23,"color":"FF8000"},{"d0":24,"d1":25,"color":"FFC000"},{"d0":25,"d1":26,"color":"FFC000"},{"d0":26,"d1":27,"color":"FFC000"},{"d0":28,"d1":29,"color":"FFC000"},{"d0":30,"d1":32,"color":"FFFF00"},{"d0":31,"d1":33,"color":"FFFF00"},{"d0":32,"d1":34,"color":"FFFF00"},{"d0":35,"d1":36,"color":"C0FF00"},{"d0":36,"d1":37,"color":"C0FF00"},{"d0":37,"d1":38,"color":"C0FF00"},{"d0":38,"d1":39,"color":"C0FF00"},{"d0":39,"d1":40,"color":"C0FF00"},{"d0":41,"d1":42,"color":"80FF00"},{"d0":42,"d1":43,"color":"80FF00"},{"d0":43,"d1":44,"color":"80FF00"},{"d0":44,"d1":45,"color":"80FF00"},{"d0":45,"d1":46,"color":"80FF00"},{"d0":47,"d1":48,"color":"40FF00"},{"d0":48,"d1":49,"color":"40FF00"},{"d0":50,"d1":51,"color":"00FF00"},{"d0":51,"d1":52,"color":"00FF00"},{"d0":52,"d1":53,"color":"00FF00"},{"d0":50,"d1":53,"color":"00FF00"},{"d0":54,"d1":55,"color":"00FF00"},{"d0":56,"d1":57,"color":"00FF40"},{"d0":57,"d1":58,"color":"00FF40"},{"d0":58,"d1":59,"color":"00FF40"},{"d0":56,"d1":60,"color":"00FF40"},{"d0":60,"d1":61,"color":"00FF40"}],"redSpawnPoints":[],"blueSpawnPoints":[],"cameraFollow":"player","kickOffReset":"full","cameraWidth":1000,"cameraHeight":1000,"maxViewWidth":2000,"ballPhysics":{"radius":10},"playerPhysics":{"radius":15,"damping":0.96,"acceleration":0.1,"invMass":0.5,"bCoef":0.5}}`

var JMap = JSON.parse(Map); //This is for reaching out map objects.

let doc = document.getElementsByTagName('iframe')[0].contentDocument;

var roomName = "Advanced Penalty Bot";
var playerName = "";
var noPlayer = true;
var public = true;
var maxPlayers = 8; //Varies between 2 and 30. Visit the following link to learn how to make a room for 0 or 1 person: https://github.com/thenorthstar/MineSweeperBot-HaxBall/issues/1
var token = ""; //haxball/rs/api/getheadlesstoken
var code = "gb"; //2 or 3 characters code of country.
var lat = 51.487397; //Varies between -90 and 90.
var lon = -0.0304748; //Varies between -180 and 180.

geo = { "code": code, "lat": lat, "lon": lon }
var room = HBInit({ roomName: roomName, playerName: playerName, noPlayer: noPlayer, public: public, maxPlayers: maxPlayers, geo, token: token });

var adminLengthLimit = 1;

var badwords = { //Every user will be responsible for the words in their own language.
    tr: [/[a4@][./]m[./][gkq]+/, /[a4@]hm[a4@][gğk]+/, /[a4@]mc[ıi1][gğk]+/, /[a4@]m[ı1]n+/, /[a4@]m[kq]+/, /[a4@]ngu[t₺]+/, /[a4@]n[a4@][ns$5]+/, /[a4@]nn[e€][s$5][ıi1]+/, /[a4@][bp][t₺][a4@][l1]+/, /[a4@]q+/, /[a4@][t₺][a4@]pu[t₺]+/, /[bß][a4@][bß][a4@]n+/, /[bß][o0]k+/, /d[a4@][l1][l1][a4@]m[a4@]+/, /d[a4@]ng[a4@][l1][a4@][gğkq]+/, /[e€][bß][e€][ns$5]+/, /f[a4@]h[ıi1][sş$5][e€]+/, /g[e€]r[ıi1]z[e€]k[a4@]+/, /g[a4@]v[a4@][t₺]+/, /[cg][oö0][t₺][uü][mn]+/, /[cg][oö0][t₺]v[e€]r[e€]n+/, /h[a4@][s$5][s$5][ıi1]k[t₺][ıi1]r+/, /[ıi1][bp]n[e€]+/, /k[a4@]f[ıi1]r+/, /k[a4@]h[bpß][e€]+/, /k[a4@]n[c¢][ıi1]k/, /k[e€]r[ıi1]z+/, /k[e€]v[a4@][sş$5][e€]+/, /[l1][a4@]vu[gğk]+/, /m[./][gkq]+/, /m[o0]r[o0]n+/, /n[o0]n[o0][sş$5]+/, /[o0][./][cç¢]+/, /[o0][cç¢]+/, /[o0][rvw][o0][sş$5][bpß][ıiou]+/, /p[e€]z[e€]v[e€]n[gkq]+/, /p[ıi1][cçj¢]+/, /pu[sş$5][t₺]+/, /s.g+/, /[s$5][a4@][l1][a4@][gğk]+/, /[sşz$5][ıi1!]k[eıikmt₺1]+/, /[sşz$5]+2+[ikmşy]+/, /[sş$5][e€]r[e€]f[sş$5][ıi1]z+/, /[t₺][a4@][sş$5][a4@]k+/, /[t₺][a4@][sş$5][sş$5][a4@]k+/, /v[a4@][l1][ıi1]d[e€][ns]+/, /[y7][a4@]r[a4@][gğkmq]+/, /[y7][a4@]rr[a4@][gğkmq]+/, /[y7][a4@][uv][sş$5][a4@][gğk]+/, /[y7][o0][sş$5]m[a4@]+/],
    en: [/[a4@][s$5][s$5]h[o0][l1][e€]+/, /[bß][a4@]rm[iy7]+/, /[bß][a4@][s$5][t₺][a4@]rd+/, /[bß][ıi1][t₺][cç¢]h+/, /[c¢]un[t₺]+/, /f[uü][cç¢]k+/, /[l1]m[a4@][o0]+/, /[l1]mf[a4@][o0]+/, /pu[s5$][s5$][y7]+/, /r[e€][t₺][a4@]rd+/, /[s$5][t₺]fu+/, /wh[o0]r[e€]+/, /w[t₺]f+/]
};

var ballKick = false;
var ballTouch = false;
//var betaTestAnnouncement;
//var betaTestAnnouncementInterval = 120000;
var championVoteKickTime = 10000;
var championVoteKickTimeout;
var clearAllAvatarsTimeout = 5000;

var dangerZoneMinX = JMap.segments.find(s => s.trait == "dangerZoneMinX").x;
var dangerZoneMaxX = JMap.segments.find(s => s.trait == "dangerZoneMaxX").x;
var dangerZoneMinY = JMap.segments.find(s => s.trait == "dangerZoneMinY").y;
var dangerZoneMaxY = JMap.segments.find(s => s.trait == "dangerZoneMaxY").y;
var dangerZoneFinalKickEliminationTimeout = 1;

var discordLink = "https://discord.gg/"; //Insert your discord link here.
var eliminationReasons = { nothing: 0, kickOff: 1, miss: 2, stop: 3, timeout: 4 };
var enoughPlayers = 4;
var enoughPlayersToStartMatch = 4;
var enoughTime = 300000;
var gameDelayingLimit = 600;
var gameDelayingTimeout;
var gameRestartTimeout = 2000;
var gameStatus = 0;
var gameTick = 0;
var gameTickLimit = 600;
var gameTickTimeout;
var isRoomSet = false;

var kickTypes = { blacklist: true, bye: false, characterLength: false, characterValidity: false, duplicate: false, penalty: false, profane: true, spam: true, trash: false, voted: true };

var kickSession = false;
var languages = ["tr", "en"];
var lastPlayerTouched = "";
var lastChampion = null;

var locale = languages[1];
var locales = {
    tr: {
        ChampionInfoMessage: "🏆 Şampiyon oldunuz. Tebrikler!",
        KickOffDelayingEliminationMessage: "😒 Atışı geciktirdiğiniz için elendiniz.",
        MissEliminationMessage: "😂 Atışı kaçırdığınız için elendiniz.",
        StoppingEliminationMessage: "😒 Atış bölgesinde yavaşladığınız için elendiniz.",
        AdminWarningMessage: "ℹ️ Admin olmak için discord adresimizden başvuruda bulunmanız gerekmektedir: " + discordLink,
        BestInfoMessage: "ℹ️ En skorer oyuncu: ",
        DiscordInfoMessage: "ℹ️ Discord sunucumuz: " + discordLink,
        RankInfoMessage: "ℹ️ İstatistikleriniz: ",
        TrashGKKickMessage: "⚠️ Kötü kaleci olduğunuz için odadan 5 dakika süreyle uzaklaştırıldınız: ",
        VoteWarningMessage: "⚠️ Lütfen bir ID seçiniz, süreniz 10 saniyedir. Kullanılabilir ID'ler:\nKullanmamayı tercih ediyorum: [0]\n",
        PlayerPenalizedKickMessage: "⚠️ Seçim sonucunda 5 dakika süre ile cezalandırıldınız. Seçimi yapan kişi: ",
        PlayerStillPenalizedKickMessage: "⚠️ Cezalı olduğunuz için odaya giremezsiniz. Lütfen cezanızın bitmesini bekleyiniz.",
        ProfaneMessageBanMessage: "⛔️ Odamızda küfür ve hakaret yasaktır.",
        NotCommandWarningMessage: "⚠️ Geçersiz komut! Komutları görmek için !help yazınız.",
        InvalidCharactersKickMessage: "⚠️ İsminizde bir ya da daha fazla geçersiz karakter bulunmaktadır. Lütfen düzeltip tekrar deneyiniz.",
        TooShortNameKickMessage: "⚠️ Lütfen en az 3 karakterli bir isim alınız.",
        ProfaneNameBanMessage: "⛔️ Küfür ve hakaret içeren isimlerle odamıza girmeniz yasaktır.",
        DuplicatedAuthKickMessage: "🔒 Odaya birden fazla hesapla giriş yasaktır: ",
        DuplicatedConnKickMessage: "🔒 Odaya birden fazla hesapla giriş yasaktır: ",
        DuplicatedNameKickMessage: "🔒 Odada aynı isimde biri zaten var!",
        GameEndPlayerNotUsedRightWarningMessage: "⚠️ Şampiyon kickletme hakkını kullanmamayı tercih etti.",
        MapChangeDenyMessage: "🚫 Odamızda haritayı değiştirmek yasaktır.",
        TimeLimitEliminationMessage: "⏱ Süre doldu!",
        TrashRedTeamWarningMessage: "😂 Kötü takım 😂",
        PasswordRemovedSuccessMessage: "✔️ Parola başarıyla kaldırıldı!",
        PasswordSetSuccessMessage: "✔️ Parola başarıyla oluşturuldu: ",
        PasswordNotRemovedDenyMessage: "⛔️ Parola kaldırma işlemi için yetkiniz bulunmamaktadır!",
        PasswordNotSetDenyMessage: "⛔️ Parola kurma işlemi için yetkiniz bulunmamaktadır!",
        NameInfoMessage: "İsim: ",
        JoinTimeInfoMessage: "Katılma Zamanı: ",
        JoinHistoryInfoMessage: "ℹ️ Odaya katılım bilgileriniz aşağıdaki gibidir:\n",
        WelcomeMessage: "🖐 Hoş geldiniz! ",
        ByeKickMessage: "👋 Güle güle! ",
        GoalMessage: "⚽️ Gol! ",
        ActiveTurnMessage: "👀 Sırası gelen oyuncu: ",
        TeamNotChangedDenyMessage: "⛔️ Takım değiştirme işlemi için yetkiniz bulunmamaktadır!",
        LanguageChangedSuccessfullySuccessMessage: "✔️ Dil tercihiniz başarıyla Türkçe olarak değiştirildi.",
        CommandsInfoMessage: "ℹ️ Komutlar: !admin, !allblue, !allred, !allspec, !bb, !best, !blacklist, !clearban [isim] [auth] [conn], !cpw, !dc, !discord, !en, !help, !joinhistory, !mute, !mute [ID] [Dakika], !muteall, !mutelist, !pw, !rank, !tr, !unmuteall, !vote, !voteban [ID]",
        AdminLengthDenyMessage: "⛔️ Odada en fazla " + adminLengthLimit + " tane aktif admin bulunabilir.",
        PlayerProtectedWarningMessage: "🔰 Seçtiğiniz oyuncu korumalı olduğu için kicklenemedi fakat skoru azaltıldı.",
        DontHaveRightToPenalizeDenyMessage: "⛔️ Oyuncu kickletme işlemi için şampiyon olmanız gerekmektedir.",
        SpamWarningMessage: "⚠️ Yavaş mod aktif. Spam yapmayınız!",
        DoubleBlankCharactersInNameKickMessage: "⚠️ İsminiz arka arkaya birden fazla boşluk karakteri içeremez!",
        StartEndBlankCharacterKickMessage: "⚠️ İsminizin sağında veya solunda boşluk karakteri olamaz!",
        JoinNameLinkBanMessage: "❌ İsminiz bir bağlantı adresi olamaz.",
        LinkWarningMessage: "❌ Link göndermek yasaktır.",
        AvailablePlayersInfoMessage: "ℹ️ Kullanılabilir oyuncu listesi:\n",
        OwnVoteDenyMessage: "⛔️ Kendinizi oylayamazsınız!",
        AdminVoteDenyMessage: "⛔️ Admini oylayamazsınız!",
        InvalidIDToVoteDenyMessage: "⛔️ Geçersiz ID! Kullanılabilir oyuncu listesini görmek için !vote yazınız.",
        UnavailableIDDenyMessage: "⛔️ Bir oyuncuya birden fazla oy veremezsiniz!",
        EnoughMinutesRequiredDenyMessage: "⛔️ Oy kullanabilmek için odada en az " + enoughTime / 60000 + " dakika süre geçirmiş olmanız gerekmektedir!",
        FourPlayersRequiredDenyMessage: "⛔️ Oy kullanabilmeniz için odada en az " + enoughPlayers + " oyuncu bulunmalıdır.",
        BadInputWarningMessage: "⚠️ Lütfen bir numara giriniz!",
        IDVotedSuccessMessage: "✔️ Oyunuzu kullandınız. Oyladığınız oyuncu: ",
        MutedWarningMessage: "⚠️ Susturulduğunuz için yazdıklarınızı sadece adminler görebilir.",
        SelfMuteDenyMessage: "⛔️ Kendinizi susturamazsınız!",
        InvalidIDToMuteDenyMessage: "⛔️ Geçersiz ID! Kullanılabilir oyuncu listesini görmek için !mute yazınız.",
        AdminMuteDenyMessage: "⛔️ Admini susturamazsınız!",
        AlreadyMutedDenyMessage: "⛔️ Bu oyuncu zaten susturulmuş!",
        OutOfRangeWarningMessage: "⚠️ Girdiğiniz değer aralık dışındaydı. Lütfen " + muteDurationLowerLimit + " - " + muteDurationUpperLimit + " arası bir değer giriniz!",
        PlayerMutedInfoMessage: "✔️ Bir oyuncu susturuldu! Susturan oyuncu: ",
        MutedPlayerInfoMessage: " , susturulan oyuncu: ",
        DurationInfoMessage: " , susturma süresi: ",
        MinutesInfoMessage: " dakika",
        PlayerAutomaticallyUnmutedInfoMessage: " isimli oyuncunun susturma cezası sona ermiştir.",
        MuteAvailableListNoAuthorizationDenyMessage: "⛔️ Susturulabilir oyuncu listesini görebilmek için gerekli yetkiye sahip değilsiniz!",
        MutedPlayersInfoMessage: "ℹ️ Susturulan oyuncular:\n",
        PlayerNotMutedDenyMessage: "⛔️ Oyuncu susturma işlemi için gerekli yetkiye sahip değilsiniz!",
        PlayerNotUnmutedDenyMessage: "⛔️ Oyuncu susturma kaldırma işlemi için gerekli yetkiye sahip değilsiniz!",
        ChatMutedWarningMessage: "⚠️ Sohbet kapatıldı! Yazılanları sadece adminler görebilir.",
        ChatUnmutedWarningMessage: "⚠️ Sohbet açıldı! Artık herkes konuşabilir.",
        VoteBanMessage: "⚠️ Oylama ile banlandınız!",
        BlackListBanMessage: "⛔️ Kara listede olduğunuz için bu odaya giremezsiniz!\n",
        DateMessage: "Tarih: ",
        ReasonMessage: "Gerekçe: ",
        WhoMessage: "Banlayan kişi: ",
        BlackListRemoveSuccessMessage: "✔️ İlgili oyuncu(lar) kara listeden başarıyla çıkarıldı.",
        BlackListRemoveNoAuthorizationDenyMessage: "⛔️ Kara listeden oyuncu çıkarma işlemi için gerekli yetkiye sahip değilsiniz!",
        BlackListInfoMessage: "ℹ️ Kara listedeki oyuncular:\n",
        BlackListNoAuthorizationDenyMessage: "⛔️ Kara listeyi görmek için gerekli yetkiye sahip değilsiniz!",
        AuthInfoMessage: "Auth: ",
        ConnInfoMessage: "Conn: ",
        BlackListRemoveNoAccountsFoundWarningMessage: "⚠️ Auth, conn ya da name özelliklerinden biri ya da birden fazlası doğru değildir. Lütfen tekrar deneyiniz!",
        NoAvailablePlayersFoundWarningMessage: "⚠️ Uygun oyuncu bulunamadı!",
        ProfaneMessageWarningMessage: ". uyarı! Küfür yasaktır!",
        BetaTestAnnouncementMessage: "⚠️ Botumuz test aşamasındadır. Botumuz ile ilgili öneri ve şikâyetlerinizi " + discordLink + " adresinden sunucumuza gelip bildirebilirsiniz."
    },
    en: {
        ChampionInfoMessage: "🏆 You are the champion. Congratulations!",
        KickOffDelayingEliminationMessage: "😒 You were eliminated because of delaying your throw.",
        MissEliminationMessage: "😂 You have missed and were eliminated.",
        StoppingEliminationMessage: "😒 You were eliminated because of slowing down.",
        AdminWarningMessage: "ℹ️ Only the approved discord members can take administrator rights in this room: " + discordLink,
        BestInfoMessage: "ℹ️ The top scorer is: ",
        DiscordInfoMessage: "ℹ️ Our discord address: " + discordLink,
        RankInfoMessage: "ℹ️ Your statistics: ",
        TrashGKKickMessage: "⚠️ Your performance isn't fitting within the norms of this room so you were kicked until: ",
        VoteWarningMessage: "⚠️ Please select an ID in 10 seconds. Available ID's\nI won't use my right: [0]\n",
        PlayerPenalizedKickMessage: "⚠️ You have been penalized for 5 minutes by ",
        PlayerStillPenalizedKickMessage: "⚠️ You are penalized, please wait for your penalization to end.",
        ProfaneMessageBanMessage: "⛔️ Insults and humiliations are prohibited in this room.",
        NotCommandWarningMessage: "⚠️ This is not a command, type !help to see the commands.",
        InvalidCharactersKickMessage: "⚠️ Your nickname contains one or more invalid characters. Please try with a different nickname.",
        TooShortNameKickMessage: "⚠️ Please take a nickname with at least 3 characters.",
        ProfaneNameBanMessage: "⛔️ Bad nickname.",
        DuplicatedAuthKickMessage: "🔒 Duplicated accounts are not allowed in this room: ",
        DuplicatedConnKickMessage: "🔒 Duplicated accounts are not allowed in this room: ",
        DuplicatedNameKickMessage: "🔒 This username has already been taken.",
        GameEndPlayerNotUsedRightWarningMessage: "⚠️ Champion did not use their right to make someone kicked.",
        MapChangeDenyMessage: "🚫 Map changing is not allowed in this room.",
        TimeLimitEliminationMessage: "⏱ Time's up!",
        TrashRedTeamWarningMessage: "😂 Trash team. 😂",
        PasswordRemovedSuccessMessage: "✔️ Password successfully cleared!",
        PasswordSetSuccessMessage: "✔️ Password successfully set: ",
        PasswordNotRemovedDenyMessage: "⛔️ You are not authorized to clear the password in this room!",
        PasswordNotSetDenyMessage: "⛔️ You are not authorized to set a password for this room!",
        NameInfoMessage: "Name: ",
        JoinTimeInfoMessage: "Joining Time: ",
        JoinHistoryInfoMessage: "ℹ️ Your join history has been listed below:\n",
        WelcomeMessage: "🖐 Welcome! ",
        ByeKickMessage: "👋 Bye! ",
        GoalMessage: "⚽️ Goal! ",
        ActiveTurnMessage: "👀 Now the turn is for: ",
        TeamNotChangedDenyMessage: "⛔️ You are not authorized to move players to a team!",
        LanguageChangedSuccessfullySuccessMessage: "✔️ Your language has been successfully set to English.",
        CommandsInfoMessage: "ℹ️ Commands: !admin, !allblue, !allred, !allspec, !bb, !best, !blacklist, !clearban [name] [auth] [conn], !cpw, !dc, !discord, !en, !help, !joinhistory, !mute, !mute [ID] [Minutes], !muteall, !mutelist, !pw, !rank, !tr, !unmuteall, !vote, !voteban [ID]",
        AdminLengthDenyMessage: "⛔️ No more than " + adminLengthLimit + " players can be exist as admin.",
        PlayerProtectedWarningMessage: "🔰 Because of the player who you have chosen is protected, his score was decreased.",
        DontHaveRightToPenalizeDenyMessage: "⛔️ You have to be the champion to perform this.",
        SpamWarningMessage: "⚠️ Slow mode is activated. Stop spamming!",
        DoubleBlankCharactersInNameKickMessage: "⚠️ Your name cannot contain more than one blank characters in a row!",
        StartEndBlankCharacterKickMessage: "⚠️ Your name cannot have blank characters in the left and right!",
        JoinNameLinkBanMessage: "❌ Link spam on nickname.",
        LinkWarningMessage: "❌ Sending links is prohibited in this room.",
        AvailablePlayersInfoMessage: "ℹ️ Available players:\n",
        OwnVoteDenyMessage: "⛔️ You cannot vote yourselves!",
        AdminVoteDenyMessage: "⛔️ You cannot vote administrators!",
        InvalidIDToVoteDenyMessage: "⛔️ Invalid ID! Type !vote to see available players.",
        UnavailableIDDenyMessage: "⛔️ You cannot vote a player more than once!",
        EnoughMinutesRequiredDenyMessage: "⛔️ At least " + enoughTime / 60000 + " minutes are required to vote a player!",
        FourPlayersRequiredDenyMessage: "⛔️ At least " + enoughPlayers + " players are required in the room to vote a player!",
        BadInputWarningMessage: "⚠️ Bad input!",
        IDVotedSuccessMessage: "✔️ You have voted successfully: ",
        MutedWarningMessage: "⚠️ You are muted! Only the administration can see your messages.",
        SelfMuteDenyMessage: "⛔️ You cannot mute yourselves!",
        InvalidIDToMuteDenyMessage: "⛔️ Invalid ID! Type !mute to see the available player list.",
        AdminMuteDenyMessage: "⛔️ You cannot mute the administrator!",
        AlreadyMutedDenyMessage: "⛔️ This player has already been muted!",
        OutOfRangeWarningMessage: "⚠️ Value is out of the range. Please enter a value between " + muteDurationLowerLimit + " and " + muteDurationUpperLimit,
        PlayerMutedInfoMessage: "✔️ A player was muted! By: ",
        MutedPlayerInfoMessage: " , player: ",
        DurationInfoMessage: " , mute duration: ",
        MinutesInfoMessage: " minutes",
        PlayerAutomaticallyUnmutedInfoMessage: " has now been unmuted.",
        MuteAvailableListNoAuthorizationDenyMessage: "⛔️ You have no authorization to see available players to be muted.",
        MutedPlayersInfoMessage: "ℹ️ Muted players:\n",
        PlayerNotMutedDenyMessage: "⛔️ You have no authorization to mute anyone here!",
        PlayerNotUnmutedDenyMessage: "⛔️ You have no authorization to unmute anyone here!",
        ChatMutedWarningMessage: "⚠️ Chat is turned off! Only the administration can see the messages.",
        ChatUnmutedWarningMessage: "⚠️ Chat is turned on! Everyone is free to talk.",
        VoteBanMessage: "⚠️ You were voted out!",
        BlackListBanMessage: "⛔️ You are banned forever!\n",
        DateMessage: "Date: ",
        ReasonMessage: "Reason: ",
        WhoMessage: "Blacklisted by: ",
        BlackListRemoveSuccessMessage: "✔️ Related players have been successfully unbanned!",
        BlackListRemoveNoAuthorizationDenyMessage: "⛔️ You have no authorization to unban someone from the blacklist!",
        BlackListInfoMessage: "ℹ️ Blacklisted players:\n",
        BlackListNoAuthorizationDenyMessage: "⛔️ You have no authorization to see the blacklist!",
        AuthInfoMessage: "Auth: ",
        ConnInfoMessage: "Conn: ",
        BlackListRemoveNoAccountsFoundWarningMessage: "⚠️ Auth, conn or name is wrong. Please try again!",
        NoAvailablePlayersFoundWarningMessage: "⚠️ No available players found!",
        ProfaneMessageWarningMessage: ". warning! Bad word is prohibited!",
        BetaTestAnnouncementMessage: "⚠️ This room is in the beta testing. You can send feedback about our bot through " + discordLink + "."
    }
};

var messageColors = { elimination_delay_kickoff: 0xFF8000, elimination_miss: 0x0080FF, elimination_stop: 0x00FF80, elimination_timeout: 0x008080, deny: 0xFF0000, warning: 0xFFFF00, grant: 0x00FF00, info: 0x00FFFF, announcement: 0x8ED2AB, welcome: 0xFFFFFF, goal: 0x80FF00, admin: 0x99FFFF, civil: 0xFFFFFF };
var messageFonts = { elimination_delay_kickoff: "normal", elimination_miss: "bold", elimination_stop: "bold", elimination_timeout: "bold", deny: "bold", warning: "bold", grant: "normal", info: "normal", announcement: "bold", welcome: "italic", goal: "bold", admin: "bold", civil: "normal" };
var messageSounds = { elimination_delay_kickoff: 1, elimination_miss: 2, elimination_stop: 1, elimination_timeout: 2, deny: 2, warning: 2, grant: 1, info: 1, announcement: 1, welcome: 2, goal: 1, admin: 1, civil: 1 };
var minNameLength = 3;
var mute_list = [];
var muteall = false;
var muteDurationLowerLimit = 1;
var muteDurationUpperLimit = 10;

var number_indicators_0 = []; //Numbers for the discs of the countdown will be pushed in these arrays.
var number_indicators_1 = [];
var number_indicators_2 = [];
var number_indicators_3 = [];
var number_indicators_4 = [];
var number_indicators_5 = [];
var number_indicators_6 = [];
var number_indicators_7 = [];
var number_indicators_8 = [];
var number_indicators_9 = [];

var passwordLength = 30;
var penalizeDuration = 300000;
var playerAcceleration = JMap.playerPhysics.acceleration;
var playerDamping = JMap.playerPhysics.damping;
var dangerZoneRequiredSpeedReduceCoefficient = playerDamping; //This will be effective for detecting slowdowns.
var playerKicked = false;
var playerList = [];
var playerMaxSpeed = playerAcceleration * playerDamping / (1 - playerDamping); //If damping < 1. For more information, please join the developer's server through the following: https://discord.gg/t6Wvbqk
var prefix = "!";
var profaneWordCountToBan = 3;
var radiusBall = JMap.ballPhysics.radius;
var radiusPlayer = JMap.playerPhysics.radius;
var ranks = [];
var slowModeDuration = 5000;
var slowMode_muted = [];
var teamsEnumerator = { spec: 0, red: 1, blue: 2 };
var temp_list = [];
var triggerDistance = radiusBall + radiusPlayer;
var votesRequired;
maxPlayers % 2 == 0 ? votesRequired = maxPlayers / 2 : votesRequired = Math.ceil(maxPlayers / 2);

class playerObject {
    constructor() {
        this.activeTurn = (player) => {
            playerList[player.id - 1].turn = true;
        }

        this._getPlayer = (id) => {
            return playerList[id - 1];
        }

        this._initPlayer = (player) => {
            playerList[player.id - 1] = { admin: player.admin, auth: player.auth, badWordUsage: 0, blackListDate: undefined, blackListReason: undefined, blackListedBy: undefined, conn: player.conn, eliminationReason: eliminationReasons.nothing, goals: 0, id: player.id, initialPosition: player.position, isBlacklisted: false, isInTheRoom: true, isKickable: false, isMuted: false, jointime: Date.now(), language: locale, name: player.name, score: 0, speedsInDangerZone: [], successfulJoin: true, team: player.team, turn: false, votedIds: [], votesGiven: 0 };
            ranks[player.id - 1] = { id: player.id, name: player.name, goals: 0 };
        }

        this.clearSpeedsInDangerZone = (player = _roomObject.findActivePlayer()) => {
            if (_roomObject.isPlayerInDangerZone(player) == false && playerList[player.id - 1].speedsInDangerZone.length > 0) {
                playerList[player.id - 1].speedsInDangerZone = [];
            }
        }

        this.decreaseScore = (player) => {
            playerList[player.id - 1].score--;
        }

        this.findOlderVotes = (player) => {
            var accounts = playerList.filter(p => p.auth == playerList[player.id - 1].auth || p.conn == playerList[player.id - 1].conn);
            var length = accounts.length;
            var lastAccount;
            length == 0 ? lastAccount = undefined : accounts[length - 1];
            lastAccount != undefined ? playerList[player.id - 1].votesGiven = playerList[lastAccount.id - 1].votesGiven : playerList[player.id - 1].votesGiven = 0;
        }

        this.hasDoubleBlanks = (string) => {
            return string.includes("  ");
        }

        this.hasInvalidCharacters = (string) => {
            for (var s in string) {
                return s.charCodeAt(10000);
            }
        }

        this.hasSlowMode = (auth) => {
            return slowMode_muted.length > 0 && slowMode_muted.includes(auth) == true;
        }

        this.hasTooShortName = (length, string) => {
            return string.length < length;
        }

        this.increaseBadWordUsage = (player) => {
            (playerList[player.id - 1].badWordUsage <= 3) ? playerList[player.id - 1].badWordUsage++ : 0;
        }

        this.increaseGoals = (player) => {
            playerList[player.id - 1].goals++;
            ranks[player.id - 1].goals++;
        }

        this.increaseScore = (player) => {
            playerList[player.id - 1].score++;
        }

        this.increaseVotes = (player) => {
            playerList[player.id - 1].votesGiven++;
        }

        this.isAdmin = (player) => {
            return playerList[player.id - 1].admin;
        }

        this.isBlacklisted = (player) => {
            var accounts = playerList.filter(p => playerList[p.id - 1].name == (playerList[player.id - 1].name).toLowerCase() || playerList[p.id - 1].auth == playerList[player.id - 1].auth || playerList[p.id - 1].conn == playerList[player.id - 1].conn).filter(p => p.id != player.id && playerList[p.id - 1].successfulJoin == true);
            var length = accounts.length;
            var lastAccount;
            length != 0 ? lastAccount = accounts[length - 1] : lastAccount = undefined;

            if (lastAccount != undefined) {
                if (playerList[lastAccount.id - 1].isBlacklisted == true) {
                    playerList[player.id - 1].isBlacklisted = playerList[lastAccount.id - 1].isBlacklisted;
                    playerList[player.id - 1].blackListDate = playerList[lastAccount.id - 1].blackListDate;
                    playerList[player.id - 1].blackListReason = playerList[lastAccount.id - 1].blackListReason;
                    playerList[player.id - 1].blackListedBy = playerList[lastAccount.id - 1].blackListedBy;
                    playerList[player.id - 1].successfulJoin = false;

                    playerList[player.id - 1].blackListedBy != undefined ? room.kickPlayer(player.id, locales[locale].BlackListBanMessage + locales[locale].DateMessage + playerList[player.id - 1].blackListDate + "\n" + locales[locale].ReasonMessage + playerList[player.id - 1].blackListReason + "\n" + locales[locale].WhoMessage + playerList[player.id - 1].blackListedBy.name, kickTypes.blacklist) : room.kickPlayer(player.id, locales[locale].BlackListBanMessage + locales[locale].DateMessage + playerList[player.id - 1].blackListDate + "\n" + locales[locale].ReasonMessage + playerList[player.id - 1].blackListReason + "\n" + locales[locale].WhoMessage + undefined, kickTypes.blacklist);
                }
            }
        }

        this.isEqualToPlayerID = (id, message) => {
            return parseInt(message) == id;
        }

        this.isInTheRoom = (id) => {
            return playerList[id - 1].isInTheRoom;
        }

        this.isJoinTimeEnough = (player, time) => {
            return Date.now() - playerList[player.id - 1].jointime >= time;
        }

        this.isMoving = (player) => {
            return Math.hypot(room.getPlayerDiscProperties(player.id).xspeed, room.getPlayerDiscProperties(player.id).yspeed) > 0;
        }

        this.isMuted = (player) => {
            if (mute_list.length > 0 && playerList.length > 0) {
                return mute_list.includes(playerList[player.id - 1].auth);
            }
        }

        this.isPenalized = (auth) => {
            if (temp_list.length > 0 && playerList.length > 0) {
                return temp_list.includes(auth);
            }
        }

        this.isStartingOrEndingWithBlankCharacter = (string) => {
            return string.startsWith(" ") == true || string.endsWith(" ") == true;
        }

        this.mutePlayer = (player) => {
            if (_playerObject.isMuted(player) == false) {
                mute_list.push(playerList[player.id - 1].auth);
                playerList[player.id - 1].isMuted = true;
            }
        }

        this.passiveTurn = (player) => {
            playerList[player.id - 1].turn = false;
        }

        this.penalize = (player) => {
            temp_list.push(playerList[player.id - 1].auth);
        }

        this.pushSlowMode = (auth) => {
            if (slowMode_muted.includes(auth) == false) {
                slowMode_muted.push(auth);
                setTimeout(() => { _playerObject.removeSlowMode(auth) }, slowModeDuration);
            }
        }

        this.pushSpeedsInDangerZone = (player = _roomObject.findActivePlayer()) => {
            if (_roomObject.isPlayerInDangerZone(player) == true) {
                playerList[player.id - 1].speedsInDangerZone.push(Math.hypot(room.getPlayerDiscProperties(player.id).xspeed, room.getPlayerDiscProperties(player.id).yspeed));
            }
        }

        this.removeBlacklist = (player, name, auth, conn) => {
            var accounts = playerList.filter(p => playerList[p.id - 1].auth == auth || playerList[p.id - 1].conn == conn || playerList[p.id - 1].name == name).filter(p => playerList[p.id - 1].isBlacklisted == true);

            if (player.admin == true) {
                if (accounts.length > 0) {
                    accounts.forEach(a => {
                        playerList[a.id - 1].isBlacklisted = false;
                        playerList[a.id - 1].blackListDate = undefined;
                        playerList[a.id - 1].blackListReason = undefined;
                        playerList[a.id - 1].blackListedBy = undefined;
                        playerList[a.id - 1].successfulJoin = true;
                    });

                    room.sendAnnouncement(locales[playerList[player.id - 1].language].BlackListRemoveSuccessMessage, player.id, messageColors.grant, messageFonts.grant, messageSounds.grant);
                }
                else {
                    room.sendAnnouncement(locales[playerList[player.id - 1].language].BlackListRemoveNoAccountsFoundWarningMessage, player.id, messageColors.warning, messageFonts.warning, messageSounds.warning);
                }
            }
            else {
                room.sendAnnouncement(locales[playerList[player.id - 1].language].BlackListRemoveNoAuthorizationDenyMessage, player.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
            }
        }

        this.removeSlowMode = (auth) => {
            if (slowMode_muted.includes(auth) == true) {
                slowMode_muted.splice(slowMode_muted.indexOf(auth), 1);
            }
        }

        this.remove_penalty = (player) => {
            temp_list.splice(temp_list.indexOf(playerList[player.id - 1].auth), 1);
        }

        this.resetVotes = (player) => {
            playerList[player.id - 1].votesGiven = 0;
        }

        this.switchLanguageToTurkish = (player) => {
            playerList[player.id - 1].language = languages[0];
            room.sendAnnouncement(locales[playerList[player.id - 1].language].LanguageChangedSuccessfullySuccessMessage, player.id, messageColors.grant, messageFonts.grant, messageSounds.grant);
            return false;
        }

        this.switchLanguageToEnglish = (player) => {
            playerList[player.id - 1].language = languages[1];
            room.sendAnnouncement(locales[playerList[player.id - 1].language].LanguageChangedSuccessfullySuccessMessage, player.id, messageColors.grant, messageFonts.grant, messageSounds.grant);
            return false;
        }

        this.unmutePlayer = (player) => {
            if (_playerObject.isMuted(player) == true) {
                var index = mute_list.indexOf(playerList[player.id - 1].auth);
                mute_list.splice(index, 1);
                playerList[player.id - 1].isMuted = false;
            }
        }
    }
}

class roomObject {
    constructor() {
        this.players = () => {
            return room.getPlayerList().sort((p1, p2) => { (p1.id < p2.id) ? 1 : -1 });
        }

        this.team_spec = () => {
            return _roomObject.players().filter(p => p.team == teamsEnumerator.spec);
        }

        this.team_red = () => {
            return _roomObject.players().filter(p => p.team == teamsEnumerator.red);
        }

        this.team_blue = () => {
            return _roomObject.players().filter(p => p.team == teamsEnumerator.blue);
        }

        this.advanceTurn = () => {
            let index = _roomObject.team_red().findIndex(p => playerList[p.id - 1].turn == true);
            _playerObject.passiveTurn(_roomObject.team_red()[index]);

            if (0 <= index && index < _roomObject.team_red().length - 1) {
                _playerObject.activeTurn(_roomObject.team_red()[index + 1]);
            }
            else {
                _playerObject.activeTurn(_roomObject.team_red()[0]);
            }

            if (room.getDiscProperties(0).x != 0 || room.getDiscProperties(0).y != 0) {
                room.setDiscProperties(0, { x: 0, y: 0, xspeed: 0, yspeed: 0 });
            }

            if (_roomObject.team_blue().length > 0) {
                room.setPlayerDiscProperties(_roomObject.team_blue()[0].id, { x: 300, y: 0, xspeed: 0, yspeed: 0 });
            }

            _roomObject.startTimer();
            _roomObject.setArrowPosition();
            room.sendAnnouncement(locales[locale].ActiveTurnMessage + _roomObject.findActivePlayer().name, null, messageColors.warning, messageFonts.warning, messageSounds.warning);
        }

        this.betaTestAnnouncement = () => {
            room.sendAnnouncement(locales[locale].BetaTestAnnouncementMessage, null, messageColors.announcement, messageFonts.announcement, messageSounds.announcement);
        }

        this.blackList = (kickedPlayer, reason, ban, byPlayer) => {
            playerList[kickedPlayer.id - 1].isBlacklisted = ban;
            playerList[kickedPlayer.id - 1].blackListDate = (new Date(Date.now())).toLocaleString();
            playerList[kickedPlayer.id - 1].blackListReason = reason;
            playerList[kickedPlayer.id - 1].blackListedBy = byPlayer;
        }

        this.champion = (player) => {
            room.sendAnnouncement(locales[playerList[player.id - 1].language].ChampionInfoMessage, player.id, messageColors.info, messageFonts.info, messageSounds.info);
            _playerObject.increaseScore(player);
            lastChampion = player;
        }

        this.changeFontColorIfAdmin = (player, message) => {
            if (player.admin == true) {
                room.sendAnnouncement("💬 (" + new Date().toLocaleTimeString() + ") " + player.name + " [" + player.id + "]: " + message, null, messageColors.admin, messageFonts.admin, messageSounds.admin);
            }
            else {
                room.sendAnnouncement("💬 (" + new Date().toLocaleTimeString() + ") " + player.name + " [" + player.id + "]: " + message, null, messageColors.civil, messageFonts.civil, messageSounds.civil);
            }
            return false;
        }

        this.checkEnd = () => {
            _roomObject.players().filter(p => p.id != lastChampion.id).forEach(p => { room.setPlayerTeam(p.id, teamsEnumerator.red); });

            if (_playerObject.isInTheRoom(lastChampion.id) == true) {
                room.setPlayerTeam(lastChampion.id, teamsEnumerator.blue);
            }
            else {
                if (_roomObject.team_blue().length == 0) {
                    var index = _roomObject.getRandomInt(room.getPlayerList().length);
                    room.setPlayerTeam(room.getPlayerList()[index].id, teamsEnumerator.blue);
                }
            }

            _roomObject.checkIfEnoughPlayers();
        }

        this.checkIfEnoughPlayers = () => {
            if (room.getScores() == null && _roomObject.players().length >= enoughPlayersToStartMatch) {
                room.startGame();
            }
        }

        this.checkIfEnoughPlayersOnJoin = () => {
            if (room.getScores() == null && _roomObject.players().length >= enoughPlayersToStartMatch && kickSession == false) {
                var index = _roomObject.getRandomInt(room.getPlayerList().length);
                _roomObject._moveAllToRed();
                room.setPlayerTeam(room.getPlayerList()[index].id, teamsEnumerator.blue);
                room.startGame();
            }
        }

        this.clearAllAvatars = () => {
            _roomObject.players().forEach(p => room.setPlayerAvatar(p.id, null));
        }

        this.clear_password = (player) => {
            if (player.admin == true) {
                room.setPassword();
                room.sendAnnouncement(locales[playerList[player.id - 1].language].PasswordRemovedSuccessMessage, player.id, messageColors.grant, messageFonts.grant, messageSounds.grant);
                return false;
            }
            else {
                room.sendAnnouncement(locales[playerList[player.id - 1].language].PasswordNotRemovedDenyMessage, player.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
                return false;
            }
        }

        this.deletePlayer = (id) => {
            playerList[id - 1].isInTheRoom = false;
        }

        this.eliminate = (player) => {
            if (_roomObject.isFinalKick() == false) {
                _roomObject.advanceTurn();
                ballKick = false;
                ballTouch = false;
                gameTick = 0;
            }
            room.setPlayerTeam(player.id, teamsEnumerator.spec);
            playerList[player.id - 1].eliminationReason == eliminationReasons.kickOff ? room.sendAnnouncement(locales[playerList[player.id - 1].language].KickOffDelayingEliminationMessage, player.id, messageColors.elimination_delay_kickoff, messageFonts.elimination_delay_kickoff, messageSounds.elimination_delay_kickoff) : playerList[player.id - 1].eliminationReason == eliminationReasons.miss ? room.sendAnnouncement(locales[playerList[player.id - 1].language].MissEliminationMessage, player.id, messageColors.elimination_miss, messageFonts.elimination_miss, messageSounds.elimination_miss) : playerList[player.id - 1].eliminationReason == eliminationReasons.stop ? room.sendAnnouncement(locales[playerList[player.id - 1].language].StoppingEliminationMessage, player.id, messageColors.elimination_stop, messageFonts.elimination_stop, messageSounds.elimination_stop) : room.sendAnnouncement(locales[playerList[player.id - 1].language].TimeLimitEliminationMessage, player.id, messageColors.elimination_timeout, messageFonts.elimination_timeout, messageSounds.elimination_timeout);

            if (_roomObject.isFinalKick() == true) {
                if (_roomObject.team_blue().length > 0) {
                    room.stopGame();
                    _roomObject.champion(_roomObject.team_blue()[0]);
                    _roomObject.startVoteSession(_roomObject.team_blue()[0]);
                }
            }
        }

        this.fillIndicators = () => {
            for (var d = 0; d < JMap.discs.length; d++) {
                if (JMap.discs[d].trait == "number_indicator_0") {
                    number_indicators_0.push(d + 1);
                }
                else if (JMap.discs[d].trait == "number_indicator_1") {
                    number_indicators_1.push(d + 1);
                }
                else if (JMap.discs[d].trait == "number_indicator_2") {
                    number_indicators_2.push(d + 1);
                }
                else if (JMap.discs[d].trait == "number_indicator_3") {
                    number_indicators_3.push(d + 1);
                }
                else if (JMap.discs[d].trait == "number_indicator_4") {
                    number_indicators_4.push(d + 1);
                }
                else if (JMap.discs[d].trait == "number_indicator_5") {
                    number_indicators_5.push(d + 1);
                }
                else if (JMap.discs[d].trait == "number_indicator_6") {
                    number_indicators_6.push(d + 1);
                }
                else if (JMap.discs[d].trait == "number_indicator_7") {
                    number_indicators_7.push(d + 1);
                }
                else if (JMap.discs[d].trait == "number_indicator_8") {
                    number_indicators_8.push(d + 1);
                }
                else if (JMap.discs[d].trait == "number_indicator_9") {
                    number_indicators_9.push(d + 1);
                }
            }
        }

        this.findActivePlayer = () => {
            return _roomObject.players().find(p => playerList[p.id - 1].turn == true);
        }

        this.freeze = () => {
            var activePlayer = _roomObject.findActivePlayer();

            for (var i = 0; i < _roomObject.team_red().length; i++) {
                if (_roomObject.team_red()[i].id != activePlayer.id && _roomObject.team_red()[i].team == teamsEnumerator.red && _playerObject.isMoving(_roomObject.team_red()[i]) == true && playerList[_roomObject.team_red()[i].id - 1].isInTheRoom == true) {
                    room.setPlayerDiscProperties(_roomObject.team_red()[i].id, { x: playerList[_roomObject.team_red()[i].id - 1].initialPosition.x, y: playerList[_roomObject.team_red()[i].id - 1].initialPosition.y, xspeed: 0, yspeed: 0 });
                }
            }
        }

        this.get_admin = (player) => {
            room.setPlayerAdmin(player.id, !player.admin); //You can change it due to your preference.
            //room.sendAnnouncement(locales[playerList[player.id-1].language].AdminWarningMessage,player.id,messageColors.warning,messageFonts.warning,messageSounds.warning); //Is an another option.
            return false;
        }

        this.get_admins = () => {
            return room.getPlayerList().filter(p => p.admin == true);
        }

        this.get_best = (player) => {
            var best = _roomObject.sort_ranks()[0];
            room.sendAnnouncement(locales[playerList[player.id - 1].language].BestInfoMessage + best.name + " - " + best.goals + " ⚽", player.id, messageColors.info, messageFonts.info, messageSounds.info);
            return false;
        }

        this.get_blacklist = (player) => {
            var accounts = playerList.filter(p => playerList[p.id - 1].isBlacklisted == true && playerList[p.id - 1].successfulJoin == true).map(p => locales[playerList[player.id - 1].language].NameInfoMessage + p.name + ", " + locales[playerList[player.id - 1].language].AuthInfoMessage + playerList[p.id - 1].auth + ", " + locales[playerList[player.id - 1].language].ConnInfoMessage + playerList[p.id - 1].conn).join("\n");

            if (player.admin == true) {
                room.sendAnnouncement(locales[playerList[player.id - 1].language].BlackListInfoMessage + accounts, player.id, messageColors.info, messageFonts.info, messageSounds.info);
                return false;
            }
            else {
                room.sendAnnouncement(locales[playerList[player.id - 1].language].BlackListNoAuthorizationDenyMessage, player.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
                return false;
            }
        }

        this.get_commands = (player) => {
            room.sendAnnouncement(locales[playerList[player.id - 1].language].CommandsInfoMessage, player.id, messageColors.info, messageFonts.info, messageSounds.info);
            return false;
        }

        this.get_discord = (player) => {
            room.sendAnnouncement(locales[playerList[player.id - 1].language].DiscordInfoMessage, player.id, messageColors.info, messageFonts.info, messageSounds.info);
            return false;
        }

        this.get_joinHistory = (player) => {
            var identicals = playerList.filter(p => p.auth == playerList[player.id - 1].auth).map(p => locales[playerList[player.id - 1].language].NameInfoMessage + p.name + ", " + locales[playerList[player.id - 1].language].JoinTimeInfoMessage + (new Date(p.jointime)).toLocaleString()).join("\n");

            room.sendAnnouncement(locales[playerList[player.id - 1].language].JoinHistoryInfoMessage + identicals, player.id, messageColors.info, messageFonts.info, messageSounds.info);
            return false;
        }

        this.get_rank = (player) => {
            var rank = playerList[player.id - 1].goals;
            room.sendAnnouncement(locales[playerList[player.id - 1].language].RankInfoMessage + rank + " ⚽", player.id, messageColors.info, messageFonts.info, messageSounds.info);
            return false;
        }

        this.getRandomInt = (number) => {
            return Math.floor(Math.random() * number);
        }

        this.getRandomString = (length) => {
            var randomChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
            var result = "";
            for (var i = 0; i < length; i++) {
                result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
            }
            return result;
        }

        this.isBallTouched = () => {
            for (var i = 0; i < _roomObject.players().length; i++) {
                if (playerList[_roomObject.players()[i].id - 1].isInTheRoom == true && room.getPlayerDiscProperties(_roomObject.players()[i].id) != null) {
                    if (room.getDiscProperties(0).x > 0) {
                        if (ballTouch == false) {
                            ballTouch = true;
                            _roomObject.stopTimer();
                        }
                    }
                    else {
                        ballTouch == false;
                    }
                }
            }
        }

        this.isCommand = (command) => {
            return Commands.hasOwnProperty(command);
        }

        this.isCommand2 = (command) => {
            return Commands2.includes(command.split(" ")[0]);
        }

        this.isCommand4 = (command) => {
            return Commands4.includes(command.split(" ")[0]);
        }

        this.isDelayingKickOff = () => {
            var activePlayer = _roomObject.findActivePlayer();

            if (room.getPlayerDiscProperties(activePlayer.id) != null && (gameDelayingLimit <= gameTick && gameTick <= gameDelayingLimit + 1 / 60) && ballKick == false && ballTouch == false) {
                playerList[activePlayer.id - 1].eliminationReason = eliminationReasons.kickOff;
                _roomObject.resetIndicators();
                _roomObject.eliminate(activePlayer);
            }
        }

        this.isDuplicatedAuth = (auth) => {
            if (room.getPlayerList().length > 0) {
                var alivePlayers = playerList.filter(p => playerList[p.id - 1].isInTheRoom == true);
                return alivePlayers.filter(p => playerList[p.id - 1].auth == auth).length > 0;
            }
        }

        this.isDuplicatedConn = (conn) => {
            if (room.getPlayerList().length > 0) {
                var alivePlayers = playerList.filter(p => playerList[p.id - 1].isInTheRoom == true);
                return alivePlayers.filter(p => playerList[p.id - 1].conn == conn).length > 0;
            }
        }

        this.isDuplicatedName = (name) => {
            if (room.getPlayerList().length > 0) {
                var alivePlayers = playerList.filter(p => playerList[p.id - 1].isInTheRoom == true);
                return alivePlayers.filter(p => playerList[p.id - 1].name == name).length > 0;
            }
        }

        this.isFinalKick = () => {
            return (_roomObject.team_red().length == 1 && _roomObject.team_blue().length == 1);
        }

        this.isKickOnTimeLimit = () => {
            var activePlayer = _roomObject.findActivePlayer();

            if (room.getPlayerDiscProperties(activePlayer.id) != null && (gameTickLimit <= gameTick && gameTick <= gameTickLimit + 1 / 60)) {
                playerList[activePlayer.id - 1].eliminationReason = eliminationReasons.timeout;
                _roomObject.resetIndicators();
                _roomObject.eliminate(activePlayer);
            }
        }

        this.isLink = (string) => {
            return string.match(new RegExp(/[-a-zA-Z0-9@:%_\+.~#?&//=]{2,256}\.[a-z]{2,4}\b(\/[-a-zA-Z0-9@:%_\+.~#?&//=]*)?/gi));
        }

        this.isPlayerInDangerZone = (player = _roomObject.findActivePlayer()) => {
            return (dangerZoneMinX + room.getPlayerDiscProperties(player.id).radius <= room.getPlayerDiscProperties(player.id).x && room.getPlayerDiscProperties(player.id).x <= dangerZoneMaxX - room.getPlayerDiscProperties(player.id).radius) && (dangerZoneMinY + room.getPlayerDiscProperties(player.id).radius <= room.getPlayerDiscProperties(player.id).y && room.getPlayerDiscProperties(player.id).y <= dangerZoneMaxY - room.getPlayerDiscProperties(player.id).radius);
        }

        this.isPlayerSlowingDown = (player = _roomObject.findActivePlayer()) => {
            if (ballTouch == false && _roomObject.isPlayerInDangerZone(player) == true) {
                if (parseFloat(playerList[player.id - 1].speedsInDangerZone[playerList[player.id - 1].speedsInDangerZone.length - 1] / playerList[player.id - 1].speedsInDangerZone[playerList[player.id - 1].speedsInDangerZone.length - 2]) == dangerZoneRequiredSpeedReduceCoefficient) {
                    playerList[player.id - 1].eliminationReason = eliminationReasons.stop;

                    if (_roomObject.isFinalKick() == false) {
                        _roomObject.resetIndicators();
                        _roomObject.eliminate(player);
                    }
                    else {
                        room.pauseGame(true);
                        setTimeout(() => { _roomObject.eliminate(player); }, dangerZoneFinalKickEliminationTimeout);
                    }
                }
            }
        }

        this.isProfane = (player) => {
            for (var i = 0; i < badwords[locale].length; i++) {
                if (player.name.toLowerCase().match(badwords[locale][i])) {
                    room.kickPlayer(player.id, locales[locale].ProfaneNameBanMessage, kickTypes.profane);
                }
            }
        }

        this.isTrashGK = (player) => {
            var scores = room.getScores();
            return (room.getPlayerDiscProperties(player.id) != null) && (scores.time > 0) && (scores.red >= scores.scoreLimit) && (player.team == teamsEnumerator.blue);
        }

        this.justSendToAdmins = (player, message) => {
            var availablePlayers = _roomObject.players().filter(p => p.admin == true);

            if (availablePlayers.length > 0) {
                availablePlayers.forEach(p => {
                    room.sendAnnouncement("💬 (" + new Date().toLocaleTimeString() + ") " + player.name + " [" + player.id + "]: " + message, p.id, messageColors.warning, messageFonts.warning, messageSounds.warning);
                });
                return false;
            }
            else {
                return false;
            }
        }

        this.kickTrashGK = (player) => {
            if (_roomObject.isTrashGK(player)) {
                _playerObject.decreaseScore(player);
                _playerObject.penalize(player);
                var date = (new Date(Date.now() + penalizeDuration)).toLocaleTimeString();
                room.kickPlayer(player.id, locales[playerList[player.id - 1].language].TrashGKKickMessage + date, kickTypes.trash);
            }
        }

        this.loadMap = (map, scoreLimit, timeLimit) => {
            room.setCustomStadium(map);
            room.setScoreLimit(scoreLimit);
            room.setTimeLimit(timeLimit);
        }

        this._moveAllToSpec = () => {
            _roomObject.players().forEach(p => room.setPlayerTeam(p.id, teamsEnumerator.spec));
        }

        this._moveAllToRed = () => {
            _roomObject.players().forEach(p => room.setPlayerTeam(p.id, teamsEnumerator.red));
        }

        this._moveAllToBlue = () => {
            _roomObject.players().forEach(p => room.setPlayerTeam(p.id, teamsEnumerator.blue));
        }

        this.moveAllToSpec = (player) => {
            if (player.admin == true) {
                _roomObject.players().forEach(p => room.setPlayerTeam(p.id, teamsEnumerator.spec));
            }
            else {
                room.sendAnnouncement(locales[playerList[player.id - 1].language].TeamNotChangedDenyMessage, player.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
            }
            return false;
        }

        this.moveAllToRed = (player) => {
            if (player.admin == true) {
                _roomObject.players().forEach(p => room.setPlayerTeam(p.id, teamsEnumerator.red));
            }
            else {
                room.sendAnnouncement(locales[playerList[player.id - 1].language].TeamNotChangedDenyMessage, player.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
            }
            return false;
        }

        this.moveAllToBlue = (player) => {
            if (player.admin == true) {
                _roomObject.players().forEach(p => room.setPlayerTeam(p.id, teamsEnumerator.blue));
            }
            else {
                room.sendAnnouncement(locales[playerList[player.id - 1].language].TeamNotChangedDenyMessage, player.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
            }
            return false;
        }

        this.moveTimer = () => {
            if (ballKick == false) {
                if (0 <= gameTick && gameTick <= 1 / 60) {
                    for (var n in number_indicators_9) {
                        if (room.getDiscProperties(number_indicators_9[n]).x > 400) {
                            room.setDiscProperties(number_indicators_9[n], { x: room.getDiscProperties(number_indicators_9[n]).x - 1000 });
                        }
                    }
                }
                else if (60 <= gameTick && gameTick <= 60 + 1 / 60) {
                    for (var n in number_indicators_9) {
                        if (room.getDiscProperties(number_indicators_9[n]).x < 400) {
                            room.setDiscProperties(number_indicators_9[n], { x: room.getDiscProperties(number_indicators_9[n]).x + 1000 });
                        }
                    }
                    for (var n in number_indicators_8) {
                        if (room.getDiscProperties(number_indicators_8[n]).x > 400) {
                            room.setDiscProperties(number_indicators_8[n], { x: room.getDiscProperties(number_indicators_8[n]).x - 1000 });
                        }
                    }
                }
                else if (120 <= gameTick && gameTick <= 120 + 1 / 60) {
                    for (var n in number_indicators_8) {
                        if (room.getDiscProperties(number_indicators_8[n]).x < 400) {
                            room.setDiscProperties(number_indicators_8[n], { x: room.getDiscProperties(number_indicators_8[n]).x + 1000 });
                        }
                    }
                    for (var n in number_indicators_7) {
                        if (room.getDiscProperties(number_indicators_7[n]).x > 400) {
                            room.setDiscProperties(number_indicators_7[n], { x: room.getDiscProperties(number_indicators_7[n]).x - 1000 });
                        }
                    }
                }
                else if (180 <= gameTick && gameTick <= 180 + 1 / 60) {
                    for (var n in number_indicators_7) {
                        if (room.getDiscProperties(number_indicators_7[n]).x < 400) {
                            room.setDiscProperties(number_indicators_7[n], { x: room.getDiscProperties(number_indicators_7[n]).x + 1000 });
                        }
                    }
                    for (var n in number_indicators_6) {
                        if (room.getDiscProperties(number_indicators_6[n]).x > 400) {
                            room.setDiscProperties(number_indicators_6[n], { x: room.getDiscProperties(number_indicators_6[n]).x - 1000 });
                        }
                    }
                }
                else if (240 <= gameTick && gameTick <= 240 + 1 / 60) {
                    for (var n in number_indicators_6) {
                        if (room.getDiscProperties(number_indicators_6[n]).x < 400) {
                            room.setDiscProperties(number_indicators_6[n], { x: room.getDiscProperties(number_indicators_6[n]).x + 1000 });
                        }
                    }
                    for (var n in number_indicators_5) {
                        if (room.getDiscProperties(number_indicators_5[n]).x > 400) {
                            room.setDiscProperties(number_indicators_5[n], { x: room.getDiscProperties(number_indicators_5[n]).x - 1000 });
                        }
                    }
                }
                else if (300 <= gameTick && gameTick <= 300 + 1 / 60) {
                    for (var n in number_indicators_5) {
                        if (room.getDiscProperties(number_indicators_5[n]).x < 400) {
                            room.setDiscProperties(number_indicators_5[n], { x: room.getDiscProperties(number_indicators_5[n]).x + 1000 });
                        }
                    }
                    for (var n in number_indicators_4) {
                        if (room.getDiscProperties(number_indicators_4[n]).x > 400) {
                            room.setDiscProperties(number_indicators_4[n], { x: room.getDiscProperties(number_indicators_4[n]).x - 1000 });
                        }
                    }
                }
                else if (360 <= gameTick && gameTick <= 360 + 1 / 60) {
                    for (var n in number_indicators_4) {
                        if (room.getDiscProperties(number_indicators_4[n]).x < 400) {
                            room.setDiscProperties(number_indicators_4[n], { x: room.getDiscProperties(number_indicators_4[n]).x + 1000 });
                        }
                    }
                    for (var n in number_indicators_3) {
                        if (room.getDiscProperties(number_indicators_3[n]).x > 400) {
                            room.setDiscProperties(number_indicators_3[n], { x: room.getDiscProperties(number_indicators_3[n]).x - 1000 });
                        }
                    }
                }
                else if (420 <= gameTick && gameTick <= 420 + 1 / 60) {
                    for (var n in number_indicators_3) {
                        if (room.getDiscProperties(number_indicators_3[n]).x < 400) {
                            room.setDiscProperties(number_indicators_3[n], { x: room.getDiscProperties(number_indicators_3[n]).x + 1000 });
                        }
                    }
                    for (var n in number_indicators_2) {
                        if (room.getDiscProperties(number_indicators_2[n]).x > 400) {
                            room.setDiscProperties(number_indicators_2[n], { x: room.getDiscProperties(number_indicators_2[n]).x - 1000 });
                        }
                    }
                }
                else if (480 <= gameTick && gameTick <= 480 + 1 / 60) {
                    for (var n in number_indicators_2) {
                        if (room.getDiscProperties(number_indicators_2[n]).x < 400) {
                            room.setDiscProperties(number_indicators_2[n], { x: room.getDiscProperties(number_indicators_2[n]).x + 1000 });
                        }
                    }
                    for (var n in number_indicators_1) {
                        if (room.getDiscProperties(number_indicators_1[n]).x > 400) {
                            room.setDiscProperties(number_indicators_1[n], { x: room.getDiscProperties(number_indicators_1[n]).x - 1000 });
                        }
                    }
                }
                else if (540 <= gameTick && gameTick <= 540 + 1 / 60) {
                    for (var n in number_indicators_1) {
                        if (room.getDiscProperties(number_indicators_1[n]).x < 400) {
                            room.setDiscProperties(number_indicators_1[n], { x: room.getDiscProperties(number_indicators_1[n]).x + 1000 });
                        }
                    }
                    for (var n in number_indicators_0) {
                        if (room.getDiscProperties(number_indicators_0[n]).x > 400) {
                            room.setDiscProperties(number_indicators_0[n], { x: room.getDiscProperties(number_indicators_0[n]).x - 1000 });
                        }
                    }
                }
                else if (600 <= gameTick && gameTick <= 600 + 1 / 60) {
                    for (var n in number_indicators_0) {
                        if (room.getDiscProperties(number_indicators_0[n]).x < 400) {
                            room.setDiscProperties(number_indicators_0[n], { x: room.getDiscProperties(number_indicators_0[n]).x + 1000 });
                        }
                    }
                }
            }
        }

        this.muteAll = (player) => {
            if (player.admin == true) {
                room.sendAnnouncement(locales[locale].ChatMutedWarningMessage, null, messageColors.warning, messageFonts.warning, messageSounds.warning);
                muteall = true;
                return false;
            }
            else {
                room.sendAnnouncement(locales[playerList[player.id - 1].language].PlayerNotMutedDenyMessage, player.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
                return false;
            }
        }

        this.muteAvailableList = (player) => {
            var availablePlayers = _roomObject.players().filter(p => p.id != player.id && p.admin == false && _playerObject.isMuted(p) == false).map(p => p.name + ": [" + p.id + "]").join("\n");

            if (player.admin == true) {
                if (availablePlayers.length > 0) {
                    room.sendAnnouncement(locales[playerList[player.id - 1].language].AvailablePlayersInfoMessage + availablePlayers, player.id, messageColors.info, messageFonts.info, messageSounds.info);
                }
                else {
                    room.sendAnnouncement(locales[playerList[player.id - 1].language].NoAvailablePlayersFoundWarningMessage, player.id, messageColors.warning, messageFonts.warning, messageSounds.warning);
                }
                return false;
            }
            else {
                room.sendAnnouncement(locales[playerList[player.id - 1].language].MuteAvailableListNoAuthorizationDenyMessage, player.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
                return false;
            }
        }

        this.muteList = (player) => {
            var mutedPlayers = _roomObject.players().filter(p => _playerObject.isMuted(p) == true).map(p => p.name + ": [" + p.id + "]").join("\n");

            if (mutedPlayers.length > 0) {
                room.sendAnnouncement(locales[playerList[player.id - 1].language].MutedPlayersInfoMessage + mutedPlayers, player.id, messageColors.info, messageFonts.info, messageSounds.info);
            }
            else {
                room.sendAnnouncement(locales[playerList[player.id - 1].language].NoAvailablePlayersFoundWarningMessage, player.id, messageColors.warning, messageFonts.warning, messageSounds.warning);
            }

            return false;
        }

        this.mutePlayer = (player, message) => {
            var availablePlayers = _roomObject.players();
            var idToMute;
            var muteDuration;

            if (message.split(" ")[0] == "!mute") {
                idToMute = message.split(" ")[1];
                muteDuration = message.split(" ")[2];
            }

            if (player.admin == true) {
                if (!isNaN(idToMute)) {
                    if (!isNaN(muteDuration)) {
                        for (var i = 0; i < availablePlayers.length; i++) {
                            if (player.id == availablePlayers[i].id) {
                                if (player.id == idToMute) {
                                    room.sendAnnouncement(locales[playerList[player.id - 1].language].SelfMuteDenyMessage, player.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
                                }
                                else {
                                    if (idToMute == 0) {
                                        room.sendAnnouncement(locales[playerList[player.id - 1].language].InvalidIDToMuteDenyMessage, player.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
                                    }
                                    else if (playerList[availablePlayers[i].id - 1].isInTheRoom == false) {
                                        room.sendAnnouncement(locales[playerList[player.id - 1].language].InvalidIDToMuteDenyMessage, player.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
                                    }
                                    else {
                                        if (availablePlayers[i].admin == true) {
                                            room.sendAnnouncement(locales[playerList[player.id - 1].language].AdminMuteDenyMessage, player.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
                                        }
                                        else {
                                            if (_playerObject.isMuted(availablePlayers[i]) == true) {
                                                room.sendAnnouncement(locales[playerList[player.id - 1].language].AlreadyMutedDenyMessage, player.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
                                            }
                                            else {
                                                if (muteDuration < muteDurationLowerLimit || muteDurationUpperLimit < muteDuration) {
                                                    room.sendAnnouncement(locales[playerList[player.id - 1].language].OutOfRangeWarningMessage, player.id, messageColors.warning, messageFonts.warning, messageSounds.warning);
                                                }
                                                else {
                                                    _playerObject.mutePlayer(availablePlayers[i]);
                                                    room.sendAnnouncement(locales[locale].PlayerMutedInfoMessage + player.name + locales[locale].MutedPlayerInfoMessage + availablePlayers[i].name + locales[locale].DurationInfoMessage + muteDuration + locales[locale].MinutesInfoMessage, null, messageColors.info, messageFonts.info, messageSounds.info);
                                                    setTimeout(() => {
                                                        _playerObject.unmutePlayer(availablePlayers[i]);
                                                        room.sendAnnouncement(availablePlayers[i].name + locales[locale].PlayerAutomaticallyUnmutedInfoMessage, null, messageColors.info, messageFonts.info, messageSounds.info);
                                                    }, 60000 * muteDuration);
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                    else {
                        room.sendAnnouncement(locales[playerList[player.id - 1].language].BadInputWarningMessage, player.id, messageColors.warning, messageFonts.warning, messageSounds.warning);
                    }
                }
                else {
                    room.sendAnnouncement(locales[playerList[player.id - 1].language].BadInputWarningMessage, player.id, messageColors.warning, messageFonts.warning, messageSounds.warning);
                }

                return false;
            }
            else {
                room.sendAnnouncement(locales[playerList[player.id - 1].language].PlayerNotMutedDenyMessage, player.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
                return false;
            }
        }

        this.pointDistance = (p1, p2) => {
            return Math.hypot(p1.x - p2.x, p1.y - p2.y);
        }

        this.resetIndicators = () => {
            for (var n in number_indicators_0) {
                if (room.getDiscProperties(number_indicators_0[n]).x < 400) {
                    room.setDiscProperties(number_indicators_0[n], { x: room.getDiscProperties(number_indicators_0[n]).x + 1000 });
                }
            }
            for (var n in number_indicators_1) {
                if (room.getDiscProperties(number_indicators_1[n]).x < 400) {
                    room.setDiscProperties(number_indicators_1[n], { x: room.getDiscProperties(number_indicators_1[n]).x + 1000 });
                }
            }
            for (var n in number_indicators_2) {
                if (room.getDiscProperties(number_indicators_2[n]).x < 400) {
                    room.setDiscProperties(number_indicators_2[n], { x: room.getDiscProperties(number_indicators_2[n]).x + 1000 });
                }
            }
            for (var n in number_indicators_3) {
                if (room.getDiscProperties(number_indicators_3[n]).x < 400) {
                    room.setDiscProperties(number_indicators_3[n], { x: room.getDiscProperties(number_indicators_3[n]).x + 1000 });
                }
            }
            for (var n in number_indicators_4) {
                if (room.getDiscProperties(number_indicators_4[n]).x < 400) {
                    room.setDiscProperties(number_indicators_4[n], { x: room.getDiscProperties(number_indicators_4[n]).x + 1000 });
                }
            }
            for (var n in number_indicators_5) {
                if (room.getDiscProperties(number_indicators_5[n]).x < 400) {
                    room.setDiscProperties(number_indicators_5[n], { x: room.getDiscProperties(number_indicators_5[n]).x + 1000 });
                }
            }
            for (var n in number_indicators_6) {
                if (room.getDiscProperties(number_indicators_6[n]).x < 400) {
                    room.setDiscProperties(number_indicators_6[n], { x: room.getDiscProperties(number_indicators_6[n]).x + 1000 });
                }
            }
            for (var n in number_indicators_7) {
                if (room.getDiscProperties(number_indicators_7[n]).x < 400) {
                    room.setDiscProperties(number_indicators_7[n], { x: room.getDiscProperties(number_indicators_7[n]).x + 1000 });
                }
            }
            for (var n in number_indicators_8) {
                if (room.getDiscProperties(number_indicators_8[n]).x < 400) {
                    room.setDiscProperties(number_indicators_8[n], { x: room.getDiscProperties(number_indicators_8[n]).x + 1000 });
                }
            }
            for (var n in number_indicators_9) {
                if (room.getDiscProperties(number_indicators_9[n]).x < 400) {
                    room.setDiscProperties(number_indicators_9[n], { x: room.getDiscProperties(number_indicators_9[n]).x + 1000 });
                }
            }
        }

        this.see_off_player = (player) => {
            room.kickPlayer(player.id, locales[playerList[player.id - 1].language].ByeKickMessage, kickTypes.bye);
            return false;
        }

        this.setArrowPosition = () => {
            var activePlayer = _roomObject.findActivePlayer();
            if (room.getPlayerDiscProperties(activePlayer.id) != null) {
                room.setDiscProperties(5, { y: room.getPlayerDiscProperties(activePlayer.id).y });
                room.setDiscProperties(6, { y: room.getPlayerDiscProperties(activePlayer.id).y });
                room.setDiscProperties(7, { y: room.getPlayerDiscProperties(activePlayer.id).y - 15 });
                room.setDiscProperties(8, { y: room.getPlayerDiscProperties(activePlayer.id).y + 15 });
            }
        }

        this.set_password = (player) => {
            if (player.admin == true) {
                var password = _roomObject.getRandomString(passwordLength);
                room.setPassword(password);
                room.sendAnnouncement(locales[playerList[player.id - 1].language].PasswordSetSuccessMessage + password, player.id, messageColors.grant, messageFonts.grant, messageSounds.grant);
                return false;
            }
            else {
                room.sendAnnouncement(locales[playerList[player.id - 1].language].PasswordNotSetDenyMessage, player.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
                return false;
            }
        }

        this.setInitialPosition = (player, position) => {
            playerList[player.id - 1].initialPosition = position;
        }

        this.showScoreOnAvatar = (player) => {
            if (_playerObject.isInTheRoom(player.id) == true) {
                room.setPlayerAvatar(player.id, (playerList[player.id - 1].score).toString());
            }
        }

        this.sort_ids = () => {
            return playerList.sort((p1, p2) => (p2.id - p1.id));
        }

        this.sort_ranks = () => {
            return ranks.sort((p1, p2) => (p2.goals - p1.goals));
        }

        this.startTimer = () => {
            var id = JMap.discs.findIndex(d => d.trait == "timebar_ball_moving");
            room.setDiscProperties(id + 1, { x: JMap.discs[id].pos[0], y: JMap.discs[id].pos[1], xspeed: JMap.discs[id].speed[0], yspeed: JMap.discs[id].speed[1] });
        }

        this.startVoteSession = (player) => {
            var availablePlayers = _roomObject.players().filter(p => p.id != lastChampion.id && p.admin == false && _playerObject.isJoinTimeEnough(p, enoughTime) == true && playerList[p.id - 1].score == 0).map(p => p.name + ": [" + p.id + "]").join("\n");
            room.sendAnnouncement(locales[playerList[player.id - 1].language].VoteWarningMessage + availablePlayers, player.id, messageColors.warning, messageFonts.warning, messageSounds.warning);

            _roomObject.team_red().forEach(p => room.setPlayerTeam(p.id, teamsEnumerator.spec));
            _roomObject.team_blue().forEach(p => room.setPlayerTeam(p.id, teamsEnumerator.spec));

            kickSession = true;

            championVoteKickTimeout = setTimeout(() => {
                if (kickSession == true && playerKicked == false) {
                    room.sendAnnouncement(locales[locale].GameEndPlayerNotUsedRightWarningMessage, null, messageColors.warning, messageFonts.warning, messageSounds.warning);
                    _roomObject.checkEnd();
                }
            }, championVoteKickTime);
        }

        this.stopTimer = () => {
            var id = JMap.discs.findIndex(d => d.trait == "timebar_ball_moving");
            room.setDiscProperties(id + 1, { xspeed: 0, yspeed: 0 });
        }

        this.unmuteAll = (player) => {
            if (player.admin == true) {
                room.sendAnnouncement(locales[locale].ChatUnmutedWarningMessage, null, messageColors.warning, messageFonts.warning, messageSounds.warning);
                muteall = false;
                return false;
            }
            else {
                room.sendAnnouncement(locales[playerList[player.id - 1].language].PlayerNotUnmutedDenyMessage, player.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
                return false;
            }
        }

        this.updateAdmins = () => {
            var availablePlayers = _roomObject.players().filter(p => p != null);
            if (availablePlayers.length == 0) return;
            if (_roomObject.players().find(p => p.admin == true) != null) return;
            room.setPlayerAdmin(availablePlayers[0].id, true);
        }

        this.votePlayerForPenalizing = (player, message) => {
            var availablePlayers = _roomObject.players().filter(p => p.id != lastChampion.id && p.admin == false && _playerObject.isJoinTimeEnough(p, enoughTime) == true);

            if (kickSession == true) {
                if (player.id == lastChampion.id) {
                    for (var i = 0; i < availablePlayers.length; i++) {
                        if (parseInt(message) == availablePlayers[i].id) {
                            if (playerList[availablePlayers[i].id - 1].score > 0) {
                                _playerObject.decreaseScore(availablePlayers[i]);
                                room.sendAnnouncement(locales[playerList[player.id - 1].language].PlayerProtectedWarningMessage, player.id, messageColors.warning, messageFonts.warning, messageSounds.warning);
                                _roomObject.checkEnd();
                                return false;
                            }
                            else {
                                var date = (new Date(Date.now() + penalizeDuration)).toLocaleTimeString();
                                _playerObject.decreaseScore(availablePlayers[i]);
                                _playerObject.penalize(availablePlayers[i]);
                                room.kickPlayer(availablePlayers[i].id, locales[playerList[availablePlayers[i].id - 1].language].PlayerPenalizedKickMessage + lastChampion.name + " (" + date + ")", kickTypes.penalty);
                                playerKicked = true;
                                setTimeout(() => _playerObject.remove_penalty(playerList[availablePlayers[i].id - 1]), penalizeDuration);
                                kickSession = false;
                                _roomObject.checkEnd();
                                return false;
                            }
                        }
                    }
                    if (parseInt(message) == 0) {
                        clearTimeout(championVoteKickTimeout);
                        room.sendAnnouncement(locales[locale].GameEndPlayerNotUsedRightWarningMessage, null, messageColors.warning, messageFonts.warning, messageSounds.warning);
                        _roomObject.checkEnd();
                        return false;
                    }
                }
                else {
                    room.sendAnnouncement(locales[playerList[player.id - 1].language].DontHaveRightToPenalizeDenyMessage, player.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
                    return false;
                }
            }
        }

        this.voteBan = (player) => {
            if (playerList[player.id - 1].votesGiven == votesRequired) {
                room.kickPlayer(player.id, locales[playerList[player.id - 1].language].VoteBanMessage, kickTypes.voted);
            }
        }

        this.voteBanList = (player) => {
            var availablePlayers = _roomObject.players().filter(p => p.id != player.id && p.admin == false).map(p => p.name + ": [" + p.id + "]").join("\n");

            room.sendAnnouncement(locales[playerList[player.id - 1].language].AvailablePlayersInfoMessage + availablePlayers, player.id, messageColors.info, messageFonts.info, messageSounds.info);
            return false;
        }

        this.votePlayerForBan = (player, message) => {
            var availablePlayers = _roomObject.players();
            var idToBan;

            if (message.split(" ")[0] == "!voteban") {
                idToBan = message.split(" ")[1];
            }

            if (!isNaN(idToBan)) {
                if (availablePlayers.length >= enoughPlayers) {
                    if (_playerObject.isJoinTimeEnough(player, enoughTime) == true) {
                        if (playerList[player.id - 1].votedIds.includes(idToBan) == false) {
                            for (var i = 0; i < availablePlayers.length; i++) {
                                if (idToBan == availablePlayers[i].id) {
                                    if (idToBan == player.id) {
                                        room.sendAnnouncement(locales[playerList[player.id - 1].language].OwnVoteDenyMessage, player.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
                                    }
                                    else {
                                        if (idToBan == 0) {
                                            room.sendAnnouncement(locales[playerList[player.id - 1].language].InvalidIDToVoteDenyMessage, player.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
                                        }
                                        else if (playerList[availablePlayers[i].id - 1].isInTheRoom == false) {
                                            room.sendAnnouncement(locales[playerList[player.id - 1].language].InvalidIDToVoteDenyMessage, player.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
                                        }
                                        else {
                                            if (availablePlayers[i].admin == true) {
                                                room.sendAnnouncement(locales[playerList[player.id - 1].language].AdminVoteDenyMessage, player.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
                                            }
                                            else {
                                                if (playerList[availablePlayers[i].id - 1].votesGiven < votesRequired) {
                                                    _playerObject.increaseVotes(availablePlayers[i]);
                                                    playerList[player.id - 1].votedIds.push(idToBan);
                                                }
                                                _roomObject.voteBan(availablePlayers[i]);

                                                room.sendAnnouncement(locales[playerList[player.id - 1].language].IDVotedSuccessMessage + availablePlayers[i].name + " (" + playerList[availablePlayers[i].id - 1].votesGiven + "/" + votesRequired + ")", player.id, messageColors.grant, messageFonts.grant, messageSounds.grant);
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        else {
                            room.sendAnnouncement(locales[playerList[player.id - 1].language].UnavailableIDDenyMessage, player.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
                        }
                    }
                    else {
                        room.sendAnnouncement(locales[playerList[player.id - 1].language].EnoughMinutesRequiredDenyMessage, player.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
                    }
                }
                else {
                    room.sendAnnouncement(locales[playerList[player.id - 1].language].FourPlayersRequiredDenyMessage, player.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
                }
            }
            else {
                room.sendAnnouncement(locales[playerList[player.id - 1].language].BadInputWarningMessage, player.id, messageColors.warning, messageFonts.warning, messageSounds.warning);
            }
        }

        this.onGamePause = (byPlayer) => {
            if (byPlayer == null) {
                console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ⏸ Game paused");
            }
            else if (byPlayer != null) {
                console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ⏸ Game paused by " + byPlayer.name + " [" + byPlayer.id + "]");
            }
        }

        this.onGameStart = (byPlayer) => {
            if (byPlayer == null) {
                console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ▶️ Game started");
            }
            else if (byPlayer != null) {
                console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ▶️ Game started by " + byPlayer.name + " [" + byPlayer.id + "]");
            }
            ballKick = false;
            ballTouch = false;
            gameTick = 0;

            if (_roomObject.team_red().length > 0) {
                _roomObject.team_red().forEach(p => _playerObject.passiveTurn(p));
                _playerObject.activeTurn(_roomObject.team_red()[0]);

                _roomObject.team_red().forEach(p => { _roomObject.setInitialPosition(p, { x: room.getPlayerDiscProperties(p.id).x, y: room.getPlayerDiscProperties(p.id).y }) });
                _roomObject.setArrowPosition();
                room.sendAnnouncement(locales[locale].ActiveTurnMessage + _roomObject.findActivePlayer().name, null, messageColors.warning, messageFonts.warning, messageSounds.warning);
                _roomObject.players().forEach(p => _roomObject.showScoreOnAvatar(p));

                setTimeout(() => {
                    _roomObject.clearAllAvatars();
                }, clearAllAvatarsTimeout);
            }

            room.startRecording();
            playerKicked = false;
            kickSession = false;
        }

        this.onGameStop = (byPlayer) => {
            if (byPlayer == null) {
                console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ⏹ Game stopped");
            }
            else if (byPlayer != null) {
                console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ⏹ Game stopped by " + byPlayer.name + " [" + byPlayer.id + "]");
            }

            _roomObject.players().forEach(p => _playerObject.passiveTurn(p));

            let fname = 'HBReplay-' + (new Date()).toISOString().replace('T', '-').replace(':', 'h', 1).replace(/:.*/, 'm.hbr2');
            let recording = btoa(String.fromCharCode.apply(null, room.stopRecording()));
            let recLink = doc.createElement('a');
            recLink.href = 'data:application/octet-stream;base64,' + recording;
            recLink.innerText = 'Download recording: ' + fname;
            recLink.download = fname;
            doc.body.appendChild(recLink);
            doc.body.appendChild(doc.createElement('br'));
            return true;
        }

        this.onGameTick = () => {
            if (_roomObject.findActivePlayer() != null) {
                _roomObject.freeze();
                _roomObject.isDelayingKickOff();
                _roomObject.isKickOnTimeLimit();
                _playerObject.clearSpeedsInDangerZone();
                _playerObject.pushSpeedsInDangerZone();
                _roomObject.isPlayerInDangerZone();
                _roomObject.isPlayerSlowingDown();
            }
            _roomObject.isBallTouched();
            _roomObject.moveTimer();

            if (0 <= gameTick && gameTick <= 1 / 60 && room.getDiscProperties(11).xspeed != JMap.discs[10].speed[0]) {
                room.setDiscProperties(11, { xspeed: JMap.discs[10].speed[0] });
            }

            if (room.getDiscProperties(0).x <= 0 && ballTouch == true) {
                ballTouch = false;
            }

            gameTick++;
        }

        this.onGameUnpause = (byPlayer) => {
            if (byPlayer == null) {
                console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ▶️ Game unpaused");
            }
            else if (byPlayer != null) {
                console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ▶️ Game unpaused by " + byPlayer.name + " [" + byPlayer.id + "]");
            }
        }

        this.onKickRateLimitSet = (min, rate, burst, byPlayer) => {
            if (byPlayer == null) {
                console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ℹ️ Kick rate limit set as min: " + min + " max: " + max + " burst: " + burst);
            }
            else if (byPlayer != null) {
                console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ℹ️ Kick rate limit set by " + byPlayer.name + " [" + byPlayer.id + "] as min: " + min + " max: " + max + " burst: " + burst);
            }
        }

        this.onPlayerActivity = (player) => {
            //Do something here if you want.
        }

        this.onPlayerAdminChange = (changedPlayer, byPlayer) => {
            if (byPlayer == null) {
                if (changedPlayer.admin == true) {
                    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🔺 " + changedPlayer.name + " [" + changedPlayer.id + "] was given admin rights");

                    if (_roomObject.get_admins().length > 1) {
                        room.sendAnnouncement(locales[playerList[changedPlayer.id - 1].language].AdminLengthDenyMessage, changedPlayer.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
                        room.setPlayerAdmin(changedPlayer.id, false);
                    }
                }
                else {
                    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🔻 " + changedPlayer.name + " [" + changedPlayer.id + "]'s admin rights were taken away");
                }
            }
            else if (byPlayer != null) {
                if (changedPlayer.admin == true) {
                    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🔺 " + changedPlayer.name + " [" + changedPlayer.id + "] was given admin rights by " + byPlayer.name + " [" + byPlayer.id + "]");

                    if (_roomObject.get_admins().length > 1) {
                        room.sendAnnouncement(locales[playerList[byPlayer.id - 1].language].AdminLengthDenyMessage, byPlayer.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
                        room.setPlayerAdmin(changedPlayer.id, false);
                    }
                }
                else {
                    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🔻 " + changedPlayer.name + " [" + changedPlayer.id + "]'s admin rights were taken away by " + byPlayer.name + " [" + byPlayer.id + "]");
                }
            }
        }

        this.onPlayerBallKick = (player) => {
            console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ⚽️ " + player.name + " [" + player.id + "] has kicked the ball");

            lastPlayerTouched = player;
            ballKick = true;
            _roomObject.stopTimer();
        }

        this.onPlayerChat = (player, message) => {
            console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 💬 " + player.name + " [" + player.id + "]: " + message);

            for (var i = 0; i < badwords[playerList[player.id - 1].language].length; i++) {
                if (message.toLowerCase().match(badwords[playerList[player.id - 1].language][i])) {
                    _playerObject.increaseBadWordUsage(player);
                    room.sendAnnouncement(parseInt(playerList[player.id - 1].badWordUsage) + locales[playerList[player.id - 1].language].ProfaneMessageWarningMessage, player.id, messageColors.warning, messageFonts.warning, messageSounds.warning);
                    if (playerList[player.id - 1].badWordUsage == profaneWordCountToBan) {
                        room.kickPlayer(player.id, locales[playerList[player.id - 1].language].ProfaneMessageBanMessage, kickTypes.profane);
                        return false;
                    }
                    return false;
                }
            }

            if (_playerObject.hasSlowMode(playerList[player.id - 1].auth) == true) {
                room.sendAnnouncement(locales[playerList[player.id - 1].language].SpamWarningMessage, player.id, messageColors.warning, messageFonts.warning, messageSounds.warning);
                return false;
            }

            _playerObject.pushSlowMode(playerList[player.id - 1].auth);

            if (_roomObject.isLink(message) == true) {
                room.sendAnnouncement(locales[playerList[player.id - 1].language].LinkWarningMessage, player.id, messageColors.warning, messageFonts.warning, messageSounds.warning);
                return false;
            }

            if (_playerObject.isMuted(player) == true) {
                room.sendAnnouncement(locales[playerList[player.id - 1].language].MutedWarningMessage + " (" + message + ")", player.id, messageColors.warning, messageFonts.warning, messageSounds.warning);
                _roomObject.justSendToAdmins(player, message);
                return false;
            }

            if (kickSession == true) {
                _roomObject.votePlayerForPenalizing(player, message);
                return false;
            }

            if (muteall == true && player.admin == false) {
                room.sendAnnouncement(locales[playerList[player.id - 1].language].ChatMutedWarningMessage + " (" + message + ")", player.id, messageColors.warning, messageFonts.warning, messageSounds.warning);
                _roomObject.justSendToAdmins(player, message);
                return false;
            }

            if (message.startsWith(prefix) == true) {
                if (_roomObject.isCommand(message) == true) {
                    return Commands[message](player);
                }
                else if (_roomObject.isCommand2(message) == true) {
                    if (message.startsWith("!mute") == true) {
                        _roomObject.mutePlayer(player, message);
                        return false;
                    }
                    else if (message.startsWith("!voteban") == true) {
                        _roomObject.votePlayerForBan(player, message);
                        return false;
                    }
                }
                else if (_roomObject.isCommand4(message) == true) {
                    if (message.startsWith("!clearban") == true) {
                        _playerObject.removeBlacklist(player, message.split(" ")[1], message.split(" ")[2], message.split(" ")[3]);
                        return false;
                    }
                }
                else {
                    room.sendAnnouncement(locales[playerList[player.id - 1].language].NotCommandWarningMessage, player.id, messageColors.warning, messageFonts.warning, messageSounds.warning);
                    return false;
                }
            }
            else {
                _roomObject.changeFontColorIfAdmin(player, message);
                return false;
            }
        }

        this.onPlayerJoin = (player) => {
            console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ➡️ " + player.name + " [" + player.id + "] has joined. (auth: " + player.auth + " | conn: " + player.conn);

            if (_playerObject.hasDoubleBlanks(player.name) == true) {
                room.kickPlayer(player.id, locales[locale].DoubleBlankCharactersInNameKickMessage, kickTypes.characterValidity);
            }

            if (_playerObject.hasInvalidCharacters(player.name) == true) {
                room.kickPlayer(player.id, locales[locale].InvalidCharactersKickMessage, kickTypes.characterValidity);
            }

            if (_playerObject.hasTooShortName(minNameLength, player.name) == true) {
                room.kickPlayer(player.id, locales[locale].TooShortNameKickMessage, kickTypes.characterLength);
            }

            if (_roomObject.isLink(player.name) == true) {
                room.kickPlayer(player.id, locales[locale].JoinNameLinkBanMessage, kickTypes.spam);
            }

            if (_playerObject.isMuted(player) == true) {
                _playerObject.mutePlayer(player);
            }

            if (_playerObject.isPenalized(player.auth) == true) {
                room.kickPlayer(player.id, locales[locale].PlayerStillPenalizedKickMessage, kickTypes.penalty);
            }

            if (_playerObject.isStartingOrEndingWithBlankCharacter(player.name) == true) {
                room.kickPlayer(player.id, locales[locale].StartEndBlankCharacterKickMessage, kickTypes.characterValidity);
            }

            if (_roomObject.isDuplicatedAuth(player.auth) == true) {
                var second = playerList.find(p => playerList[p.id - 1].auth == player.auth).name;
                room.kickPlayer(player.id, locales[locale].DuplicatedAuthKickMessage + second, kickTypes.duplicate);
            }

            if (_roomObject.isDuplicatedConn(player.conn) == true) {
                var second = playerList.find(p => playerList[p.id - 1].conn == player.conn).name;
                room.kickPlayer(player.id, locales[locale].DuplicatedConnKickMessage + second, kickTypes.duplicate);
            }

            if (_roomObject.isDuplicatedName(player.name) == true) {
                room.kickPlayer(player.id, locales[locale].DuplicatedNameKickMessage, kickTypes.duplicate);
            }

            _roomObject.isProfane(player);
            _playerObject._initPlayer(player);
            _playerObject.isBlacklisted(player);
            _roomObject.checkIfEnoughPlayersOnJoin();

            room.sendAnnouncement(locales[playerList[player.id - 1].language].WelcomeMessage, player.id, messageColors.welcome, messageFonts.welcome, messageSounds.welcome);
            //_roomObject.betaTestAnnouncement();
            //_roomObject.updateAdmins();
        }

        this.onPlayerKicked = (kickedPlayer, reason, ban, byPlayer) => {
            if (byPlayer == null) {
                if (ban == 0) {
                    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ⚠️ " + kickedPlayer.name + " [" + kickedPlayer.id + "] was kicked (" + reason + ")");
                }
                else if (ban == 1) {
                    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ⛔️ " + kickedPlayer.name + " [" + kickedPlayer.id + "] was banned (" + reason + ")");

                    _roomObject.blackList(kickedPlayer, reason, ban, byPlayer);
                }
            }
            else if (byPlayer != null) {
                if (ban == 0) {
                    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ⚠️ " + kickedPlayer.name + " [" + kickedPlayer.id + "] was kicked by " + byPlayer.name + " [" + byPlayer.id + "] (" + reason + ")");
                }
                else if (ban == 1) {
                    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ⛔️ " + kickedPlayer.name + " [" + kickedPlayer.id + "] was banned by " + byPlayer.name + " [" + byPlayer.id + "] (" + reason + ")");

                    _roomObject.blackList(kickedPlayer, reason, ban, byPlayer);
                }
            }
        }

        this.onPlayerLeave = (player) => {
            console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ➡️ " + player.name + " [" + player.id + "] has left.");

            if (room.getPlayerList().length == 0) {
                room.stopGame();
            }

            if (kickSession == true) {
                if (playerKicked == false) {
                    if (player.id == lastChampion.id) {
                        kickSession = false;
                        clearTimeout(championVoteKickTimeout);
                        muteall = false;
                        room.sendAnnouncement(lastChampion.name + locales[locale].GameEndPlayerNotUsedRightWarningMessage, null, messageColors.warning, messageFonts.warning, messageSounds.warning);
                        _roomObject.checkEnd();
                    }
                }
            }

            if (room.getScores() != null) {
                if (_roomObject.isFinalKick() == false) {
                    if (player.team == 1) {
                        if (_roomObject.findActivePlayer() != undefined) {
                            //
                        }
                        else {
                            _playerObject.passiveTurn(player);
                            _roomObject.stopTimer();
                            _playerObject.activeTurn(_roomObject.team_red()[0]);
                            _roomObject.setArrowPosition();
                            _roomObject.startTimer();
                        }
                    }
                    else if (player.team == 2) {
                        room.stopGame();
                        _roomObject._moveAllToSpec();

                        setTimeout(() => {
                            var index = _roomObject.getRandomInt(room.getPlayerList().length);
                            room.setPlayerTeam(room.getPlayerList()[index].id, teamsEnumerator.blue);

                            var others = _roomObject.team_spec().filter(p => p.id != room.getPlayerList()[index].id);
                            others.forEach(p => room.setPlayerTeam(p.id, teamsEnumerator.red));
                            room.startGame();
                        }, gameRestartTimeout);
                    }
                }
                else {
                    if (player.team == 1) {
                        _roomObject.champion(_roomObject.team_blue()[0]);
                    }
                    else if (player.team == 2) {
                        _roomObject.champion(_roomObject.team_red()[0]);
                    }
                }
            }

            _roomObject.deletePlayer(player.id);
            //_roomObject.updateAdmins();
        }

        this.onPlayerTeamChange = (changedPlayer, byPlayer) => {
            if (byPlayer == null) {
                if (changedPlayer.team == 0) {
                    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🔁 " + changedPlayer.name + " [" + changedPlayer.id + "] was moved to Spectators");
                }
                else if (changedPlayer.team == 1) {
                    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🔁 " + changedPlayer.name + " [" + changedPlayer.id + "] was moved to Red");
                }
                else if (changedPlayer.team == 2) {
                    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🔁 " + changedPlayer.name + " [" + changedPlayer.id + "] was moved to Blue");
                }
            }
            else if (byPlayer != null) {
                if (changedPlayer.team == 0) {
                    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🔁 " + changedPlayer.name + " [" + changedPlayer.id + "] was moved to Spectators by " + byPlayer.name + " [" + byPlayer.id + "]");
                }
                else if (changedPlayer.team == 1) {
                    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🔁 " + changedPlayer.name + " [" + changedPlayer.id + "] was moved to Red by " + byPlayer.name + " [" + byPlayer.id + "]");
                }
                else if (changedPlayer.team == 2) {
                    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🔁 " + changedPlayer.name + " [" + changedPlayer.id + "] was moved to Blue by " + byPlayer.name + " [" + byPlayer.id + "]");
                }
            }
        }

        this.onPositionsReset = () => {
            console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ↩️ Game reset");

            ballKick = false;
            ballTouch = false;
            gameTick = 0;

            if (_roomObject.findActivePlayer() != undefined) {
                _roomObject.advanceTurn();
            }
            else if (_roomObject.findActivePlayer() == undefined) {
                _playerObject.activeTurn(_roomObject.team_red()[0]);
                room.sendAnnouncement(locales[locale].ActiveTurnMessage + _roomObject.findActivePlayer().name, null, messageColors.warning, messageFonts.warning, messageSounds.warning);
            }

            if (_roomObject.team_red().length > 0) {
                _roomObject.isFinalKick();
                _roomObject.team_red().forEach(p => { _roomObject.setInitialPosition(p, { x: room.getPlayerDiscProperties(p.id).x, y: room.getPlayerDiscProperties(p.id).y }) });
                _roomObject.setArrowPosition();
                _roomObject.players().forEach(p => _roomObject.showScoreOnAvatar(p));

                setTimeout(() => {
                    _roomObject.clearAllAvatars();
                }, clearAllAvatarsTimeout);
            }
        }

        this.onRoomLink = (url) => {
            console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🔗 Room Link: " + url);
            if (isRoomSet == false) {
                _roomObject.fillIndicators();
                isRoomSet = true;
            }
        }

        this.onStadiumChange = (newStadiumName, byPlayer) => {
            if (byPlayer == null) {
                console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 📁 " + newStadiumName + " was loaded");
            }
            else if (byPlayer != null) {
                _roomObject.loadMap(Map, 14, 14);
                room.sendAnnouncement(locales[playerList[byPlayer.id - 1].language].MapChangeDenyMessage, byPlayer.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
                console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 📁 " + byPlayer.name + " [" + byPlayer.id + "] loaded " + newStadiumName);
            }
        }

        this.onTeamGoal = (team) => {
            _roomObject.isTrashGK(_roomObject.team_blue()[0]);
            var activePlayer = _roomObject.findActivePlayer();
            var GK = _roomObject.team_blue()[0];

            console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ⚽️ GOAL! " + activePlayer.name);

            ballKick = false;
            ballTouch = false;
            gameTick = -600;

            if (team == teamsEnumerator.red) {
                room.sendAnnouncement(locales[locale].GoalMessage + activePlayer.name, null, messageColors.goal, messageFonts.goal, messageSounds.goal);
                _playerObject.increaseGoals(activePlayer);
            }
            else if (team == teamsEnumerator.blue) {
                _playerObject.increaseGoals(GK);
            }

            if (_roomObject.isFinalKick() == true) {
                if (team == teamsEnumerator.red) {
                    _roomObject.champion(_roomObject.team_red()[0]);
                    room.stopGame();
                    _roomObject.startVoteSession(_roomObject.team_red()[0]);
                }
                else if (team == teamsEnumerator.blue) {
                    _roomObject.champion(_roomObject.team_blue()[0]);
                    room.stopGame();
                    _roomObject.startVoteSession(_roomObject.team_blue()[0]);
                }
            }
            else if (_roomObject.isFinalKick() == false) {
                if (team == teamsEnumerator.red) {
                    //You can do something here if you want.
                }
                else if (team == teamsEnumerator.blue) {
                    var activePlayer = _roomObject.findActivePlayer();
                    _playerObject.passiveTurn(activePlayer);
                    room.setPlayerTeam(activePlayer.id, teamsEnumerator.spec);
                    playerList[activePlayer.id - 1].eliminationReason = eliminationReasons.miss;
                    room.sendAnnouncement(locales[playerList[activePlayer.id - 1].language].MissEliminationMessage, activePlayer.id, messageColors.elimination_miss, messageFonts.elimination_miss, messageSounds.elimination_miss);
                }
            }
        }

        this.onTeamVictory = function (scores) {
            if (scores.red > scores.blue) {
                console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🏅 Victory! Red team wins! 🔴");
                var GK = _roomObject.team_blue()[0];
                _roomObject.kickTrashGK(GK);
                setTimeout(() => _playerObject.remove_penalty(playerList[GK.id - 1]), penalizeDuration);
            }
            else {
                console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🏅 Victory! Blue team wins! 🔵");
                room.sendAnnouncement(locales[locale].TrashRedTeamWarningMessage, null, messageColors.warning, messageFonts.warning, messageSounds.warning);
                _roomObject.checkEnd();
            }
        }
    }
}

var _playerObject = new playerObject();
var _roomObject = new roomObject();

var Commands = { //Commands with one parameter (player)
    "!admin": _roomObject.get_admin,
    "!allblue": _roomObject.moveAllToBlue,
    "!allred": _roomObject.moveAllToRed,
    "!allspec": _roomObject.moveAllToSpec,
    "!bb": _roomObject.see_off_player,
    "!blacklist": _roomObject.get_blacklist,
    "!best": _roomObject.get_best,
    "!cpw": _roomObject.clear_password,
    "!dc": _roomObject.get_discord,
    "!discord": _roomObject.get_discord,
    "!en": _playerObject.switchLanguageToEnglish,
    "!help": _roomObject.get_commands,
    "!joinhistory": _roomObject.get_joinHistory,
    "!mute": _roomObject.muteAvailableList,
    "!muteall": _roomObject.muteAll,
    "!mutelist": _roomObject.muteList,
    "!pw": _roomObject.set_password,
    "!rank": _roomObject.get_rank,
    "!tr": _playerObject.switchLanguageToTurkish,
    "!unmuteall": _roomObject.unmuteAll,
    "!vote": _roomObject.voteBanList
};

var Commands2 = ["!mute", "!voteban"]; //Commands with two parameters (player,message)

var Commands4 = ["!clearban"]; //Commands with four parameters (player,auth,conn,name)

room.onGamePause = _roomObject.onGamePause;
room.onGameStart = _roomObject.onGameStart;
room.onGameStop = _roomObject.onGameStop;
room.onGameTick = _roomObject.onGameTick;
room.onGameUnpause = _roomObject.onGameUnpause;
room.onKickRateLimitSet = _roomObject.onKickRateLimitSet;
room.onPlayerActivity = _roomObject.onPlayerActivity;
room.onPlayerAdminChange = _roomObject.onPlayerAdminChange;
room.onPlayerBallKick = _roomObject.onPlayerBallKick;
room.onPlayerChat = _roomObject.onPlayerChat;
room.onPlayerJoin = _roomObject.onPlayerJoin;
room.onPlayerKicked = _roomObject.onPlayerKicked;
room.onPlayerLeave = _roomObject.onPlayerLeave;
room.onPlayerTeamChange = _roomObject.onPlayerTeamChange;
room.onPositionsReset = _roomObject.onPositionsReset;
room.onRoomLink = _roomObject.onRoomLink;
room.onStadiumChange = _roomObject.onStadiumChange;
room.onTeamGoal = _roomObject.onTeamGoal;
room.onTeamVictory = _roomObject.onTeamVictory;

_roomObject.loadMap(Map, 14, 14);

//betaTestAnnouncement = setInterval(() => { _roomObject.betaTestAnnouncement() }, betaTestAnnouncementInterval);
