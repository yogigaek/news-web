import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

export default class FormComp extends React.Component {

    render(){
        
        return(
            <section className="contact" id="kontak1">
                <h1 style={{fontSize: "30px"}}>My Contact</h1>

                <div className="kontak1">
                    <form action="">
                        <label for="nama">Name</label>
                            <input type="text" name="nama" placeholder="Full Name" /> <br />
                        <label for="email">Email</label>
                            <input type="email" name="email" placeholder="Email" /> <br />
                        <label for="pesan">Message</label>
                            <textarea name="pesan" id="pesan" placeholder="Write Something ..." style= {{height: "170px"}}></textarea>
                        <input type="submit" placeholder="submit" />
                    </form>
                </div>
            </section>
        )
    }
}