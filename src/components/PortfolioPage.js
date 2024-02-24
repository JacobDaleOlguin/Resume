// componets/Portfolio.js
import React, { useState } from 'react';

import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

function PortfolioPage() {
    const [showMore, setShowMore] = useState(false);

    return (
        <div>
          <h1>My Portfolio</h1>
          <h3>Welcome to the Portfolio Page!</h3>
          <Typography variant="body1" component="p">
            Here are some different small tools and applications I have created. If you have any questions,
            feel free to <Link href="/contact" className="customLink">contact me</Link>!
          </Typography> 
          <button onClick={() => setShowMore(!showMore)}>
            {showMore ? 'Show Less' : 'Show '}
          </button>
          {showMore && <Typography variant="body2">This is the additional information that was hidden before!</Typography>}
        </div>
    );
}      
export default PortfolioPage;
