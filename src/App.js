import React, { Component } from 'react';
import data from './mock';
import './App.css';

import delet from './Img/bin.png';
import edit from './Img/edit.png';
import cancel from './Img/cancel.png';
import save from './Img/save.png';
import check from './Img/check-mark.png';

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      data,
      selected: null,
      select: 'name',
      name: '',
      address: '',
      job: '',
      status: '',
    }
  }

  render(){

    //____________Add User______________

    const onAdd =()=>{
      const {name,age,status,address,job} = this.state
      let newUser = {
        id: data.length +1,
        name: this.state.name,
        age: this.state.age,
        status: this.state.status,
        address: this.state.address,
        job: this.state.job,
      }
      let res = [...this.state.data,newUser]
      name && age && status && address && job && this.setState(
      {data: res, name:'',age:'',status:'',address:'',job:''})
    }

    const onChangeAdd = ({target}) =>{
      const {name,value} = target
      this.setState({[name]:value})
    }

    //__________Edit_____________
    const onEdit = (value) => {
      this.setState({selected: value});
    };

    //_________Cancel____________
    const onCancel = (value) => {
      this.setState({selected: null});
    };

    //__________Edit_____________
    const onSave = () => {
      let res = this.state.data.map(value=> {
        return value.id === this.state.selected.id
        ? this.state.selected
        : value;
      });
      this.setState({data: res, selected: null});
    };

    //__________Search_____________
    const onSearch = ({target}) => {
      const {name, value} = target
      let res = data.filter(vl => vl[this.state.select].toString().tuLowerCase().includes(value.tuLowerCase()))
      this.setState({data: res});
    };

    //__________Delete_____________
    const onDelete = (id) =>{
      let res = this.state.data.filter((v) => v.id !== id);
      this.setState({ data: res })
    }

    //__________Select_____________
    const onSelect = ({target}) => {
      this.setState({select: target.value});
    };



    return(
      <div className='container'>
        <div className='Box'>

          <div className='searchBox'>
            <input onChange={onSearch} type='text' placeholder='Search...'/>
            <select onChange={onSelect} defaultValue={'name'}>
              <option value={'id'}>ID</option>
              <option value={'name'}>Name</option>
              <option value={"status"}>Status</option>
              <option value={"job"}>Job</option>
            </select>
          </div>

          <table>                 
            <thead>
            <tr className='thead' >   
                <th className='thID'>ID</th>            
                <th className='thName'>NAME</th>            
                <th className='thAge'>AGE</th>           
                <th className='thStatus'>STATUS</th>
                <th className='thAddress'>ADDRESS</th>
                <th className='thJob'>JOB</th>
                <th className='TDedit'>EDIT</th>
                <th className='TDdelete'>DELETE</th>       
                
              </tr>
            </thead>
            <tbody className='tbody'>

              {this.state.data?.map(value =>(

                <tr key={value.id}>
                  <td className='tRow'>{this.state.selected?.id === value.id ? (
                  <input className='inp-id'
                    defaultValue={this.state.selected.id} 
                      onChange={({target})=> 
                      this.setState({
                        selected: {...this.state.selected, id: target.value},
                        })
                      }
                    type='text'/>
                    ):(
                    value.id
                  )}</td>
  

            
                  <td>{this.state.selected?.id ===value.id ? (
                    <input className='inp-name'
                      defaultValue={this.state.selected.name} 
                        onChange={({target})=> 
                        this.setState({
                          selected: {...this.state.selected, name: target.value},
                        })
                      }
                    type='text'/>
                      ):(
                      value.name
                  )}</td>
  

            
                  <td>{this.state.selected?.id === value.id ? (
                    <input className='inp-age'
                      defaultValue={this.state.selected.age} 
                        onChange={({target})=> 
                        this.setState({
                          selected: {...this.state.selected, age: target.value},
                        })
                      }
                    type='text'/>
                      ):(
                        value.age
                  )}</td>
  

            
                  <td>{this.state.selected?.id ===value.id ? (
                    <input className='inp-status'
                      defaultValue={this.state.selected.status}
                        onChange={({target})=> 
                        this.setState({
                          selected: {...this.state.selected, status: target.value},
                        })
                      }
                    type='text'/>
                    ):(
                      value.status
                  )}</td>
  

            
                  <td>{this.state.selected?.id ===value.id ? (
                    <input className='inp-address'
                      defaultValue={this.state.selected.address}
                        onChange={({target})=> 
                          this.setState({
                          selected: {...this.state.selected, address: target.value},
                        })
                      }
                      type='text'/>
                      ):(
                        value.address
                  )}</td>
  

            
                  <td>{this.state.selected?.id ===value.id ? (
                    <input  className='inp-job'
                      defaultValue={this.state.selected.job}
                        onChange={({target})=> 
                        this.setState({
                          selected: {...this.state.selected, job: target.value},
                        })
                      }
                        type='text'/>
                        ):(
                      value.job
                  )}</td>


            
                    <td>
                      {this.state.selected?.id ===value.id ? (
                      <div className='Btn-CanSev'>
                        <button onClick={onSave}><img src={save}/></button>
                        <button onClick={()=> onCancel(value)}><img src={cancel}/></button>
                      </div>
                        ):(
                        <button onClick={()=> onEdit(value)} className='edit'><img src={edit}/></button>
                        )}
                    </td>
            
                    <td className='delete'>
                      <button  onClick={()=> onDelete(value.id)} ><img src={delet}/></button>
                    </td>
                  </tr>
            ))}
            
            </tbody>
          </table>

          <div className='footer'>
            <input value={this.state.name}    onChange={onChangeAdd}  placeholder='Name...'    name='name' type='text'/>
            <input value={this.state.age}     onChange={onChangeAdd}  placeholder='Age..'      name='age' type='number'/>
            <input value={this.state.status}  onChange={onChangeAdd}  placeholder='Status...'  name='status' type='text'/>
            <input value={this.state.address} onChange={onChangeAdd}  placeholder='Address...' name='address' type='text'/>
            <input value={this.state.job}     onChange={onChangeAdd}  placeholder='Job...'     name='job' type='text'/>


            <div className='fooBTN'>
              <button className='button' onClick={onAdd}>
              <span class="text">Add</span>
              <img className='icon' src={check} alt=""/>
              </button>
            </div>
            
          </div>
        </div>
        
      </div>
    )
  }
}


export default App;
