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
  
  export default function Test() {

    // React.useEffect(() => {
    //    console.log(users)
    //   }, [user]);

    const getUsers = async (e) => {
        e.preventDefault();
        
        try {
          const response = await fetch("http://localhost:3000/api/users", {
            method: "GET",
          });
    
          if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
          }
    
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error("Error fetching data:", error);
          // Handle the error, e.g., display an error message to the user
        }
      }

      const postUser = async (e) => {
        e.preventDefault();
        
        try {
          const response = await fetch("http://localhost:3000/api/users", {
            method: "POST",
          });
    
          if (!response.ok) {
            throw new Error(`Request failed with status: ${response.status}`);
          }
    
          const data = await response.json();
          console.log(data);
        } catch (error) {
          console.error("Error fetching data:", error);
          // Handle the error, e.g., display an error message to the user
        }
      }

      
    return (
        <div>
            Test
            <button onClick={getUsers}>CLick</button>
        </div>
    )
  }
  