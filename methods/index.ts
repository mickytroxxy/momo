export const formatTime = (timestamp:any) => {
    const date = new Date(timestamp);
    let hours:any = date.getHours();
    let minutes:any = date.getMinutes();
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    return `${hours}:${minutes}`;
};
export const formatDate = (timestamp:any) => {
    const months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const date = new Date(timestamp);
    const day = date.getDate();
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
};
