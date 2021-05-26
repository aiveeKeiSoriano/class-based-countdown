import React from "react";


export default class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            day: '00',
            hour: '00',
            min: '00',
            sec: '00',
            valid: true
        }
        this.timer = null
    }

    setTime = () => {
        let current = new Date().getTime()
        let given = new Date(this.props.date).getTime()
        if (current > given) {
            this.setState({ valid: false })
            this.props.checkValid(false)
        }
        else {
            let days = (given - current) / 86400000
            let hours = ((days % 1) * 86400000) / 3600000
            let minutes = ((hours % 1) * 3600000) / 60000
            let seconds = ((minutes % 1) * 60000) / 1000
            this.setState({
                day: Math.floor(days).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }),
                hour: Math.floor(hours).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }),
                min: Math.floor(minutes).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false }),
                sec: Math.floor(seconds).toLocaleString('en-US', { minimumIntegerDigits: 2, useGrouping: false })
            })
        }
    }

    componentDidMount() {
        this.timer = setInterval(() => this.setTime(), 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

        render() {
            return (
                <div className="timer">
                    {this.state.valid &&
                        <div className="timerInner">
                            <div className="card daycard">
                                <div className="number">{this.state.day}</div>
                                <div className="label">Days</div>
                            </div>
                            <div className="card hourcard">
                                <div className="number">{this.state.hour}</div>
                                <div className="label">Hours</div>
                            </div>
                            <div className="card mincard">
                                <div className="number">{this.state.min}</div>
                                <div className="label">Minutes</div>
                            </div>
                            <div className="card seccard">
                                <div className="number">{this.state.sec}</div>
                                <div className="label">Seconds</div>
                            </div>
                        </div>
                    }
                    {!this.state.valid &&
                        <div className="timesup">This event is over</div>
                    }
                </div>
            )
        }
    }