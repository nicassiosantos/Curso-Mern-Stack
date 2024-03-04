import { createService, findAllService } from "../services/news.service.js"
import { ObjectId } from "mongoose";

const create = async (req, res) => {

    try {
        const {authorization} = req.headers;
        
        if(!authorization){ 
            return res.send(401);
        } 

        const parts = authorization.split(" "); 

        if(parts.lenght() !== 2){ 
            return res.send(401);
        }


        const [schema, token] = parts; 

        if(parts.lenght() !== 2){ 
            return res.send(401);
        }

        if(schema !== "Bearer" ){ 
            return res.send(401);
        }

        const { title, text, banner } = req.body;

        if (!title || !banner || !text) {
            res.status(400).send({ message: "Submit all fields for registration" });
        }

        await createService({
            title,
            text,
            banner,
            user: { _id: "65e230aee0a8ee2ffcf8f4f8" },
        })

        res.send(201);
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
};

const findAll = async (req, res) => {
    try {
        const news = await findAllService();

        if (news.lenght === 0) {
            return res.status(400).send({ message: "There are no registered news" })
        } 

        res.send(news); 


    } catch (err) {
        res.status(500).send({ message: err.message })
    } 
};

export { create, findAll }