import {GoLocation, GoCalendar, GoChevronDown} from 'react-icons/go';

export const FilterSearch = () => {
  return (
    <div className="search-container">
        <span><GoLocation className='icon'/> Choose a location <GoChevronDown className='icon'/></span>
        <span><GoCalendar className='icon'/> Pick-up date <GoChevronDown className='icon'/></span>
        <span><GoCalendar className='icon'/> Return date <GoChevronDown className='icon'/></span>
        <button className="cta">Search</button>
    </div>
  )
}
