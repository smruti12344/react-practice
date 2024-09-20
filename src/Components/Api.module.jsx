import React, { useContext, useEffect, useState } from 'react'
import { UserDetails } from './FormikComponent';

export default function Api() {
    const {userData} = useContext(UserDetails);
    const [mars,setMars]= useState(null);
    useEffect(()=>{
      fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
      .then(res => res.json())
      .then(data=>setMars(data))
    },[])
  return (
    <div>
        <h1>Hello user {userData.name}</h1>
        {
            mars && mars.photos && (
                <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Photo Id</th>
                        <th>Camera Name</th>
                        <th>Rover Name</th>
                        <th>Preview</th>
                    </tr>
                </thead>
                <tbody>
                    {mars.photos.map(photo =>
                        <tr key={photo.id}>
                            <td>{photo.id}</td>
                            <td>{photo.camera.full_name}</td>
                            <td>{photo.rover.name}</td>
                            <td>
                                <img src={photo.img_src} width="100" height="100" alt="" />
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            )
        }
      
    </div>
  )
}
