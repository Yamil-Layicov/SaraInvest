const Bottons = ({ btn }) => {
  return (
    <div>
      <div
        className={`${btn.imgBox} ${btn.imgBox1} ${btn.imgBox2} ${btn.imgBox3} ${btn.imgBox4} ${btn.imgBox5} 
          ${btn.imgBox6} ${btn.imgBox7} ${btn.imgBox8}`}
      >
        {btn.title}
      </div>
    </div>
  );
};

export default Bottons;
