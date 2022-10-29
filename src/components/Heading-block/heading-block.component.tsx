// plugins
// context
// components
// imports
// images
// styles
import styles from './heading-block.module.css';

enum headingMarginBottom {
  page = '2.5rem',
  block = '1.75rem',
}

interface HeadingBlock {
  title: string;
  subText: string;
  headerType?: 'block' | 'page';
}

function HeadingBlock({ title, subText, headerType = 'page', ...props }: HeadingBlock) {
  return (
    <div className={styles.heading_block} style={{ marginBottom: headingMarginBottom[headerType] }}>
      <h1 className={styles.heading_title}>{title}</h1>
      <p className={styles.heading_subtext}>{subText}</p>
    </div>
  );
}

export default HeadingBlock;
