import { Tldraw } from '@tldraw/tldraw'
import React from 'react'
import GenerateButton from './GenerateButton'

const Draw = () => {
  return (
    <div className='p-6 ' style={{height: 'calc(100vh - 80px)'}}>
      <Tldraw persistenceKey='codeMaker'>
        <GenerateButton />
      </Tldraw>
    </div>
  )
}

export default Draw
