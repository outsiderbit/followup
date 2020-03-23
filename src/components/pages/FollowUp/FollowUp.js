import React from 'react'

import { Container, Box, Item } from './FollowUp.styles'

import FollowUpHeader from '../../molecules/FollowUpHeader'
import AreaChart from '../../organisms/AreaChart'
import Filter from '../../organisms/Filter'
import { useFetchData } from './hooks'

const FollowUp = () => {
  const investment = useFetchData()

  return (
    <>
      <FollowUpHeader />
      <Container>
        <Box>
          <Item>
            <Filter />
          </Item>
          <Item>
            <AreaChart data={investment} />
          </Item>
        </Box>
      </Container>
    </>
  )
}

export default FollowUp
