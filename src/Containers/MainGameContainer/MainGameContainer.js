import React, { Component } from 'react';
import MainGame from 'component/MainGame';
import Modal from 'component/Modal';
import Default from 'img/Default.png';
import Game from 'img/Game.png';
import Mine from 'img/Mine.png';
import Reading from 'img/Reading.png';
import sign from 'img/sign.png';
import Sleeping from 'img/Sleeping.png';

class MainGameContainer extends Component {
    state = {
        date: 30,
        img: null,
        text: "",
        health: 1000,
        ab: 100,
        money: 1000
    }
    componentDidMount() {
        var modal = document.getElementById('myModal');
        // Get the button that opens the modal
        var btn = document.getElementById("Button1");
        var btn2 = document.getElementById("Button2");
        var btn3 = document.getElementById("Button3");
        var btn4 = document.getElementById("Button4");
        var btn5 = document.getElementById("Button5");
        var btn6 = document.getElementById("Button6");
        // Get the <span> element that closes the modal
        var span = document.getElementById("closeID");          
        console.log(span);                                
        // When the user clicks on the button, open the modal 
        btn.onclick = () => {
            this.setState({
                date: --this.state.date,
                img: Default,
                text: "외주를 해서 돈을 벌었습니다.",
                money: this.state.money + 500
            })
            modal.style.display = "block";
        }
        btn2.onclick = () => {
            this.setState({
                date: --this.state.date,
                img: Default,
                text: "공부를해서 능력이 올랐습니다.",
                ab: this.state.ab + 10
            })
            modal.style.display = "block";
        }
        btn3.onclick = () => {
            this.setState({
                date: --this.state.date,
                img: Mine,
                text: "노가다를 해서 돈을 벌었습니다.",
                health: this.state.health - 100,
                money: this.state.money + 1500
            })
            modal.style.display = "block";
        }
        btn4.onclick = () => {
            this.setState({
                date: --this.state.date,
                img: Sleeping,
                text: "휴식으로 건강을 회복했습니다/",
                health: this.state.health + 50,
            })
            modal.style.display = "block";
        }
        btn5.onclick = () => {
            this.setState({
                date: --this.state.date,
                img: Reading,
                text: "독서를 하여 능력이 향상되었습니다.",
                ab: this.state.ab + 20,
            })
            modal.style.display = "block";
        }
        btn6.onclick = () => {
            this.setState({
                date: --this.state.date,
                img: Game,
                text: "게임을 하여 능력치가 다 하락하였습니다.",
                health: this.state.health - 100,
                money: this.state.money - 1000,
                ab: this.state.ab - 10,
            })
            modal.style.display = "block";
        }
        // When the user clicks on <span> (x), close the modal
        span.onclick = () => {
            console.log("hi");
            modal.style.display = "none";
        }
        // When the user clicks anywhere outside of the modal, close it
        window.onclick = function(event) {
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
    }
    render() {
        const { date, img, text, health, ab, money } = this.state;
        const { handleBlock, handleNone } = this;
        return (
            <div>
               <MainGame date={date} img={img} health={health} ab={ab} money={money}/> 
               <Modal text={text}/>
            </div>
        );
    }
}

export default MainGameContainer;