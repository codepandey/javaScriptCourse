
///// Swith and case implementation
let role = 'guest';

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;
    case 'moderator':
        console.log('Moderator User');
        break;
    default:
        console.log('Unknown User');
}



////////////same thing with else and if condition

    if(role === 'guest') console.log('Guest User');
    else if(role === 'Moderator') console.log('Moderatro User');
    else console.log('Unknown User');
 
