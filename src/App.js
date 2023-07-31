import React from 'react';
import Input from './Input';
import Select from './Select';
import { multispace, pridex, inexgroup } from './constants';
import ReactDomServer from 'react-dom/server';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Example',
      post: 'Example',
      email: 'Example',
      phone: 'Example',
      signatureTemplate: multispace
    };
  }

  handleChange = (event) => {
    this.setState((prevState) => ({
      prevState,
      [event.target.id]: event.target.value
    }), () => {
    });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let signature = document.querySelector('.currentSignature');
    signature.querySelector('#name').textContent = this.state.name;
    signature.querySelector('#post').textContent = this.state.post;
    signature.querySelector('#email').textContent = this.state.email;
    signature.querySelector('#phone').textContent = this.state.phone;
    let blob = new Blob([signature.innerHTML], {type: 'text/html'});
    let link = document.createElement('a');
    link.setAttribute('href', URL.createObjectURL(blob));
    link.setAttribute('download', this.state.email.split(('.com'[0]) || ('.ru')[0]));
    link.click();
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
        <div className='currentSignature' style={{}}>{multispace}</div>
        <div className='currentSignature' style={{}}>{pridex}</div>
        <div className='currentSignature' style={{}}>{inexgroup}</div>

      </>
    );
    
  }
}

export default App;







// const inexTemplate = (ReactDomServer.renderToStaticMarkup(inexgroup));


// const JSZip = require("jszip");
// const FileSaver = require("file-saver");

// let zip = new JSZip();
// zip.file("Hello.html", inexTemplate);
// let img = zip.folder("images");
// zip.generateAsync({type:"blob"})
// .then(function(content) {
//     // see FileSaver.js
//     FileSaver.saveAs(content, "example.zip");
// });