function scuberGreetingForFeet(ride){
  // Write your code here!
  if(ride <= 400)
  {
    return 'This one is on me!';
  }else if(ride > 2500)
  {
    return 'No can do.';
  }else if(ride > 2000)
  {
    return 'I will gladly take your thirty bucks.';
  }

}

function ternaryCheckCity(city){
  // Write your code here!
  return (city === 'NYC' ? "Ok, sounds good." : "No go." )
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let retVal = '';
  switch(tip)
  {
    case 'generous':
      retVal = 'Thank you so much.'
    break;

    case 'not as generous':
      retVal = 'Thank you.'
    break;

    default:
      retVal = 'Bye.'
    break;
  }
  return retVal;
}


describe('switchOnCharmFromTip()', function () {
  it('should return "Thank you so much." if the tip is generous', function () {
    expect(switchOnCharmFromTip('generous')).to.equal('Thank you so much.');
  });

  it('should return "Thank you." if the tip is not as generous', function () {
    expect(switchOnCharmFromTip('not as generous')).to.equal('Thank you.');
  });

  it('should return "Bye." if anything else', function () {
    expect(switchOnCharmFromTip('thanks for everything')).to.equal('Bye.');
  });
});