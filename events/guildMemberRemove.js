module.exports = member => {
    let username = member.user.username;
    member.sendMessage('Güle Güle Dostum Kendine İyi Bak!'); //İsmini söylemesini de istiyorsanız (username + 'Güle güle !') olarak değiştirin.
};