/**
 * Created by sbelan on 4/5/2017.
 */
const city = (
    state='',
    action
) =>{
    switch (action.type){
        case 'SELECT_CITY':
            return action.city;
        case 'CLEAR_CITY':
            return '';
        default:
            return state;
    }
};

export default city;