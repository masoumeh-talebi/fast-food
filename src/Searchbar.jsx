import React, { useState } from 'react'
import { BsSearch } from 'react-icons/bs'

function Searchbar({searchItems}) {
    const [value,setValue]= useState('')
    const onsubmit = e =>{
        e.preventDefault()
        searchItems(value)
    }
    return (
        <form onSubmit={onsubmit} className='search flex-fill align-items-center'>
            <div className='input-group'>
                <input type='text' placeholder='جستوجوی فست فود . . .'
                 className='form-control rounded-end pe-5 border-success'
                 value={value}
                 onChange={e => setValue(e.target.value)}
                 
                 />
                <BsSearch className='position-absolute top-50 translate-middle-y text-muted me-3'/>
            </div>

        </form>
    )
}

export default Searchbar
