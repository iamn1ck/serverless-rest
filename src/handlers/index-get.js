const handler = (event, _, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html"
    },
    body: 
    `<html>
      <style>
        h1 { color: #73757d; }
      </style>
      <body>
        <h1>Hello World</h1>
      </body>
    </html>`
  }

  callback(null, response);
};

export default handler
