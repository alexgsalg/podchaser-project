import { Fragment } from 'react';
// plugins
// context
// components
import HeadingBlock from '@/components/Heading-block/heading-block.component';
// imports
// images
// styles
import styles from './home.module.css';

function Home() {
  return (
    <section className={styles.section_home}>
      <div className={styles.home_container}>
        <HeadingBlock
          title={'All Podcasts'}
          subText={'Browse the details of every podcast, ever.'}
          headerType='page'
        />
        <ul className='podcast_list'>
          <li>
            <picture className='podcast__thumbnail'>
              <img src='' alt='' />
            </picture>
            <div>
              <h3 className='podcast__title'>Comedy Bang! Bang</h3>
              <div className='podcast_details'>
                <span className='podcast__date'>April 1st, 2021</span>
                <p className='podcast__description'>April 1st, 2021</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Home;
