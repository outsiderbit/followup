import React from 'react'
import FollowUpHeader from './FollowUpHeader'

export default {
  title: 'Components/molecules/FollowUpHeader',
}

export const Sample = () => (
  <div style={{ width: '80vw' }}>
    <FollowUpHeader />
  </div>
)

Sample.story = {
  name: 'FollowUpHeader',
}
