import React from "react";
import { useDragLayer } from "react-dnd";
import { PostDescription } from "../post-description/post-description";
import './drag-layer.scss';

function getItemStyles(initialOffset, currentOffset) {
  if (!initialOffset || !currentOffset) {
    return {
      display: 'none',
    }
  }
  let { x, y } = currentOffset;
    const transform = `translate(${x}px, ${y}px)`
  return {
    transform,
    WebkitTransform: transform,
  }
}

export const DragLayer = ({}) => {
  const {
    item,
    initialOffset,
    currentOffset,
    isDragging,
  } = useDragLayer(monitor => ({
    item: monitor.getItem(),
    initialOffset: monitor.getInitialSourceClientOffset(),
    currentOffset: monitor.getSourceClientOffset(),
    isDragging: monitor.isDragging(),
  }));

  if(!isDragging)
    return null;

  return (
    <div className='drag-layer'>
      <div
        style={getItemStyles(initialOffset, currentOffset)}
      >
        <PostDescription post={item.post}/>
      </div>
    </div>
  )
};
