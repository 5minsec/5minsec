import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Docs',
    Svg: require('../../static/img/home/tutorial.svg').default,
    description: (
      <>
        <a href='/site/docs/intro'>AQUI</a> você encontra uma série de docs sobre ferramentas, práticas, links úteis, etc.
      </>
    ),
  },
  {
    title: 'Blog',
    Svg: require('../../static/img/home/blog.svg').default,
    description: (
      <>
        <a href='/site/blog'>AQUI</a> você encontra os artigos que escrevi. É um diário com tudo que eu venho aprendendo.
      </>
    ),
  },
  {
    title: 'Github',
    Svg: require('../../static/img/home/github.svg').default,
    description: (
      <>
        <a href='https://github.com/5minsec' target='_blank'>AQUI</a> você encontra todos os projetinhos que tenho desenvolvido para me ajudar com o cotidiano de sec.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
