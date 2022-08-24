import React, {useEffect,useState} from 'react'
import axios from 'axios'
const InicioPer = () => {
    const [personajes, setPersonajes] = useState(null) 
    const url = "http://localhost:5000/characters";
    const data = async (url) =>{
        const petition = await axios.get(url)
        setPersonajes(petition.data)
    }

    useEffect(() => {
        data(url);
    }, []);
  return (
    <>
        { personajes != null ? (
            personajes.map(personaje =>(
                <div key={personaje.id} className='cont'>
                        <section className='inicioper_cont'>
                                <div className="inicioper_card">
                                    <div className="inicioper_body">
                                        <div className="inicioper_image">
                                            <div className={personaje.house}>
                                                <img src={personaje.image} alt={personaje.name} title={personaje.name} />
                                            </div>
                                        </div>
                                        <div className="inicioper_data">
                                        <div className="inicioper_if">
                                            {(() => {
                                                    if (personaje.hogwartsStudent === true && personaje.alive === true && personaje.hogwartsStaff === false) {
                                                        return <span className='inicioper_span'> Vivo / Estudiante </span>;
                                                    } else if (personaje.hogwartsStudent === true && personaje.alive === false) {
                                                        return <span className='inicioper_span'> Finado / Estudiante </span>  ;
                                                    } else if (personaje.hogwartsStudent === false && personaje.alive === true) {
                                                        return <span className='inicioper_span'> Vivo / Staff </span>  ;
                                                    } else if (personaje.hogwartsStudent === false && personaje.alive === false && personaje.hogwartsStaff === true) {
                                                        return <span className='inicioper_span'> Finado / Staff </span>  ;
                                                    } else if (personaje.hogwartsStudent === false && personaje.alive === false && personaje.hogwartsStaff === false) {
                                                        return <span className='inicioper_span'> Finado / Persona </span>  ;
                                                    }
                                                    else {
                                                        return <span className='inicioper_span'> No Existe </span>  ;
                                                    }
                                            })()}
                                        </div>
                                        <div className="inicioper_mobile">
                                            {(() => {
                                                    if (personaje.hogwartsStudent === true && personaje.alive === true && personaje.hogwartsStaff === false) {
                                                        return <span className='inicioper_spane'> Vivo <br /> Estudiante </span>;
                                                    } else if (personaje.hogwartsStudent === true && personaje.alive === false) {
                                                        return <span className='inicioper_spane'> Finado <br /> Estudiante </span>  ;
                                                    } else if (personaje.hogwartsStudent === false && personaje.alive === true) {
                                                        return <span className='inicioper_spane'> Vivo <br /> Staff </span>  ;
                                                    } else if (personaje.hogwartsStudent === false && personaje.alive === false && personaje.hogwartsStaff === true) {
                                                        return <span className='inicioper_spane'> Finado <br /> Staff </span>  ;
                                                    } else if (personaje.hogwartsStudent === false && personaje.alive === false && personaje.hogwartsStaff === false) {
                                                        return <span className='inicioper_spane'> Finado <br /> Persona </span>  ;
                                                    }
                                                    else {
                                                        return <span className='inicioper_spane'> No Existe </span>  ;
                                                    }
                                            })()}
                                        </div>
                                            
                                        
                                            <h2 className='incioper_name'>{personaje.name}</h2>
                                            <div className="inicioper_minidata">
                                                <p className='inicioper_datas'><strong>Cumpleaños: </strong>{personaje.dateOfBirth}</p>
                                                <p className='inicioper_datas'><strong>Género: </strong>{personaje.gender}</p>
                                                <p className='inicioper_datas'><strong>Color de ojos: </strong>{personaje.eyeColour}</p>
                                                <p className='inicioper_datas'><strong>Color de Pelo: </strong>{personaje.hairColour}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </section>
                        <section className='inicioper_cont'>
                                <div className="inicioper_card">
                                    <div className="inicioper_body">
                                        <div className="inicioper_image">
                                            <div className={personaje.house}>
                                                <img src={personaje.image} alt={personaje.name} title={personaje.name} />
                                            </div>
                                        </div>
                                        <div className="inicioper_data">
                                        <div className="inicioper_if">
                                            {(() => {
                                                    if (personaje.hogwartsStudent === true && personaje.alive === true && personaje.hogwartsStaff === false) {
                                                        return <span className='inicioper_span'> Vivo / Estudiante </span>;
                                                    } else if (personaje.hogwartsStudent === true && personaje.alive === false) {
                                                        return <span className='inicioper_span'> Finado / Estudiante </span>  ;
                                                    } else if (personaje.hogwartsStudent === false && personaje.alive === true) {
                                                        return <span className='inicioper_span'> Vivo / Staff </span>  ;
                                                    } else if (personaje.hogwartsStudent === false && personaje.alive === false && personaje.hogwartsStaff === true) {
                                                        return <span className='inicioper_span'> Finado / Staff </span>  ;
                                                    } else if (personaje.hogwartsStudent === false && personaje.alive === false && personaje.hogwartsStaff === false) {
                                                        return <span className='inicioper_span'> Finado / Persona </span>  ;
                                                    }
                                                    else {
                                                        return <span className='inicioper_span'> No Existe </span>  ;
                                                    }
                                            })()}
                                        </div>
                                        <div className="inicioper_mobile">
                                            {(() => {
                                                    if (personaje.hogwartsStudent === true && personaje.alive === true && personaje.hogwartsStaff === false) {
                                                        return <span className='inicioper_spane'> Vivo <br /> Estudiante </span>;
                                                    } else if (personaje.hogwartsStudent === true && personaje.alive === false) {
                                                        return <span className='inicioper_spane'> Finado <br /> Estudiante </span>  ;
                                                    } else if (personaje.hogwartsStudent === false && personaje.alive === true) {
                                                        return <span className='inicioper_spane'> Vivo <br /> Staff </span>  ;
                                                    } else if (personaje.hogwartsStudent === false && personaje.alive === false && personaje.hogwartsStaff === true) {
                                                        return <span className='inicioper_spane'> Finado <br /> Staff </span>  ;
                                                    } else if (personaje.hogwartsStudent === false && personaje.alive === false && personaje.hogwartsStaff === false) {
                                                        return <span className='inicioper_spane'> Finado <br /> Persona </span>  ;
                                                    }
                                                    else {
                                                        return <span className='inicioper_spane'> No Existe </span>  ;
                                                    }
                                            })()}
                                        </div>
                                            
                                        
                                            <h2 className='incioper_name'>{personaje.name}</h2>
                                            <div className="inicioper_minidata">
                                                <p className='inicioper_datas'><strong>Cumpleaños: </strong>{personaje.dateOfBirth}</p>
                                                <p className='inicioper_datas'><strong>Género: </strong>{personaje.gender}</p>
                                                <p className='inicioper_datas'><strong>Color de ojos: </strong>{personaje.eyeColour}</p>
                                                <p className='inicioper_datas'><strong>Color de Pelo: </strong>{personaje.hairColour}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                        </section>
                </div>
            ))
        ) : <img src="https://i.pinimg.com/originals/ae/ff/51/aeff513c3873ff17b353f7c1677da429.gif" className='inicioper_imge' alt="" width="20" height="20"/> }
    </>
  )
}

export default InicioPer