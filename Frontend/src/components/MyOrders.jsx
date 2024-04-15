import React, { useEffect, useState } from 'react'
import axios from 'axios'
function MyOrders() {


    const [bookIDs , setBookIDs] = useState([]);
    const userid = localStorage.getItem("UserID")
    
    useEffect(()=>{
        const getBooksID = async () =>{
            try {
                await axios.post("http://localhost:3000/user/getuser" , {
                    _id : userid
                })
                .then((res) =>{
                    setBookIDs(res.data.user.rentedbooks)
                    console.log("Books on rent : ",bookIDs);
                })
            } catch (error) {
                console.log("Error in My orders : ",error);
            }
        }

        getBooksID();

        const getBooksInfo = async() => {
            try {
                
            } catch (error) {
                
            }
        }
        getBooksInfo();
    },[])

  return (
    <div>MyOrders</div>
  )
}

export default MyOrders