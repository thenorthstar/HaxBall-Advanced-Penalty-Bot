var Map = `{"name":"Penalty","width":420,"height":200,"spawnDistance":300,"canBeStored":false,"bg":{"type":"grass","width":500,"height":250,"kickOffRadius":10,"cornerRadius":0,"color":"008000"},"vertexes":[{"x":420,"y":600,"trait":"ballArea"},{"x":420,"y":-600,"trait":"ballArea"},{"x":285,"y":500,"trait":"gkArea"},{"x":285,"y":-500,"trait":"gkArea"},{"x":315,"y":500,"trait":"gkArea"},{"x":315,"y":-500,"trait":"gkArea"},{"x":-475,"y":-200,"trait":"penArea"},{"x":-10,"y":-190,"trait":"penArea"},{"x":-10,"y":190,"trait":"penArea"},{"x":-475,"y":200,"trait":"penArea"},{"x":300,"y":-250,"trait":"line"},{"x":300,"y":250,"trait":"line"},{"x":0,"y":9,"trait":"line"},{"x":0,"y":-9,"trait":"line"},{"x":0,"y":9,"trait":"line"},{"x":0,"y":-9,"trait":"line"},{"x":175,"y":-175,"trait":"line"},{"x":300,"y":-175,"trait":"line"},{"x":175,"y":175,"trait":"line"},{"x":300,"y":175,"trait":"line"},{"x":-120,"y":-250,"trait":"line"},{"x":-120,"y":250,"trait":"line"},{"x":-120,"y":-190,"trait":"line"},{"x":-120,"y":190,"trait":"line"},{"x":300,"y":-100,"trait":"line"},{"x":350,"y":-98,"trait":"line"},{"x":350,"y":98,"trait":"line"},{"x":300,"y":100,"trait":"line"},{"x":0,"y":-15,"trait":"powerboost"},{"x":0,"y":15,"trait":"powerboost"},{"x":400,"y":-135,"trait":"line"},{"x":400,"y":135,"trait":"line"},{"x":-120,"y":180,"trait":"timebar_moving_ball_stop"},{"x":-120,"y":120,"trait":"timebar_moving_ball_stop"}],"segments":[{"v0":0,"v1":1,"trait":"ballArea"},{"v0":2,"v1":3,"trait":"gkArea"},{"v0":4,"v1":5,"trait":"gkArea"},{"v0":6,"v1":7,"trait":"penArea"},{"v0":7,"v1":8,"curve":50,"trait":"penArea"},{"v0":8,"v1":9,"trait":"penArea"},{"v0":9,"v1":6,"trait":"penArea"},{"v0":10,"v1":11,"trait":"line"},{"v0":12,"v1":13,"curve":-180,"trait":"line"},{"v0":14,"v1":15,"curve":180,"trait":"line"},{"v0":16,"v1":17,"trait":"line"},{"v0":16,"v1":18,"trait":"line"},{"v0":18,"v1":19,"trait":"line"},{"v0":20,"v1":21,"trait":"line"},{"v0":22,"v1":23,"curve":-140,"trait":"line"},{"v0":24,"v1":25,"curve":10,"trait":"goalnet"},{"v0":25,"v1":26,"curve":10,"trait":"goalnet"},{"v0":26,"v1":27,"curve":10,"trait":"goalnet"},{"v0":28,"v1":29,"curve":180,"trait":"powerboost"},{"v0":25,"v1":30,"trait":"line"},{"v0":26,"v1":31,"trait":"line"},{"v0":32,"v1":33,"trait":"timebar_moving_ball_stop"}],"goals":[{"p0":[310,100],"p1":[310,-100],"team":"blue"},{"p0":[300,100],"p1":[-400,100],"team":"red"},{"p0":[300,-100],"p1":[-400,-100],"team":"red"},{"p0":[-10,250],"p1":[-10,-250],"team":"red"}],"discs":[{"pos":[300,100],"trait":"goalPost"},{"pos":[300,-100],"trait":"goalPost"},{"pos":[400,-135],"trait":"stanchion"},{"pos":[400,135],"trait":"stanchion"},{"pos":[-400,-385],"trait":"arrow"},{"pos":[-340,-385],"trait":"arrow"},{"pos":[-355,-400],"trait":"arrow"},{"pos":[-355,-370],"trait":"arrow"},{"pos":[-120,150],"trait":"timebar_ball_constant"},{"pos":[120,150],"trait":"timebar_ball_constant_2"},{"pos":[120,150],"trait":"timebar_ball_moving","speed":[-0.4,0]},{"pos":[1135,130],"trait":"number_indicator_0"},{"pos":[1160,130],"trait":"number_indicator_0"},{"pos":[1160,170],"trait":"number_indicator_0"},{"pos":[1135,170],"trait":"number_indicator_0"},{"pos":[1135,130],"trait":"number_indicator_1"},{"pos":[1135,170],"trait":"number_indicator_1"},{"pos":[1135,130],"trait":"number_indicator_2"},{"pos":[1160,130],"trait":"number_indicator_2"},{"pos":[1160,150],"trait":"number_indicator_2"},{"pos":[1135,150],"trait":"number_indicator_2"},{"pos":[1135,170],"trait":"number_indicator_2"},{"pos":[1160,170],"trait":"number_indicator_2"},{"pos":[1135,130],"trait":"number_indicator_3"},{"pos":[1160,130],"trait":"number_indicator_3"},{"pos":[1160,170],"trait":"number_indicator_3"},{"pos":[1135,170],"trait":"number_indicator_3"},{"pos":[1135,150],"trait":"number_indicator_3"},{"pos":[1160,150],"trait":"number_indicator_3"},{"pos":[1135,130],"trait":"number_indicator_4"},{"pos":[1160,130],"trait":"number_indicator_4"},{"pos":[1135,150],"trait":"number_indicator_4"},{"pos":[1160,170],"trait":"number_indicator_4"},{"pos":[1160,150],"trait":"number_indicator_4"},{"pos":[1160,130],"trait":"number_indicator_5"},{"pos":[1135,130],"trait":"number_indicator_5"},{"pos":[1135,150],"trait":"number_indicator_5"},{"pos":[1160,150],"trait":"number_indicator_5"},{"pos":[1160,170],"trait":"number_indicator_5"},{"pos":[1135,170],"trait":"number_indicator_5"},{"pos":[1160,130],"trait":"number_indicator_6"},{"pos":[1135,130],"trait":"number_indicator_6"},{"pos":[1135,170],"trait":"number_indicator_6"},{"pos":[1160,170],"trait":"number_indicator_6"},{"pos":[1160,150],"trait":"number_indicator_6"},{"pos":[1135,150],"trait":"number_indicator_6"},{"pos":[1135,130],"trait":"number_indicator_7"},{"pos":[1160,130],"trait":"number_indicator_7"},{"pos":[1160,170],"trait":"number_indicator_7"},{"pos":[1135,130],"trait":"number_indicator_8"},{"pos":[1160,130],"trait":"number_indicator_8"},{"pos":[1160,170],"trait":"number_indicator_8"},{"pos":[1135,170],"trait":"number_indicator_8"},{"pos":[1135,150],"trait":"number_indicator_8"},{"pos":[1160,150],"trait":"number_indicator_8"},{"pos":[1135,130],"trait":"number_indicator_9"},{"pos":[1160,130],"trait":"number_indicator_9"},{"pos":[1160,170],"trait":"number_indicator_9"},{"pos":[1135,170],"trait":"number_indicator_9"},{"pos":[1135,150],"trait":"number_indicator_9"},{"pos":[1160,150],"trait":"number_indicator_9"}],"planes":[{"normal":[0,1],"dist":-200,"trait":"ballArea","_data":{"extremes":{"normal":[0,1],"dist":-200,"canvas_rect":[-710,-600,1160,600],"a":[-710,-200],"b":[1160,-200]}}},{"normal":[0,-1],"dist":-200,"trait":"ballArea","_data":{"extremes":{"normal":[0,-1],"dist":-200,"canvas_rect":[-710,-600,1160,600],"a":[-710,200],"b":[1160,200]}}},{"normal":[0,1],"dist":-250,"bCoef":0.1,"_data":{"extremes":{"normal":[0,1],"dist":-250,"canvas_rect":[-710,-600,1160,600],"a":[-710,-250],"b":[1160,-250]}}},{"normal":[0,-1],"dist":-250,"bCoef":0.1,"_data":{"extremes":{"normal":[0,-1],"dist":-250,"canvas_rect":[-710,-600,1160,600],"a":[-710,250],"b":[1160,250]}}},{"normal":[1,0],"dist":-400,"bCoef":0.1,"_data":{"extremes":{"normal":[1,0],"dist":-400,"canvas_rect":[-710,-600,1160,600],"a":[-400,-600],"b":[-400,600]}}},{"normal":[-1,0],"dist":-400,"bCoef":0.1,"_data":{"extremes":{"normal":[-1,0],"dist":-400,"canvas_rect":[-710,-600,1160,600],"a":[400,-600],"b":[400,600]}}}],"traits":{"ballArea":{"vis":false,"bCoef":1,"cMask":["ball"]},"gkArea":{"vis":false,"bCoef":0,"cMask":["blue"]},"penArea":{"vis":false,"bCoef":0,"cMask":["red"]},"line":{"vis":true,"color":"C7E6BD","cMask":[]},"goalnet":{"vis":true,"bCoef":0.1,"color":"C7E6BD","cMask":["ball","red","blue"]},"powerboost":{"vis":false,"bCoef":-2.4,"cMask":["ball"],"color":"C7E6BD"},"goalPost":{"radius":5,"invMass":0,"bCoef":1.3,"color":"FFFFFF"},"stanchion":{"radius":3,"invMass":0,"bCoef":1,"color":"FFFFFF"},"arrow":{"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"],"radius":0},"timebar_ball_constant":{"bCoef":0,"radius":0,"invMass":0,"damping":0,"cMask":["c1"],"cGroup":["c1"]},"timebar_ball_constant_2":{"bCoef":0,"radius":0,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"]},"timebar_ball_moving":{"bCoef":0,"radius":0,"invMass":5e-324,"damping":1,"cMask":["c1"],"cGroup":["c1"]},"timebar_moving_ball_stop":{"vis":false,"bCoef":0,"cMask":["c1"],"cGroup":["c1"],"bias":-280},"number_indicator_0":{"radius":0,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"]},"number_indicator_1":{"radius":0,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"]},"number_indicator_2":{"radius":0,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"]},"number_indicator_3":{"radius":0,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"]},"number_indicator_4":{"radius":0,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"]},"number_indicator_5":{"radius":0,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"]},"number_indicator_6":{"radius":0,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"]},"number_indicator_7":{"radius":0,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"]},"number_indicator_8":{"radius":0,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"]},"number_indicator_9":{"radius":0,"invMass":0,"damping":0,"cMask":["none"],"cGroup":["none"]}},"joints":[{"d0":5,"d1":6,"color":"FF0000"},{"d0":6,"d1":7,"color":"FF0000"},{"d0":6,"d1":8,"color":"FF0000"},{"d0":9,"d1":10,"color":"718C5A"},{"d0":9,"d1":11,"color":"C7E6BD","length":[0,240]},{"d0":12,"d1":13,"color":"FF0000"},{"d0":13,"d1":14,"color":"FF0000"},{"d0":14,"d1":15,"color":"FF0000"},{"d0":12,"d1":15,"color":"FF0000"},{"d0":16,"d1":17,"color":"FF4000"},{"d0":18,"d1":19,"color":"FF8000"},{"d0":19,"d1":20,"color":"FF8000"},{"d0":20,"d1":21,"color":"FF8000"},{"d0":21,"d1":22,"color":"FF8000"},{"d0":22,"d1":23,"color":"FF8000"},{"d0":24,"d1":25,"color":"FFC000"},{"d0":25,"d1":26,"color":"FFC000"},{"d0":26,"d1":27,"color":"FFC000"},{"d0":28,"d1":29,"color":"FFC000"},{"d0":30,"d1":32,"color":"FFFF00"},{"d0":31,"d1":33,"color":"FFFF00"},{"d0":32,"d1":34,"color":"FFFF00"},{"d0":35,"d1":36,"color":"C0FF00"},{"d0":36,"d1":37,"color":"C0FF00"},{"d0":37,"d1":38,"color":"C0FF00"},{"d0":38,"d1":39,"color":"C0FF00"},{"d0":39,"d1":40,"color":"C0FF00"},{"d0":41,"d1":42,"color":"80FF00"},{"d0":42,"d1":43,"color":"80FF00"},{"d0":43,"d1":44,"color":"80FF00"},{"d0":44,"d1":45,"color":"80FF00"},{"d0":45,"d1":46,"color":"80FF00"},{"d0":47,"d1":48,"color":"40FF00"},{"d0":48,"d1":49,"color":"40FF00"},{"d0":50,"d1":51,"color":"00FF00"},{"d0":51,"d1":52,"color":"00FF00"},{"d0":52,"d1":53,"color":"00FF00"},{"d0":50,"d1":53,"color":"00FF00"},{"d0":54,"d1":55,"color":"00FF00"},{"d0":56,"d1":57,"color":"00FF40"},{"d0":57,"d1":58,"color":"00FF40"},{"d0":58,"d1":59,"color":"00FF40"},{"d0":56,"d1":60,"color":"00FF40"},{"d0":60,"d1":61,"color":"00FF40"}],"redSpawnPoints":[],"blueSpawnPoints":[],"cameraFollow":"player","kickOffReset":"full","cameraWidth":1000,"cameraHeight":1000,"maxViewWidth":2000,"ballPhysics":{"radius":10},"playerPhysics":{"radius":15}}`

var JMap = JSON.parse(Map);

let doc = document.getElementsByTagName('iframe')[0].contentDocument;

var roomName = "Advanced Penalty Bot";
var playerName = "";
var noPlayer = true;
var public = true;
var maxPlayers = 8; //Varies between 2 and 30. Visit the following link to learn how to make a room for 0 or 1 person: https://github.com/thenorthstar/MineSweeperBot-HaxBall/issues/1
var token = ""; //haxball/rs/api/getheadlesstoken
var code = "fam"; //2 or 3 characters code of country.
var lat = -90; //Varies between -90 and 90.
var lon = 0; //Varies between -180 and 180.

geo = { "code": code, "lat": lat, "lon": lon }
var room = HBInit({ roomName: roomName, playerName: playerName, noPlayer: noPlayer, public: public, maxPlayers: maxPlayers, geo, token: token });

const activities = {}

var ballKick = false;
var ballTouch = false;
var championVoteKickTime = 10000;
var championVoteKickTimeout;
var clearAllAvatarsTimeout = 5000;
var discordLink = "";
var eliminationReasons = { nothing: 0, kickOff: 1, miss: 2 };
var gameDelayingLimit = 10000;
var gameDelayingTimeout;
var gameStatus = 0;
var gameTick = 0;
var gameTickLimit = 20000;
var gameTickTimeout;
var idlist = [];
var isRoomSet = false;
var kickSession = false;
var languages = ["tr", "en"];
var lastPlayerTouched = "";
var lastChampion = null;

var locale = languages[0];
var locales = {
    tr: {
        ChampionInfoMessage: "🏆 Şampiyon oldunuz. Tebrikler!",
        KickOffDelayingEliminationMessage: "😒 Atışı geciktirdiğiniz için elendiniz.",
        MissEliminationMessage: "😂 Atışı kaçırdığınız için elendiniz.",
        AdminWarningMessage: "ℹ️ Admin olmak için discord adresimizden başvuruda bulunmanız gerekmektedir: " + discordLink,
        BestInfoMessage: "ℹ️ En skorer oyuncu: ",
        DiscordInfoMessage: "ℹ️ Discord sunucumuz: " + discordLink,
        RankInfoMessage: "ℹ️ İstatistikleriniz: ",
        TrashGKKickMessage: "⚠️ Kötü kaleci olduğunuz için odadan uzaklaştırıldınız.",
        VoteWarningMessage: "⚠️ Lütfen bir ID seçiniz, süreniz 10 saniyedir.",
        PlayerPenalizedKickMessage: "⚠️ Seçim sonucunda 5 dakika süre ile cezalandırıldınız. Seçimi yapan kişi: ",
        ProfaneMessageBanMessage: "⛔️ Odamızda küfür ve hakaret yasaktır.",
        NotCommandWarningMessage: "⚠️ Geçersiz komut! Komutları görmek için !komutlar yazınız.",
        InvalidCharactersKickMessage: "⚠️ İsminizde bir ya da daha fazla geçersiz karakter bulunmaktadır. Lütfen düzeltip tekrar deneyiniz.",
        TooShortNameKickMessage: "⚠️ Lütfen en az 3 karakterli bir isim alınız.",
        ProfaneNameBanMessage: "⛔️ Küfür ve hakaret içeren isimlerle odamıza girmeniz yasaktır.",
        DuplicatedAuthKickMessage: "🔒 Odaya birden fazla hesapla giriş yasaktır: ",
        DuplicatedConnKickMessage: "🔒 Odaya birden fazla hesapla giriş yasaktır: ",
        DuplicatedNameKickMessage: "🔒 Odada aynı isimde biri zaten var!",
        GameEndPlayerNotUsedRightWarningMessage: "⚠️ Şampiyon kickletme hakkını kullanmamayı tercih etti.",
        MapChangeDenyMessage: "🚫 Odamızda haritayı değiştirmek yasaktır.",
        TimeLimitEliminationMessage: "⏱ Süre doldu!",
        TrashRedTeamWarningMessage: "😂 Kötü takım 😂"
    },
    en: {
        ChampionInfoMessage: "🏆 You are the champion. Congratulations!",
        KickOffDelayingEliminationMessage: "😒 You were eliminated because of delaying your throw.",
        MissEliminationMessage: "😂 You have missed and were eliminated.",
        AdminWarningMessage: "ℹ️ Only the approved discord members can take administrator rights in this room: " + discordLink,
        BestInfoMessage: "ℹ️ The top scorer is: ",
        DiscordInfoMessage: "ℹ️ Our discord address: " + discordLink,
        RankInfoMessage: "ℹ️ Your statistics: ",
        TrashGKKickMessage: "⚠️ Your performance isn't fitting within the norms of this room so you were kicked.",
        VoteWarningMessage: "⚠️ Please select an ID in 10 seconds.",
        PlayerPenalizedKickMessage: "⚠️ You have been penalized for 5 minutes by ",
        ProfaneMessageBanMessage: "⛔️ Insults and humiliations are prohibited in this room.",
        NotCommandWarningMessage: "⚠️ This is not a command, type !commands to see the commands.",
        InvalidCharactersKickMessage: "⚠️ Your nickname contains one or more invalid characters. Please try with a different nickname.",
        TooShortNameKickMessage: "⚠️ Please take a nickname with at least 3 characters.",
        ProfaneNameBanMessage: "⛔️ Bad nickname.",
        DuplicatedAuthKickMessage: "🔒 Duplicated accounts are not allowed in this room: ",
        DuplicatedConnKickMessage: "🔒 Duplicated accounts are not allowed in this room: ",
        DuplicatedNameKickMessage: "🔒 This username has already been taken.",
        GameEndPlayerNotUsedRightWarningMessage: "⚠️ Champion did not use their right to make someone kicked.",
        MapChangeDenyMessage: "🚫 Map changing is not allowed in this room.",
        TimeLimitEliminationMessage: "⏱ Time's up!",
        TrashRedTeamWarningMessage: "😂 Trash team. 😂"
    }
};

var messageColors = { kick: 0x8A0303, ban: 0x8A0303, elimination_delay_kickoff: 0xFF8000, elimination_miss: 0x0080FF, deny: 0xFF0000, warning: 0xFFFF00, grant: 0x00FF00, info: 0x00FFFF, default: 0x8ED2AB, welcome: 0xFFFFFF };
var messageFonts = { kick: "bold", ban: "bold", elimination_delay_kickoff: "normal", elimination_miss: "bold", deny: "bold", warning: "bold", grant: "normal", info: "normal", default: "bold", welcome: "italic" };
var messageSounds = { kick: 0, ban: 0, elimination_delay_kickoff: 1, elimination_miss: 2, deny: 2, warning: 2, grant: 1, info: 1, default: 1, welcome: 2 };
var minNameLength = 3;
var mute_list = [];
var muteall = false;

var number_indicators_0 = [];
var number_indicators_1 = [];
var number_indicators_2 = [];
var number_indicators_3 = [];
var number_indicators_4 = [];
var number_indicators_5 = [];
var number_indicators_6 = [];
var number_indicators_7 = [];
var number_indicators_8 = [];
var number_indicators_9 = [];

var penalizeDuration = 300000;
var playerKicked = false;
var playerList = [];
var prefix = "!";
var radiusBall = JMap.ballPhysics.radius;
var radiusPlayer = JMap.playerPhysics.radius;
var teamsEnumerator = { spec: 0, red: 1, blue: 2 };
var temp_list = [];
var tolerance = 0.01;
var triggerDistance = radiusBall + radiusPlayer;

class playerObject {
    constructor() {
        this.activeTurn = (player) => {
            playerList[player.id - 1].turn = true;
        }

        this._getPlayer = (id) => {
            return playerList[id - 1];
        }

        this._initPlayer = (player) => {
            playerList[player.id - 1] = { admin: player.admin, auth: player.auth, badWordUsage: 0, conn: player.conn, eliminationReason: eliminationReasons.nothing, goals: 0, id: player.id, initialPosition: player.position, isInTheRoom: true, isKickable: false, isMuted: false, jointime: Date.now(), language: locale, name: player.name, score: 0, team: player.team, turn: false };
        }

        this.decreaseScore = (player) => {
            playerList[player.id - 1].score--;
        }

        this.hasInvalidCharacters = (string) => {
            for (var s in string) {
                return s.charCodeAt(10000);
            }
        }

        this.hasTooShortName = (length, string) => {
            return string.length < length;
        }

        this.increaseBadWordUsage = (player) => {
            (playerList[player.id - 1].badWordUsage <= 3) ? playerList[player.id - 1].badWordUsage++ : 0;
        }

        this.increaseGoals = (player) => {
            playerList[player.id - 1].goals++;
        }

        this.increaseScore = (player) => {
            playerList[player.id - 1].score++;
        }

        this.isAdmin = (player) => {
            return playerList[player.id - 1].admin;
        }

        this.isBlacklisted = (player) => {
            return JSON.parse(localStorage.getItem("banList"))[player.conn] !== undefined;
        }

        this.isEqualToPlayerID = (player, message) => {
            return parseInt(message) == player.id;
        }

        this.isInTheRoom = (id) => {
            return playerList[id - 1].isInTheRoom;
        }

        this.isJoinTimeEnough = (player, time) => {
            return playerList[player.id - 1].jointime >= time;
        }

        this.isMoving = (player) => {
            return Math.hypot(room.getPlayerDiscProperties(player.id).xspeed, room.getPlayerDiscProperties(player.id).yspeed) > 0;
        }

        this.isMuted = (player) => {
            if (mute_list.length > 0 && playerList.length > 0) {
                return mute_list.includes(playerList[player.id - 1].auth);
            }
        }

        this.isPenalized = (player) => {
            if (temp_list.length > 0 && playerList.length > 0) {
                return temp_list.includes(playerList[player.id - 1].auth);
            }
        }

        this.mutePlayer = (player) => {
            playerList[player.id - 1].isMuted = true;
        }

        this.passiveTurn = (player) => {
            playerList[player.id - 1].turn = false;
        }

        this.penalize = (player) => {
            temp_list.push(playerList[player.id - 1].auth);
        }

        this.remove_penalty = (player) => {
            temp_list.splice(temp_list.indexOf(playerList[player.id - 1].auth), 1);
        }

        this.switchLanguage = (player, language) => {
            playerList[player.id - 1].language = language;
        }

        this.unmutePlayer = (player) => {
            playerList[player.id - 1].isMuted = false;
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
            console.log(_roomObject.findActivePlayer());
            _playerObject.passiveTurn(_roomObject.team_red()[index]);

            if (0 <= index && index < _roomObject.team_red().length - 1) {
                _playerObject.activeTurn(_roomObject.team_red()[index + 1]);
            }
            else {
                _playerObject.activeTurn(_roomObject.team_red()[0]);
            }

            console.log(index);
        }

        this.champion = (player) => {
            room.sendAnnouncement(locales[locale].ChampionInfoMessage, null, messageColors.info, messageFonts.info, messageSounds.info);
            _playerObject.increaseScore(player);
            lastChampion = player;
        }

        this.checkEnd = () => {
            _roomObject.players().filter(p => p.id != lastChampion.id).forEach(p => { room.setPlayerTeam(p.id, 1); });
            room.setPlayerTeam(lastChampion.id, 2);
        }

        this.clearAllAvatars = () => {
            _roomObject.players().forEach(p => room.setPlayerAvatar(p.id,null));
        }

        this.deletePlayer = (id) => {
            playerList[id - 1].isInTheRoom = false;
        }

        this.eliminate = (player) => {
            _roomObject.advanceTurn();
            room.setPlayerTeam(player.id, 0);
            playerList[player.id - 1].eliminationReason == eliminationReasons.kickOff ? room.sendAnnouncement(locales[locale].KickOffDelayingEliminationMessage, player.id, messageColors.elimination_delay_kickoff, messageFonts.elimination_delay_kickoff, messageSounds.elimination_delay_kickoff) : room.sendAnnouncement(locales[locale].MissEliminationMessage, player.id, messageColors.elimination_miss, messageFonts.elimination_miss, messageSounds.elimination_miss);
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

        this.get_admin = (player, message) => {
            room.setPlayerAdmin(player.id, !player.admin); //You can change it due to your preference.
            //room.sendAnnouncement(locales[locale].AdminWarningMessage,player.id,messageColors.warning,messageFonts.warning,messageSounds.warning); //Is an another option.
            return false;
        }

        this.get_best = (player, message) => {
            best = _roomObject.sort_ranks[0];
            room.sendAnnouncement(locales[locale].RankInfoMessage + ": " + best, player.id, messageColors.info, messageFonts.info, messageSounds.info);
            return false;
        }

        this.get_discord = (player, message) => {
            room.sendAnnouncement(locales[locale].DiscordInfoMessage, player.id, messageColors.info, messageFonts.info, messageSounds.info);
            return false;
        }

        this.get_rank = (player, message) => {
            rank = playerList[player.id - 1].goals;
            room.sendAnnouncement(locales[locale].RankInfoMessage + ": " + rank, player.id, messageColors.info, messageFonts.info, messageSounds.info);
            return false;
        }

        this.getLastTouchTheBall = () => {
            for (var i = 0; i < _roomObject.players().length; i++) {
                if (playerList[_roomObject.players()[i].id - 1].isInTheRoom == true && room.getPlayerDiscProperties(_roomObject.players()[i].id) != null) {
                    var distanceToBall = _roomObject.pointDistance(room.getPlayerDiscProperties(_roomObject.players()[i].id), room.getDiscProperties(0));
                    if (triggerDistance - tolerance < distanceToBall && distanceToBall < triggerDistance + tolerance) {
                        _roomObject.stopTimer();
                        if (ballTouch == false) {
                            ballTouch = true;
                        }
                    }
                }
            }
        }

        this.isCommand = (command) => {
            return Commands.hasOwnProperty(command);
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

        this.isProfane = (string) => {
            return string.match("/^oç$/");
        }

        this.isTrashGK = (player) => {
            var scores = room.getScores();
            return (room.getPlayerDiscProperties(player.id) != null) && (scores.time > 0) && (scores.red >= scores.scoreLimit) && (player.team == teamsEnumerator.blue);
        }

        this.kickTrashGK = (player) => {
            if (_roomObject.isTrashGK(player)) {
                _playerObject.decreaseScore(player);
                room.kickPlayer(player.id, locales[locale].TrashGKKickMessage, false);
            }
        }

        this.loadMap = (map, scoreLimit, timeLimit) => {
            room.setCustomStadium(map);
            room.setScoreLimit(scoreLimit);
            room.setTimeLimit(timeLimit);
        }

        this.moveTimer = () => {
            if (ballKick == false && ballTouch == false) {
                if (0 <= gameTick && gameTick <= 1 / 60) {
                    for (var n in number_indicators_9) {
                        if (room.getDiscProperties(number_indicators_9[n]).x > 400) {
                            room.setDiscProperties(number_indicators_9[n], { x: room.getDiscProperties(number_indicators_9[n]).x - 1000 });
                            console.log("9 saniye kaldı.");
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
                            console.log("8 saniye kaldı.");
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
                            console.log("7 saniye kaldı.");
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
                            console.log("6 saniye kaldı.");
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
                            console.log("5 saniye kaldı.");
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
                            console.log("4 saniye kaldı.");
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
                            console.log("3 saniye kaldı.");
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
                            console.log("2 saniye kaldı.");
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
                            console.log("1 saniye kaldı.");
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
                            console.log("Son saliseler...");
                        }
                    }
                }
            }
        }

        this.pointDistance = (p1, p2) => {
            return Math.hypot(p1.x - p2.x, p1.y - p2.y);
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

        this.set_password = (player, message) => {
            if (player.admin) {
                room.setPassword(message.slice(4));
                return false;
            }
            else {
                room.sendAnnouncement(locales[locale].PasswordNotSetDenyMessage, player.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
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

        this.sort_ranks = () => {
            return playerList.sort((p1, p2) => { (p1["goals"] < p2["goals"]) ? -1 : 1 });
        }

        this.startVoteSession = (player) => {
            room.sendAnnouncement(locales[locale].VoteWarningMessage, player.id, messageColors.warning, messageFonts.warning, messageSounds.warning);
            var availablePlayers = _roomObject.players().filter(p => p.id != lastChampion.id && p.admin == false && (Date.now() - playerList[player.id - 1].jointime) < penalizeDuration && playerList[player.id - 1].isKickable == true);

            kickSession = true;

            championVoteKickTimeout = setTimeout(() => {
                if (kickSession == true && playerKicked == false) {
                    room.sendAnnouncement(locales[locale].GameEndPlayerNotUsedRightWarningMessage, null, messageColors.warning, messageFonts.warning, messageSounds.warning);
                }
            }, championVoteKickTime);
        }

        this.stopTimer = () => {
            var id = JMap.discs.findIndex(d => d.trait == "timebar_ball_moving");
            room.setDiscProperties(id + 1, { xspeed: 0, yspeed: 0, damping: 0 });
        }

        this.votePlayerForPenalizing = (player, message) => {
            var availablePlayers = _roomObject.players().filter(p => p.id != lastChampion.id && p.admin == false && (Date.now() - playerList[player.id - 1].jointime) < penalizeDuration && playerList[player.id - 1].isKickable == true);

            if (kickSession == true) {
                for (var i = 0; i < availablePlayers.length; i++) {
                    if (parseInt(message) == availablePlayers[i].id) {
                        _playerObject.decreaseScore(availablePlayers[i]);
                        _playerObject.penalize(availablePlayers[i]);
                        room.kickPlayer(availablePlayers[i].id, locales[locale].PlayerPenalizedKickMessage, false);
                        playerKicked = true;
                        setTimeout(() => _playerObject.remove_penalty(playerList[availablePlayers[i].id - 1]), penalizeDuration);
                        kickSession = false;
                        return false;
                    }
                }
            }

        }

        this.onGamePause = (byPlayer) => {
            if (byPlayer == null) {
                console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ⏸ Game paused");
            }
            else if (byPlayer != null) {
                console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ⏸ Game paused by " + byPlayer.name + " [" + byPlayer.id + "]");
            }
            for (var i = 0; i < players.length; i++) {
                activities[players[i].id] = Date.now();
            }
        }

        this.onGameStart = (byPlayer) => {
            if (byPlayer == null) {
                console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ▶️ Game started");
                _roomObject.advanceTurn();
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
                _roomObject.players().forEach(p => _roomObject.showScoreOnAvatar(p));

                setTimeout(() => {
                    _roomObject.clearAllAvatars();
                },clearAllAvatarsTimeout);
            }

            var activePlayer = _roomObject.findActivePlayer();

            gameDelayingTimeout = setTimeout(() => {
                if (room.getPlayerDiscProperties(activePlayer.id) != null && room.getScores().time == 0) {
                    _playerObject.passiveTurn(activePlayer);
                    playerList[activePlayer.id - 1].eliminationReason = eliminationReasons.kickOff;
                    _roomObject.eliminate(activePlayer);
                }
            }, gameDelayingLimit);

            gameTickTimeout = setTimeout(() => {
                if (room.getPlayerDiscProperties(activePlayer.id) != null && (room.getScores().red + room.getScores().blue == 0)) {
                    room.sendAnnouncement(locales[locale].TimeLimitEliminationMessage, null, messageColors.elimination_miss, messageFonts.elimination_miss, messageSounds.elimination_miss);
                    _playerObject.passiveTurn(activePlayer);
                    playerList[activePlayer.id - 1].eliminationReason = eliminationReasons.miss;
                    _roomObject.eliminate(activePlayer);
                }
            }, gameTickLimit);

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

                clearTimeout(gameDelayingTimeout);
                clearTimeout(gameTickTimeout);
            }

            _roomObject.players().forEach(p => _playerObject.passiveTurn(p));

            let fname = 'HBReplay' + (new Date()).toISOString().replace('T', '-').replace(':', 'h', 1).replace(/:.*/, 'm.hbr2');
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
            }
            _roomObject.getLastTouchTheBall();
            _roomObject.moveTimer();
            _roomObject.sort_ranks();
            gameTick++;
        }

        this.onGameUnpause = (byPlayer) => {
            if (byPlayer == null) {
                console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ▶️ Game unpaused");
            }
            else if (byPlayer != null) {
                console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ▶️ Game unpaused by " + byPlayer.name + " [" + byPlayer.id + "]");
            }
            for (var i = 0; i < players.length; i++) {
                activities[players[i].id] = Date.now();
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
            activities[player.id] = Date.now();
        }

        this.onPlayerAdminChange = (changedPlayer, byPlayer) => {
            if (byPlayer == null) {
                if (changedPlayer.admin == true) {
                    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🔺 " + changedPlayer.name + " [" + changedPlayer.id + "] was given admin rights");
                }
                else if (changedPlayer.admin == false) {
                    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🔻 " + changedPlayer.name + " [" + changedPlayer.id + "]'s admin rights were taken away");
                }
            }
            else if (byPlayer != null) {
                if (changedPlayer.admin == true) {
                    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🔺 " + changedPlayer.name + " [" + changedPlayer.id + "] was given admin rights by " + byPlayer.name + " [" + byPlayer.id + "]");
                }
                if (changedPlayer.admin == false) {
                    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 🔻 " + changedPlayer.name + " [" + changedPlayer.id + "]'s admin rights were taken away by " + byPlayer.name + " [" + byPlayer.id + "]");
                }
            }
        }

        this.onPlayerBallKick = (player) => {
            lastPlayerTouched = player;
            ballKick = true;
            _roomObject.stopTimer();
        }

        this.onPlayerChat = (player, message) => {
            if (_roomObject.isProfane(message)) {
                _playerObject.increaseBadWordUsage(player);
                if (playerList[player.id - 1].badWordUsage == 3) {
                    room.kickPlayer(player.id, locales[locale].ProfaneMessageBanMessage, true);
                }
                return false;
            }

            if (message.startsWith(prefix) == true && _roomObject.isCommand(message)) {
                return Commands[message](player, message);
            }
            else {
                room.sendAnnouncement(locales[locale].NotCommandWarningMessage, player.id, messageColors.warning, messageFonts.warning, messageSounds.warning);
            }
        }

        this.onPlayerJoin = (player) => {
            if (_playerObject.hasInvalidCharacters(player.name) == true) {
                room.kickPlayer(player.id, locales[locale].InvalidCharactersKickMessage, true);
            }

            if (_playerObject.hasTooShortName(player.name, minNameLength) == true) {
                room.kickPlayer(player.id, locales[locale].TooShortNameKickMessage, false);
            }

            if (_playerObject.isMuted(player) == true) {
                _playerObject.mutePlayer(player);
            }

            if (_playerObject.isPenalized(player) == true) {
                room.kickPlayer(player.id, locales[locale].PlayerPenalizedKickMessage, false);
            }

            if (_roomObject.isProfane(player.name) == true) {
                room.kickPlayer(player.id, locales[locale].ProfaneNameBanMessage, true);
            }

            /*if (_roomObject.isDuplicatedAuth(player.auth) == true) {
                var second = playerList.find(p => playerList[p.id - 1].auth == player.auth).name;
                room.kickPlayer(player.id, locales[locale].DuplicatedAuthKickMessage + second, false);
            }

            if (_roomObject.isDuplicatedConn(player.conn) == true) {
                var second = playerList.find(p => playerList[p.id - 1].conn == player.conn).name;
                room.kickPlayer(player.id, locales[locale].DuplicatedConnKickMessage + second, false);
            }

            if (_roomObject.isDuplicatedAuth(player.name) == true) {
                room.kickPlayer(player.id, locales[locale].DuplicatedNameKickMessage, false);
            }*/

            _playerObject._initPlayer(player);
        }

        this.onPlayerKicked = (kickedPlayer, reason, ban, byPlayer) => {
            if (byPlayer == null) {
                if (ban == 0) {
                    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ⚠️ " + kickedPlayer.name + " [" + kickedPlayer.id + "] was kicked (" + reason + ")");
                }
                else if (ban == 1) {
                    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ⛔️ " + kickedPlayer.name + " [" + kickedPlayer.id + "] was banned (" + reason + ")");

                    cachedBan[toBan[kickedPlayer.id]['conn']] = { auth: toBan[kickedPlayer.id]['auth'], name: kickedPlayer.name };
                    _roomObject.storeBans();
                    _roomObject.getBanList();
                }
            }
            else if (byPlayer != null) {
                if (ban == 0) {
                    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ⚠️ " + kickedPlayer.name + " [" + kickedPlayer.id + "] was kicked by " + byPlayer.name + " [" + byPlayer.id + "] (" + reason + ")");
                }
                else if (ban == 1) {
                    console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " ⛔️ " + kickedPlayer.name + " [" + kickedPlayer.id + "] was banned by " + byPlayer.name + " [" + byPlayer.id + "] (" + reason + ")");

                    cachedBan[toBan[kickedPlayer.id]['conn']] = { auth: toBan[kickedPlayer.id]['auth'], name: kickedPlayer.name };
                    _roomObject.storeBans();
                    _roomObject.getBanList();
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
                        room.sendAnnouncement(lastChampion.name + locales[locale].GameEndPlayerNotUsedRightWarningMessage, null, 0xFFFF00, "bold", 2);
                    }
                }
            }
            delete activities[player.id];

            _roomObject.deletePlayer(player.id);
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
                activities[byPlayer.id] = Date.now();
            }
            activities[changedPlayer.id] = Date.now();
        }

        this.onPositionsReset = () => {
            console.log("Positions reset!");
            clearTimeout(gameDelayingTimeout);
            clearTimeout(gameTickTimeout);

            ballKick = false;
            ballTouch = false;
            gameTick = 0;

            _roomObject.advanceTurn();

            if (_roomObject.team_red().length > 0) {
                _roomObject.isFinalKick();
                _roomObject.team_red().forEach(p => { _roomObject.setInitialPosition(p, { x: room.getPlayerDiscProperties(p.id).x, y: room.getPlayerDiscProperties(p.id).y }) });
                _roomObject.setArrowPosition();
                _roomObject.players().forEach(p => _roomObject.showScoreOnAvatar(p));

                setTimeout(() => {
                    _roomObject.clearAllAvatars();
                },clearAllAvatarsTimeout);
            }

            var activePlayer = _roomObject.findActivePlayer();

            gameDelayingTimeout = setTimeout(() => {
                if (room.getPlayerDiscProperties(activePlayer.id) != null) {
                    _playerObject.passiveTurn(activePlayer);
                    playerList[activePlayer.id - 1].eliminationReason = eliminationReasons.kickOff;
                    _roomObject.eliminate(activePlayer);
                }
            }, gameDelayingLimit);

            gameTickTimeout = setTimeout(() => {
                if (room.getPlayerDiscProperties(activePlayer.id) != null) {
                    room.sendAnnouncement(locales[locale].TimeLimitEliminationMessage, null, messageColors.elimination_miss, messageFonts.elimination_miss, messageSounds.elimination_miss);
                    _playerObject.passiveTurn(activePlayer);
                    playerList[activePlayer.id - 1].eliminationReason = eliminationReasons.miss;
                    _roomObject.eliminate(activePlayer);
                }
            }, gameTickLimit);

            /*for (var i = 0; i < players.length; i++) {
                activities[players[i].id] = Date.now();
                room.setPlayerAvatar(players[i].id);
                if (players[i].team == 1) {
                    room.setPlayerDiscProperties(players[i].id, { cGroup: 268435456 });
                }
            }*/
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
                room.sendAnnouncement(locales[locale].MapChangeDenyMessage, byPlayer.id, messageColors.deny, messageFonts.deny, messageSounds.deny);
                console.log(new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds() + "." + new Date().getMilliseconds() + " 📁 " + byPlayer.name + " [" + byPlayer.id + "] loaded " + newStadiumName);
            }
        }

        this.onTeamGoal = (team) => {
            _roomObject.isTrashGK(_roomObject.team_blue()[0]);
            var activePlayer = _roomObject.findActivePlayer();
            var GK = _roomObject.team_blue()[0];

            console.log("GOAL! " + activePlayer.name);

            if (team == teamsEnumerator.red) {
                _playerObject.increaseGoals(activePlayer);
                //_roomObject.checkEnd();
            }
            else if (team == teamsEnumerator.blue) {
                _playerObject.increaseGoals(GK);
                //_roomObject.checkEnd();
            }

            if (_roomObject.isFinalKick() == true) {
                if (team == teamsEnumerator.red) {
                    _roomObject.champion(_roomObject.team_red()[0]);
                    _roomObject.startVoteSession(_roomObject.team_red()[0]);
                }
                else if (team == teamsEnumerator.blue) {
                    _roomObject.champion(_roomObject.team_blue()[0]);
                    _roomObject.startVoteSession(_roomObject.team_blue()[0]);
                }
                //Şampiyon olunduğunda golü atan oyuncu kendisi, admin, korumalı ya da odaya yeni gelmiş oyuncular haricinde birini kickletir.
            }
            else if (_roomObject.isFinalKick() == false) {
                if (team == teamsEnumerator.red) {
                    //Go!
                }
                else if (team == teamsEnumerator.blue) {
                    var activePlayer = _roomObject.findActivePlayer();
                    _roomObject.eliminate(activePlayer); //Topa son dokunan kırmızı oyuncu elenir.
                }
            }
        }

        this.onTeamVictory = function (scores) {
            if (scores.red > scores.blue) {
                _roomObject.kickTrashGK(_roomObject.team_blue()[0]);
            }
            else {
                room.sendAnnouncement(locales[locale].TrashRedTeamWarningMessage, null, messageColors.warning, messageFonts.warning, messageSounds.warning);
                _roomObject.checkEnd();
            }
        }
    }
}

var _playerObject = new playerObject();
var _roomObject = new roomObject();

var Commands = {
    "!admin": _roomObject.get_admin,
    "!best": _roomObject.get_best,
    "!dc": _roomObject.get_discord,
    "!discord": _roomObject.get_discord,
    "!pw": _roomObject.set_password,
    "!rank": _roomObject.get_rank
};

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