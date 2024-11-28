export default function ErrorMsg({items}) {

  return (
    <>
      {items.length=== 0 && <h1>I am still Hungry</h1>}
    </>
  );
}
