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
