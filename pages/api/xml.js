export default function handler(req, res) {
  if (req.method === 'GET') {
    const result = [
      {
        xmlName: 'fichero uno.xml',
        url: 'https://next-copier-server.vercel.app/fichero%201.xml',
      },
      {
        xmlName: 'fichero dos.xml',
        url: 'https://next-copier-server.vercel.app/fichero%202.xml',
      },
    ];
    return res.status(200).json(result);
  } else {
    return res.status(400).json({ error: 'Metodo no permitido' });
  }
  // if (req.method === 'GET') {
  //   let data = '<?xml version="1.0" encoding="UTF-8"?>';
  //   data += '<product>';
  //   data += '<item><name>Copier</name><price>free</price></item>';
  //   data += '</product>';
  //   res.setHeader('Content-Type', 'application/xml');
  //   return res.status(200).send(data);
  // } else {
  //   return res.status(400).json({ error: 'Invalid method' });
  // }
}
