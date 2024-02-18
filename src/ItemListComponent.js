const ItemListComponent = (props) => {
  return (
    <li key={`liElement_${props.index}`}>
      {props.element}
    </li>
  );
}

export default ItemListComponent;