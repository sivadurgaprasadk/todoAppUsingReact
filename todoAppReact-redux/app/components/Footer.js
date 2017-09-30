import React,{Proptypes} from 'react';
import  Link from './Link';
const Footer =()=>{
	return(
		<p className="text-center">
			<Link filter='SHOW_ALL'> ALL </Link>
			<Link filter='SHOW_COMPLETED'> COMPLETED </Link>
			<Link filter='SHOW_ACTIVE'> ACTIVE </Link>
		</p>
	);
}
export default Footer;