import React from 'react'
import { useNavigate } from 'react-router-dom'

function ChampionGrid(props) {
    const navigate = useNavigate()
    const onChampClick = () => {
        navigate(`/champion/${props.champion.version}/${props.champion.id}`)
    }
    return (
        <>
            <div className="champion-container" onClick={() => onChampClick()}>
                <img src={`${process.env.REACT_APP_BASE_URL}/cdn/${props.champion.version}/img/champion/${props.champion.id}.png`} alt={props.champion.name} />
                <h3>{props.champion.name}</h3>
            </div>
        </>
    )
}

export default ChampionGrid