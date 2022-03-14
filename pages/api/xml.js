// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  if (req.method === 'GET') {
    let data = '<?xml version="1.0" encoding="UTF-8"?>';
    data += '<product>';
    data += '<item><name>Copier</name><price>free</price></item>';
    data += '</product>';
    res.setHeader('Content-Type', 'application/xml');
    return res.status(200).send(data);
  } else {
    return res.status(400).json({ error: 'Invalid method' });
  }
}
