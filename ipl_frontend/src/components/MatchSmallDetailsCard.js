import { React} from "react";
import { Link } from "react-router-dom";

export const MatchSmallDetailsCard = ({teamName, match}) => {
    if(!match) return null;
    const otherTeam = teamName === match.team1 ? match.team2 : match.team1;
    const otherTeamRoute = `/teams/${otherTeam}`;
    // var oppentTeam;
    // if(!match.teamName === match.team1)
    //   { oppentTeam = match.team1;}
    // else
    //   { oppentTeam = match.team2;}

    return (
      <div className="MatchDetailsCard">
        <h1>Vs 
          <Link to={otherTeamRoute}>{otherTeam}</Link>
        </h1>

        <p>{match.winningTeam} wonby {match.margin} {match.wonBy}</p>
      </div>
    );
}