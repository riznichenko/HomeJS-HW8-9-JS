
////// 1 задание

// let searchCandidatesByPhoneNumber = condidateArr.filter(it => it.phone.includes('43'));//indexOf использовать , обрезать символы и склеить потом 
// console.log(searchCandidatesByPhoneNumber);


////// 2 задание 
// Создать функию которая найдет кандидата по  _id и вернет его из массива candidatesArr c отформатированной датой регистрации (поле registred). 
// Дата должна иметь формат DD/MM/YY.

// const getCandidateById = id => {
//     let search = condidateArr.find(el => el._id == id);
//     return search;
// };

// console.log(getCandidateById('5e216bc9a6059760578aefa4')); 

// {
//    _id: '5e216bc9a6059760578aefa4',
//    name: 'Bernice Walton',
//    registred: '05/11/2015',
//    ... other properties in candidate 
// }




let obj = {
    name : null,
    fullName : undefined,
    id: 12,
    isStudents: false,
};

function validator(obj) {
    const userArr = Object.entries(obj);
    const newObj = userArr.reduce((accum, [key, value], i) => {///доделать
        if(value != null && value !==undefined) {
            return {...accum , [key]:value};            
        }
        return accum;
    }, {})
    return newObj;
}

// function validator(obj) {
//     const userArr = Object.entries(obj);
//     const newObj = userArr.reduce((accum, curr, i) => {
//         if(curr[1] != null && curr[1] !==undefined) {
//             return {...accum , [curr[0]]:curr[1]};            
//         }
//         return accum;
//     }, {})
//     return newObj;
// }
console.log(validator(obj))



try {
    const user = JSON.parse('{"age": 12)}')
    if(!user.name) {
    throw new ReferenceError('field name not find ');
    }
}catch (e) {
    alert(e.name);
}









