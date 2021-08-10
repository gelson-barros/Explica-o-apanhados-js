/*
- Cria uma funçaõ que recebe uma data por parâmetro e retorna o horário e a data na formatação : "03:07 - domingo, 7 de junho de 2020";
- Não utilize a data-fns.
*/
let present = new Date();
const formatTimeUnit = (unit) => (unit.length === 1 ? `0${unit}` : unit);
const weekDays = [
    "domingo",
    "segunda-feira",
    "terça-feira",
    "quarta-feira",
    "quinta-feira",
    "sexta-feira",
    "sabado",
];
const monthsNames = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
];
const formataDateInfo = date => {
    const hours = formatTimeUnit(date.getHours());
    const minutes = formatTimeUnit(date.getMinutes());
    const weekDay = weekDays[date.getDay()];
    const monthDay = formatTimeUnit(date.getDate());
    const month = monthsNames[date.getMonth()];
    const year = date.getFullYear();
    return `${hours}:${minutes} - ${weekDay}, ${monthDay} de ${month} de ${year}`;
}

console.log(formataDateInfo(present))