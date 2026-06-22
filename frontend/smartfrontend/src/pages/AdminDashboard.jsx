import Sidebar from "../components/Sidebar";
import HomeButton
from "../components/HomeButton";

function AdminDashboard() {

  const stats = [

    {
      title: "Total Users",
      value: 120
    },

    {
      title: "Resumes Uploaded",
      value: 85
    },

    {
      title: "Applications",
      value: 42
    },

    {
      title: "Career Matches",
      value: 95
    }

  ];

  return (

    <>
    <HomeButton />
      <Sidebar />

      <div
        style={{
          marginLeft: "280px",
          padding: "40px",
          minHeight: "100vh",
          background:
            "linear-gradient(135deg,#0f172a,#1e293b)"
        }}
      >

        <h1
          style={{
            color: "white",
            marginBottom: "30px"
          }}
        >
          Admin Analytics Dashboard
        </h1>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(4,1fr)",
            gap: "20px"
          }}
        >

          {stats.map((item,index)=>(

            <div
              key={index}
              style={{
                background:"white",
                borderRadius:"20px",
                padding:"25px",
                textAlign:"center"
              }}
            >

              <h2>
                {item.value}
              </h2>

              <p>
                {item.title}
              </p>

            </div>

          ))}

        </div>

      </div>

    </>

  );

}

export default AdminDashboard;