import React, { useEffect, useState } from 'react'
import axios from '../axios'
import Loading from '../Loading/Loading';
import Searchbar from '../Searchbar';

function CategoryList({fillterItems,children}) {
    const [loading, setLoading] = useState(true)
    const [categorise, setCategorise] = useState([]);

    useEffect(() => {
        const fetchCategory = async () => {
            const response = await axios.get('/FoodCategory/categories')
            setCategorise(response.data);
            setLoading(false)
        }
        fetchCategory()
    }, []);

    const renderContent = () => {
        if (loading) {
            return <Loading theme='red'/>
        }

        return (
            <div className='ps-3 w-100 d-flex align-items-center justify-content-between gap-5'>

            <ul className='nav'>
            <li className='nav-item' onClick={() => fillterItems()}>
                <a href="#" className='nav-link'>همه فست فودها</a>
            </li>
            {
                categorise.map((item) => (
                    <li className='nav-item' key={item.id} onClick={()=> fillterItems(item.id) } >
                        <a href="#" className='nav-link'>
                            {item.name}
                        </a>

                    </li>
                ))
            }
        </ul>
        {children}
            </div>


    )

    }
    return (
        <nav className='container' style={{ margin_top: '-40px' }}>
            <div className='bg-white shadow-lg rounded-3 py-3 d-flex align-items-center' style={{ height: '80px' }}>
               {renderContent()}

            </div>

        </nav>

    )
}

export default CategoryList
