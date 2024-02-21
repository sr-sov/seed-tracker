import { connectToDB } from "@utils/database";
import Cart from "@models/cart";

//create new cart entry containing all the orders

export const POST = async (req, res) => { //can remove 'res' if unused
    const { userId, cart, tag } = await req.json();

    try {
        await connectToDB(); //we need to connect everytime because this is a lambda function
        const newCart = new Cart({
            creator: userId,
            cart,
            tag
        })

        await newCart.save();

        return new Response(JSON.stringify(newCart, {status: 201}))
    } catch (error){
        return new Response("Failed to create a new cart", {status: 500})
    }

}