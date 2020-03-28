function scuberGreetingForFeet(feet){
  let response
  if (feet <= 400) {
    response = "This one is on me!"
  } else if (feet > 2000 && feet <= 2500) {
    response = "I will gladly take your thirty bucks."
  } else if (feet > 2500) {
    response = "No can do."
  }
  return response
}

function ternaryCheckCity(city){
  let response
  city === "NYC" ? response = "Ok, sounds good." : response = "No go."
  return response
}

function switchOnCharmFromTip(tip){
  let response
  if (tip === 'generous') {
    response = "Thank you so much."
  } else if (tip === 'not as generous') {
    response = "Thank you."
  } else {
    response = "Bye."
  }
  return response
}