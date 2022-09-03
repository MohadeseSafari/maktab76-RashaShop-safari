import Card from 'common/Card';
function CardList({children}) {

    return (
        <>{children.map((item)=> <Card>{item}</Card>)}</>
    );
}

export default CardList;