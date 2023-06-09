import TodoItem from "./TodoItem";
const TodoList = ({ todos, onDelete, onEdit }) => {
  const renderItem = todos.map((item) => (
    <TodoItem key={item.id} item={item} onDelete={onDelete} onEdit={onEdit} />
  ));
  return (
    <>
      <ul className="flex flex-wrap">{renderItem}</ul>
    </>
  );
};

export default TodoList;
