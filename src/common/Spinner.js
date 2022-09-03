import Loading from 'assets/image/loading/Cube-1s-200px.gif';

function Spinner() {
    return (
        <div style={{ display: 'flex', alignItems: 'center',justifyContent:'center' , width:'100vw' , height:'60vh' }}>
            <img style={{width:60 }} src={Loading} alt='loading...' />
        </div>
    );
}

export default Spinner;