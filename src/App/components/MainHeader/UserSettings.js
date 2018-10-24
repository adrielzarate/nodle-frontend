import React from 'react';

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
                    <DropdownItem tag="a" className="text-right" href="#">User Settings</DropdownItem>
                    <DropdownItem tag="a" className="text-right" href="#">Logout</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>  
        );
    }
}

export default UserSettings;