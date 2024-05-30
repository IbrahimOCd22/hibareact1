import React from 'react';
import { div1Style, div4Style, logoStyle, menuStyle, styleli, navs, e15,e16,e17,e18,e19  } from './Style3';
import img4 from './img/log.png';
import { Link } from 'react-router-dom';

function PageP() {
  const [col, setCol] = React.useState("#AAA7C1");
  const [st, setSt] = React.useState("none");
  const [coll, setColl] = React.useState("#AAA7C1");
  const [stt, setStt] = React.useState("none");
  const [coli, setColi] = React.useState("#AAA7C1");
  const [sti, setSti] = React.useState("none");
  return (
    <div style={div1Style}>
      <div style={div4Style}>
        <nav style={navs}>
          <img src={img4} alt='logo' style={logoStyle} />
          <ul style={menuStyle}>

            <li style={styleli}><Link to={'/login/candida/Profile'} style={{ color: coli, textDecoration: sti }}
              onMouseEnter={() => { setColi("#E6DF2A"); setSti("underline"); }}
              onMouseLeave={() => { setColi("#AAA7C1"); setSti("none"); }} >Profile</Link></li>

            <li style={styleli}>
              <Link to={'/login/candida/cv'} style={{ color: col, textDecoration: st, }}
                onMouseEnter={() => { setCol("#E6DF2A"); setSt("underline"); }}
                onMouseLeave={() => { setCol("#AAA7C1"); setSt("none"); }}>CV</Link>
            </li>

            <li style={styleli}><Link to={'/login/candida/jobs'} style={{ color: coll, textDecoration: stt }}
              onMouseEnter={() => { setColl("#E6DF2A"); setStt("underline"); }}
              onMouseLeave={() => { setColl("#AAA7C1"); setStt("none"); }}>Jobs</Link></li>

            <li style={styleli}><Link to={'/login/candida/notices'} style={{ color: '#E6DF2A', textDecoration: 'none', }}
            >Message</Link></li>
          </ul>
        </nav>
        <h1 style={{ position: "relative", left: "600px", top: "85px", fontSize: "27px" }}> Message</h1>

        <div style={{ marginTop: "180px", position: "relative" }}>

          <div style={e15}>
            <div style={e16}>
              <h1 style={e17}>EMPLOYER OFFRES</h1>
              <h4 style={e19}
              >Message</h4></div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default PageP;