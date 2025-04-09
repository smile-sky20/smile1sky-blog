import styles from './index.module.css'
export function MochaBtn({ children }: { children: React.ReactNode }) {
  return <button className={`${styles.btn}`}>{children}</button>
}
export default MochaBtn
