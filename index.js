console.log('Before');


// example of Callback hell
getUser(1, (user) => {   
    getRepositroies(user.gitHubUsername, (repos) => {
        getCommits(repo, (commits) => {
            // CALLBACK HELL OR CHRISTMAS TREE PROBLEM
        })
    })
});


//  Example with Promise

getUser(1)
    .then(user => getRepositroies(user.gitHubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('Commits', commits))
    .catch(err => console.log('Error', err.message));




// How to fix callback hell problem
// see this example how to fix callback Hell problem from above example
// getUser(1, getRepositroies);
// function getRepositroies(user) {
//     getRepositroies(user.gitHubUsername, getCommits);
// }
// function getCommits(repo) {
//     getCommits(repo, displayCommits);
// }
// function displayCommits(commits) {
//     console.log(commits);
// }





//Callback example
// Below that How to change callback function into promise
// function getUser(id, callback) {
//     setTimeout(() => {
//         console.log('Hii reading user from database');
//         callback({ id :id, gitHubUsername: 'Mosh'});       
//     }, 2000);    
// }

// How to change callback function into a promise
function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Hii reading user from database');
            resolve({ id :id, gitHubUsername: 'Mosh'});       
        }, 2000);
    });      
}




// This is callback function and below callback chanage into promise
// function getRepositroies(username, callback) {
//     setTimeout(() => {
//         console.log('Calling Github Api...');
//         callback(['repo1', 'repo2', 'repo3']);
//     }, 2000)
    
// }
// How to remove Callback function with promise

function getRepositroies(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling Github Api...');
            resolve(['repo1', 'repo2', 'repo3']);
        }, 2000)
    });    
}


function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Calling Github Api...');
            resolve(['commits']);
        }, 2000)
    })
}



   
