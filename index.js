'use strict'


const fs = require('fs')
const crypto = require('crypto')
const { Cred, Repository, Commit, Signature, Reference, Remote } = require('nodegit')
const { repoPath, username, email, filePath, file, from, end } = require('./config')
// const { password } = require('./config')

function getSign (date) {
    return Signature.create(username, email, parseInt(date / 1000), 8 * 60)
}

function randomBase64() {
    return crypto.createHash('sha1').update(String(parseInt(Math.random() * 10) + Date.now())).digest('base64')
}

async function code(date) {
    const content = randomBase64()
    fs.appendFileSync(filePath, `base64: ${content}\n`)

    const repo = await Repository.open(repoPath)
    const index = await repo.refreshIndex()
    
    await index.addByPath(file)
    await index.write()
    
    const commitId = await index.writeTree()
    const head = await Reference.nameToId(repo, 'HEAD')
    const parent = await repo.getCommit(head)
    
    await repo.createCommit(
        'HEAD',
        getSign(date),
        getSign(date),
        `base64: ${content}`,
        commitId,
        [parent]
    )
    
    // const remote = await Remote.lookup(repo, 'origin')
    // await remote.push(['refs/heads/master:refs/heads/master'], {
    //     callbacks: {
    //         credentials: () => Cred.userpassPlaintextNew(username, password)
    //     }
    // })

    await repo.free()
}

function sleep () {
    return new Promise((resolve) => {
        setTimeout(resolve, 300)
    })
}

async function main() {
    let fromDate = Date.parse(from)
    let endDate = Date.parse(end)

    for (let i = fromDate; i <= endDate; i += 24 * 60 * 60 * 1000) {
        await code(i)
        // await sleep()
        console.log(new Date(i))
    }
}

main().catch(e => console.error(e))