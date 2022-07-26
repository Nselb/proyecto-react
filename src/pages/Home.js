import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar';
import ChampionGrid from '../components/ChampionGrid';
import '../styles/Home.css'
function Home() {

    const [champions, setChampions] = useState([])
    const [version, setVersion] = useState('')

    const getVersion = useCallback(() => {
        axios.get(process.env.REACT_APP_BASE_URL + '/api/versions.json')
            .then(r => {
                setVersion(r.data[0])
            })
    }, [])
    const getChampions = useCallback(() => {
        const url = `${process.env.REACT_APP_BASE_URL}/cdn/${version}/data/es_MX/champion.json`
        axios.get(url)
            .then(r => {
                console.log(r.data.data)
                var array = []
                Object.keys(r.data.data).forEach((key) => {
                    array.push(r.data.data[key])
                })
                setChampions(array)
            })
    }, [version])


    useEffect(() => {
        if (!version) {
            getVersion()
        } else {
            getChampions()
        }
        return () => {
        }
    }, [version, getVersion, getChampions])


    return (
        <>
            <Navbar />
            <div className="grid-container">
                {champions.map(champion => (
                    <ChampionGrid key={champion.key} champion={champion} />
                ))}
            </div>
        </>
    )
}

export default Home