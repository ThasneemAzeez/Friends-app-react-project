import React, { useState } from 'react'

const AddFriend = () => {
    const[data,changeData]=useState({
        "name":"",
        "friendName":"",
        "friendNickName":"",
        "DescribeYourFriend":""
    })
    const InputHandler=(event)=>{
        changeData({...data,[event.target.name]:event.target.value})
    }
    const readValue=()=>{
        console.log(data)
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                           <label htmlFor="" className="form-label">Name</label>
                           <input type="text" className="form-control" name='name' value={data.name} onChange={InputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Friend Name</label>
                            <input type="text" className="form-control" name='friendName' value={data.friendName} onChange={InputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Friend Nickname</label>
                            <input type="text" className="form-control"  name='friendNickName' value={data.friendNickName} onChange={InputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">Descibe Friend</label>
                            <input type="text" className="form-control" name='DescribeYourFriend'value={data.DescribeYourFriend} onChange={InputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <buttn className="btn btn-success" onClick={readValue}>Submit</buttn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AddFriend