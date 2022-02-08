import { Link } from "react-router-dom";
import label from "../../constants/labels";


const Logo: React.FC = () => {
  return <Link to="/"><div className='logo'>
      <i className='fa fa-tv'></i> {label.LOGO_TEXT}
  </div></Link>;
};

export default Logo;
