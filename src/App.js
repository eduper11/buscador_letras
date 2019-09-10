import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';
import Form from './components/Form';
import Song from './components/Song';
import Info from './components/Info';

function App() {
    const [artist, setArtist] = useState('');
    const [lyrics, setLyrics] = useState([]);
    const [info, setInfo] = useState({});

    //consulta de API letras

    const searchAPILyrics = async search => {
        const { artist, title } = search;

        const url = `https://api.lyrics.ovh/v1/${artist}/${title}`;

        const searchData = await axios(url);

        const lyric = searchData.data.lyrics;

        setArtist(artist);

        setLyrics(lyric);
    };

    const searchAPIInfo = async () => {
        const url = `https://theaudiodb.com/api/v1/json/1/search.php?s=${artist}`;

        const searchData = await axios(url);
        console.log(searchData);

        setInfo(searchData.data.artists[0]);
    };

    useEffect(() => {
        if (artist) {
            searchAPIInfo();
        }
    }, [artist]);

    return (
        <Fragment>
            <Form searchAPILyrics={searchAPILyrics} />
            <div className='container mt-5'>
                <div className='row'>
                    <div className='col-md-6'>
                        <Info info={info} />
                    </div>
                    <div className='col-md-6'>
                        <Song lyrics={lyrics} />
                    </div>
                </div>
            </div>
        </Fragment>
    );
}

export default App;
