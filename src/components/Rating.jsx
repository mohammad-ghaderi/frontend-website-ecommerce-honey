import React from 'react'

const Rating = ({value,text,color}) => {
  return (
    <div className='rating d-flex' >
        <div className='d-flex flex-row-reverse'>
            
            <span>
                <i style={{color}} className={
                    value>= 5
                    ? 'fas fa-star'
                    :value >=4.5
                        ? 'fa-solid fa-star-half-stroke fa-flip-horizontal'
                        : 'fa-regular fa-star'
                }>
                </i>
            </span>
            
            <span>
                <i style={{color}} className={
                    value>= 4
                    ? 'fas fa-star'
                    :value >=3.5
                        ? 'fa-solid fa-star-half-stroke fa-flip-horizontal'
                        : 'fa-regular fa-star'
                }>
                </i>
            </span>

            <span>
                <i style={{color}} className={
                    value>= 3
                    ? 'fas fa-star'
                    :value >=2.5
                        ? 'fa-solid fa-star-half-stroke fa-flip-horizontal'
                        : 'fa-regular fa-star'
                }>
                </i>
            </span>

            <span>
                <i style={{color}} className={
                    value>= 2
                    ? 'fas fa-star'
                    :value >=1.5
                        ? 'fa-solid fa-star-half-stroke fa-flip-horizontal'
                        : 'fa-regular fa-star'
                }>
                </i>
            </span>

            <span>
                <i style={{color}} className={
                    value>= 1
                    ? 'fas fa-star'
                    :value >=0.5
                        ? 'fa-solid fa-star-half-stroke fa-flip-horizontal'
                        : 'fa-regular fa-star'
                }>
                </i>
            </span>




        </div>

        <small>{text&& text}</small>
    </div>
  )
}

export default Rating