import React, {
    Component
}


from "react"
import PropTypes from "prop-types"

export default class Main extends Component {
    render() {
        let contact = []
        var arrayLength = this.props.contactList.length;
        for (var i = 0; i < arrayLength; i++) {
            let myDOB = this.props.contactList[i].dob
            let myNewDOB = myDOB.slice(0, 4);
            myNewDOB = year - myNewDOB;
            let myId = "contact-" + this.props.contactList[i].id
            var today = new Date();
            var year = today.getFullYear();

            contact.push(
                <div id={myId} key={myId} className="contactDiv">
                    <img className="contactImage" src={this.props.contactList[i].picture.thumbnail} alt=""/>
                    <div className="contactInfo">
                    <p>
                        {this.props.contactList[i].name.first.toUpperCase() + " "}
                        {this.props.contactList[i].name.last.toUpperCase()}
                    </p>
                    <p>{myNewDOB}</p>
                    </div>
                </div>
            ); 
        }
        
        let isUserSelected = false
        let userSelected = []
        
        if (isUserSelected){
            userSelected = []
            userSelected.push(
            <div>yup</div>
            )
        }else{
            userSelected.push(
            <p id="selectContact">Please select a contact</p>
            )
        }
    
        return (
            <div id="contentWrap">
            <h1 className="title">Contact List</h1>
            <div id="leftSide"> {contact} </div>
            <div id="rightSide">
            <h3>{userSelected}</h3>
            </div>
            </div>   
        )
    }
}

Main.propTypes = {
    contactList: PropTypes.array.isRequired
}