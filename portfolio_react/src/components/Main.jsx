import styled from 'styled-components';

const MainStyle = styled.div`
    height: 100%;
    padding-top: 60px;
    margin: 0 200px;

    .div1{
        margin: 50px 0;
        padding: 20px;
        height: 500px;
        background: red;
    }
`;

export default function Main(){
    return (
        <MainStyle>
            <div className='div1'>div1</div>
            <div className='div1'>div1</div>
            <div className='div1'>div1</div>
            <div className='div1'>div1</div>
            <div className='div1'>div1</div>
        </MainStyle>
    );
}