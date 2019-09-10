import React, { useState, Fragment, useEffect } from 'react';

function Form({ searchAPILyrics }) {
    const [search, setSearch] = useState({ artist: '', title: '' });

    const handleChange = event => {
        setSearch({
            ...search,
            [event.target.name]: event.target.value
        });
    };

    const handleSubmit = event => {
        event.preventDefault();
        searchAPILyrics(search);
    };
    return (
        <div className='bg-info'>
            <div className='container'>
                <div className='row'>
                    <form
                        onSubmit={handleSubmit}
                        className='col card text-white bg-transparent  mb-5 pt-5 pb-2'
                    >
                        <fieldset>
                            <legend className='text-center'>
                                Buscador Letras Canciones
                            </legend>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Artista</label>
                                        <input
                                            onChange={handleChange}
                                            type='text'
                                            className='form-control'
                                            name='artist'
                                            placeholder='Nombre Artista'
                                            required
                                        />
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group'>
                                        <label>Canción</label>
                                        <input
                                            onChange={handleChange}
                                            type='text'
                                            className='form-control'
                                            name='title'
                                            placeholder='Nombre Canción'
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <button
                                type='submit'
                                className='btn btn-primary float-right'
                            >
                                Buscar
                            </button>
                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Form;
