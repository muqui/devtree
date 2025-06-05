import  { Request, Response } from 'express';
import slug from 'slug';   
import User from "../models/User";
import { hashPassword } from '../utils/auth';

export const createAccunt = async (req: Request, res: Response)=>{
    const { email, password, handle } = req.body
    console.log(req.body);
    const userExists = await User.findOne({ email })
    if (userExists) {
        const error = new Error('Un usuario con ese mail ya esta registrado')
        return res.status(409).json({ error: error.message })
    }

    const user = new User(req.body);
    user.password =  await  hashPassword(password)
    console.log(slug(handle, ''))
    await user.save()
    res.status(201).json('Registro creado')
 }