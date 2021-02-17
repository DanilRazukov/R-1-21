import React, {Component} from 'react';
import ReactDom from 'react-dom';
import './style.scss';
import Message from "@components/Message";

export default class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: [
                {name: 'bot', text: 'Привет!'},
                {name: 'bot', text: 'Я бот'}

            ],
            value: ''
        };
    };
    handleChange = (event) => {
        this.setState({value: event.target.value})
    }
    senMessage = () => {
        this.setState({
            messages:[...this.state.messages, {name:'user', text:this.state.value}],
            value: ''
            }
        )
    };
    _keyPress = (e) => {
        if (e.key === 'Enter') {
            this.senMessage()
        }
    }

    componentDidUpdate = () => {
        if (this.state.messages[this.state.messages.length-1].name !== 'bot') {
            this.setState({messages: [...this.state.messages, {
                name: 'bot', text: 'И снова здравствуйте'
                }]})
        }
    };
    render() {
        const {messages} = this.state;
        const Messages = messages.map((el, i) =>
            <Message
            key={i}
            name={el.name}
            text={el.text}/>
        );
        return <div className='chat'>
            {Messages}
            <input type='text' value={this.state.value} onChange={this.handleChange} onKeyPress={this._keyPress}/>
            <button onClick={this.senMessage}>Add</button>
        </div>;
    }
};


