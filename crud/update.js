require('../connection')

const User = require('../models/User')

const someFunction = async () =>{
    const user = await User.findOne({username: 'finn'});
    console.log(user)
    user.password = 'nuevapassword';
    user.save();
}

const otherFunction = async () =>{
    const user = await User.findOneAndUpdate({username:'finn'},{
        name: 'Gordon'
    }, {new: true})
    console.log(user)
}

async function updateUser(){
    const user = await User.update({username:'fazt'},{
        password: 'constraseña'
    });

    console.log(user)
} 

otherFunction()
//someFunction()
//updateUser()