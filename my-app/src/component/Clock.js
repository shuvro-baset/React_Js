import React from 'react';

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date()};
    }
    // this is life cycle method of react. it runs after component has been rendered to the DOM
    componentDidMount() {
        this.clockTimer = setInterval(() => this.tick(), 1000);
    }
    // unmount the component and remove timer. 
    componentWillUnmount() {
        clearInterval(this.clockTimer);
    }
    tick() {
        // making component reactive. updating state.
        this.setState({
            date: new Date()
        });
    }
    render() {
        return (
            <h1 className="heading">
                <span className="text">Hello timer:  {this.state.date.toLocaleTimeString(this.props.locale)}</span>
            </h1>
        );
    }
}

export default Clock;