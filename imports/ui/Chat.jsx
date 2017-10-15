import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Meteor } from 'meteor/meteor';
import classnames from 'classnames';
 
import { Chats } from '../api/chats.js';
// Task component - represents a single todo item
export default class Chat extends Component {
	toggleChecked() {
    // Set the checked property to the opposite of its current value
    Meteor.call('chats.setChecked', this.props.task._id, !this.props.task.checked);
  }
  render() {
    return (
      <li>
				<span className="text">
					<strong>{this.props.chat.username}</strong>: {this.props.chat.text}
				</span>
			</li>
    );
  }
}
 
Chat.propTypes = {
  // This component gets the task to display through a React prop.
  // We can use propTypes to indicate it is required
  chat: PropTypes.object.isRequired,
};