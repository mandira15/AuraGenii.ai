import "./Gallery.css";

const designs = [
  {
    id: 1,
    title: "Royal Sherwani",
    category: "Men",
    image: "/gallery/sherwani1.jpg",
  },
  {
    id: 2,
    title: "Wedding Lehenga",
    category: "Women",
    image: "/gallery/lehenga1.jpg",
  },
  {
    id: 3,
    title: "Designer Gown",
    category: "Women",
    image: "/gallery/gown1.jpg",
  },
  {
    id: 4,
    title: "Casual Kurta",
    category: "Men",
    image: "/gallery/kurta1.jpg",
  },
  {
    id: 5,
    title: "Business Suit",
    category: "Men",
    image: "/gallery/suit1.jpg",
  },
  {
    id: 6,
    title: "Modern Dress",
    category: "Women",
    image: "/gallery/moderndress1.jpg",
  },
  {
    id: 7,
    title: "Casual Dress",
    category: "Men",
    image: "/gallery/casualdress1.jpg",
  },
  {
    id: 8,
    title: "Ethnic Dress",
    category: "Women",
    image: "/gallery/ethnicdress1.jpg",
  },
  {
    id: 9,
    title: "Ethnic Dress",
    category: "Boys",
    image: "/gallery/kidsdress1.jpg",
  },
  {
    id: 10,
    title: "Ethnic Dress",
    category: "Girls",
    image: "/gallery/kidsdress2.jpg",
  },
  {
    id: 11,
    title: "Ethnic Dress",
    category: "Elderly Women",
    image: "/gallery/ethnicdress2.jpg",
  },
  {
    id: 12,
    title: "Ethnic Dress",
    category: "Elderly Men",
    image: "/gallery/ethnicdress3.jpg",
  },
];

export default function Gallery() {
  return (
    <div className="gallery-page">
      <h1>Fashion Gallery</h1>

      <div className="gallery-grid">
        {designs.map((design) => (
          <div key={design.id} className="gallery-card">
            <img
              src={design.image}
              alt={design.title}
            />

            <h3>{design.title}</h3>

            <p>{design.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
}