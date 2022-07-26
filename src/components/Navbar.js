import React, { useCallback, useEffect, useState } from 'react'
import Select from 'react-select'
import { useNavigate } from 'react-router-dom'
import '../styles/Navbar.css'
import axios from 'axios'

function Navbar() {

    const [version, setVersion] = useState('')
    const [optionList, setOptionList] = useState([])
    const navigate = useNavigate()

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
                var optArray = []
                Object.keys(r.data.data).forEach((key) => {
                    optArray.push({ value: r.data.data[key].id, label: r.data.data[key].name })
                })
                setOptionList(optArray)
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

    const [selected, setSelected] = useState()
    useEffect(() => {
        if (selected) {
            window.location.reload()
            return (
                navigate(`/champion/${version}/${selected}`)
            )
        }
    }, [selected, version, navigate])

    return (
        <nav className='navbar'>
            <ul className='navbar-list'>
                <li className='navbar-item left'>
                    <a href="/">Home</a>
                </li>
                <li className='navbar-item center'>
                    <Select className='searchbar' options={optionList} onChange={(e) => setSelected(e.value)} isSearchable placeholder='Buscar campeon' />
                </li>
            </ul>
        </nav>
    )
}

export default Navbar