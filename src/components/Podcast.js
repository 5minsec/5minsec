import React from 'react';
import clsx from 'clsx';
import styles from './Podcast.module.css';


export default function Podcast() {
  return (
    <section className={styles.youtubeVideo}>
      <div className="container">
        <div className='row'>
          <div className='col text-center'>
            <h2>Podcast</h2>
          </div>
        </div>
        <div className="row">
          <div className='col padding--lg'>
            <iframe src="https://open.spotify.com/embed/show/1enf1pUTB3xaZxNFZ3LDgv?utm_source=generator"
                width="100%"
                height="232"
                frameBorder="0"
                allowfullscreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture">    
            </iframe>
            </div>
        </div>
      </div>
    </section>
  );
}
