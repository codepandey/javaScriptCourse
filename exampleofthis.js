// How to change the value of this inside a function
// 
//////////////////////////////////////////
// this is not a perfect solutin and avoid to use it

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         // const self = this;
//        this.tags.forEach(function(tags) {
//            console.log(this.title, tags);
//        }.bind(this));
//     }
// };
// video.showTags();


////////////////////////////////////////////
// we can remove bind method with ECMA6 new featrure arrow function
//// Arrow function inherite this from the containg function
const video = {
    title: 'a',
    tags: ['a', 'b', 'c'],
    showTags() {
        // const self = this;
       this.tags.forEach((tags) => {
           console.log(this.title, tags);
       });
    }
};
video.showTags();
///////////////////////////////////////////

// const video = {
//     title: 'a',
//     tags: ['a', 'b', 'c'],
//     showTags() {
//         const self = this;
//        this.tags.forEach(function(tags) {
//            console.log(self.title, tags);
//        })
//     }
// };
// video.showTags();



////////////////////////////////////////////////////////////////
// function playVideo(a, b) {
//     console.log(this);
// }
// // if you have argumnet in your function you can pass as a argemnt in call method and in apply u hv to pass inside arry[]
// playVideo.call({name: 'Rahul'}, 1, 2); 
// playVideo.apply({name: 'Rahul'}, [1, 2]);
// // const fn = playVideo.bind({name: 'Rahul'});
// // fn();
// playVideo.bind({name: 'Rahul'}) (); // this is same as above bind method

// playVideo();