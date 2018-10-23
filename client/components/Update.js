import React from 'react';
import Modal from 'react-modal';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
var querystring = require('querystring');

class Update extends React.Component {
  constructor() {
    super();
    this.state = {
      id: '',
      nombre: '',
      email: '',
      contraseña: '',
      sexo: '',
      avatar: '',
      fecha_registro: '',
      ciudad: '',
      estado: '',
      medallas: '',
      amount: '',
      month: '',
      year: '',
      messageFromServer: '',
      modalIsOpen: false
    }

this.update = this.update.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.handleTextChange = this.handleTextChange.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

}

componentDidMount() {
    this.setState({
      id: this.props.expense._id,
      nombre: this.props.expense.nombre,
      email: this.props.expense.email,
      contraseña: this.props.expense.contraseña,
      sexo: this.props.expense.sexo,
      avatar: this.props.expense.avatar,
      fecha_registro: this.props.expense.fecha_registro,
      ciudad: this.props.expense.ciudad,
      estado: this.props.expense.estado,
      medallas: this.props.expense.medallas,
      amount: this.props.expense.amount,
      month: this.props.expense.month,
      year: this.props.expense.year,
    });
  }

openModal() {
    this.setState({
      modalIsOpen: true
    });
  }

closeModal() {
    this.setState({
      modalIsOpen: false,
      messageFromServer: ''
    });
  }

handleSelectChange(e) {
    if (e.target.name == "month") {
      this.setState({
        month: e.target.value
      });
    }
    if (e.target.name == "year") {
      this.setState({
        year: e.target.value
      });
    }
  }

handleTextChange(e) {
   if (e.target.name == "nombre") {
      this.setState({
        nombre: e.target.value
      });
    }
    if (e.target.name == "email") {
      this.setState({
        email: e.target.value
      });
    }
    if (e.target.name == "contraseña") {
      this.setState({
        contraseña: e.target.value
      });
    }
    if (e.target.name == "sexo") {
      this.setState({
        sexo: e.target.value
      });
    }
    if (e.target.name == "avatar") {
      this.setState({
        avatar: e.target.value
      });
    }
    if (e.target.name == "fecha_registro") {
      this.setState({
        fecha_registro: e.target.value
      });
    }
    if (e.target.name == "ciudad") {
      this.setState({
        ciudad: e.target.value
      });
    }
    if (e.target.name == "estado") {
      this.setState({
        estado: e.target.value
      });
    }
    if (e.target.name == "medallas") {
      this.setState({
        medallas: e.target.value
      });
    }



}

onClick(e) {
    this.update(this);
  }

update(e) {
  console.log('usuarios/'+e.state.id+'/update');
    axios.put('usuarios/'+e.state.id+'/update',
      querystring.stringify({
          nombre: e.state.nombre,
          email: e.state.email,
          contraseña: e.state.contraseña,
          sexo: e.state.sexo,
          avatar: e.state.avatar,
          fecha_registro: e.state.fecha_registro,
          ciudad: e.state.ciudad,
          estado: e.state.estado,
          medallas: e.state.medallas
      }), {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        }
      }).then(function(response) {
      e.setState({
        messageFromServer: response.data
      });

});
  }

render() {
    if(this.state.messageFromServer == ''){
      return (
        <div>
          <Button bsStyle="warning" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-edit"></span></Button>
          <Modal
            isOpen={this.state.modalIsOpen}
            onRequestClose={this.closeModal}
            contentLabel="Add Expense"
            className="Modal">

<Link to={{pathname: '/', search: '' }} style={{ textDecoration: 'none' }}>
            <Button bsStyle="danger" bsSize="mini" onClick={this.closeModal}><span className="closebtn glyphicon glyphicon-remove"></span></Button>
          </Link><br/>

<fieldset>
        <label for="nombre">Nombre:</label><input type="text" id="nombre" name="nombre" value={this.state.nombre} onChange={this.handleTextChange}></input>
       <label for="email">Email:</label><input type="text" id="email" name="email" value={this.state.email} onChange={this.handleTextChange}></input>
       <label for="contraseña">Contraseña:</label><input type="text" id="contraseña" name="contraseña" value={this.state.contraseña} onChange={this.handleTextChange}></input>
       <label for="sexo">Sexo:</label><input type="text" id="sexo" name="sexo" value={this.state.sexo} onChange={this.handleTextChange}></input>
       <label for="avatar">Avatar:</label><input type="text" id="avatar" name="avatar" value={this.state.avatar} onChange={this.handleTextChange}></input>
       <label for="fecha_registro">Fecha de registro:</label><input type="text" id="fecha_registro" name="fecha_registro" value={this.state.fecha_registro} onChange={this.handleTextChange}></input>
       <label for="ciudad">Ciudad:</label><input type="text" id="ciudad" name="ciudad" value={this.state.ciudad} onChange={this.handleTextChange}></input>
       <label for="estado">Estado:</label><input type="text" id="estado" name="estado" value={this.state.estado} onChange={this.handleTextChange}></input>
        <label for="medallas">Medallas:</label><input type="text" id="medallas" name="medallas" value={this.state.medallas} onChange={this.handleTextChange}></input>
            
          </fieldset>

<div className='button-center'>
              <br/>
              <Button bsStyle="warning" bsSize="small" onClick={this.onClick}>Update</Button>
            </div>
          </Modal>
        </div>
      )
    }
    else{
      return (
        <div>
         <Button bsStyle="warning" bsSize="small" onClick={this.openModal}><span className="glyphicon glyphicon-edit"></span></Button>
         <Modal
           isOpen={this.state.modalIsOpen}
           onAfterOpen={this.afterOpenModal}
           onRequestClose={this.closeModal}
           contentLabel="Add Expense"
           className="Modal">

<div className='button-center'>
              <h3>{this.state.messageFromServer}</h3>
              <Link to={{pathname: '/', search: '' }} style={{ textDecoration: 'none' }}>
                <Button bsStyle="success" bsSize="mini" onClick={this.closeModal}>Close the Dialog</Button>
              </Link>
            </div>
          </Modal>
        </div>
        )
      }
  }
}
export default Update;