import React, { useMemo } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { getHeroesByName } from '../../helpers/getHeroesByName';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../hero/HeroCard';
import queryString from "query-string";
export const SearchScreen = () => {

    const navigate = useNavigate();
    const location = useLocation();

    const { q = '' } = queryString.parse(location.search);
    

    const [value, handleInputChange] = useForm(
        {
            searchText: q,
        }
    );

    const { searchText } = value;

    const heroesFiltrados = useMemo(() => getHeroesByName(q), [q]);

    const handleSearch = (e) => {
        e.preventDefault();

        console.log(searchText);
        navigate(`?q=${searchText}`);

    }
    return (
        <div>
            <h1>Busqueda</h1>
            <hr />
            <div className='row'>
                <div className='col-5'>
                    <form onSubmit={handleSearch}>
                        <input type="text"
                            placeholder='Buscar Un Heroe'
                            className='form-control'
                            name='searchText'
                            autoComplete='off'
                            value={searchText}
                            onChange={handleInputChange}
                        />
                        <button className='btn btn-outline-primary'
                            type='submit'>
                            Buscar...
                        </button>
                    </form>
                </div>
                <div className='col-7' >
                    <h3>Resultados</h3>
                    <hr />
                    {
                        (q === '') ? <div className='alert alert-info'>Buscar un heroe</div>
                            : (heroesFiltrados.length === 0)
                            && <div className='alert alert-danger '>No hay resultados: {q}</div>
                    }
                    {
                        heroesFiltrados.map(heroe => (
                            <HeroCard
                                key={heroe.id}
                                {...heroe}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
