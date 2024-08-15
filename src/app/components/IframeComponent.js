import { useEffect } from 'react';

const IframeComponent = () => {
  useEffect(() => {
    // Load the iframeResizer script
    const script = document.createElement('script');
    script.src = 'https://stttc.b-cdn.net/iframeResizer/iframeResizer.min.js';
    script.async = true;
    script.onload = () => {
      // Initialize the iframeResizer once the script is loaded
      if (typeof window.iFrameResize === 'function') {
        window.iFrameResize([{ log: false }], '.htframe');
      }
    };
    document.body.appendChild(script);

    // Cleanup the script on component unmount
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
      <iframe
          className="htframe"
          src="https://wl.hetrixtools.com/r/2b648ece00f49813dd33c85e52ee0632/"
          width="100%"
          scrolling="no"
          style={{ border: 'none' }}
          sandbox="allow-scripts allow-same-origin allow-popups"
      />
  );
};

export default IframeComponent;