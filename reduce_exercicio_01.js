/*
05 

- Apartir do código abaixo, crie um objecto em que as propriedades são os valores das propriedades 'date' e os valores das propriedades são os valores de 'value'.
{
    '3242348-9842340234': 6,
    '99e89-499958': 31,
    '8596646656666r488': 17
}
*/

const timestamps = [
    {
        date: "3242348-9842340234",
        value: 6
    },
    {
        date: '99e89-499958',
        value: 31
    },{
        date: '8596646656666r488',
        value: 17
    }
];

// const values = timestamps.reduce((acc, timestamp) => {
//     acc[timestamp.date] = timestamp.value;
//     return acc;
// }, {});
// console.log(values);

const values = timestamps.reduce((acc, {date, value}) => {
    acc[date] = value;
    return acc;
}, {});
console.log(values);