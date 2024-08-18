import './Styles/Footer.css';

const Footerr = () => {
  return (
    <div className="footer"> 
      <table>
        <tr>
            <th>Abstract</th>
            <th>Resource</th>
            <th>Community</th>
            <th>Company</th>
        </tr>
        <tr>
            <td>Branches</td>
            <td>Blogs</td>
            <td>Twitter</td>
            <td>About Us</td>
        </tr>
        <tr>
            <td></td>
            <td>Help Center</td>
            <td>LinkedIn</td>
            <td>Careers</td>
        </tr>
        <tr>
            <td></td>
            <td>Release Notes</td>
            <td>Facebook</td>
            <td>Legal</td>
        </tr>
        <tr>
            <td></td>
            <td>Status</td>
            <td>Dribble</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td>Podcast</td>
            <td className='bold'>Contact Us</td>
        </tr>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>info@abstract.com</td>
        </tr>
      </table>

      <div className="absolute">
        <img src="abstract.png" alt="abstract" />
        <p>&copy; Copyright 2022</p>
        <p>Abstract Studio Design, Inc.</p>
        <p>All rights reserved</p>
      </div>
    </div>
  )
}

export default Footerr
