// this keyword refer 'the object that is executing the current function'
// method => this refrence object its self
// function => this refrence globle object(window object in browser and global object in node)




////////// Example of this as a object
    // const video = {
    //     title: 'a',
    //     play() {
    //         console.log(this);
    //     }
    // };

    // video.stop = function() {
    //     console.log(this);
    // };

    // video.stop();

////////////////////////////////////
// example of this as a global object

// const video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     }
// };

// function playVideo() {
//     console.log(this);
// }
 
// playVideo();

/////////////////////////////////
// const video = {
//     title: 'a',
//     play() {
//         console.log(this);
//     }
// };

// function Video(title) {
//     this.title = title;
//     console.log(this);
// }
 
// const v = new Video('a'); // new operator create a object like {}



////////////////////////////////////////////////
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
       this.tags.forEach(function(tags) {
           console.log(this.title, tags);
       }, this)
    }
};
video.showTags();







