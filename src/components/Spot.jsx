import React,{useState} from 'react'

const Spot = ({place, remove}) => {
    const {id, image, info, name, price} = place;
    const [moreText, setMoreText] = useState(false);
    
    return <div className='tourSpot' key={id}>
        <img src={image} alt={name} />
        <h2>{name}</h2>
        <h3>${price}</h3>
        <p>
            {(moreText) ? info : `${info.substring(0,200)} ...`}
            <button onClick={() => {setMoreText(!moreText)}}>
                {(moreText) ? 'Show Less' : 'Show More'}
            </button>
        </p>
        <button className='noInterest' onClick={() => {remove(id)}}>Not Interested</button>
    </div>
}

export default Spot