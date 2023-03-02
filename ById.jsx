
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Card from './Components/Card';
const ById = () => {
    const [byId, setbyId] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        const data = axios
          .get(`https://fakestoreapi.com/products/${id}`)
          .then(function (response) {
            // handle success
            setbyId(response?.data);
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          });
      }, []);
      console.log(byId);
    console.log(id);
    return ( 
       <Card cardInfo={byId} />
     );
}
 
export default ById;