import style from './index.module.css'
export function Loading() {
  return (
    <>
      <div className={style.loader}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  )
}
export default Loading
