import React from 'react'
import './Left.css'

const Left = () => {
  return (
    <div>
        <div className="form">
          <div className="form-group">
            <div className="input-group">
              <input type="text" id="name" required className="input" />
              <label htmlFor="name" className="input-label">
                Name
              </label>
              <input type="text" id="name" required className="input" />
              <label htmlFor="name" className="input-label">
                Email
              </label>
              <input type="text" id="name" required className="input" />
              <label htmlFor="name" className="input-label">
                Department
              </label>
              <input type="tel" id="tel" required className="input" />
              <label htmlFor="tel" className="input-label">
                Telephone
              </label>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Left