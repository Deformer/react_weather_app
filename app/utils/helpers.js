const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

const helpers = {
    formatHeaderFromDate:function (time_sec) {
        let date = new Date(time_sec*1000),
            day = days[date.getDay()],
            month = date.toString().split(' ')[1],
            day_of_month = date.getDate();
        return `${day}, ${month} ${day_of_month}`;
    },
    formatTemp(temp){
        return Math.round((temp - 273)*100)/100;
    }
};

export default helpers;