import React from 'react'
import Form from './Form'
import './Card.css'
import Upload from './Upload'


const Card = () => {
  return (
    <div className="card-container">
        <div className="card-header">
            <h1>Submit Your Code</h1>
        </div>
        <div className="card-body">
            <div className="right">
                <Form />
            </div>
            <div className="left">
                <Upload />
            </div>
        </div>
    </div>
  )
}

export default Card