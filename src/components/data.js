//arr =[1, 5, 8, 3, 9, 3, 2, 1, 4, 9, 10, 15, 11, 14,12,15,19,18,7,16]
// remove the duplicate and count the numbers length , splict with even and odd populate in dropdown

import React, {useState, useEffect} from 'react';

const Data = () => {
    const [list, setList]  = useState([1, 5, 8, 3, 9, 3, 2, 1, 4, 9, 10, 15, 11, 14,12,15,19,18,7,16]);
    const [evenList, setEvenList] = useState([]);
    const [oddList, setOddList] = useState([]);
    const [dupDataRemoved, setDupDataRemoved] = useState([]);
    const removeDup = (arr) => {
        return [...new Set(arr)];
    };

    const evenOdd = (arr) => {
        const even = arr.filter((num) => num % 2 === 0);
        const odd = arr.filter((num) => num % 2 !== 0);
        return {even, odd};
    };

    useEffect(() => {
        const lists = removeDup(list);
        setDupDataRemoved(lists);
        const {even, odd } = evenOdd(lists);
        setEvenList(even);
        setOddList(odd);
    }, [list]);
    return (
        <>
        
        <p>{dupDataRemoved.join(',')}</p>
        <p>Even List</p>
        <select>
            {evenList.map((num, index)=> (
                <option key={index} value={num}>
                    {num}
                </option>
            ))}
        </select>
        <p>Odd List</p>
        <select>
            {oddList.map((num, index)=> (
                <option key={index} value={num}>
                    {num}
                </option>
            ))}
        </select>
        </>
    )

}

export default Data;