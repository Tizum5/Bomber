import React from 'react';
import './Homepage.css'

import { Button, ButtonGroup } from '@chakra-ui/react';
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Heading } from '@chakra-ui/react';
import { Stack, HStack, VStack } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react';
import { Text, Icon } from '@chakra-ui/react';
import { Box } from '@chakra-ui/react';
import BomberImg from '/assets/bg.png';
import Bomber from '/assets/Bomber.svg';

const process = {
  env: {
    NODE_ENV: 'development'
  }
};

const Homepage = () => {
  return (
    <div>
      <Stack direction='flex' flex='100%'>
          <Box flex='1' display='flex'>
            {/*Background img */}
              <Image src={BomberImg} alt='Background Image'
                boxSize='xl' rounded='50%' my="-20px"
                fallbackSrc={`${process.env.PUBLIC_URL}/assets/bg.png`}
                w='50%'
              />
          </Box>
      </Stack>
      <div className="container">
        <Stack className="row">
          <Box className="col-md-12">
            {/*Logo */}
            <Image src={Bomber} alt="Bomber Logo" fallbackSrc={`${process.env.PUBLIC_URL}/assets/Bomber.svg`}/>
          </Box>
        </Stack>
        <div className="row">
          <div className="col-md-12">
            {/*Title */}
            <h1>Bomber</h1>
          </div>
          <div className="col-md-8">
            {/*Subtitle */}
            <h3>Instant Adventure</h3>
          </div>
        </div>
        {/*sign-in Buttons */}
        <Card bg='grey' rounded={13} mt={[0]} w={[50,150,200,230]} ml={[61.5, 330, 530, 710, 1052]} p='2.5px'>
          <CardHeader rounded={45} bg="#D3D3D3" align="center">
            <Heading textColor="#7851a9" as='u' my='1px' px='2px' size='lg'>Sign In</Heading>
          </CardHeader>
          <CardBody rounded={50} bg='#5A5A5A'>
              <Stack align='center' direction='column' spacing={1.5}>
                <Button width={[10, 120, 160, 200]} colorScheme='whatsapp' variant='outline' w='145px' size='md'>Google</Button>
                <Button width={[10, 120, 160, 200]} colorScheme='red' variant='outline' w='145px' size='md'>Auth</Button>
                <Button width={[10, 120, 160, 200]} colorScheme='blackAlpha' variant='outline' w='145px' size='md'>Apple</Button>
        {/*modal for phone and email sign in*/}
                <Button width={[10, 120, 160, 200]} colorScheme='facebook' variant='outline' w='145px' size='md'>Phone</Button>
                <Button width={[10, 120, 160, 200]} colorScheme='pink' variant='outline' w='145px' size='md'  >Email</Button>
              </Stack>
          </CardBody>
        </Card>
        <div className="row">
          <div className="col">
        {/*sign-up Button-modal*/}
            <Button>Sign up</Button>
          </div>
        </div>
      </div>
      <div className="footer container">
        <div className="row">
          <div className="col-md-12">
            {/*footer */}
            <ul>
              <li>1</li>
              <li>2</li>
              <li>3</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage