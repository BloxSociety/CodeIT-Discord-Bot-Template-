// bot.js
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

const TOKEN = 'MTI3OTQyNjA1Mjk1MDcyNDcwMQ.GW3Ii7.5U62UShgaeepyOxNctr8Bk5sr9llZuvyT_UugQ'; // Replace with your bot's token

client.once('ready', () => {
    console.log(`Logged in as ${client.user.tag}`);
});

client.on('messageCreate', message => {
    if (message.author.bot) return; // Ignore bot messages
    
    if (message.content.toLowerCase().startsWith('code me a ')) {
        const command = message.content.slice(11).trim().toLowerCase();
        
        let response;
        switch (command) {
            case 'javascript script':
                response = 'Here is a simple JavaScript script:\n```javascript\nconsole.log("Hello World");\n```';
                break;
            case 'java program':
                response = 'Here is a simple Java program:\n```java\npublic class HelloWorld {\n    public static void main(String[] args) {\n        System.out.println("Hello World");\n    }\n}\n```';
                break;
            case 'html document':
                response = 'Here is a simple HTML document:\n```html\n<!DOCTYPE html>\n<html>\n<head>\n    <title>Hello World</title>\n</head>\n<body>\n    <h1>Hello World</h1>\n</body>\n</html>\n```';
                break;
            case 'bash script':
                response = 'Here is a simple Bash script:\n```bash\necho "Hello World"\n```';
                break;
            case '.gitignore':
                response = 'Here is a sample .gitignore file:\n```gitignore\nnode_modules/\n*.log\n```';
                break;
            case 'readme':
                response = 'Here is a sample README.md file:\n```markdown\n# Project Title\n\n## Description\nThis is a sample README file.\n```';
                break;
            default:
                response = 'Sorry, I don\'t have a script for that.';
                break;
        }
        
        message.channel.send(response);
    }
});

client.login(TOKEN);
            
