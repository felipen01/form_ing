import { useState } from 'react'
import './App.css'
import appFirebase from './firebase-config.js'
import { getFirestore, collection, addDoc } from 'firebase/firestore'


const db = getFirestore(appFirebase)

function App() {
  const [count, setCount] = useState(0)

  const [data, setData] = useState({
    name: '',
    number: '',
    email: ''
  })

  const [error, setError] = useState({
    name: null,
    number: null,
    email: null,
    validForm : null
  })

  const handleChange = ({target:{ name , value}}) => {
    setData({ ...data, [name]: value})
    setError({
      ...error,
      validForm: null
    })

    setError({
      ...error,
      [name]: null
    })
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    const regularEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/
    const regularNumber = /^(\+?\d{1,3}[- ]?)?\d{10}$/

    let nameForm = data.name;
    let numberForm = data.number;
    let emailForm = data.email;

    if( !nameForm || !numberForm || !emailForm){
      setError({...error, validForm: false})
    }else if(!regularNumber.test(numberForm) && !regularEmail.test(emailForm)){
      setError({...error, number: true, email: true} )
    }else if(!regularNumber.test(numberForm) && regularEmail.test(emailForm)){
      setError({...error, number: true})
    }else if(!regularEmail.test(emailForm) && regularNumber.test(numberForm)){
      setError({...error, email: true})
    }else setError({...error, validForm: true})

    if(error.validForm){
      try {
        const result = await addDoc(collection(db,'usuarios'),{
          ...data
        })
        console.log(result)
      } catch (error) {
        console.log(error)
      }
      setData({
        name: '',
        number: '',
        email: ''
      })
      
    }
  }

  return (
    <>

      <h1>...</h1>
      <form onSubmit={onSubmit}>

        <div className='containerForm'>
          <label htmlFor="name" >Pon tu nombre</label>
          <input 
            name='name' 
            id='name'
            value={data.name}
            onChange={handleChange}
            />
          <label htmlFor="number" >Pon tu numero</label>
          <input 
            name='number' 
            id='number'
            value={data.number}
            onChange={handleChange}
            />
          {error.number === true &&
          <h4>Escribir un numero valido</h4>}

          <label htmlFor="email" >Pon tu correo</label>
          <input 
            name='email' 
            id='email'
            value={data.email}
            onChange={handleChange}
          />
          {error.email === true &&
          <h4>Escribir un correo valido</h4>}

          {error.validForm === false &&
          <h3>Rellenar los campos</h3>}
          
          <button type="submit">Holis</button>
          
        </div>
      </form>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
