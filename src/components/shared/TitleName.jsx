import React from 'react'
import './assets/styles/TitleName.css'

const TitleName = ({inf}) => {
    return (
        <div className="title">
            <h2 className='title__name'>{inf}</h2>
        </div>
    )
}

export default TitleName