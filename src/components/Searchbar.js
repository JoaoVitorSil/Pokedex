import React, {useState} from 'react'

const Searchbar = () => {
  const [search, setSearch] = useState('dito')  

  const onChangeHandler = (e)=>{
    setSearch(e.target.value)
  }  
  const onButtonClickHandler =()=>{
    console.log("pokemon: ",search)
  }
  return (
    <div className='searchbar-container'>
        <div className='searchbar'>
            <input placeholder="Buscar pokemon" onChange={onChangeHandler}/>
        </div>
        <div className='searchbar-btn'>
            <button onClick={onButtonClickHandler}>Buscar</button>
        </div>
    </div>
  )
}

export default Searchbar