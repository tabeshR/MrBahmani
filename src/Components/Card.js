import React from 'react';

const Card = ({btnName,userInfo}) => {
    return (

            <div className="card">
                <div className="card-header">
                    {btnName} Info
                </div>
                <div className="card-body">
                    <div>
                        <span>Name : </span>
                        <strong>{userInfo ? userInfo.name : null}</strong>
                    </div>
                    <div>
                        <span>Family : </span>
                        <strong>{userInfo ? userInfo.family : null}</strong>
                    </div>
                    <div>
                        <span>Age : </span>
                        <strong>{userInfo ? userInfo.age : null}</strong>
                    </div>
                </div>
            </div>

    );
};

export default Card;