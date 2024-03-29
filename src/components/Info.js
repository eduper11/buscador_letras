import React from 'react';

function Info({ info }) {
    if (Object.keys(info).length === 0) return null;
    return (
        <div className='card border-light'>
            <div className='card-header bg-primary text-light font-weight-bold'>
                Información artista
            </div>
            <div className='card-body'>
                <img src={info.strArtistThumb} alt='artist image' />
                <p className='card-text'>Género: {info.strGenre}</p>
                <h2 className='card-text text-center'>Biografía</h2>
                <p className='card-text'>{info.strBiographyES}</p>
                <div className='card-text text-center'>
                    <a href={`http://${info.strFacebook}`} target='blank'>
                        <i className='fab fa-facebook'></i>
                    </a>
                    <a href={`http://${info.strTwitter}`} target='blank'>
                        <i className='fab fa-twitter'></i>
                    </a>
                    <a href={`${info.strLastFmChart}`} target='blank'>
                        <i className='fab fa-lastfm'></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Info;
