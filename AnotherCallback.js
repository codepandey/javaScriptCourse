console.log('Before');
getUser(1, (user) => {
    //console.log('User', user);

    // get the Repositories
    getRepository(user.gitHubUserName, (repos) => {
        console.log('Repos', repos);
    })
});
console.log('After');

function getUser(id, callback) {
    setTimeout(() => {
        console.log('Reading a user from database...');
        callback({id: id, gitHubUserName: 'mosh'});    
    }, 2000);
}

function getRepository(username, callback) {
    setTimeout(() => {
        console.log('Calling gitHub API...');
        callback(['repo1', 'repo2', 'repo3']);
    }, 2000)
    
}
