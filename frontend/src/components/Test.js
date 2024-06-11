import React, { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';
function Test(){
    const[values,setValues] = useState([])
    useEffect(() => {
        axios.get('http://localhost:3001/getitems')
        .then(values => setValues(values.data))
        .catch(err => console.log(err))
    },[])
    return(
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                        <th>image</th>
                        <th>rating</th>
                        <th>description</th>
                    </tr>
                </thead>
                <tbody>
                   { values.map(value => {
                        return<tr>
                            <td>{value.name}</td>
                            <td>{value.price}</td>
                            <td>{value.image}</td>
                            <td>{value.rating}</td>
                            <td>{value.description}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default Test;

