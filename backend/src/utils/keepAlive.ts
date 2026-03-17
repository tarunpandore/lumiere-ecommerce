import cron from 'node-cron';
import https from 'https';
import http from 'http';

const keepAlive = () => {
  // Render spins down free tier apps after 15 mins of inactivity.
  // We ping our own health check endpoint every 14 minutes.
  cron.schedule('*/14 * * * *', () => {
    const url = process.env.RENDER_EXTERNAL_URL 
      ? `${process.env.RENDER_EXTERNAL_URL}/api/health` 
      : `http://localhost:${process.env.PORT || 5000}/api/health`;
      
    const protocol = url.startsWith('https') ? https : http;

    protocol.get(url, (res) => {
      if (res.statusCode === 200) {
         console.log('Server kept alive successfully.');
      }
    }).on('error', (e) => {
      console.error(`Keep-Alive Ping Error: ${e.message}`);
    });
  });
};

export default keepAlive;
