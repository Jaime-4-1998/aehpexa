import React from 'react'

const Logo = ({ImgGan}) => {
  return (
    <section>
        <div className="logo_cont">
            <img src={ImgGan} alt="Harry Potter" title="Harry Potter" width="20" height="20"/>
        </div>
        <span>Selecciona tu filtro</span>
    </section>
  )
}

export default Logo