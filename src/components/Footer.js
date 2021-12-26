import React from 'react';
import styled from 'styled-components';

function Footer () {
    // console.log(Footer, 'footer')
    return (
        <>
        <TeslaFooter>
            <li>Tesla &copy; 2021</li>
            <li>Privacy & Legal</li>
            <li>Contact</li>
            <li>Careers</li>
            <li>News</li>
            <li>Engage</li>
            <li>Locations</li>
        </TeslaFooter>
         </>
    )
}
export default Footer;

const TeslaFooter = styled.footer`
cursor:pointer;
display: flex;
flex-direction:row;
align-items: center;
justify-content:center;
list-style:none;
padding: 20px;
height: 50px;
bottom: 0px;
left: 0px;
right: 0px;
// position: fixed;
 	li {	
			padding: 0 10px;
	}
    @media (max-width: 768px) {
		display:none;
	}
`;

