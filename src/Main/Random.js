import { HomeWrapper } from "./Home"
import { RandomMovie } from "./RandomMovie";
import { BackButton } from "./BackButton";
import styled from "styled-components";

const RandomHeader = styled.div`
 height: 20%;
 margin-bottom: 2%;
 margin-top: 2%;
 position: relative;
 
 .bcg_img{
     height: 100%;
     position: absolute;
     right: 2.5%;
     bottom: 1px;
     opacity: 80%;
     @media  (min-width:768px){
     height: 140% ;
    }

 }
 span{
     font-size: large;
     color: #332525;
    font-weight: 500;
 }
 .list_wrapper{
     margin-left: 2.5%;

 }
 .line{
     margin-right: 5px;
 }
 h1 {
     margin-left: 2.5%;
     font-size: 50px;    
 }
`

export const Random = () => {
    return (
        <HomeWrapper>
            <BackButton />
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
