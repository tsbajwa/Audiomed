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
      <div className='updating'>
        <h2>We are currently upgrading Audiomed. Please leave your email below to be notified when our program has been updated</h2>
        <SubscribeFrom 
        {...formProps}
        />
      </div>

    )
  }
}





 








// export default class Updating extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       email: '',
//     };
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }
//   handleChange(event) {
//     this.setState({ email: event.target.value });
//   }
//   /*eslint-disable */
//   handleSubmit(event) {
//     event.preventDefault();
//     alert('Thanks, we will be in touch once the updated material launches');
//   }
//   /* eslint-enable */
//   render() {
//     return (
//       <div className='updating'>
//         <h2>We are currently upgrading Audiomed. Please leave your email below and we will let you know once our program has been updated</h2>
//         <form onSubmit={this.handleSubmit}>
//           <label>
//             Email:
//             <input type='text' value={this.state.value} onChange={this.handleChange} />
//           </label>
//           <input type='submit' value='Submit' />
//         </form>
//       </div>
//     );
//   }
// }

// export default class Updating extends React.Component {
//   render() {
//     return (
//       <form action="//audiomedanatomy.us16.list-manage.com/subscribe/post?u=8d5cb35d6e26e6e08b3e6f629&amp;id=bc0ce4bb7e" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" novalidate >
//         <div id="mc_embed_signup_scroll">
//           <div className="mc-field-group">
//             <label for="mce-EMAIL">Email Address </label>
//             <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" />
//           </div>
//         </div>
//       </form>
//     )
//   }
// }
