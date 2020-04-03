

const ItemStyle = (isDragging, draggableStyle) =>({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  height: "22%",
  
  lineHeight: "4vh",
  borderRadius: "3px",
  paddingLeft:"2%",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  overflow: "hidden",
  width: "85%",
  background: isDragging ? "#4b6c94" : "white",
  border: isDragging? "0px solid white" : "1px solid lightgray",
  color: isDragging? "white" : "black",
  borderStyle: "groove",
  position: "static",
  // styles we need to apply on draggables
  ...draggableStyle
});


const ListStyle = isDraggingOver => ({
  background: isDraggingOver ? "#f5f5f5" : "white",
  
  width: "90%",
  height: "70%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "space-evenly",
});

export {ListStyle, ItemStyle}

