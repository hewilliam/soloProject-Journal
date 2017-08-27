import React from 'react';
import axios from 'axios';
import Feed from './Feed.js'

class EntryForm extends React.Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        let titleText = this.titleValue.value
        let bodyText = this.bodyValue.value

        if (titleText && bodyText) {
            axios({

                method: 'post',
                url: 'http://localhost:3000/post',
                data: {
                    title: titleText,
                    body: bodyText,
                },
            }).then((response)=>{this.props.enterEntry(response)})

            
            alert('New Entry Submitted!');
            event.preventDefault();

        } else {
            alert('please fill both fields in')
        }

    }

    render() {

        return (

            <form onSubmit={this.handleSubmit} className="submit">
                <br></br>
                New Entry <br />
                Title:<input type="text" ref={titleValue => this.titleValue = titleValue} /> <br />
                Body:<input type="text" ref={bodyValue => this.bodyValue = bodyValue} /> <br></br>
                <input type="submit" value="Submit" />
            </form>

        )
    }


}
export default EntryForm;