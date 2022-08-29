import React, { useState } from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import './index.scss'; 

export default function EmployeeList() {
    const [nameInput, setNameInput] = useState('')
    const [surnameInput, setSurnameInput] = useState('')
    const [salaryInput, setSalary] = useState(0)
    const [workers, setWorkers] = useState([])

    const changeName = (e) => setNameInput(e.target.value);
    const changeSurname = (e) => setSurnameInput(e.target.value);
    const changeSalary = (e) => setSalary(e.target.value);

    const addWorker = () => {
        const worker = {
            name: nameInput,
            surname: surnameInput,
            salary: salaryInput
        }

        setWorkers([...workers, worker])

        setNameInput("")
        setSurnameInput("")
        setSalary(0)
    }

  return (
   <section id='input-form'>
     <Container>
        <Row align>
            <Col md="3">
                <input className='input-name' type='text' placeholder='Enter Your Name' onChange={changeName}/>
            </Col>
            <Col md="3">
                <input className='input-surname' type='text' placeholder='Enter Your Surname' onChange={changeSurname}/>
            </Col>
            <Col md="3">
                <input className='input-salary' type='number' placeholder='Enter Your Salary' onChange={changeSalary}/>
            </Col>
            <Col md="3">
               <button id='add-btn' onClick={addWorker} >Add</button>
            </Col>
        </Row>
        

        <table className='table table-stripped mt-4 '>
           <thead className='thead-dark'>
            <tr>
                <th>Name</th>
                <th>Surname</th>
                <th>Salary</th>
            </tr>

           </thead>
            <tbody>
            { workers.map(({name, surname, salary}, index) =>(
                <tr key={index}>
                <td >
                    {name}
                </td>
                <td>
                    {surname}
                </td> 
                <td>
                    {salary}
                </td>
                </tr>
            ))}
            </tbody>
        </table>
    </Container>
   </section>
  )
}
