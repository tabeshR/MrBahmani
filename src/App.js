import React, {useState} from 'react'
import NeshanMap from 'react-neshan-map-leaflet'
import Button from "./Components/Button";
import Card from "./Components/Card";

//import './SimpleMap.css'

function App() {
    const [userInfo, setUserInfo] = useState(null);
    const [btnName, setBtnName] = useState(null);
    const [btnData, setBtnData] = useState([
        {
            name: "Tabesh",
            family: "Rouhani",
            age: "27",
            btnName: "Button 1",
            btnClass: "primary"
        },
        {
            name: "Kamal",
            family: "Zanjani",
            age: "23",
            btnName: "Button 2",
            btnClass: "success"
        },
        {
            name: "Kourosh",
            family: "Rouhani",
            age: "5",
            btnName: "Button 3",
            btnClass: "danger"
        },
        {
            name: "Kaveh",
            family: "Ahangar",
            age: "30",
            btnName: "Button 4",
            btnClass: "warning"
        }
    ]);

    function setInfo(e, btnName) {
        setBtnName(btnName);
        let name = e.target.dataset.name;
        let family = e.target.dataset.family;
        let age = e.target.dataset.age;
        setUserInfo({
            name,
            family,
            age
        });
    }

    return (
        <div className="container pt-3">
            <div className="row">

                <div className="col">
                    <Card btnName={btnName} userInfo={userInfo}/>
                </div>


                <div className="col">
                    <div className="row">
                        {btnData.map(data => (
                            <div className="col-lg-3 col-md-4 col-12">
                                <Button age={data.age} family={data.family} name={data.name} btnName={data.btnName}
                                        btnClass={data.btnClass}
                                        setInfo={(userData, btnName) => setInfo(userData, btnName)}/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;