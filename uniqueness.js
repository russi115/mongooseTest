require('./connection')

const User = require('./models/User')
const user = require('./models/User')

async function createUser(){
    const userOne = new User({
        username: 'jack',
        password: '1234'
    })
    await userOne.save();

    const userTwo = new User({
        username: 'finn',
        password: 'secure'
    })
    await userTwo.save();
}

createUser();