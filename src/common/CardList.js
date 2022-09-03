import Card from "common/Card";
import { useEffect } from "react";
function CardList({ data }) {
  // useEffect(() => {
  //   data?.forEach((element) => {
  //     console.log("element", element);
  //   });
  // }, [data]);
  return (
    // <>{children.map((item)=> <Card>{item}</Card>)}</>
    <>
      {/* {data?.map((el) => {
        el.map((el2) => {
          return <h1>Test {el2.id}</h1>;
        });
      })} */}
      {/* <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1>
      <h1>test</h1> */}
    </>
  );
}

export default CardList;
