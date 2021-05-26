import React from "react";
import Timer from "./Timer";


export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            valid: true
        }
        this.formInfo = {
            h1: 'You\'re Invited!',
            h2: 'Aivee\'s Birthday',
            subTxt: 'Bring your own food :)',
            btnTxt: 'RSVP',
            date: '2021-07-15T15:30',
            bgpic: "https://images.unsplash.com/photo-1607893351349-0cfa621476ed?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
        }
    }

    checkValid = (input) => {
        this.setState({ valid: input })
    }

    render() {
        return (
            <div className="Countdown" style={{ backgroundImage: 'url(' + this.formInfo.bgpic + ')' }}>
                <div className="container">
                    <div className='head'>{this.formInfo.h1}</div>
                    <div className="head hmiddle">{this.formInfo.h2}</div>
                    <div className="head">{this.formInfo.subTxt}</div>
                    <Timer checkValid={this.checkValid} date={this.formInfo.date} />
                    {this.state.valid &&
                        <a className='action' href='https://github.com/aiveeKeiSoriano'>{this.formInfo.btnTxt}</a>}
                </div>
            </div>
        )
    }
}