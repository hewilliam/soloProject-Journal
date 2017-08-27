import React from 'react';
import moment from 'moment';
import axios from 'axios';
import Feed from './Feed.js'

class EntryItem extends React.Component {

    constructor(props) {
        super(props);
        this.state = { //only reason why we have a state in a smaller component is because it needs to be rendered its own individual state for toggle the edit button
            active: false,
        };

        this.handleDelete = this.handleDelete.bind(this);
        this.toggleClassEdit = this.toggleClassEdit.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleDelete(event) {

        let id = this.props.id

        axios.delete('http://localhost:3000/' + id).then((response) => {
            console.log(response)
            this.props.deleteEntry(response)
        })

    }

    toggleClassEdit() {
        const currentState = this.state.active;
        this.setState({ active: !currentState })
        console.log('toggling')
    }

    handleSubmit(event) {
        let title = this.titleValue.value
        let body = this.bodyValue.value

        let id = this.props.id


        axios.patch('http://localhost:3000/' + id, {title, body}).then((response)=>{
            console.log(response)
        })// did not get proper change to occur with react



    }



    render() {
        let date = this.props.date;
        let id = this.props.id;
        let editForm = this.props.editForm //null
        let allEntries = this.props.allentries;


        if (this.state.active === true) {
            return (
                <div className="entry">
                    <a>{moment(date).format('MMMM Do YYYY, h:mm a')} </a>
                    
                    <br/><a class="title">{this.props.title} </a> <br/>
                    <a class="body">{this.props.body} </a><br/>
                    {/* <a>{this.props.id} </a> */}
                    <button onClick={this.props.toggleClass}>edit</button>
                    <button onClick={this.handleDelete}>delete</button>

                    <form onSubmit={this.handleSubmit}>
                        Title:<input type="text" ref={titleValue => this.titleValue = titleValue} /> <br />
                        Body:<input type="text" ref={bodyValue => this.bodyValue = bodyValue} />
                        <br/>
                        <input type="submit" value="Submit" />
                    </form>

                </div>
            )
        }

        return (
            <div className="entry">
                <p>
                <a>{moment(date).format('MMMM Do YYYY, h:mm a')} </a> <br/>
                <a>{this.props.title} </a><br/>
                <a>{this.props.body} </a><br/>
                {/* <a>{this.props.id} </a> */}

                <button onClick={this.toggleClassEdit}>edit</button>
                <button onClick={this.handleDelete}>delete</button>
                </p>
            </div>
        )
    }


}



export default EntryItem;