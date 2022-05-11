import { SapphireClient } from '@sapphire/framework';
import { token } from '../config.json';

const client = new SapphireClient({
    intents: ['GUILDS', 'GUILD_MESSAGES'],
    caseInsensitiveCommands: true,
    defaultPrefix: '-',
    disableMentionPrefix: true,
});

client.login(token);