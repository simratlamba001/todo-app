import TodoItem from "./TodoItem";
const TodoList = ({ todos }) => {
  const renderItem = todos.map((item) => (
    <TodoItem key={item.id} item={item} />
  ));
  return (
    <>
      <ul className="flex flex-wrap">{renderItem}</ul>
    </>
  );
};

export default TodoList;
