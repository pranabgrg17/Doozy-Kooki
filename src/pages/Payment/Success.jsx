import React from 'react'
import { useSearchParams } from 'react-router-dom';

const Success = () => {

    const [search] = useSearchParams()
    const info = search.get("data")
    let decodeinfo = atob(info)
    console.log(decodeinfo);
    let newInfo = JSON.parse(decodeinfo)
    console.log(newInfo);



    return (
        <div>
            Payment successful
            <h1>{newInfo.status}</h1>
        </div>
    )
}

export default Success
