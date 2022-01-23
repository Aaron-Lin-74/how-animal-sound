import React, { useState } from 'react'
import { addDoc, animalsRef } from '../firebase'
import styled from 'styled-components'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage'

function Upload({ currentUser }) {
  const [name, setName] = useState('')
  const [link, setLink] = useState('')
  const [type, setType] = useState('mammal')
  const [audio, setAudio] = useState()
  const [image, setImage] = useState()

  const upload = async (e) => {
    e.preventDefault()
    try {
      // 1 - Upload the image and audio to Cloud Storage.
      const imagePath = `images/${image.name}`
      const newImageRef = ref(getStorage(), imagePath)
      const imageSnapshot = await uploadBytesResumable(newImageRef, image)

      const audioPath = `audios/${audio.name}`
      const newAudioRef = ref(getStorage(), audioPath)
      const audioSnapshot = await uploadBytesResumable(newAudioRef, audio)

      // 2 - Generate a public URL for the file.
      const publicImageUrl = await getDownloadURL(newImageRef)
      const publicAudioUrl = await getDownloadURL(newAudioRef)

      // 3 - Create a new document in the firestore DB.
      await addDoc(animalsRef, {
        name: name,
        link: link,
        type: type,
        imageURL: publicImageUrl,
        audioURL: publicAudioUrl,
        imgStorageUri: imageSnapshot.metadata.fullPath,
        audStorageUri: audioSnapshot.metadata.fullPath,
      })

      // 4- Reset the form
      setName('')
      setType('')
      setLink('')
      setImage()
      setAudio()
    } catch (error) {
      console.error(
        'There was an error uploading a file to Cloud Storage:',
        error
      )
    }
  }

  return (
    <Container>
      <Form onSubmit={upload}>
        <label htmlFor='ani-name'>Name</label>
        <input
          id='ani-name'
          name='name'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor='ani-type'>Type</label>
        <select
          id='ani-type'
          value={type}
          onChange={(e) => setType(e.target.value)}
        >
          <option value='mammal'>mammal</option>
          <option value='bird'>bird</option>
          <option value='reptile'>reptile</option>
          <option value='fish'>fish</option>
          <option value='amphibian'>amphibian</option>
          <option value='insect'>insect</option>
        </select>
        <label htmlFor='ani-link'>Link</label>

        <input
          id='ani-link'
          name='link'
          type='text'
          value={link}
          onChange={(e) => setLink(e.target.value)}
          required
        />
        <label htmlFor='image_uploads'>Upload Image</label>
        <input
          type='file'
          accept='image/*'
          id='image_uploads'
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
        <label htmlFor='audio_uploads'>Upload Audio</label>
        <input
          type='file'
          accept='audio/*'
          id='audio_uploads'
          onChange={(e) => setAudio(e.target.files[0])}
        ></input>
        <button type='submit'>Submit</button>
      </Form>
    </Container>
  )
}

export default Upload
const Container = styled.div`
  height: calc(85vh - var(--navbarHeight));
  padding: 0 calc(3.5vw + 5px);
  overflow: hidden;
  background: url('/images/home-background.png') cover no-repeat fixed center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`
const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  label {
    font-size: 15px;
    padding: 0 0 5px;
  }
  input,
  select {
    width: 100%;
    outline: 0;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 20px;
    padding: 12px;
    font-size: clamp(15px, 1.5vw, 18px);
  }

  button {
    background-color: #fd917e;
    filter: drop-shadow(2px 2px 3px #0003);
    color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: clamp(16px, 1.6vw, 18px);
    display: block;
    padding: 12px 20px;
    margin: 2px auto;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    user-select: none;
    transition: 0.2s;

    &:hover {
      transform: scale(1.1);
    }
    &:active {
      filter: sepia(0.5);
    }
  }
`
