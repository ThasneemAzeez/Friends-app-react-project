import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Navigation from './Navigation'

const ViewAll = () => {
    const [data, changeData] = useState([])
    const fetchData=()=>{
        axios.get(
            "https://friendsapi-re5a.onrender.com/view"

        ).then(
            (response)=>{
                changeData(response.data)
            }
        ).catch()
    }
    useEffect(()=>{fetchData()},[])
       
    return (
        <div>
            <Navigation/>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">Friend Name</th>
                                    <th scope="col">Friend Nickname</th>
                                    <th scope="col">desciption</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    data.map(
                                        (value,index) => {
                                           return <tr>
                                            <th scope="row">{value.name}</th>
                                            <td>{value.friendName}</td>
                                            <td>{value.friendNickName}</td>
                                            <td>{value.DescribeYourFriend}</td>
                                          </tr>
                                        }
                                    )
                                }

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ViewAll