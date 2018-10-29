import React from 'react';
import { Link } from 'react-router-dom';
import { 
    ButtonDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
 } from 'reactstrap';

 class UserSettings extends React.Component {

    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
        dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle color="link" caret>
                    <img className="rounded-circle" src="img/user-a.jpg" width="30" height="30" alt=" " />
                </DropdownToggle>
                <DropdownMenu right>
                    <DropdownItem className="text-right" tag={Link} to="#">User Settings</DropdownItem>
                    <DropdownItem className="text-right" tag={Link} to="#">Logout</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>  
        );
    }
}

export default UserSettings;