import React from "react";
import {Link, useNavigate} from 'react-router-dom';
import "./style.scss";

export interface WebpageProps{}

const TournamentHeading: React.FunctionComponent<WebpageProps>=(props)=>{
    const navigate= useNavigate();
    return(
      <div>
        <p> GIVETOUR.COM </p>
        <Link to="/Home"> Home </Link>
        <Link to="/CreateTournament"> Home </Link>
        <Link to="/FindTournaments"> Home </Link>
        <Link to="/FindTeams"> Home </Link>
        <Link to="/SignIn"> Home </Link>
        <Link to="/SignUp"> Home </Link>
        {/* <button onclick={()=> navigate('/language/vietnamese')}>Tieng Viet</button> */}
      </div>
    )
}