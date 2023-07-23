import React from "react";
import bankImage from "../bank_PNG29.png"

function Home(){
    return(
        <>
            <div className="card">

            <div class="card-body">
            <h1 class="card-title">Devin's Bad Bank</h1>
            <p class="card-text">Your information is not safe with us!</p>
            
            <img src={bankImage} class="card-img-top" alt="..."/>

            

            </div>
            </div>
        

        </>
    );
}

export default Home;