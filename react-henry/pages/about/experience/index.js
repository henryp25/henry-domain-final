import React from 'react'
import '../../../styles/cv.css'
import cvFile from '../../api/cv.json'
import Image from 'next/image';


function createListItems(file) {
  let listItems = [];
  for (let i = 0; i < file.length; i++) {
    listItems.push(<li key={i}>{file[i]}</li>);
  }
  return listItems;
}



function index() {
  return (
    <div>
      <h1 class='bass'> {cvFile.name} Experience</h1>
      <div class='cvContainer'>
        <div>
          <h2> Who Am I?</h2>
          <p>{cvFile.about}</p>
        </div>
        <div>
          <Image src='/images/Henry-Price.png' width={1400} height={1400} />
        </div>
      </div>
      <div>
        <h2> Technical Experience</h2>
        <ul>
          {createListItems(cvFile.digital_skills.technical_seo)}
        </ul>
      </div>
    </div>

  )
}

export default index