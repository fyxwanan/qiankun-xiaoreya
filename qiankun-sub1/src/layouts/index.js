import styles from './index.less';
import { Link, history, qiankunStart } from 'umi';

function BasicLayout(props) {
  // setTimeout(() => {
  //   document.title = 'sub app'
  // }, 1000)
  return (
    <div className={styles.normal}>

      <h1 className={styles.title1}>
        <Link to="/">你好，中国！</Link>
        <Link to="/list">list页面</Link>
        <Link to="/admin">admin页面</Link>
      </h1>
      {props.children}
    </div>
  );
}

export default BasicLayout;
