import React, { useCallback, useState } from 'react'
import { useDropzone } from 'react-dropzone'
import styled from 'styled-components'
import { Button, FormLabel, Col, Row, Container } from 'react-bootstrap'
import csvFile from './csvfile.png'

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

const Cont = styled.div`
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
  width: 80%;
  margin: auto;
`

function DropZone() {
  const [listOfFiles, setListOfFiles] = useState({ files: [] })
  const [show, setShow] = useState('hidden')
  const [data, showData] = useState('')
  const onDrop = useCallback(files => {
    setListOfFiles({ files })
    setShow('')
    showData('hidden')
    console.log(
      files
        .map(f => {
          return f.name
        })
        .join(''),
      { files }
    )
  }, [])

  const {
    getRootProps,
    getInputProps,
    isDragActive,
    isDragAccept,
    isDragReject
  } = useDropzone({
    onDrop,
    accept:
      'application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
  })

  return (
    <div>
      <div
        style={{
          width: '80%',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 'auto',
          marginBottom: '-7px'
        }}
      >
        <FormLabel
          style={{
            color: 'rgb(58, 77, 150)',
            fontWeight: 400,
            fontSize: 13
          }}
        >
          BENPOS Report
        </FormLabel>
      </div>
      <Cont {...getRootProps({ isDragActive, isDragAccept, isDragReject })}>
        <input {...getInputProps()} />
        <p style={{ visibility: data }}>
          Drag and drop .CSV file here or click
        </p>
        <Button
          size='sm'
          style={{
            backgroundColor: '#33466B',
            border: 'none',
            visibility: data
          }}
        >
          Upload
        </Button>
        <div>
          {listOfFiles.files.map(n => (
            <Container>
              <Col style={{ marginTop: -60 }}>
                <Row
                  key={n.name}
                  style={{
                    margin: 'auto',
                    width: 50
                  }}
                >
                  <img src={csvFile} style={{ width: 50, height: 50 }} />
                </Row>
                <Row>
                  <a href='#' style={{ color: 'black' }}>
                    {n.name}
                  </a>
                </Row>
              </Col>
            </Container>
          ))}
        </div>
      </Cont>
      <div align='right' style={{ width: '90%', marginTop: 10 }}>
        <Button
          size='sm'
          style={{
            backgroundColor: '#33466B',
            border: 'none',
            visibility: show
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  )
}

export default DropZone
