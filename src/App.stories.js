import React from 'react'
import App from './App'

export default {
  title: 'App',
}

export const Sample = () => (
  <div style={{ width: '80vw' }}>
    <App />
  </div>
)

Sample.story = {
  name: 'Home Default',
}
