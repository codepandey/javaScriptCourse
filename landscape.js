
/////// first approach
function isLandscape(width, height) {
    if (width > height) return true;
        return false;
}

/////// second approach
function isLandscape(width, height) {
    return (width > height) ? true : false;
        
}
////// third approach
function isLandscape(width, height) {
    return (width > height);
        
}

console.log(isLandscape(800, 600));