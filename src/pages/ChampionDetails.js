import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../styles/ChampionDetails.css'

function ChampionDetails() {
    const params = useParams()
    const [champion, setChampion] = useState({})
    const getChampionData = useCallback(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/cdn/${params.version}/data/en_US/champion/${params.name}.json`)
            .then(r => {
                setChampion(r.data.data[params.name])
            })
    }, [params.version, params.name])
    useEffect(() => {
        return () => {
            getChampionData()
        }
    }, [getChampionData])

    return (
        <>
            {champion.id &&
                <div className='wrapper'>
                    <img className='champion_splash' src={`${process.env.REACT_APP_BASE_URL}/cdn/img/champion/splash/${champion.id}_0.jpg`} alt={champion.name} />
                    <div className="champion_details_container">aaaaaaaaaaaaaa</div>
                </div>}
        </>
    )
}

export default ChampionDetails