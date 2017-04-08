'use strict'

module.exports = {
    repoPath: 'your target repo path',
    username: 'your git username',
    
    // if you need it ,  you need use https protocal to clone your target file .
    // and cancel some annotations at index.js about the password . 
    // password: '**********',

    email: 'your git email',
    filePath: 'your target change file path',
    file: 'your target change file that you want to add',
    from: 'from date', // YYYY-MM-DD
    end: 'from date' // YYYY-MM-DD
}

// for example
// module.exports = {
//     repoPath: '../green-repo',
//     username: 'Kyoloro',
//     // password: '***',
//     email: 'kyoloro@qq.com',
//     filePath: '../green-repo/data',
//     file: 'data',
//     from: '2017-4-3', // YYYY-MM-DD
//     end: '2017-4-5' // YYYY-MM-DD
// }