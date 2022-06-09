import React, { useMemo } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom'
import { getHeroById } from '../../helpers/getHeroById';

export const HeroScreen = () => {
  const { heroeid } = useParams();

  const hero = useMemo(() => getHeroById(heroeid), [heroeid])

  const navigate = useNavigate();



  const handleReturn = () => {
    navigate(-1);
  }
  // se utiliza Navegate cuando no existe un id en la url
  if (!hero) {
    return <Navigate to={'/'} />;
  }
  const {
    id,
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters
  } = hero;

  const imagePath = `/assets/heroes/${id}.jpg`;
  return (
    <div className='row mt-5'>
      <div className='col-4'>
        <img src={imagePath} alt={superhero} className='img-thumbnail animate__animated animate__fadeInLeft' />
      </div>

      <div className='col-8 animate__animated animate__fadeInLeft'>
        <h3>{hero.superhero}</h3>
        <ul className='list-group list-group-flush'>
          <li className='list-group-item'>
            <b> Alter Ego: </b> {alter_ego}
          </li>
          <li className='list-group-item'>
            <b> Publisher: </b> {publisher}
          </li>
          <li className='list-group-item'>
            <b> Primera aparicion: </b> {first_appearance}
          </li>
        </ul>
        <h5 className='mt-5'> Characters</h5>
        <p>{characters}</p>
        <button
          className='btn btn-outline-info'
          onClick={handleReturn}
        >
          regresar
        </button>
      </div>
    </div>
  )
}
