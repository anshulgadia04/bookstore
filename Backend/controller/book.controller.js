import Book from "../models/book.model.js";


export const getBooks =  async (req,res) =>{
    try {
        const book = await Book.find()
        res.status(200).json(book)
    } catch (error) {
        console.log("Error in BookController : ", error);
        res.status(500).json(error)
    }
}   

export const getAllBooksData = async (req,res)=>{
    try {
        const books = await Book.find();
        res.status(200).json(books);
    } catch (error) {
        console.log("Error in getAllBooksData" . error);
        res.status(500).json(error)
    }
}


export const addBook = async (req,res)=>{
    const {name,category,price,tittle,img} = req.body;
    try {
        const bookDetails = new Book(
            {
                name : name,
                category : category,
                price : price,
                tittle : tittle,
                image : img
            })
            
            await bookDetails.save()
            res.status(200).json("Book Inserted Successfully")
    } catch (error) {
        res.status(500).json("Internel Server Error in addBook")
    }
}

export const deleteBook = async (req,res)=>{
    const bookID = req.body._id;
    console.log(bookID);
    const existingBook = await Book.findById(bookID)
    // console.log("Existing Book :",existingBook);
    try {
        if(!existingBook){
            return res.status(400).json({message:"Book not Found"})
        }
   
        await Book.deleteOne({_id : bookID})
        return res.status(200).json({message : "Book Deleted Successfully"})
        
    } catch (error) {
        return res.status(500).json({message:"Internel Server error"})
    }
}


export const updateBook = async (req,res) =>{
    const {_id , name , tittle , price , category} = req.body

    try {
        await Book.findByIdAndUpdate(_id , {
            name,
            price,
            category,
            tittle
        } , {new : true})


        res.status(200).json({message : "Book Updated Successfully"})
        
    } catch (error) {
        // console.log("Error in Update : ",error);
        res.status(500).json({message: "Internel Server Error"})
    }

}


export const getrentedBooksInfo = async (req,res) => {

    const booksID = req.body;

    try {
        const bookListInfo = await Promise.all(booksID.map(async (bID)=>{
            const book = await Book.findById({_id : bID})
            return book;
        }))

        console.log(bookListInfo)
        res.status(200).json({message : "BooksInfo Found" , bookListInfo})
    } catch (error) {
        console.log("Error in getBookInfo" , error);
        res.status(500).json({message : "Internel Server Error"})
    }
}