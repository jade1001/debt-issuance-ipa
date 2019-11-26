import React from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import { Button, FormLabel } from 'react-bootstrap'

const getColor = props => {
  if (props.isDragAccept) {
    return '#00e676'
  }
  if (props.isDragReject) {
    return '#ff1744'
  }
  if (props.isDragActive) {
    return '#2196f3'
  }
  return '#919191'
}

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border-width: 2px;
  border-radius: 2px;
  border-color: ${props => getColor(props)};
  border-style: dashed;
  background-color: #fafafa;
  color: #919191;
  outline: none;
  transition: border 0.24s ease-in-out;
  width: 50%;
  margin: auto;
`

function DropZone() {
  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    accept:
      'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  })
  console.log(getInputProps())
  return (
    <div>
      <FormLabel
        align='center'
        style={{
          color: 'rgb(58, 77, 150)',
          fontWeight: 400,
          width: '58%',
          margin: 'auto'
        }}
      >
        BENPOS Report
      </FormLabel>
      <Container
        {...getRootProps({ isDragActive, isDragAccept, isDragReject })}
      >
        <input {...getInputProps()} />
        <p>Drag and drop .CSV file here or click</p>
        <Button
          size='sm'
          style={{ backgroundColor: '#33466B', border: 'none' }}
        >
          Upload
        </Button>
      </Container>
    </div>
  )
}

export default DropZone
