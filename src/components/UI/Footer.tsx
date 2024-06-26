import React from 'react'
import { Button, Flex, Icon, Link, Text } from '@chakra-ui/react'
import { FaGithub } from 'react-icons/fa'

export const Footer = () => {
  return (
    <Flex as='footer' align='center' p={1}>
      <Text>made by</Text>
      <Link href={'https://github.com/riteshsinghh-coder'} target='_blank'>
        <Button
          size='xs'
          variant='ghost'
          colorScheme='teal'
          leftIcon={<Icon as={FaGithub} />}>@riteshsinghh-coder</Button>
      </Link>
    </Flex>
  )
}
