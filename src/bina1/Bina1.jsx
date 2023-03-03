import style from './Bina1.module.css'

const Bina1 = () => {
  return (
    <div>
      <div className={style.mainContent}>
        <div className={style.leftContent}>
          <div className={style.leftHeaderContent}>
            <button>Mertebe-1</button>
            <button>Mertebe-2</button>
            <button>Mertebe-3</button>
          </div>
          <div className={style.leftFooterContent}></div>
        </div>
        <div className={style.rightContent}>
          <h1>Room Detail</h1>
        </div>
      </div>
    </div>
  )
}

export default Bina1
