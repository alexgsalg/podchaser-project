// plugins
// imports
// components
// images
// style
import styles from './heading-block.module.css';

interface headingBlockProps {
  sideImage?: JSX.Element;
  title: string;
  subtext: string;
  spaceBottom?: margBottom;
  [x: string]: any;
}

type margBottom = 'sm' | 'md' | 'lg';

const HeadingBlock = ({
  sideImage,
  title,
  subtext,
  spaceBottom = 'lg',
}: headingBlockProps): JSX.Element => {
  return (
    <header
      className={styles.heading_block}
      style={{ marginBottom: `var(--gutter-${spaceBottom})` }}>
      {sideImage ? sideImage : null}
      <div className={styles.heading_block_info}>
        <h1 className={styles.heading_block__title}>{title}</h1>
        <p className={styles.heading_block__subtext}>{subtext}</p>
      </div>
    </header>
  );
};

export default HeadingBlock;
