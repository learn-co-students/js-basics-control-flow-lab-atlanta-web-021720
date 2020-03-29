function scuberGreetingForFeet(value) {
    let result;

    if (value > 2499) {
        result = "No can do."
    } else if (value > 2000) {
        result = "I will gladly take your thirty bucks."
    } else if (value < 401) {
        result = 'This one is on me!';
    }
    return result;
}

function ternaryCheckCity(value) {
    return (value === "NYC" ? 'Ok, sounds good.' : 'No go.');
    // Write your code here!
}

function switchOnCharmFromTip(value) {
    let result;
    switch (value) {
        case 'generous':
            result = "Thank you so much."
            break;
        case 'not as generous':
            result = "Thank you."
            break;
        case 'thanks for everything':
            result = "Bye."
            break;
    }
    return result;


}