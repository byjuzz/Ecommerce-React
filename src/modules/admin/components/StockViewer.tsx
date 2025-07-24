const StockViewer = ({ order, onUpdateStock }: { order: any, onUpdateStock: () => void }) => (
  <div>
    <h4>Detalle de la Orden #{order.orderId}</h4>
    <ul className="list-group mb-3">
      {order.items.map((item: any, idx: number) => (
        <li key={idx} className="list-group-item">
          Producto ID: {item.productId} - Cantidad: {item.quantity}
        </li>
      ))}
    </ul>
    <button className="btn btn-warning" onClick={onUpdateStock}>
      Descontar Stock
    </button>
  </div>
);
export default StockViewer;
