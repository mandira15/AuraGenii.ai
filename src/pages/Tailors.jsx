import "./Tailors.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Tailors() {
  const navigate = useNavigate();

  const [tailors, setTailors] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTailors = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/tailors"
        );

        setTailors(res.data);
      } catch (error) {
        console.error(
          "Error fetching tailors:",
          error
        );
      } finally {
        setLoading(false);
      }
    };

    fetchTailors();
  }, []);

  if (loading) {
    return (
      <div className="tailors-page">
        <h2>Loading Tailors...</h2>
      </div>
    );
  }

  return (
    <div className="tailors-page">
      <div className="tailors-header">
        <h1>Choose Your Tailor</h1>

        <p>
          Connect with skilled tailors and bring your
          AI-generated fashion designs to life.
        </p>
      </div>

      {tailors.length === 0 ? (
        <div className="no-tailors">
          <h2>No Tailors Registered Yet</h2>
          <p>
            Be the first designer to join AuraGenie.
          </p>
        </div>
      ) : (
        <div className="tailors-grid">
          {tailors.map((tailor) => (
            <div
              key={tailor._id}
              className="tailor-card"
            >
              <img
                src={
                  tailor.profileImage ||
                  "https://via.placeholder.com/300x200?text=Designer"
                }
                alt={
                  tailor.user?.name ||
                  "Tailor Profile"
                }
                className="tailor-image"
              />

              <div className="tailor-info">
                <h3>
                  {tailor.user?.name ||
                    "Unknown Designer"}
                </h3>

                <p>
                  📍 <strong>City:</strong>{" "}
                  {tailor.city}
                </p>

                <p>
                  🏪 <strong>Studio:</strong>{" "}
                  {tailor.shopName}
                </p>

                <p>
                  ✂️ <strong>Specialization:</strong>{" "}
                  {tailor.specialization &&
                  tailor.specialization.length > 0
                    ? tailor.specialization.join(
                        ", "
                      )
                    : "Fashion Design"}
                </p>

                <p>
                  💼 <strong>Experience:</strong>{" "}
                  {tailor.experience} years
                </p>

                <p>
                  ⭐ <strong>Rating:</strong>{" "}
                  {tailor.rating || 0}
                </p>

                <button
                  className="book-btn"
                  onClick={() =>
                    navigate("/order", {
                      state: {
                        tailor,
                      },
                    })
                  }
                >
                  Book Tailor
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}





// import "./Tailors.css";
// import { useNavigate } from "react-router-dom";
// import { useEffect, useState } from "react";
// import axios from "axios";

// const [tailors, setTailors] = useState([]);
// const [loading, setLoading] = useState(true);

// // const tailors = [
// //   {
// //     id: 1,
// //     name: "Royal Stitch",
// //     city: "Bhopal",
// //     speciality: "Sherwani & Suits",
// //     rating: 4.8,
// //     image: "/tailors/tailor1.jpg",
// //   },
// //   {
// //     id: 2,
// //     name: "Elegant Threads",
// //     city: "Indore",
// //     speciality: "Lehenga & Bridal Wear",
// //     rating: 4.7,
// //     image: "/tailors/tailor2.jpg",
// //   },
// //   {
// //     id: 3,
// //     name: "Fashion Hub",
// //     city: "Delhi",
// //     speciality: "Designer Gowns",
// //     rating: 4.9,
// //     image: "/tailors/tailor3.jpg",
// //   },
// //   {
// //     id: 4,
// //     name: "Modern Fit",
// //     city: "Mumbai",
// //     speciality: "Western Wear",
// //     rating: 4.6,
// //     image: "/tailors/tailor4.jpg",
// //   },
// //   {
// //     id: 5,
// //     name: "Classic Creations",
// //     city: "Jaipur",
// //     speciality: "Traditional Outfits",
// //     rating: 4.8,
// //     image: "/tailors/tailor5.jpg",
// //   },
// //   {
// //     id: 6,
// //     name: "Aura Tailoring Studio",
// //     city: "Bhopal",
// //     speciality: "Custom AI Designs",
// //     rating: 5.0,
// //     image: "/tailors/tailor6.jpg",
// //   },
// // ];

// export default function Tailors() {
//   useEffect(() => {
//     const fetchTailors = async () => {
//       try {
//         const res = await axios.get("http://localhost:5000/api/tailors");

//         setTailors(res.data);
//       } catch (error) {
//         console.error(error);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchTailors();
//   }, []);
//   const navigate = useNavigate();
//   if (loading) {
//     return <h2>Loading Tailors...</h2>;
//   }
//   return (
//     <div className="tailors-page">
//       <div className="tailors-header">
//         <h1>Choose Your Tailor</h1>
//         <p>
//           Connect with skilled tailors and bring your AI-generated fashion
//           designs to life.
//         </p>
//       </div>

//       <div className="tailors-grid">
//         {tailors.map((tailor) => (
//           <div key={tailor.id} className="tailor-card">
//             <img
//               src={tailor.image}
//               alt={tailor.name}
//               className="tailor-image"
//             />

//             <div className="tailor-info">
//               <h3>{tailor.user?.name}</h3>

//               <p>
//                 📍 <strong>City:</strong> {tailor.city}
//               </p>

//               <p>
//                 ✂️ <strong>Speciality:</strong> {tailor.speciality}
//               </p>

//               <p>
//                 ⭐ <strong>Rating:</strong> {tailor.rating}
//               </p>

//               <button
//                 className="book-btn"
//                 onClick={() =>
//                   navigate("/order", {
//                     state: {
//                       tailor,
//                     },
//                   })
//                 }
//               >
//                 Book Tailor
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
