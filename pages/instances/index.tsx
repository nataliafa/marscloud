import { ReactElement } from 'react'
import { Heading, Stack } from '@chakra-ui/react'
import Layout from '../../components/layout'
import type { NextPageWithLayout } from '../_app'
import { InstancesList } from '../../features/instances/list'

const InstancesPage: NextPageWithLayout = () => {
  return (
    <Stack spacing={10}>
      <Heading as="h1">Instances</Heading>
      <InstancesList />
    </Stack>
  )
}

InstancesPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>
}

export default InstancesPage
