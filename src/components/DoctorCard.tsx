import { Doctor } from '@/models/Doctor'
import Image from 'next/image'
import React from 'react'


interface DoctorCardProps {
    _id?: string;
    name: string;
    location: string;
    specialty: string[];
    experience: string;
    availability: string;
    consultationFee: number;
    hospital: string;
    bio: string;
    image: string;
}

function DoctorCard(
    {  _id, name, location, specialty, experience, availability, consultationFee, hospital, bio, image } : DoctorCardProps
) {
  return (
    <div className='p-1 w-1/2'>
        
        <div key={name} className="cardbox ">
            <div className="relative">
              <Image 
              src={image || '/icons/doctor_placeholder.png'} 
              alt="background" 
              className="fleet--clip" 
              width={250}
              height={200}
              />
            </div>
            <span className="commanbox">
              <h1 className="drname">{name}</h1>
              <p className="text-gray-600 text-small">
                {specialty}
                <br />
                {experience} years experience overall
              </p>
                <h1 className="h1">{location}</h1>
              <b className="text-green-500">Free</b>
              <div className="flex">
                <p className="text-gray-500">Consultation fee at clinic</p>
                <div className="bookingbox">
                  <b className="text-green-500 pb-4">{availability}</b>
                  <button className="btn hover:z-10 hover:bg-sky-500" >Book Appointment</button>
                </div>
              </div>
              <br />
              <hr />
              {/* {isDropDown ?
              <Dropdown />  : " "
              } */}
            </span>
          </div>
    </div>
  )
}

export default DoctorCard