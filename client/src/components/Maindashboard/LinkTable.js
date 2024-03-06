// LinkTable.js
import React, { useState, useEffect } from 'react';
import QRCode from 'qrcode.react';

const LinkTable = () => {
  const [links, setLinks] = useState([]);

  // Dummy data for initial render
  const initialLinks = [
    {
      shortLink: 'short1',
      originalLink: 'http://example1.com',
      createdAt: '2024-01-22 10:00:00',
    },
    // Add more initial links as needed
  ];

  useEffect(() => {
    // Simulate fetching new links from an API
    // Replace this with actual API call to fetch links from the server
    const fetchLinks = () => {
      // Assuming this function returns a Promise with an array of links
      return Promise.resolve([
        ...initialLinks,
        // Add newly created links here
        {
          shortLink: 'short2',
          originalLink: 'http://example2.com',
          createdAt: '2024-01-22 11:00:00',
        },
        {
          shortLink: 'short3',
          originalLink: 'http://example3.com',
          createdAt: '2024-01-22 12:00:00',
        },
        {
            shortLink: 'short3',
            originalLink: 'http://example3.com',
            createdAt: '2024-01-22 12:00:00',
          },{
            shortLink: 'short3',
            originalLink: 'http://example3.com',
            createdAt: '2024-01-22 12:00:00',
          },
      ]);
    };

    fetchLinks().then((newLinks) => {
      setLinks(newLinks);
    });

  }, []); // Empty dependency array to run only once on mount

  return (
    <div>
      <table className="min-w-full p-15 border border-gray-200">
        <thead>
          <tr>
            <th className='border text-cyan-300 px-4 py-2 w-16'>Serial Number</th>
            <th className="border text-cyan-300 px-4 py-2">Short Link</th>
            <th className="border text-cyan-300 px-4 py-2">Original Link</th>
            <th className="border text-cyan-300 px-4 py-2">QR Code</th>
            <th className="border text-cyan-300 px-4 py-2">Created At</th>
          </tr>
        </thead>
        <tbody>
          {links.map((link, index) => (
            <tr key={link.shortLink}>
              <td className='border px-4 py-2 text-blue-300 text-center w-16'>{index + 1}</td>
              <td className="border px-4 py-2 text-blue-300 text-center">{link.shortLink}</td>
              <td className="border px-4 py-2 text-blue-300 text-center">{link.originalLink}</td>
              <td className="border px-4 py-2 flex justify-center">
                <QRCode value={link.originalLink} size={50} />
              </td>
              <td className="border px-4 py-2 text-blue-300 text-center">{link.createdAt}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default LinkTable;
