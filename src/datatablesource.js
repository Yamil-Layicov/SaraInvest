export const userColumns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "userName",
    headerName: "Istifadəçi",
    width: 180,
    renderCell: (params) => {
      return (
        <div style={{
            display: "flex",
            alignItems: "center"
        }}>
          <img
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              objectFit: "cover",
              marginRight: "15px",
            }}
            src={params.row.img}
            alt="avatar"
          />
          {params.row.username}
        </div>
      );
    }
  },
  {field:"email",headerName:"E-poçt",width:190},
  {field:"status",headerName:"Status",width:130,renderCell:(params) => {
    return (
        <div className={`cellWithStatus ${params.row.status}`}>{params.row.status} </div>
    )
  }},
  {field:"age",headerName:"Tarix",width:150}
];

export const userRows = [
  {
    id: 1, 
    username: "Yamil",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    status: "admin",
    email: "yamil@mail.ru",
    age: "13/12/2023",
  },
  {
    id: 2,
    username: "Elxan",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "elxan@mail.ru",
    status: "manager",
    age: "05/12/2023",
  },
  {
    id: 3,
    username: "Elcan",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "elcan@mail.ru",
    status: "manager",
    age: "23/05/2023",
  },
  {
    id: 4,
    username: "Stark",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "4snow@gmail.com",
    status: "manager",
    age: "23/08/2023",
  },
  {
    id: 5,
    username: "Targaryen",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "5snow@gmail.com",
    status: "manager",
    age: "21/12/2023",
  },
  {
    id: 6,
    username: "Melisandre",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "6snow@gmail.com",
    status: "manager",
    age: "05/12/2023",
  },
  {
    id: 7,
    username: "Clifford",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "7snow@gmail.com",
    status: "manager",
    age: "03/12/2023",
  },
  {
    id: 8,
    username: "Frances",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "8snow@gmail.com",
    status: "admin",
    age: "12/12/2023",
  },
  {
    id: 9,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "admin",
    age: "09/12/2023",
  },
  {
    id: 10,
    username: "Roxie",
    img: "https://images.pexels.com/photos/1820770/pexels-photo-1820770.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
    email: "snow@gmail.com",
    status: "admin",
    age: "15/12/2023",
  },
];
