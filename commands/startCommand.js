const BaseCommand = require('./baseCommand');

class StartCommand extends BaseCommand {
    constructor(container) {
        super(container);
        this.regex = /\/start\s?(.+)?/;
        this.name = '/start';
        this.desctiption = 'Start command';
    }

    async execute(msg, match) {
        this.action('sendMessage',{
            chat_id: msg.chat.id,
            text: this.trans.get('command_start_welcome', msg),
            reply_markup: {
                inline_keyboard: [
                    [{text: this.trans.get('button_start_yes'), callback_data: 'sync'}],
                    [{text: this.trans.get('button_start_no'), url: 'https://moi.health'}]
                ]
            }
        });
    }
}

module.exports = StartCommand;