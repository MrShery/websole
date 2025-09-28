import Chek from '../assets/img/chek.png'

function ChekList(props) {

    return (
        <li><img src={Chek} alt="img" /> {props.title}  </li>
    );
}


export default ChekList