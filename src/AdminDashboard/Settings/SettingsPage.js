import React, { Component } from 'react'
import EmptyMessage from '../../Utils/EmptyMessage'
import PropTypes from 'prop-types'
import Entity from './Entity'
import Profiles from './Profiles'
import Security from './Security'
import Notifications from './Notifications'
import Display from './Display'


class SettingsPage extends Component {
    render () {
        if (this.props.location[1] || this.props.location[1] === 0) {
            const selectedItemList = this.props.itemList.getAt(this.props.location[1])
            switch (selectedItemList.title) {
                case 'Entity':
                    return (
                        <Entity />
                    )
                case 'Profiles':
                    return (
                        <Profiles />
                    )
                case 'Security':
                    return (
                        <Security />
                    )
                case 'Notifications':
                    return (
                        <Notifications />
                    )
                case 'Display':
                    return (
                        <Display />
                    )
                default:
                    return (
                        <EmptyMessage message="No Selection" itemListPaneWidth={this.props.itemListPaneWidth} />
                    )
            }
        } else {
            return (
                <EmptyMessage message="No Selection" itemListPaneWidth={this.props.itemListPaneWidth} />            
            )
        }
    }
}

SettingsPage.propTypes = {
    itemListPaneWidth: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    location: PropTypes.array.isRequired,
    itemList: PropTypes.object.isRequired    
}

export default SettingsPage