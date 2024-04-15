import express from 'express'
import { getBooks , getAllBooksData, addBook, deleteBook, updateBook, getrentedBooksInfo } from '../controller/book.controller.js';
import { rentedBooks } from '../controller/user.controller.js';
const  router = express.Router();

router.get('/' , getBooks)
router.get('/all' , getAllBooksData)

router.post('/addbook' , addBook)
router.post('/deletebook' , deleteBook)
router.post('/updatebook', updateBook)

router.post('/rentbook' , rentedBooks)

router.post('/rentbookInfo' , getrentedBooksInfo)




export default router   