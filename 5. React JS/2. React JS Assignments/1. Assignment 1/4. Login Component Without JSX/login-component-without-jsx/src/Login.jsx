import React from 'react';

import './Login.css';

const Login = () => {

  return React.createElement(

    'div',

    null,

    React.createElement(

      'form',

      null,

      React.createElement(

        'div',

        null,

        React.createElement('label', { htmlFor: 'username' }, 'Username: '),

        React.createElement('input', {

          type: 'text',

          id: 'username',

          name: 'username',

          placeholder: 'Enter your username',

        })

      ),

      React.createElement('br', null),

      React.createElement(

        'div',

        null,

        React.createElement('label', { htmlFor: 'password' }, 'Password: '),

        React.createElement('input', {

          type: 'password',

          id: 'password',

          name: 'password',

          placeholder: 'Enter your password',

        })

      ),

      React.createElement('br', null),

      React.createElement(

        'button',

        { type: 'submit' },

        'Submit'

      )
    )
  );
};

export default Login;