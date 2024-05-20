import mongoose from "mongoose";
import DoctorModel from "@/models/Doctor";
import dbConnect from "@/lib/dbConnect";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request: NextRequest){

    const { searchParams } = new URL(request.url);

    const id =  searchParams.get('id');
    console.log("id: ", id);
   

    await dbConnect();

    try {

        const doctor = await DoctorModel.findById(id);

        if(!doctor || doctor === null){
            return NextResponse.json(
                { 
                    message: "Doctor not found" 
                },
                { status: 404 }
            )
        }

        return NextResponse.json(
            { 
                doctor: doctor
            },
            { status: 200 }
        )
        
    } catch (error) {
        console.log("error getting doctor detail: ", error);
        return Response.json(
            { 
                message: "Error getting doctor detail" ,
                error: error
            },
            { status: 500 }
        )
    }
}