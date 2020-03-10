import React from 'react'
import './DisplayContent.css'

const display = (props) => {
    return (
        <div className='contentStyle'>
            <h4>{props.display}</h4>
            <div className='show'>
                <p>{props.showMore}</p>
            </div>
        </div>
    )
}
export default display;