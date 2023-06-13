import React,{useEffect, useState} from 'react';
import './App.css'
import Header from './Header/Header';
import CategoryList from './CategoryList/CategoryList';
import axios from './axios';
import Loading from './Loading/Loading';
import FastFoodList from './FastFoodList';
import Searchbar from './Searchbar';
import notfound from './404.png'

function App() {
  const [loading, setLoading] = useState(false)
  const [fastFoodItems,setFastFoodItems ] = useState([]);

  const fethData = async (categoryId = null)=>{
    const response = await axios.get(`/FastFood/list/${categoryId ? "?category=" + categoryId : ""}`)
    setLoading(false)
    setFastFoodItems(response.data)
  }

  useEffect(()=>{
    fethData()
  },[])

  const fillterItems = (categoryId)=>{
    fethData(categoryId)
  }

  const searchItems = async (term) =>{
    setLoading(true)
    const response = await axios.get(`FastFood/search/${term ? "?term=" + term : ""}`)
    setLoading(false)
    setFastFoodItems(response.data)
  }

  const renderConent = ()=>{
    if(loading){
      return <Loading theme='dark'/>
    }

    if(fastFoodItems.length === 0){
      return(
        <>
        <div className='alert alert-warning text-center'>
          برای کلید واژه فوق هیچ آیتمی پیدا نشد
        </div>
        <img src={notfound} className='mx-auto mt-5 d-block fade-in-horiz'></img>
        </>
      )
    }
    return <FastFoodList fastFoodItems={fastFoodItems}/>
  }
  return (
    <div className='wrapper bg-faded-dark'>
      <Header></Header>
      <CategoryList fillterItems={fillterItems}>
      <Searchbar searchItems={searchItems}/>
      </CategoryList>
      <div>
        {renderConent()}
      </div>
    </div>

  );
}

export default App;
