import React from 'react';
import clsx from 'clsx';
import styles from './YoutubeVideo.module.css';


function Video() {
  return (
    <div className={clsx('col')}>
        <h2>Youtube</h2>
        <div className={styles.videoContainer}>
            <iframe
                src="https://www.youtube.com/embed/8LgxwFLrmjs"
                className={styles.videoFrame}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowfullscreen>
            </iframe>
        </div>
    </div>
  );
}

export default function YoutubeVideo() {
  return (
    <section className={styles.youtubeVideo}>
      <div className="container">
        <div className="row">
          <Video />
        </div>
      </div>
    </section>
  );
}
