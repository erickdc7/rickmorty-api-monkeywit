import React from 'react'

const Pagination = ({ prev, next, onPrevious, onNext }) => {
    const handlePrevious = () => {
        onPrevious();
    }

    const handleNext = () => {
        onNext();
    }

    return (
        <nav className='my-5'>
            <ul className='pagination justify-content-end'>
                {
                    prev
                        ? (
                            <li className='page-item'>
                                <button className='page-link' onClick={handlePrevious}>Previous</button>
                            </li>
                        )
                        : (
                            <li className='page-item'>
                                <button className='page-link disabled' onClick={handlePrevious} >Previous</button>
                            </li>
                        )
                }
                {
                    next
                        ? (
                            <li className='page-item'>
                                <button className='page-link' onClick={handleNext}>Next</button>
                            </li>
                        )
                        : (
                            <li className='page-item'>
                                <button className='page-link disabled' onClick={handleNext} >Next</button>
                            </li>
                        )
                }
            </ul>
        </nav>
    )
}

export default Pagination