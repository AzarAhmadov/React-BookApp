import React from 'react';
import Card from './Card';
import axios from 'axios';
import { useState, useRef } from 'react';
const Main = () => {

    const [search, setSearch] = useState('');
    const [data, setData] = useState([]);
    let pref = useRef();

    const getBook = async (evt) => {
        if (search.length == 0 && evt.key === 'Enter') {
            pref.current.classList.add('active')
        }
        else if (evt.key === 'Enter') {
            var response = await axios.get('https://www.googleapis.com/books/v1/volumes?q=' + search + '&key=AIzaSyAzIK_jz0Q_hlCc-xlmmCu-dH5ZqBonN-M' + '&maxResults=40')
            await setData(response.data.items)
            pref.current.classList.remove('active')
            setSearch("")
        }
    }

    return (
        <main className='main'>
            <div className="main-container">
                <div className="main-content">
                    <h1> Find your books 📚  </h1>
                    <input onKeyPress={getBook} value={search} onChange={(e) => setSearch(e.target.value)} type="text" placeholder='enter your book name...' />
                </div>
                <p ref={pref} className='error'> input can't be left empty... !  </p>
            </div>
            <div className="main-card-bottom">
                {
                    data.map((data, idx) => {
                        return (
                            <Card key={idx} data={data} />
                        )
                    })
                }
            </div>
        </main>
    );
}

export default Main;
