// speed Limit = 70;
// 5 -> 1 point
// 12 points => suspended;
// Math.floor(1.3) => 1;

checkSpeed(130);
///////////// Below Example is same as first one
function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) console.log("Ok");
  else {
    // let points = (speed - speedLimit) / kmPerPoint
    const points = Math.floor((speed - speedLimit) / kmPerPoint);

    if (points >= 12) console.log("License suspended");
    else console.log("Ponits", points);
  }
}

// ////////////// Both example are same

function checkSpeed(speed) {
  const speedLimit = 70;
  const kmPerPoint = 5;

  if (speed < speedLimit + kmPerPoint) {
    console.log("Ok");
    return;
  }

  // let points = (speed - speedLimit) / kmPerPoint
  const points = Math.floor((speed - speedLimit) / kmPerPoint);

  if (points >= 12) console.log("License suspended");
  else console.log("Ponits", points);
}
