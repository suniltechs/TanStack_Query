// Multiple API Calls

import { useQuery } from '@tanstack/react-query'
import React from 'react'

const Test = () => {

    const repo1 = useQuery({
        queryKey: ['firstApi', 'https://api.github.com/repos/antonfrancisjeejo/flipkart-clone'],
        queryFn: firstFn
    })

    const repo2 = useQuery({
        queryKey: ['firstApi', 'https://api.github.com/repos/antonfrancisjeejo/news-app-react-alan-ai'],
        queryFn: firstFn
    })

    function firstFn({queryKey}){
        return fetch(queryKey[1]).then((res) => res.json())
    }

    if(repo1.isLoading || repo2.isLoading){
        return <h1>Data is Loading....</h1>
    }

    if(repo1.error || repo2.error){
        return <h1>Error occured when fetch data</h1>
    }


    console.log(repo1.data)


  return (
    <div className='repo-card'>
        <ul className='repo-title'>
            <li>Repo Name: {repo1.data.name}</li>
            <li>Size : {repo1.data.size}</li>
        </ul>
        <ul className='repo-title'>
            <li>Repo Name: {repo2.data.name}</li>
            <li>Size : {repo2.data.size}</li>
        </ul>
    </div>
  )
}

export default Test