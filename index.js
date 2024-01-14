// Code your solution in this file!
function distanceFromHqInBlocks(someValue) {
    const headquarters = 42;
    return Math.abs(someValue - headquarters);
}
function distanceFromHqInFeet(someValue) {
    const headquarters = 42;
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(someValue - headquarters);
    return distanceInBlocks * feetPerBlock;
  }
  function distanceTravelledInFeet(start, destination) {
    const headquarters = 42;
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(destination - start);
    return distanceInBlocks * feetPerBlock;
  }
    function calculatesFarePrice(start, destination) {
    const headquarters = 42;
    const feetPerBlock = 264;
    const distanceInBlocks = Math.abs(destination - start);
    const distanceInFeet = distanceInBlocks * feetPerBlock;
    if (distanceInFeet <= 400) {
     return 0;
 }else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
return 2.56;
    }else if (distanceInFeet > 2500) {
    return 'cannot travel that far';
    }else if (distanceInFeet > 2000) {
     return 25;
    }
}
