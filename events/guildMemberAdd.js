module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Sunucuya hoş geldin Dostum Keyfine Bak!'); //İsmini söylemesini de istiyorsanız (username + 'Sunucuya hoş geldin!') olarak değiştirin.
};