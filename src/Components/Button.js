import React from 'react';

const Button = ({name,family,age,btnClass,btnName,setInfo}) => {
    return (
        <div>
            <button data-Name={name} data-Family={family} data-Age={age}
                    className={`btn btn-${btnClass} btn-sm`} onClick={(e) => setInfo(e, btnName)}>{btnName}
                Info
            </button>
        </div>
    );
};

export default Button;