import { EmailIcon } from '@chakra-ui/icons'
import { Button, Grid, GridItem } from '@chakra-ui/react'
import { FC } from 'react'

type LoginProps = {}
export const Login: FC<LoginProps> = ({}) => {
  return (
    <>
      <Grid
        bg={'green.200'}
        templateRows={'repeat(10, 1fr)'}
        templateColumns={'repeat(10, 1fr)'}
        gap={4}
        height={'100vh'}
      >
        <GridItem bg={'blue.100'} rowSpan={4} colSpan={4} colStart={4} rowStart={4}>
          <div>
            <label>test</label>
          </div>
          <Button leftIcon={<EmailIcon />} colorScheme='teal' variant='solid'>
            Email
          </Button>
        </GridItem>
        <GridItem bg={'blue.200'} rowSpan={2}>
          <label>2</label>
        </GridItem>
        <GridItem bg={'blue.300'} rowSpan={2} colSpan={2}>
          <label>3</label>
        </GridItem>
        <GridItem bg={'blue.400'} rowSpan={2} colSpan={1}>
          <label>4</label>
        </GridItem>
        <GridItem bg={'blue.500'} rowSpan={3} colSpan={1}>
          <label>5</label>
        </GridItem>
        <GridItem bg={'blue.600'} rowSpan={1} colSpan={2}>
          <label>6</label>
        </GridItem>
      </Grid>
    </>
  )
}
