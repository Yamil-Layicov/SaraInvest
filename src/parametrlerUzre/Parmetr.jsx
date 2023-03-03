import style from './Parametr.module.css'

const Parmetr = () => {
  return (
    <div>
      <div className={style.mainContent}>
        <div className={style.leftContent}>
          <div className={style.floorsName}>Mertebeler</div>
          <div className={style.roomsMapContent}>
            <div className={style.liftOne}>Lift-1</div>
            <div className={style.room25Content}>Room-25</div>
            <div className={style.room25Content2}></div>
            <div className={style.room25Content3}>Room-23</div>
            <div className={style.liftTwo}>Lift-2</div>
            <div className={style.room25Content4}>Room-24</div>
            <div className={style.room25Content5}>Room-22</div>
            <div className={style.room25Content6}>Room-21</div>
            <div className={style.liftThree}>Lift-3</div>
            <div className={style.liftFourth}>Lift-4</div>
            <div className={style.centerContent1}>Room-10</div>
            <div className={style.centerContent2}>Room-11</div>
            <div className={style.centerContent3}>Room-12</div>
            <div className={style.centerContent4}>Room-13</div>
            <div className={style.centerContent5}>Room-14</div>
            <div className={style.centerContent6}>Room-15</div>
            <div className={style.centerContent7}>Room-16</div>
            <div className={style.centerContent8}>Room-17</div>
          </div>
        </div>
        <div className={style.rightRoomDetailContent}>
          <h1>Rooms Detail</h1>
        </div>
      </div>
    </div>
  )
}

export default Parmetr
