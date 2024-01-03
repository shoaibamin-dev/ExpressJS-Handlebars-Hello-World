const fetch = require("node-fetch");

jest.setTimeout(30000);

test('User Name is Empty or having Null Values', async() => {
    // Get List of Users
    var response = await fetch('https://5dc588200bbd050014fb8ae1.mockapi.io/assessment')

    var data = await response.json();

    var users = await data;
    for (var i = 0; i < users.length; i++) {
        var user = users[i]
        expect(user.name).not.toBeNull()
        expect(user.name).not.toBeUndefined()
        expect(user.name).not.toHaveLength(0);

    }




});


test('User ID containing Alphabets, Empty or Null Values', async () => {
    
    // Get List of Users
    var response = await fetch('https://5dc588200bbd050014fb8ae1.mockapi.io/assessment')

    var data = await response.json();

    var users = await data;
    for (var i = 0; i < users.length; i++) {
        var user = users[i]
        expect(user.id).not.toBeNull()
        expect(user.id).not.toBeUndefined()
        expect(user.id).not.toBeNaN()

    }





});



test('Images are valid for user avatar', async () => {


    
    // Get List of Users
    var response = await fetch('https://5dc588200bbd050014fb8ae1.mockapi.io/assessment')

    var data = await response.json();

    var users = await data;
    for (var i = 0; i < users.length; i++) {
        var user = users[i];
        var userAvatar = user.avatar;
        expect(userAvatar).not.toHaveLength(0);

    }


   

});