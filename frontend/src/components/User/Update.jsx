    import axios from 'axios';
import React from 'react';
import './Update.css';
import Usernav from "./Usernav";

    const Update = () => {
        const getdata=async ()=>{
            const response = await axios.get("http://localhost:3000/getbookingsbyuser", {
                params: {
                    email: localStorage.getItem("email")
                }
            });
            console.log(response.data.data);
        }
        return (
            <>
                <Usernav></Usernav>
                <h1 className='uhead'>Service updates</h1>
                <div className="updatemain">
                    <table>
                        <tr>
                            <th className='colsize1'>Sr no.</th>
                            <th className='colsize2'>Service list</th>
                            <th className='colsize3'>Status</th>
                        </tr>
                        <tr>
                            <td>1.</td>
                            <td>Breake pad change</td>
                            <td className="status">Panding</td>
                        </tr>
                        <tr>
                            <td>2.</td>
                            <td>Breake pad change</td>
                            <td className="status">Panding</td>
                        </tr><tr>
                            <td>3.</td>
                            <td>Breake pad change</td>
                            <td className="status">Completed</td>
                        </tr>

                    </table>
                    <button onClick={getdata}>getdata</button>
                </div>
            </>
        )
    }

    export default Update