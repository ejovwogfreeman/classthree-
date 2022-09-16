// import Home from './components/Home';
import { useState } from 'react'
import Login from './components/Login';
import Signup from './components/Signup';
import Form from './components/Form';
import Home from './components/Home';
import Loader from './components/Loader';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Notfound from './components/Notfound'
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';


function App() {

  // const greet = 'hello world'
  // const time = new Date().getHours();
  // let show;

  // if(time < 12) {
  //   show = 'good morning';
  // }else if( time < 16  ) {
  //   show = 'good afternoon'
  // }else if ( time < 20) {
  //   show = 'good evening'
  // }else {
  //   show = 'good night'
  // }

  // const greet = () => {
  //   alert('hello welcome today')
  // }

  // const name = 'Rita';


  // useState syntax
  // const [state,  setState] = useState(initialstate)

  // const [name, setName] = useState('godbless')
  // const [age, setAge] = useState(40)

  //   const update = () => {
  //   setName('freeman')
  //   setAge(50)
  // }

  // const [name, setName] = useState(true)

  // const update = () => {
  //   setName(!name)
  // }

  // let user = false;

  // if(user) {
  //   return (
  //     <div> You are logged in </div>
  //   )
  // }else {
  //   return (
  //     <div> You logged out  </div>
  //   )
  // }

  // if(user) {
  //   return <Login />
  // }else {
  //   return <Logout />
  // }

  // return(
  //   <>
  //       {user ? <Login/> : <Logout /> }
  //   </>
  // )

  //   return(
  //     <div className="App">
  //       <Home x={greet} t={show}/>
  //       <h1>{name ? 'godbless': 'freeman'} is {name ? '20' : '30'} years old</h1>
  //       <button onClick={update}>click me</button>
  //     </div>
  //   )

  // return (
  //   <>
  //     <h1>Welcome user</h1>
  //     {user && <Login />}
  //   </>
  // )

  // let students = ['rita', 'joshua', 'matthew', 'pleasant' ]

  const companies = [
    {
        id: 1,
        name: 'google',
        staffs: 23, 
        startYear: 1974, 
        isTech: true
    },
    {
        id: 2,
        name: 'facebook',
        staffs: 13, 
        startYear: 2004, 
        isTech: true
    }, 
    {
        id: 3,
        name: 'gucci',
        staffs: 37, 
        startYear: 1990, 
        isTech: false
    }, 
    {
        id: 4,
        name: 'amazon',
        staffs: 15, 
        startYear: 1996, 
        isTech: true
    }, 
    {
        id: 5,
        name: 'microsoft',
        staffs: 25, 
        startYear: 1975, 
        isTech: true
    }, 
    {
        id: 6,
        name: 'starlink',
        staffs: 29, 
        startYear: 1999, 
        isTech: true
    }, 
    {
        id: 7,
        name: 'Nadia',
        staffs: 30, 
        startYear: 2005, 
        isTech: false
    }, 
    {
      id: 8,
      name: 'Gbtech',
      staffs: 90, 
      startYear: 2005, 
      isTech: true
    }, 
    {
        id: 9,
        name: 'rita clothing',
        staffs: 30, 
        startYear: 2005, 
        isTech: false
    }, 
    {
      id: 10,
      name: 'joshua palmwine',
      staffs: 30, 
      startYear: 2005, 
      isTech: false
    }, 
]

//   return (
//     <>
//       {/* {students.map((student) => <p>{student}</p>)}  */}
//       {students.map((student, index)=> {
//         return (
//           <h1 key={index}>{student}</h1>
//         )
//       })}
//     </>
//   )

const myStyles = {
  marginTop: '20px',  
  backgroundColor: '#f3f3f3',
  padding: '10px'
}

const [loader, setLoader] = useState(true)

setTimeout(()=> {
  setLoader(false)
}, 1000)

// if(loader) {
//   return <Loader />
// }

  return(
    <Router>
      <div style={{margin: '20px 35%'}}>
        {loader ? <Loader/> :
        <>
        <Navbar />
        <Routes>
          <Route path = '/' element={<Home/>}/>
          <Route path = '/form' element={<Form/>}/>
          <Route path = '/login' element={<Login/>}/>
          <Route path = '/signup' element={<Signup/>}/>
          <Route path = '*' element={<Notfound/>}/>
          {/* <Form /> */}
          {/* {companies.map((company)=> {
            return (
              <div key={company.id} style={myStyles}>
                <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                  <h2>{company.name}</h2><p>{company.isTech? 'tech comany': 'non tech company' }</p>
                </div>
                <p>has {company.staffs} staffs and was founded in year {company.startYear}</p>
              </div>
            )
          })} */}
        </Routes>
        <Footer />
        </>}
      </div>
    </Router>
  )

}

export default App;