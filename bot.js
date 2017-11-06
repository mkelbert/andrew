var Botkit = require('./node_modules/botkit/lib/Botkit.js');

var controller = Botkit.slackbot({
    debug: true,
});

var bot = controller.spawn({
    token: 'xoxb-267225294432-kqqEg4ASF3Q6QdRxPb6SduQv'
}).startRTM();


controller.hears(['ramal', 'ramais'], 'direct_message,direct_mention,mention', function(bot, message) {
    var helloText = "Olá, Alexandre[225] " + ",  Carol[200]" + "  DanielCoutinho[240],    DanielPedrotti[231],   Deyvid[215],     Diogo[222],     Franklin[242],      Germano[218],   Gustavo[233],    Kelvin[230],       Langa[221],      Marcel[212],     Marcelo[210],    Márcio[217],      Marli[201],      Rafael[216],      RafaMelo[239],      Rica[226],      Richard[214],     Sandro[202],     Sérgio[228]";

    bot.reply(message, helloText);
});
