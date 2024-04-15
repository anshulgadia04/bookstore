import React , {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import toast from 'react-hot-toast';




function UpdateBook(item) {
    // console.log("Item in REmoveModal : ", item.book);

    const navigate = useNavigate();
    const [books , setBooks] = useState([])

    let [name ,setName] = useState("")
    let [category ,setCategory] = useState("")
    let [price ,setPrice] = useState(Number)
    let [tittle ,setTittle] = useState("")
    let [bookID , setbookID] = useState("")

    useEffect(()=>{
        setbookID(item.book._id);
        console.log(bookID);
        
    })

    const handleSubmit = async (e)=>{
        if(name === ""){
            name = item.name
        }
        if(category === ""){
            category = item.category
        }
        if(tittle === ""){
            tittle = item.tittle
        }
        if(!isNaN(price)){
            price = item.price
        }
       
        e.preventDefault();
        try {
            await axios.post("http://localhost:3000/book/updatebook",{
                _id : bookID,
                name : name,
                price : price,
                tittle : tittle,
                category : category
            })
            toast.success("Book Updated")
            
        } catch (error) {
            toast.error("Failed to Update the Book")
        }
        navigate('/admin/managebooks/')
    }



  return (
    <div>
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box  max-w-md mx-auto border p-8 rounded-md">
                <form method="dialog">
                
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>


                <form className='flex flex-col space-y-3'>
                    <label htmlFor='bookName'>Book Name</label>
                    <input name='bookName' className="text-lg h-10" placeholder={item.book.name}
                            onChange={(e)=>{
                                setName(e.target.value)
                            }}
                    />

                    <label htmlFor='bookCategory'>Book Catergory</label>
                    <input name='bookCategory' className="text-lg h-10" placeholder={item.book.category}
                        onChange={(e)=>{
                                setCategory(e.target.value)
                            }}
                    />

                    <label htmlFor='bookPrice'>Book Price</label>
                    <input name='bookPrice' className="text-lg h-10" placeholder={item.book.price}
                        onChange={(e)=>{
                                setPrice(e.target.value)
                            }}
                    />

                    <label htmlFor='bookTittle'>Book Tittle</label>
                    <input name='bookTittle' className="text-lg h-10" placeholder={item.book.tittle}
                        onChange={(e)=>{
                                setTittle(e.target.value)
                            }}
                    />

                    <button 
                    onClick={handleSubmit}
                    type="submit" class="w-1/3 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        Update Book
                    </button>
                </form>

            
            </div>
        </dialog>   
    </div>
  )
}

export default UpdateBook