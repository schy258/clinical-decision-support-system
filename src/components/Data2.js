import React, { useState } from 'react';
import drug2 from '../Json/drug2.json';

export default function Data() {
  // in this part i set my initail state using usestage hook
  const [json1, setJson] = useState(drug2?.fields);
  const [form, setForm] = useState({})
  const [record, setRecord] = useState([])
  const InputHandler = (e) => {
    const newState = {
      ...form,
      [e.target.name]: e.target.value
    };
    setForm(newState)
  }

  // in this part created a function to prevent reloading after data entry in form , from where i put data to print in atable form
  const handleSubmit = (f) => {
    f.preventDefault();
    const newRecords = {
      ...form, id: new Date().getTime().toString()
    }
    console.log(newRecords);
    setRecord([...record, newRecords]);
    
  };

  // return part
  return (
    <form action="" onSubmit={handleSubmit}>

      <div className='aaaa' style={{
        margin: "auto",
        width: "50%",
        border: "0px solid black",
        borderRadius: "15px",
        boxShadow: "-2px -2px grey",
        marginTop: "50px",

        padding: "10px"
      }}>

        {/* heading of our form */}
        <h2 style={{ marginLeft: "100px", }}> Healthcare Delivery Form</h2>
        <h6 style={{ marginLeft: "150px" }}>please fill up this form to proceed</h6>
        {json1.map((value) => {

          return (
            <div style={{ width: "85%", marginLeft: "20px" }} >

              {/* implementing values using ternary operator */}
              {/* this part will run when there is no dropdown type */}
              {value?.type == "dropdown" ? null :
                <div className="form-group">
                  <label>{value.label}</label>
                  <input type={value?.type}
                    className="form-control" disabled={value?.isReadonly} name={value?.key}
                    value={form?.key} required={value?.isRequired} id="" onChange={InputHandler}
                    aria-describedby="helpId" placeholder={value?.unit} arrange={drug2.fields.sort(function(a,b){return a.order - b.order})}/>
                </div>}

                {/* this part will run when there is a dropdown type */}
              {value?.type == "dropdown" ? <div className="form-group">
                <label >{value.label}</label>
                <select required={value?.isRequired} value={form?.key} className="form-control"  name="" id="">
                  <option> select gender</option>
                  {value.items.map((select_value) => {
                    return <option value={select_value.text}>{select_value.text}</option>
                  })}

                </select>
              </div> : null}
            </div>
          )
        })}

        {/* form submit button */}
        <button style={{
        margin:"10px 0px 0px 20px"
       }} type='submit' className="btn btn-success">submit</button>


       {/* new form fill button */}
        <button className='btn btn-danger' style={{
          float: "right",
          marginTop:"10px",
          marginRight:"20px",
        }} type="button" onClick={() => {
          return window.location.reload()
        }}>New</button>
      </div>


        {/* a div in table form to print our entered values by users */}
      <div>
        {
          record.map((arsd)=>{
            return(
              <table className="table table-striped">
  <thead>
    <tr>
      <th scope="col">Patient ID</th>
      <th scope="col">Birthday</th>
      <th scope="col">Weight</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <td>{arsd.id}</td>
    <td>{arsd.birthday}</td>
      <td>{arsd.weight}</td>
    </tr>
    
  </tbody>
</table>
            )
          })
        } 
      </div>
    </form>

  );
}
