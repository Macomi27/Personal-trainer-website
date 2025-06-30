import React from 'react'
import './HeroSub.css'
import { FaCheckSquare, FaSearch } from 'react-icons/fa'
import { FaPerson } from 'react-icons/fa6'

const HeroSub = () => {
    return(
        <div className="heroSubSection">
            <div className="heroSubElements">
                <div className="interview">
                    <div className='search'>
                        <FaSearch className='searchIcon' />
                    </div>
                    <h4>Interview</h4>
                    <p>Aenean ac elit tortor. Curabitur dictum suscipit odio non blandit.</p>
                </div>
                <div className="training">
                    <div className='person'>
                        <FaPerson className='personIcon' />
                    </div>
                    <h4>Training</h4>
                    <p>In dignissim, nisl in pulvinar vestibulum, tortor diam facilisis tellus, laoreet cursus augue erat in diam.</p>
                </div>
                <div className="effect">
                    <div className='checkbox'>
                        <FaCheckSquare className='checkIcon' />
                    </div>
                    <h4>Effect</h4>
                    <p>Nullam sodales urna molestie, euismod lectus tempus, vehicula urna. Sed mattis risus in eros posuere ultrices.</p>
                </div>
            </div>    
        </div>
    )
}

export default HeroSub