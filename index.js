function scuberGreetingForFeet(distance){
  // Write your code here!
  let greeting;
  if (distance < 400) {
    greeting = 'This one is on me!';
  } else if (distance > 2000 && distance < 2500) {
    greeting = 'I will gladly take your thirty bucks.';
  } else {
    greeting = 'No can do.';
  }
  return greeting;
}
function ternaryCheckCity(city){
  // Write your code here!
  let cityCheck = city === 'NYC' ? "Ok, sounds good." : "No go.";
  return cityCheck;
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let tipSpeach;
  switch(tip) {
    case 'generous':
      tipSpeach = "Thank you so much.";
      break;
    case 'not as generous':
      tipSpeach = "Thank you.";
      break;
    default:
      tipSpeach = "Bye.";
      break;
  }
  return tipSpeach;
}