import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Add from './Add';
import Update from './Update';
import Delete from './Delete';

export default class App extends React.Component {

constructor() {
    super();
    this.state = { data: []};
    this.getData = this.getData.bind(this);
  }

componentDidMount() {
    this.getData(this);
  }
  componentWillReceiveProps(nextProps) {
    this.getData(this);
  }

getData(ev){
    axios.get('/usuarios')
      .then(function(response) {
        ev.setState({data: response.data});
      });
  }

render() {
    return (
      <div>
        <Add />
        <table>
          <thead>
            <tr><th></th><th className='desc-col'>Nombre</th><th className='button-col'>email</th><th className='button-col'>Sexo</th><th className='button-col'>Fexha de registro</th><th className='button-col'>Update</th><th className='button-col'>Delete</th></tr>
          </thead>
          <tbody>
            {
              this.state.data.map(function(exp){
                return  <tr><td className='counterCell'></td><td className='desc-col'>{exp.nombre}</td><td className='button-col'>{exp.email}</td><td className='button-col'>{exp.sexo}</td><td className='button-col'>{exp.fecha_registro}</td><td className='button-col'><Update expense={exp} /></td><td className='button-col'><Delete id={exp._id} expense={exp} /></td></tr>
              })
            }
            </tbody>

</table>
      </div>
    );
  }
}