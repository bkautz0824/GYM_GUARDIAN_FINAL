// export async function getServerSideProps(context) {
//     let res = await fetch("http://localhost:3000/api/posts", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//       },
//     });
//     let users = await res.json();
  
//     return {
//       props: { users },
//     };
//   }
"use client"
  import React from 'react'
  import axios from 'axios';

  export default function Test() {

    const [exercises, setExercises] = React.useState(null)
    React.useEffect(() => {
       console.log(exercises)
      }, [exercises]);

    const getExercises = async (e) => {
        e.preventDefault();
        
        try {
          const response = await fetch("http://localhost:3000/api/exercises", {
            method: "GET",
          });
    
          if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
          }
    
          const res = await response.json();
          setExercises(res.data)
         
        } catch (error) {
          console.error("Error fetching data:", error);
          // Handle the error, e.g., display an error message to the user
        }
      }

      const postUser = async () => {
        let user = "BennettKautz"
        let password = "Passworddd"
        let body  = {
          username: user,
          password: password
        }
        
        // const api = axios.create({baseURL:"http://localhost:3000"})
        // await api.post('/users', body).then(res => res).catch(err => err)


        try {
          const response = await axios.post('http://localhost:3000/api/users', body);
            
          if (response.status !== 200) {
            throw new Error(`Request failed with status: ${response.status}`);
          }
            
          const data = response.data;
          console.log(data);
        } catch (error) {
          console.error("Error fetching data:", error);
          // Handle the error, e.g., display an error message to the user
        }
      }

      
    return (
        <div>
            Test
            <button onClick={getExercises}>CLick</button>
            <br/>
            <button onClick={postUser}>CLick to add user</button>
        </div>
    )
  }
  