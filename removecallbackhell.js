//example of Callback hell
// getUser(1, (user) => {   
//     getRepositroies(user.gitHubUsername, (repos) => {
//         getCommits(repo, (commits) => {
//             // CALLBACK HELL OR CHRISTMAS TREE PROBLEM
//         })
//     })
// });


getUser(1, (user) => getRepositroies);

// solution how to avoid call back hell

function getRepositroies(user) {
    getRepositroies(user.gitHubUsername, getCommits);
}

function getCommits(repos) {
    getCommits(repo, displayCommits);
}


function displayCommits(commits) {
    console.log(commits);
}