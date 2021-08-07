/* eslint-disable @next/next/no-img-element */
import { useCallback, useState } from "react";
import type { DropResult, ResponderProvided } from "react-beautiful-dnd";
import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";

const ITEMS = [
  {
    id: "1",
    url: "https://images.unsplash.com/photo-1628209694088-9aa9ac1c6463?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8eGpQUjRobGtCR0F8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "2",
    url: "https://images.unsplash.com/photo-1626525589609-91f7d853220b?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDl8eGpQUjRobGtCR0F8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60g",
  },
  {
    id: "3",
    url: "https://images.unsplash.com/photo-1627891521377-b5ff2347ca1f?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "4",
    url: "https://images.unsplash.com/photo-1627898302655-ff134a17ab18?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDh8eGpQUjRobGtCR0F8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "5",
    url: "https://images.unsplash.com/photo-1628054573885-2b85b50a30ed?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "6",
    url: "https://images.unsplash.com/photo-1623855245544-fa477b4d9e3e?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDMzfHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "7",
    url: "https://images.unsplash.com/photo-1628083578371-e210a991d713?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDE4fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
  {
    id: "8",
    url: "https://images.unsplash.com/photo-1620019989549-bbb873b6612d?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDM3fHhqUFI0aGxrQkdBfHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=900&q=60",
  },
];

export const DnD = () => {
  const [items, setItems] = useState(ITEMS);

  const handleOnDragEnd = useCallback(
    (result: DropResult, _provided: ResponderProvided) => {
      setItems((prevItems) => {
        if (!result.destination) return prevItems;
        const newItems = Array.from(prevItems);
        const [reorderedItem] = newItems.splice(result.source.index, 1);
        newItems.splice(result.destination.index, 0, reorderedItem);
        return newItems;
      });
    },
    []
  );

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId='images' direction='horizontal'>
        {(provided: any) => {
          return (
            <div className='px-1'>
              <div className='text-center'>
                ドラッグして画像を並び替えることができます
              </div>
              <ul
                {...provided.droppableProps}
                ref={provided.innerRef}
                className='flex bg-blue-500 justify-around'
              >
                {items.map((item, index) => {
                  return (
                    <Draggable
                      key={item.id}
                      draggableId={item.id}
                      index={index}
                    >
                      {(provided: any) => {
                        return (
                          <li
                            className='my-2'
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                          >
                            <img
                              src={item.url}
                              alt=''
                              width={100}
                              height={100}
                            />
                          </li>
                        );
                      }}
                    </Draggable>
                  );
                })}
                {provided.placeholder}
              </ul>
            </div>
          );
        }}
      </Droppable>
    </DragDropContext>
  );
};
