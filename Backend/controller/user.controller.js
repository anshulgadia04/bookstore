import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs'


export const signup = async (req,res) =>{
    // console.log("req data is : ",req.body);
    try {
        const {fullname,email,password} = req.body;
        const user = await User.findOne({email})
        if(user){
            return res.status(400).json({message :"User already exists"});
        }

        else{
            const hashedPassword = await bcryptjs.hash(password , 10)
            const createdUser = new User({
                fullname,
                email,
                password : hashedPassword
            })
            await createdUser.save()
            res.status(200).json({message : "User Created Successfully",user :{
                _id : createdUser._id,
                fullname : createdUser.fullname,
                email : createdUser.email
            }})
            
        }
    } catch (error) {
        console.log("Error in userController ",error);
        
        res.status(500).json({message : "Internal Server error"})
    }
};



export const login = async (req,res) =>{
    try {
        const {email,password} = req.body;
        const user = await User.findOne({email})
        const isMatch = await bcryptjs.compare(password,user.password);

        if(!user || !isMatch){
            return res.status(400).json({message : "Invalid username and password !"})
        }
        else{
            return res.status(200).json({message:"Login Successfully" ,user : {
                _id : user._id,
                fullname : user.fullname,
                email : user.email,
                
            }})
        }
    } catch (error) {
        console.log("Error in login Function ", error);
        res.status(500).json({message:"internel server error"})
    }
}


export const getUser = async (req,res) =>{

    const userId = req.body._id;
    console.log("User id is : ",userId);
    try {
        const user = await User.findById(userId); 
        res.status(200).json({message : "User Found" , user : {
            fullname : user.fullname,
            email : user.email,
            rentedbooks : user.rentbooks
        }})
    } catch (error) {
        res.status(500).json("Internel Server Error")
    }

}



export const rentedBooks = async (req,res) =>{
    const userID =  req.body.userID;
    const bookId =  req.body.bookID;
    try {
        const user = await User.findByIdAndUpdate({_id : userID},
            { $push : {rentbooks : bookId}},
            { new : true}
            );
        
            if(!user)
            {
                console.log("User Not Exists");
                res.status(404).json({message : "User not found"});
            }
        
            res.status(200).json({message : "Book Added to Rented Section" , user});
    } catch (error) {
        res.status(500).json({message : "Internal Server Error"})
        console.log("Errro in rendBook Controller : " , error)
    }


}
