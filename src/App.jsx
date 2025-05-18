import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);
  const [pageNo, setPageNo] = useState(1);
  const [loading, setLoading] = useState(false);
  const totalPages = 10; // You can change this if API supports more pages

  const fetchImages = async () => {
    setLoading(true);
    try {
      const res = await fetch(`https://picsum.photos/v2/list?page=${pageNo}&limit=5`);
      const json = await res.json();
      setData(json);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchImages();
  }, [pageNo]);

  const handlePageClick = (page) => {
    if (page >= 1 && page <= totalPages) {
      setPageNo(page);
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Picsum Paginated Gallery</h2>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <div className="row">
          {data.map((img) => (
            <div className="col-md-4 mb-4" key={img.id}>
              <div className="card h-100 shadow">
                <img
                  src={img.download_url}
                  className="card-img-top"
                  style={{ height: "250px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">Author: {img.author}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      <nav className="d-flex justify-content-center mt-4">
        <ul className="pagination">
          <li className={`page-item ${pageNo === 1 ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageClick(pageNo - 1)}>Previous</button>
          </li>

          {[...Array(totalPages)].map((_, i) => (
            <li key={i + 1} className={`page-item ${pageNo === i + 1 ? 'active' : ''}`}>
              <button className="page-link" onClick={() => handlePageClick(i + 1)}>{i + 1}</button>
            </li>
          ))}

          <li className={`page-item ${pageNo === totalPages ? 'disabled' : ''}`}>
            <button className="page-link" onClick={() => handlePageClick(pageNo + 1)}>Next</button>
          </li>
        </ul>
      </nav>

    </div>
  );
}

export default App;
