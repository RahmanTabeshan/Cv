import moment from "jalali-moment";

export const dateNow = {
    date: moment().locale("fa").format("jD jMMMM jYYYY") ,
    day : moment().locale("fa").format("dddd") ,
}