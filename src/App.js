import React from 'react';
import Input from './Input';
import Select from './Select';
import { multispace, pridex, inexgroup } from './constants';
const JSZip = require("jszip");
const FileSaver = require("file-saver");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      post: '',
      email: '',
      phone: '',
      select: 'inexgroup'
    };
  }


  handleChange = (event) => {
    this.setState((prevState) => ({
      prevState,
      [event.target.id]: event.target.value,
    }), () => {
    });
  }



  handleSubmit = (event) => {
    event.preventDefault();
    let selectedSignature = document.querySelector(`.${this.state.select}`);
    if (this.state.select === 'pridex') {
      selectedSignature.querySelector('#name').textContent = this.state.name;
      selectedSignature.querySelector('#post').textContent = this.state.post;
      selectedSignature.querySelector('#phone').textContent = `+${this.state.phone}`;
    } else {
      selectedSignature.querySelector('#email').textContent = this.state.email;
      selectedSignature.querySelector('#name').textContent = this.state.name;
      selectedSignature.querySelector('#post').textContent = this.state.post;
      selectedSignature.querySelector('#phone').textContent = ` +${this.state.phone}`;
    }
    let blob = new Blob([selectedSignature.innerHTML], { type: 'text/html' });
    FileSaver.saveAs(blob, `${this.state.select}`);

    console.log(selectedSignature);
  }

  render() {
    return (
      <>
        <form className='form' onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <Select className='select' id="signature" />
          <Input id="name" placeholder="Имя Фамилия" />
          <Input id="post" placeholder="Должность" />
          <Input id="email" placeholder="E-mail" />
          <Input id="phone" placeholder="Телефон (Без +)" />
          <button type='submit' className='button' onClick={this.createSignatureElement}>Скачать</button>
        </form>
        <p className='quote'>При возникновении ошибок, пишите на почту:</p>
        <p className='quote'>dmitriy.glebov@inex-digital.com</p>
        <div className='multispace' style={{ display: 'none' }}>{multispace}</div>
        <div className='pridex' style={{ display: 'none' }}>{pridex}</div>
        <div className='inexgroup' style={{ display: 'none' }}>{inexgroup}</div>
      </>
    );
  }
}

export default App;

