import { HomeWrapper } from "./Home"
import { Link } from "react-router-dom"
import styled from "styled-components";
import { RandomMovie } from "./RandomMovie";



const BackWrapper = styled.div`
margin-left: 10px;

button {
background-color: #f8c317;
border: none;
}
button :hover{
    background-color:  #FFD756;
}
span {
    font-weight: 900;
    
}
.backLink{
    text-decoration: none;
    color: #3E3134;

}
p{
   text-overflow: ellipsis;
}

`
const RandomHeader = styled.div`
 height: 20%;
 margin-bottom: 2%;
 margin-top: 2%;
 position: relative;

 .bcg_img{
     max-height: 90%;
     position: absolute;
     right: 2px;
     bottom: 1px;
     opacity: 80%;
 }
 span{
     font-size: large;
     color: #332525;
    font-weight: 500;
 }
 .list_wrapper{
     position: absolute;
     bottom: 1px;
 }
 .line{
     margin-right: 5px;
 }
 h1 {
     margin-left: 10px;
     font-size: 50px;   
 }
`

export const Random = () => {
    return (
        <HomeWrapper>
            <BackWrapper>
                <Link className="backLink" to="/revolver">
                    <button><img src="/images/back_icon.png"></img></button>
                    <span>BACK</span>
                </Link>
            </BackWrapper>
            <RandomHeader>
                <h1>Losowo</h1>
                <img className="bcg_img" src="/images/bcg_random.png" ></img>
                <div className="list_wrapper">
                    <img className="line" src="/images/line.png"></img>
                    <span>Aktualna Lista</span>
                </div>
            </RandomHeader>
            <RandomMovie></RandomMovie>
            <RandomMovie></RandomMovie>
            <RandomMovie></RandomMovie>
        </HomeWrapper>

    )
}
