import { React, useEffect, useState} from "react";
import { LatestMatchDetail } from "../components/LatestMatchDetail";
import { useParams } from "react-router-dom";
import { MatchSmallDetailsCard } from "../components/MatchSmallDetailsCard";

export const TeamPage = () => {
    
    const[team ,setTeam] = useState({matches : []});
    const{ teamName } = useParams();
    useEffect(
        ()=> {
            const fetchmatches = async () => {
                const respone = await fetch(`http://localhost:8080/team/${teamName}`);
                const data = await respone.json();
                console.log(data)
                setTeam(data);
            }
            fetchmatches();
        },[teamName]
    );
    
    if(!team || !team.teamName){
      return <h1>Team not found</h1>
    }
    return (
      <div className="TeamPage">
        <h1>{team.teamName}</h1>
        <LatestMatchDetail teamName={team.teamName} match={team.matches[0]}/>
        {team.matches.slice(1).map(match => <MatchSmallDetailsCard teamName={team.teamName} match={match} />)}
        
      </div>
    );
}