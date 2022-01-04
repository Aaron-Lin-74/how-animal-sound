import React, { useState } from 'react'
import { addDoc, animalsRef } from '../firebase'
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage'

function Upload() {
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
    <div>
      <form onSubmit={upload}>
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
        <input
          type='file'
          onChange={(e) => setImage(e.target.files[0])}
        ></input>
        <input
          type='file'
          onChange={(e) => setAudio(e.target.files[0])}
        ></input>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}

export default Upload
