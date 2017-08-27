import React from 'react';
import axios from 'axios';
import EntryItem from './EntryItem'
import EntryForm from './EntryForm'

class Feed extends React.Component {

    constructor() {
        super();
        
        this.state = {
          entries : [],


        };

        this.loadAllEntry = this.loadAllEntry.bind(this);
        this.enterEntry = this.enterEntry.bind(this);
        this.deleteEntry = this.deleteEntry.bind(this);
        this.updateEntry = this.updateEntry.bind(this);

    }

    enterEntry (response) {
        let newState = this.state.entries
        newState.push(response.data)
       this.setState({newState})
    }

    deleteEntry (response) {
        let newState = this.state.entries

        let index = 0

        for(var i =0; i < newState.length; i++) {
            if(newState[i]._id === response.data._id) {
                index = i
            }
        }
        newState.splice(index, 1)
        
        this.setState({newState})
    }

    updateEntry(data) {

        let newState = this.state.entries
        for(var i = 0; i<newState.length; i++) {
            if(newState[i].title !== response.data.title || newState[i].body !==response.data.body) {
                newState[i].title = response.data.title
                newState[i].body = response.data.body
            }
        }
        console.log('its running')
        this.setState({newState})

    }
    


    loadAllEntry() {
        axios.get('http://localhost:3000/allentry').then((data) => {
            // console.log('retrieved data: ', data)
            this.setState({entries: data.data});
            // console.log(this.state)
          })
    }

    




    componentDidMount() {
        
        this.loadAllEntry();

    }


    render() {
        const entryItems = this.state.entries.map((entry, index) => {
            return <EntryItem id={entry._id} title={entry.title} body={entry.body} date={entry.date} key={index} allentries={this.state.entries} deleteEntry={this.deleteEntry} updateEntry={this.updateEntry} />
        })

        return (
            <div>
                <EntryForm allentries={this.state.entries} enterEntry={this.enterEntry}/>

                {entryItems}
                
            </div>
        )
    }


}
export default Feed;