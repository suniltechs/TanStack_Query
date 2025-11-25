// Single Api Call

import React from 'react'
import { useQuery } from '@tanstack/react-query'

const Test2 = () => {
    const {isLoading, data, error} = useQuery({
        queryKey: ['firstApi'],
        queryFn: firstFn
    })

    function firstFn(){
        return fetch('https://api.github.com/repos/antonfrancisjeejo/flipkart-clone').then((res) => res.json())
    }

    if(isLoading){
        return <h1>Data is Loading....</h1>
    }

    if(error){
        return <h1>Error occured when fetch data</h1>
    }


    console.log(data)


  return (
    <div className='repo-card'>
        <ul className='repo-title'>
            <li>Repo Name: {data.name}</li>
            <li>Size : {data.size}</li>
        </ul>
    </div>
  )
}

export default Test2