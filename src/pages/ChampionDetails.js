import axios from 'axios'
import { Markup } from 'interweave'
import React, { useCallback, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar'
import ProgressBar from '../components/ProgressBar'
import '../styles/ChampionDetails.css'

function ChampionDetails() {

    const params = useParams()
    const [champion, setChampion] = useState({})
    const getChampionData = useCallback(() => {
        axios.get(`${process.env.REACT_APP_BASE_URL}/cdn/${params.version}/data/es_MX/champion/${params.name}.json`)
            .then(r => {
                setChampion(r.data.data[params.name])
            })
    }, [params.version, params.name])

    useEffect(() => {
        return () => {
            getChampionData()
        }
    }, [getChampionData])

    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return (
        <>
            <Navbar />
            {champion.id &&
                <div className='wrapper'>
                    <img className='champion_splash' src={`${process.env.REACT_APP_BASE_URL}/cdn/img/champion/splash/${champion.id}_0.jpg`} alt={champion.name} />
                    <div className="champion_details_container">
                        <h1>{champion.name}</h1>
                        <h2>{capitalize(champion.title)}</h2>

                        <Markup content={champion.lore} />
                        <br />
                        <div className="bars-container">
                            <ProgressBar color='black' title='Dificultad:' completed={champion.info.difficulty * 10} />
                            <ProgressBar color='darkorange' title='Ataque:' completed={champion.info.attack * 10} />
                            <ProgressBar color='brown' title='Defensa:' completed={champion.info.defense * 10} />
                            <ProgressBar color='purple' title='Magia' completed={champion.info.magic * 10} />
                        </div>
                        <ul>
                            <h3>Jugando con {champion.name}</h3>
                            {champion.allytips.map(tip => (
                                <li>
                                    {tip}
                                </li>
                            ))}
                        </ul>
                        <ul>
                            <h3>Jugando contra {champion.name}</h3>
                            {champion.enemytips.map(tip => (
                                <li>
                                    {tip}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>}
        </>
    )
}

export default ChampionDetails