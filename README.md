## node-github-green

a Nodejs project based on "nodegit" to change git commit date, then, make your github commit log all green !

## usage

- fork this repo

- `> git clone {fork repo}`

- `> cd node-github-green`

- create a github repo as your target green file change repo

- change the `config.js`, which include ...
    - your target repo path
    - your target repo change file path
    - your target repo change file name
    - your email
    - your username
    - ...

- `> npm i`

- `> node index.js`

- if you do not set password (see the below tips), you need to return to your target file change repo, you will find the commit date has been ready, then just push it .

## tips

if you do not want to return target file and push it, you can insert your password at the `config.js`, and cancel some annotations at the `index.js` about the password. **Note** ! if you do this, you need clone the target repo with the https protocol not the git protocol .