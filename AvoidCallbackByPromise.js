// Example of Promise

// let p = new Promise( (resolve, reject) => {
//     //kick of some async operation
//     setTimeout(() => {
//         // resolve(1);  
//         reject(new Error('message'));    
//     }, 2000);
    
// });
// p
// .then(result => console.log('Result', result))
// .then(error => console.log('Error', error.message));



console.log("Before");
// getUser(1, function(user) {
//     console.log('User', user);
// });
// getUser(1, getRepositories);
console.log("After");



// example of Callback hell
// getUser(1, (user) => {   
//     getRepositroies(user.gitHubUsername, (repos) => {
//         getCommits(repo, (commits) => {
//             // CALLBACK HELL OR CHRISTMAS TREE PROBLEM
//         })
//     })
// });


// function getRepositories(user) {
//   getRepositories(user.gitHubUsername, getCommits);
// }

// function getCommits() {
//   repos => {
//     getCommits(repo, displayCommits);
//   };
// }

// function displayCommits(commits) {
//   console.log(commits);
// }


getUser(1)
    .then(user => getRepositories(user.gitHubUsername))
    .then(repos => getCommits(repos[0]))
    .then(commits => console.log('Commits', commits))
    .catch(error => console.log('Error', error));




function getUser(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Reading a user from database.....");
            resolve ({ id: id, gitHubUsername: "John" });
          }, 2000);
    });
  
}

function getRepositories(username) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Calling gitHub API.......");
            resolve(["repo1", "repo1", "repo1"]);
          }, 2000);
    });
  
}

function getCommits(repo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('calling gitHub API......');
            resolve(['commit']);
        }, 2000);
    })
    
}
