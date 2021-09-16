import React from 'react';
import Spot from './Spot';
import img from '../images/error.png';
const Error = () => {
    const tourSpots = [
        {
            id: 1,
            name: 'Space',
            info: "Space is the expanse that exists beyond Earth and between celestial bodies. Outer space is not completely empty—it is a hard vacuum containing a low density of particles, predominantly a plasma of hydrogen and helium, as well as electromagnetic radiation, magnetic fields, neutrinos, dust, and cosmic rays. The baseline temperature of outer space, as set by the background radiation from the Big Bang, is 2.7 kelvins (−270.45 °C; −454.81 °F). The plasma between galaxies is thought to account for about half of the baryonic (ordinary) matter in the universe, having a number density of less than one hydrogen atom per cubic metre and a temperature of millions of kelvins. Local concentrations of matter have condensed into stars and galaxies. Studies indicate that 90% of the mass in most galaxies is in an unknown form, called dark matter, which interacts with other matter through gravitational but not electromagnetic forces. Observations suggest that the majority of the mass-energy in the observable universe is dark energy, a type of vacuum energy that is poorly understood. Intergalactic space takes up most of the volume of the universe, but even galaxies and star systems consist almost entirely of empty space.",
            image: img,
            price: '404'
        }
    ]

    return (
        <>
            <h1 id='pageHeader'>Our Tours (with technical difficulties)</h1>
            <hr />
            {
                tourSpots.map((spot) => {
                    return <Spot key={spot.id} info={spot}></Spot>
                })
            }
        </>
    )
}

export default Error
