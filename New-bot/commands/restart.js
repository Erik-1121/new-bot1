module.exports = {
    name: "restart",
    run: async (client, message, args) => {
        if (message.author.id !== '625188725189771264') {
            return message.channel.send(`You cannot use this command!`)
        }
        await message.channel.send(`Restarting bot...`)
        process.exit();
    }
}