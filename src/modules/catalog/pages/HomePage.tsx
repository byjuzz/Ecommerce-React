
const mockProducts = [
  {
    id: '1',
    name: 'Laptop Pro 14',
    price: 1200,
    image: 'https://lavictoria.ec/wp-content/uploads/2023/01/LAPTOP-DE-14-PULGADAS-V14-IIL-82C4-LENOVO-2.jpg',
  },
  {
    id: '2',
    name: 'Smartphone X',
    price: 799,
    image: 'https://technostore.es/wp-content/uploads/smartphone_x_series_6.jpeg',
  },
  {
    id: '3',
    name: 'Headphones Elite',
    price: 199,
    image: 'https://cdn.grupoelcorteingles.es/SGFM/dctm/MEDIA03/202311/20/00197581104144____1__1200x1200.jpg',
  },
];


function HomePage() {
  return (
    <div>
      {/* 🟦 Banner Principal */}
      <div className="bg-primary text-white text-center py-5">
        <h1 className="display-4">Bienvenido a J2 Store 🛍️</h1>
        <p className="lead">Explora ofertas exclusivas, productos premium y envío gratuito</p>
        <a href="/catalog/products" className="btn btn-light btn-lg mt-3">
          Ver productos
        </a>
      </div>

      {/* 🟩 Productos Destacados */}
      <div className="container mt-5">
        <h2 className="text-center mb-4">✨ Productos Destacados</h2>
        <div className="row">
          {mockProducts.map((product) => (
            <div className="col-md-4 mb-4" key={product.id}>
              <div className="card shadow-sm h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.name}
                />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{product.name}</h5>
                  <p className="card-text text-muted">${product.price}</p>
                  <a href={`/products/${product.id}`} className="btn btn-primary mt-auto">
                    Ver más
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="bg-light py-5 mt-5">
        <div className="container">
          <h3 className="text-center mb-4">¿Por qué elegirnos?</h3>
          <div className="row text-center">
            <div className="col-md-4">
              <h5>🚚 Envío Rápido</h5>
              <p>Recibe tu pedido en tiempo récord.</p>
            </div>
            <div className="col-md-4">
              <h5>💳 Pagos Seguros</h5>
              <p>Transacciones protegidas 100%.</p>
            </div>
            <div className="col-md-4">
              <h5>✅ Garantía de Satisfacción</h5>
              <p>Compra sin preocupaciones, garantizado.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
