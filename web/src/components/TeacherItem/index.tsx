import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './style.css'

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/13952497?s=460&u=f7537a6a4e1b522eaa266648d3a64ccc9b707938&v=4" alt="Ademir Ferreira" />
        <div>
          <strong>Ademir Ferreira</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Mussum Ipsum, cacilds vidis litro abertis.
            <br /><br />
            Mussum Ipsum, cacilds vidis litro abertis. Casamentiss faiz malandris se pirulitá. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.
          </p>

      <footer>
        <p>
          Preço/Hora
              <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  )
}

export default TeacherItem;