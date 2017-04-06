const setCity = (city) => {
    return{
        type:'SELECT_CITY',
        city
    }
};

const clearCity = () => {
    return {
        type: 'CLEAR_CITY'
    }
}

export {setCity, clearCity}