import { connectToDB } from "@utils/database";

import Prompt from "@models/prompt";

// Get

export const GET = async (req, { params }) => {
    try{
        await connectToDB()

        const prompt = await Prompt.findById(params.id).populate('creator')

        if(!prompt){
            return new Response("Prompt not found", { status:404 })
        }

        return new Response(JSON.stringify(prompt), {status:200})
    }
    catch(error){
        return new Response('Failed to fetch all Prompts', {status:500})
    }
}

// Patch

export const PATCH = async (req, {params}) => {
    const { prompt, tag } = await req.json()

    try{
        await connectToDB()

        const existPrompt = await Prompt.findById(params.id)

        if(!existPrompt){
            return new Response("Prompt not found", { status:404 })
        }

        existPrompt.prompt = prompt
        existPrompt.tag = tag

        await existPrompt.save()

        return new Response(JSON.stringify(existPrompt), {status:200})
    }
    catch(error){
        return new Response('Failed to Update The Prompt', {status:500})
    }
}

// Delete

export const DELETE = async (req, {params}) => {
    try{
        await connectToDB()

        await Prompt.findByIdAndRemove(params.id)

        return new Response("Prompt Deleted successfully", {status:200})
    }
    catch(error){
        return new Response('Failed to Delete The Prompt', {status:500})
    }
}