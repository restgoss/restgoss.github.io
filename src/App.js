import React from 'react';
import Input from './Input';
import Select from './Select';
import { multispace, pridex, inexgroup } from './constants';
import facebook from './images/facebook.png';
import inexgrouplogo from './images/inexgrouplogo.png';
import instagram from './images/instagram.png';
import linkedin from './images/linkedin.png';
import multispacelogo from './images/multispacelogo.png';
import pridexlogo from './images/pridexlogo.png';
import ReactDomServer from 'react-dom/server';
const JSZip = require("jszip");
const FileSaver = require("file-saver");

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Example',
      post: 'Example',
      email: 'Example',
      phone: 'Example',
      currentSignature: inexgroup
    };
  }


  handleChange = (event) => {
    this.setState((prevState) => ({
      prevState,
      [event.target.id]: event.target.value
    }), () => {
      console.log(this.state);
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();

    let zip = new JSZip();
    let select = document.querySelector('#select');
    if (select.value === 'inexgroup') {
      let signature = document.querySelector('.inexHTML');
      signature.querySelector('#name').textContent = this.state.name;
      signature.querySelector('#post').textContent = this.state.post;
      signature.querySelector('#email').textContent = this.state.email;
      signature.querySelector('#phone').textContent = this.state.phone;
      let img = zip.folder('inexgroup.files');
      img.file(inexgrouplogo);
      img.file(facebook);
      img.file(instagram);
      img.file(linkedin);
      zip.file('inexgroup.htm', signature.innerHTML);
      zip.generateAsync({ type: "blob" })
        .then(function (content) {

          FileSaver.saveAs(content, "example.zip");
        });
    }
    if (select.value === 'pridex') {
      let signature = document.querySelector('.pridexHTML');
      signature.querySelector('#name').textContent = this.state.name;
      signature.querySelector('#post').textContent = this.state.post;
      signature.querySelector('#phone').textContent = this.state.phone;
      let img = zip.folder('pridex.files');
      img.file(pridexlogo);
      zip.file('pridex.htm', signature.innerHTML);
      zip.generateAsync({ type: "blob" })
        .then(function (content) {

          FileSaver.saveAs(content, "example.zip");
        });
    }

    if (select.value === 'multispace') {
      console.log('MULTISPACE');
      let signature = document.querySelector('.multispaceHTML');
      signature.querySelector('#name').textContent = this.state.name;
      signature.querySelector('#post').textContent = this.state.post;
      signature.querySelector('#email').textContent = this.state.email;
      signature.querySelector('#phone').textContent = this.state.phone;
      let img = zip.folder('multispace.files');
      img.file('multispacelogo.png', multispacelogo);
      zip.file('multispace.htm', signature.innerHTML);
      zip.generateAsync({ type: "blob" })
        .then(function (content) {

          FileSaver.saveAs(content, "signature.zip");
        });
    }






    // let blob = new Blob([signature.innerHTML], { type: 'text/html' });
    // let link = document.createElement('a');
    // link.setAttribute('href', URL.createObjectURL(blob));
    // link.setAttribute('download', this.state.email.split(('.com'[0]) || ('.ru')[0]));
    // link.click();
  }

  encodeImageFileAsURL(element) {
    let reader = new FileReader();
    reader.onloadend = function () {
      console.log('RESULT', reader.result)
    }
    return reader.readAsDataURL(element);
  }

  render() {


    return (
      <>
        <form className='form' onSubmit={this.handleSubmit} onChange={this.handleChange}>
          <Select className='select' id="signatureTemplate" />
          <Input id="name" label="Имя Фамилия:" />
          <Input id="post" label="Должность:" />
          <Input id="email" label="Почтовый адрес:" />
          <Input id="phone" label="Телефон:" />
          <button type='submit' className='button' onClick={this.createSignatureElement}>Сгенерировать</button>
        </form>
        <div className='multispaceHTML' style={{}}>{multispace}</div>
        <div className='pridexHTML' style={{}}>{pridex}</div>
        <div className='inexHTML' style={{}}>{inexgroup}</div>

      </>
    );

  }
}



export default App;

