import React from 'react';
import SubscribeFrom from 'react-mailchimp-subscribe';

export default class Updating extends React.Component {
  render() {
    const formProps = {
      action: '//audiomedanatomy.us16.list-manage.com/subscribe/post?u=8d5cb35d6e26e6e08b3e6f629&amp;id=bc0ce4bb7e',
      messages: {
        inputPlaceholder: "Enter email",
        btnLabel: 'Submit',
        sending: 'Sending',
        success: 'Success',
        error: 'Error mate'
      },
      styles: {
        sending: {
          fontSize: 18,
          color: "auto"
        },
        success: {
          fontSize: 18,
          color: "green"
        },
        error: {
          fontSize: 18,
          color: "red"
        }
      }
    }
    return (
      <div>
        <SubscribeFrom 
        {...formProps}
        />
      </div>

    )
  }
}
