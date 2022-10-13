

export default function formatDate (date: string){
    const months = ["Jan", "feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const newDate = new Date(date);
    const m = months[newDate.getMonth()];
    const d = newDate.getDate();
    const y = newDate.getFullYear();
    const h = newDate.getHours();
    const min = newDate.getMinutes();
    const amp = h > 12 ? "PM" : "AM";
    return `${m} ${d}, ${y} ${h%12}:${min} ${amp}`;
}