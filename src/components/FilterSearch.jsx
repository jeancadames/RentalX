import { useState } from 'react';
import {GoLocation, GoCalendar, GoChevronDown} from 'react-icons/go';

export const FilterSearch = () => {

  const [selected, setSelected] = useState('Choose your location');
  const [isActive, setIsActive] = useState(false);
  const states = ["California", "Texas", "Florida", "New York", "Illinois", "Colorado", "Arizona", "Georgia", "Washington", "Massachusetts"];
  return (
    <>
    <div className='search-container'>
      <div className="location-selector">
        Select your location
        <select>
          {
            states.map(state => (
              <option value={state}>{state}</option>
            ))
          }
        </select>
        {/* Select your location
        <div className="list-container">
          <div className='current-location' onClick={e => setIsActive(!isActive)}>
            {selected}
          </div>
          { isActive &&
            <div className='dropdown-list'>
              {states.map(state => (
                <div key={state} onClick={e=> {
                  setIsActive(false)
                  setSelected(e.target.textContent)
                }}
                >
                {state}
                </div>
              ))}
            </div>
          }
          </div> */}
      </div>
      <div className="date-selector">
        <p>
          Pick up date
          <GoCalendar className='icon'/>
        </p>
        <input type="date" />
      </div>
      <div className="date-selector">
        <p>
          Return date
          <GoCalendar className='icon'/>
        </p>
        <input type="date" />
      </div>
      <div className="cta">Submit</div>
    </div>
      
    </>
  )
}
