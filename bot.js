var Botkit = require('./node_modules/botkit/lib/Botkit.js');

var controller = Botkit.slackbot({
    debug: true,
});

var bot = controller.spawn({
    token: 'xoxb-267225294432-c03DQvGJtG5gkvwJEQmH7Vz6'
}).startRTM();


controller.hears(['ramal', 'ramais'], 'direct_message,direct_mention,mention', function(bot, message) {
    var responseText = "Olá, veja minhas anotações dos ramais: \n " +
    " Alexandre [225] \n" +
    " Carol [200] \n" +
    " Daniel Coutinho [240] \n" +
    " Daniel Pedrotti [231] \n" +
    " Deyvid [215] \n" +
    " Diogo [222] \n" +
    " Franklin [242] \n" +
    " Germano [218] \n" +
    " Gustavo [233] \n" +
    " Kelvin [230] \n" +
    " Langa [221] \n" +
    " Marcel [212] \n" +
    " Marcelo [210] \n" +
    " Márcio [217] \n" +
    " Marli [201] \n" +
    " Rafael [216] \n" +
    " Rafa Melo [239] \n" +
    " Rica [226] \n" +
    " Richard [214] \n" +
    " Sandro [202] \n" +
    " Sérgio [228] \n";

    bot.reply(message, responseText);
});

controller.hears(['Olá', 'Oi'], 'direct_message,direct_mention,mention', function(bot, message) {
    var responseText = "Olá, meu nome é Andrewn e estou as suas ordens!";
    bot.reply(message, responseText);
});