// the readmes and the test errors continue to increase in divergence...

function takeANumber(currentQueue,name){
  var queuePosition;

  currentQueue.push(name);
  queuePosition = currentQueue.length;
  return `Welcome, ${name}. You are number ${queuePosition} in line.`
}

function nowServing (currentQueue){
  var nameInternal;

  if (currentQueue.length != 0){
    nameInternal = currentQueue[0];
    currentQueue.shift();
    return `Currently serving ${nameInternal}.`
  }
  else if (currentQueue.length === 0){
    return "There is nobody waiting to be served!"
  }
}

function currentLine (currentQueue){

}
