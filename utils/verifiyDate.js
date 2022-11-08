import moment from "moment"
export const verifyDate = (date) => {
    return moment(date, 'YYYY-MM-DDTHH:MM:SSZ', true).isValid()
}