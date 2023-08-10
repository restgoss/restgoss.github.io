import React, { useState, useContext } from 'react';
import Input from './Input';
import Select from './Select';
import { multispace, pridex, inexgroup } from './constants';
import { TranslationContext, translations } from './LanguageContext';
import JSZip from 'jszip';
import FileSaver from 'file-saver';

function App() {
  const LanguageContext = useContext(TranslationContext);
  const [language, setLanguage] = useState('ru');
  const [state, setState] = useState({
    name: '',
    post: '',
    email: '',
    phone: '',
    select: 'inexgroup',
  });

  const handleChange = (event) => {
    const { id, value } = event.target;
    setState((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const phoneMaskRu = (phone) => {
    const regex = /(\d?)(\d{3})(\d{3})(\d{2})(\d{2})/g;
    const subst = "+$1 ($2) $3-$4-$5";
    return phone.replace(regex, subst);
  };

  const phoneMaskCy = (phone) => {
    const regex = /(\d{3})(\d{2})(\d{6})/;
    const subst = "+$1 $2 $3";
    return phone.replace(regex, subst);
  };


  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(state);
    let selectedSignature = document.querySelector(`.${state.select}`);

    if (state.select === 'pridex') {
      selectedSignature.querySelector('#name').textContent = state.name;
      selectedSignature.querySelector('#post').textContent = state.post;
      const phoneElement = selectedSignature.querySelector('#phone');
      if (state.phone.startsWith('7')) {
        phoneElement.textContent = `${translations[language].mob}${phoneMaskRu(state.phone)}`;
      } else if (state.phone.startsWith('3')) {
        phoneElement.textContent = `${translations[language].mob}${phoneMaskCy(state.phone)}`;
      } else {
        phoneElement.textContent = `${translations[language].mob}${state.phone}`;
      }
    } else {
      selectedSignature.querySelector('#email').textContent = state.email;
      selectedSignature.querySelector('#name').textContent = state.name;
      selectedSignature.querySelector('#post').textContent = state.post;
      const phoneElement = selectedSignature.querySelector('#phone');
      if (state.phone.startsWith('7')) {
        phoneElement.textContent = `${translations[language].mob}${phoneMaskRu(state.phone)}`;
      } else if (state.phone.startsWith('3')) {
        phoneElement.textContent = `${translations[language].mob}${phoneMaskCy(state.phone)}`;
      } else {
        phoneElement.textContent = `${translations[language].mob}${state.phone}`;
      }
    }

    let blob = new Blob([selectedSignature.innerHTML], { type: 'text/html' });
    FileSaver.saveAs(blob, `${state.select}`);
    console.log(selectedSignature);
  };

  return (
    <>
      <LanguageContext value={language} className="languagecontext">
        <header className='header'><a href='https://inex-group.com/' target='blank'><img className='logo' src='https://static.tildacdn.com/tild3934-3537-4430-a662-613435666462/Group_15.svg' /></a></header>
        <main className='form-block'>
          <div className='language-switch'>
            <button className={language === 'en' ? 'language active' : 'language'} onClick={() => setLanguage('en')}>En</button>
            <button className={language === 'ru' ? 'language active' : 'language'} onClick={() => setLanguage('ru')}>Ru</button>
          </div>
          <form className='form' onSubmit={handleSubmit}>
            <Select className='select' id="select" onChange={handleChange} />
            <Input id="name" placeholder={translations[language].namePh} onChange={handleChange} />
            <Input id="post" placeholder={translations[language].postPh} onChange={handleChange} />
            <Input id="email" type='email' placeholder={translations[language].emailPh} onChange={handleChange} />
            <Input id="phone" type='tel' placeholder={translations[language].phonePh} onChange={handleChange} maxl={11} />
            <button type='submit' className='button'>{translations[language].button}</button>
          </form>
          <p className='quote'>{translations[language].quote}</p>
          <a className='quote' href='mailto:dmitriy.glebov@inex-digital.com'>dmitriy.glebov@inex-digital.com</a>
        </main>
        <div className='multispace' style={{ display: 'none' }}>{multispace}</div>
        <div className='inexgroup' style={{ display: 'none' }}>{inexgroup}</div>
      </LanguageContext>

    </>
  );
}

export default App;
