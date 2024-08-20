import React, { useEffect, useState } from 'react'
import Footer from '../components/Footer/Footer';
import Header from '../components/Header/Header';

const MyApplicationsList = () => {
  const [applicants, setApplicants] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts")
      } catch (error) {
        
      }
    }  
  },[]);
  return (
    <>
    <Header/>
    MyApplicationsList
      <div>
        <p>Search for Jobs and etc.</p>
      </div>
      <div>Filter By Section</div>
      <div>
      <table class="table table-hover">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td colspan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
      </div>
      <Footer/>
    </>
  )
}

export default MyApplicationsList
