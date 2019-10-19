console.log("Before");
// getUser(1, function(user) {
//     console.log('User', user);
// });
getUser(1, getRepositories);
console.log("After");



// example of Callback hell
// getUser(1, (user) => {   
//     getRepositroies(user.gitHubUsername, (repos) => {
//         getCommits(repo, (commits) => {
//             // CALLBACK HELL OR CHRISTMAS TREE PROBLEM
//         })
//     })
// });


function getRepositories(user) {
  getRepositories(user.gitHubUsername, getCommits);
}

function getCommits() {
  repos => {
    getCommits(repo, displayCommits);
  };
}

function displayCommits(commits) {
  console.log(commits);
}

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading a user from database.....");
    callback({ id: id, gitHubUsername: "John" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Calling gitHub API.......");
    callback(["repo1", "repo1", "repo1"]);
  }, 2000);
}
